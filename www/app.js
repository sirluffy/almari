'use strict';
const $=s=>document.querySelector(s),h=(t,a={},...c)=>{const e=document.createElement(t);for(const k in a)k.startsWith('on')?e[k]=a[k]:e.setAttribute(k,a[k]);e.append(...c.flat().filter(x=>x!=null&&x!==false));return e},btn=(l,f,c='')=>h('button',{class:'b '+c,onclick:f},l);
const enc=new TextEncoder(),dec=new TextDecoder();
let key,db,docs=[],vault=[],tab='ask',q='',skip=false,t0=0,chat=[{b:1,t:'Ask me for any document or login. Try “passport”, “electricity bill” or “latest photo”.'}];
const b64=u=>{let s='';for(let i=0;i<u.length;i+=32768)s+=String.fromCharCode.apply(null,u.subarray(i,i+32768));return btoa(s)},unb64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const fmt=n=>n<1024?n+' B':n<1048576?(n/1024|0)+' KB':(n/1048576).toFixed(1)+' MB';
const toast=m=>{const t=h('div',{id:'tt'},m);document.body.append(t);setTimeout(()=>t.remove(),2500)};
// ---- crypto: master password -> AES-GCM key (PBKDF2, 600k rounds)
const kdf=async(p,s)=>crypto.subtle.deriveKey({name:'PBKDF2',salt:s,iterations:600000,hash:'SHA-256'},await crypto.subtle.importKey('raw',enc.encode(p),'PBKDF2',false,['deriveKey']),{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
const seal=async u=>{const iv=crypto.getRandomValues(new Uint8Array(12)),c=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},key,u)),o=new Uint8Array(12+c.length);o.set(iv);o.set(c,12);return o};
const unseal=async u=>new Uint8Array(await crypto.subtle.decrypt({name:'AES-GCM',iv:u.slice(0,12)},key,u.slice(12)));
const sealJ=o=>seal(enc.encode(JSON.stringify(o,(k,v)=>k[0]=='_'?undefined:v))),openJ=async u=>JSON.parse(dec.decode(await unseal(u)));
// ---- storage (IndexedDB, everything encrypted)
const idb=()=>new Promise((ok,no)=>{const r=indexedDB.open('almari',1);r.onupgradeneeded=()=>['docs','blobs','vault'].forEach(n=>r.result.createObjectStore(n));r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error)});
const tx=(s,m,f)=>new Promise((ok,no)=>{const t=db.transaction(s,m),r=f(t.objectStore(s));t.oncomplete=()=>ok(r&&r.result);t.onerror=()=>no(t.error)});
const put=(s,k,v)=>tx(s,'readwrite',o=>o.put(v,k)),get=(s,k)=>tx(s,'readonly',o=>o.get(k)),del=(s,k)=>tx(s,'readwrite',o=>o.delete(k)),all=s=>tx(s,'readonly',o=>o.getAll());
// ---- search: keywords, synonyms, prefixes, 1-typo tolerance
const SYN={aadhar:'aadhaar',adhar:'aadhaar',licence:'license',dl:'license',pancard:'pan',bill:'invoice',receipt:'invoice',payslip:'salary',pic:'photo',picture:'photo',image:'photo',login:'password',pass:'password',pwd:'password',user:'username'};
const STOP=new Set('a an the my me of for to in on is are show find get give open where what which please all any i need want document documents file files doc docs and with from'.split(' ')),RECENT=new Set(['recent','latest','new','newest','last']);
const tok=s=>(s||'').toLowerCase().split(/[^a-z0-9\u0900-\u097f\u0b00-\u0b7f]+/).filter(Boolean).map(w=>SYN[w]||w);
const ed1=(a,b)=>{if(Math.abs(a.length-b.length)>1)return false;let i=0,j=0,d=0;while(i<a.length&&j<b.length){if(a[i]==b[j]){i++;j++;continue}if(++d>1)return false;if(a.length>b.length)i++;else if(a.length<b.length)j++;else{i++;j++}}return d+(a.length-i)+(b.length-j)<=1};
const m=(x,a)=>{let b=0;for(const y of a)b=Math.max(b,y==x?1:x.length>2&&y.startsWith(x)?.7:x.length>4&&ed1(x,y)?.5:0);return b};
const kind=d=>/^image\//.test(d.type)?'photo image':d.type=='application/pdf'?'pdf':/^text\//.test(d.type)?'note text':'file';
const ix=d=>{d._n=tok(d.name);d._g=tok(d.tags);d._c=tok(kind(d)+' '+d.cat);d._o=tok(d.notes);d._t=new Set(tok(d.text))};
const sd=(qs,d)=>qs.reduce((s,x)=>s+Math.max(m(x,d._n)*5,m(x,d._g)*4,m(x,d._c)*3,m(x,d._o)*2,d._t.has(x)?1:0),0);
const sv=(qs,v)=>qs.reduce((s,x)=>s+Math.max(m(x,tok(v.title))*5,m(x,tok(v.url))*4,m(x,tok(v.user))*2,m(x,tok(v.notes))),0);
function find(text){const raw=tok(text),wantV=raw.some(w=>w=='password'||w=='username'),rec=raw.some(w=>RECENT.has(w)),qs=raw.filter(w=>!STOP.has(w)&&!RECENT.has(w)&&w!='password'&&w!='username'),top=(a,f,n)=>a.map(x=>[f(x),x]).filter(x=>x[0]>0).sort((a,b)=>b[0]-a[0]).slice(0,n).map(x=>x[1]);let d,v;
 if(!qs.length){d=rec?[...docs].sort((a,b)=>b.added-a.added).slice(0,5):[];v=wantV?vault.slice(0,5):[]}
 else{d=top(docs,x=>sd(qs,x),6);v=top(vault,x=>sv(qs,x),4);if(rec)d.sort((a,b)=>b.added-a.added)}
 return{d,v,wantV}}
// ---- sheets and forms
const sheet=(...n)=>{const o=h('div',{class:'ov',onclick:e=>e.target==o&&o.remove()},h('div',{class:'sh'},...n));document.body.append(o);return o};
const gen=()=>{const c='abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%&*';return[...crypto.getRandomValues(new Uint8Array(16))].map(x=>c[x%c.length]).join('')};
function form(title,fs,save,rm){const o=sheet(h('h2',{},title),...fs.map(f=>h('label',{},f.l,f.area?h('textarea',{id:'f_'+f.k,rows:3},f.v||''):h('input',{id:'f_'+f.k,value:f.v||'',autocomplete:'off'}),f.g&&btn('Generate password',()=>$('#f_'+f.k).value=gen()))),h('div',{class:'row'},btn('Save',async()=>{const r=await save(Object.fromEntries(fs.map(f=>[f.k,$('#f_'+f.k).value.trim()])));if(r!==false)o.remove()},'p'),btn('Cancel',()=>o.remove()),rm&&btn('Delete',()=>{o.remove();rm()})))}
const cp=async t=>{try{await navigator.clipboard.writeText(t||'');toast('Copied. Clears in 30 seconds');setTimeout(()=>navigator.clipboard.writeText('').catch(()=>{}),3e4)}catch{toast('Could not copy')}};
// ---- documents
const pick=s=>{skip=true;$(s).click()};
async function addFiles(fl,cam){if(!key)return;let last;for(const f of fl){const u=new Uint8Array(await f.arrayBuffer()),d={id:crypto.randomUUID(),name:cam?'Scan '+new Date().toISOString().slice(0,16).replace('T',' ')+'.jpg':f.name,type:f.type||'application/octet-stream',size:f.size,tags:'',cat:'',notes:'',added:Date.now()};if(d.type.startsWith('text/')||/\.(txt|md|csv|json)$/i.test(d.name))d.text=dec.decode(u).slice(0,2e5);await put('blobs',d.id,{id:d.id,d:await seal(u)});await put('docs',d.id,{id:d.id,d:await sealJ(d)});ix(d);docs.push(d);last=d}toast('Saved '+fl.length+' file'+(fl.length>1?'s':''));render();if(last&&fl.length==1)editDoc(last)}
$('#fi').onchange=e=>{addFiles([...e.target.files]);e.target.value=''};$('#fc').onchange=e=>{addFiles([...e.target.files],1);e.target.value=''};
function editDoc(d){form('Details',[{k:'name',l:'Name',v:d.name},{k:'cat',l:'Category (e.g. ID proof, bill, salary)',v:d.cat},{k:'tags',l:'Tags (comma separated)',v:d.tags},{k:'notes',l:'Notes',v:d.notes,area:1}],async x=>{Object.assign(d,x,{name:x.name||d.name});await put('docs',d.id,{id:d.id,d:await sealJ(d)});ix(d);render()},()=>delDoc(d))}
async function delDoc(d){if(confirm('Delete this document?')){await del('docs',d.id);await del('blobs',d.id);docs=docs.filter(x=>x!==d);render()}}
async function ship(d,u){const P=window.Capacitor&&Capacitor.Plugins||{};if(!P.Filesystem||!P.Share){const a=h('a',{href:URL.createObjectURL(new Blob([u],{type:d.type})),download:d.name});a.click();return}try{const r=await P.Filesystem.writeFile({path:'open/'+d.name.replace(/[^\w.\- ]/g,'_'),data:b64(u),directory:'CACHE',recursive:true});skip=true;await P.Share.share({title:d.name,files:[r.uri]})}catch(e){toast('Could not open: '+(e.message||e))}}
async function view(d){const u=await unseal((await get('blobs',d.id)).d),img=d.type.startsWith('image/'),o=sheet(h('h2',{},d.name),img&&h('img',{class:'pv',src:URL.createObjectURL(new Blob([u],{type:d.type}))}),!img&&d.text!=null&&h('pre',{class:'pv'},d.text.slice(0,5000)),h('div',{class:'row'},btn('Open in another app',()=>ship(d,u),'p'),btn('Details',()=>{o.remove();editDoc(d)}),btn('Delete',()=>{o.remove();delDoc(d)})))}
const dCard=d=>h('div',{class:'card',onclick:()=>view(d)},h('b',{},d.name),h('div',{class:'mu'},fmt(d.size)+', added '+new Date(d.added).toLocaleDateString()),d.tags&&h('div',{class:'mu'},'Tags: '+d.tags));
// ---- vault
function editV(v){const n=!v;v=v||{id:crypto.randomUUID()};form(n?'New login':'Edit login',[{k:'title',l:'Name (e.g. SBI net banking)',v:v.title},{k:'user',l:'ID / username',v:v.user},{k:'pw',l:'Password',v:v.pw,g:1},{k:'url',l:'Website or app',v:v.url},{k:'notes',l:'Notes',v:v.notes,area:1}],async x=>{if(!x.title){toast('Add a name');return false}Object.assign(v,x);await put('vault',v.id,{id:v.id,d:await sealJ(v)});if(n)vault.push(v);render()},n?0:async()=>{if(confirm('Delete this login?')){await del('vault',v.id);vault=vault.filter(y=>y!==v);render()}})}
const vCard=v=>{let on=0;const pw=h('div',{class:'mono'},'••••••••');return h('div',{class:'card'},h('b',{},v.title),h('div',{class:'mu'},v.user||''),pw,h('div',{class:'row'},v.user&&btn('Copy ID',()=>cp(v.user)),btn('Copy password',()=>cp(v.pw)),btn('Show',e=>{on=!on;pw.textContent=on?v.pw:'••••••••';e.target.textContent=on?'Hide':'Show'}),btn('Edit',()=>editV(v))))};
// ---- views
function askV(){const log=h('div',{class:'log'},chat.map(c=>{const r=c.r,cards=r?(r.wantV?[...r.v.map(vCard),...r.d.map(dCard)]:[...r.d.map(dCard),...r.v.map(vCard)]):[];return h('div',{class:'m'+(c.b?'':' u')+(cards.length?' w':'')},c.t,cards)}));
 const go=()=>{const i=$('#qi'),t=i.value.trim();if(!t)return;const r=find(t),a=r.d.length,b=r.v.length;chat.push({t},{b:1,r,t:a+b?`Found ${a} document${a==1?'':'s'} and ${b} login${b==1?'':'s'}.`:'Nothing matches that. Try the file name, a tag, or a word from your notes.'});render()};
 setTimeout(()=>log.scrollTop=log.scrollHeight);return h('div',{class:'ask'},log,h('div',{class:'send'},h('input',{id:'qi',placeholder:'What are you looking for?',onkeydown:e=>{if(e.key=='Enter')go()}}),btn('Ask',go,'p')))}
function docsV(){const l=h('div'),draw=()=>{const a=q?find(q).d:[...docs].sort((a,b)=>b.added-a.added);l.replaceChildren(...(a.length?a.map(dCard):[h('p',{class:'mu'},q?'No match.':'No documents yet. Add a PDF, photo or note.')]))};draw();
 return h('div',{class:'v'},h('div',{class:'row'},btn('Add files',()=>pick('#fi'),'p'),btn('Scan with camera',()=>pick('#fc'))),h('input',{placeholder:'Filter documents',value:q,oninput:e=>{q=e.target.value;draw()}}),l)}
const vaultV=()=>h('div',{class:'v'},h('div',{class:'row'},btn('Add login',()=>editV(),'p')),vault.length?vault.map(vCard):h('p',{class:'mu'},'No logins yet. Add one to keep your IDs and passwords here.'));
function render(){$('#main').replaceChildren(tab=='ask'?askV():tab=='docs'?docsV():vaultV());document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.t==tab))}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{if(key){tab=b.dataset.t;render()}});
// ---- lock / unlock
const rmTmp=()=>{try{Capacitor.Plugins.Filesystem.rmdir({path:'open',directory:'CACHE',recursive:true}).catch(()=>{})}catch{}};
function showLock(){const n=!localStorage.almari;$('#lk').style.display='flex';$('#pw').value=$('#pw2').value='';$('#pw2').style.display=n?'block':'none';$('#lh').textContent=n?'Create your master password':'Unlock';$('#lp').textContent=n?'This password protects everything on this phone. It cannot be reset: if you forget it, your data cannot be opened.':'Your documents and logins are stored encrypted on this phone.';$('#ub').textContent=n?'Create vault':'Unlock';$('#em').textContent=''}
function lock(){key=null;docs=[];vault=[];chat.length=1;document.querySelectorAll('.ov').forEach(o=>o.remove());rmTmp();showLock()}
async function unlock(){const p=$('#pw').value,mt=JSON.parse(localStorage.almari||'null'),b=$('#ub'),em=$('#em');if(p.length<6){em.textContent='Use at least 6 characters.';return}if(!mt&&p!=$('#pw2').value){em.textContent='The two passwords do not match.';return}
 b.disabled=true;b.textContent='Working…';
 try{if(!mt){const s=crypto.getRandomValues(new Uint8Array(16));key=await kdf(p,s);localStorage.almari=JSON.stringify({s:b64(s),v:b64(await seal(enc.encode('ok')))})}else{key=await kdf(p,unb64(mt.s));await unseal(unb64(mt.v))}}
 catch{key=null;b.disabled=false;b.textContent='Unlock';em.textContent='Wrong password.';return}
 db=db||await idb();docs=await Promise.all((await all('docs')).map(async r=>({...await openJ(r.d),id:r.id})));docs.forEach(ix);vault=await Promise.all((await all('vault')).map(async r=>({...await openJ(r.d),id:r.id})));
 b.disabled=false;$('#lk').style.display='none';rmTmp();render()}
$('#ub').onclick=unlock;$('#pw').onkeydown=$('#pw2').onkeydown=e=>{if(e.key=='Enter')unlock()};$('#lb').onclick=()=>key&&lock();
document.addEventListener('visibilitychange',()=>{if(document.hidden)t0=Date.now();else{if(key&&Date.now()-t0>(skip?9e5:12e4))lock();skip=false}});
showLock();
