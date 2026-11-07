'use strict';
const $=s=>document.querySelector(s),h=(t,a={},...c)=>{const e=document.createElement(t);for(const k in a)k.startsWith('on')?e[k]=a[k]:e.setAttribute(k,a[k]);e.append(...c.flat().filter(x=>x!=null&&x!==false));return e},btn=(l,f,c='')=>h('button',{class:'b '+c,onclick:f},l);
const I={"folder": "<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/>", "message-circle": "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/>", "key-round": "<path d=\"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z\"/><circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/>", "file-text": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><path d=\"M14 2v6h6M16 13H8M16 17H8M10 9H8\"/>", "file": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><path d=\"M14 2v6h6\"/>", "image": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21\"/>", "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>", "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/>", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41\"/>", "moon": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"/>", "send": "<path d=\"m22 2-7 20-4-9-9-4Z\"/><path d=\"M22 2 11 13\"/>", "plus": "<path d=\"M5 12h14M12 5v14\"/>", "minus": "<path d=\"M5 12h14\"/>", "camera": "<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/>", "x": "<path d=\"M18 6 6 18M6 6l12 12\"/>", "chevron-left": "<path d=\"m15 18-6-6 6-6\"/>", "chevron-right": "<path d=\"m9 18 6-6-6-6\"/>", "rotate-cw": "<path d=\"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5\"/>", "maximize": "<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"/>", "move-horizontal": "<path d=\"m18 8 4 4-4 4M2 12h20M6 8l-4 4 4 4\"/>", "scan": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2\"/>", "external-link": "<path d=\"M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"/>", "pencil": "<path d=\"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z\"/>", "eye": "<path d=\"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>", "eye-off": "<path d=\"M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20\"/>", "trash-2": "<path d=\"M3 6h18\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"/><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/><path d=\"M10 11v6M14 11v6\"/>", "check": "<path d=\"M20 6 9 17l-5-5\"/>", "check-square": "<path d=\"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5\"/><path d=\"m9 11 3 3L22 4\"/>", "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"19\" r=\"3\"/><path d=\"m8.6 13.5 6.8 4M15.4 6.5l-6.8 4\"/>", "repeat": "<path d=\"m17 2 4 4-4 4\"/><path d=\"M3 11v-1a4 4 0 0 1 4-4h14\"/><path d=\"m7 22-4-4 4-4\"/><path d=\"M21 13v1a4 4 0 0 1-4 4H3\"/>"};
const ic=(n,z=20)=>{const e=document.createElementNS('http://www.w3.org/2000/svg','svg');for(const[k,v]of Object.entries({viewBox:'0 0 24 24',width:z,height:z,fill:'none',stroke:'currentColor','stroke-width':1.8,'stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true'}))e.setAttribute(k,v);e.innerHTML=I[n]||'';return e};
const ico=(n,l,f,c='')=>h('button',{class:'ico '+c,'aria-label':l,title:l,onclick:f},ic(n)),bi=(n,l,f,c='')=>h('button',{class:'b '+c,onclick:f},ic(n,18),l);
const emp=(i,t,p,l,f)=>h('div',{class:'emp'},h('span',{class:'ficon'},ic(i,26)),h('b',{},t),h('span',{class:'mu'},p),l&&bi('plus',l,f,'p'));
const mask=u=>{if(!u)return'';const i=u.indexOf('@');return i>1?u[0]+'••••'+u.slice(i):u.length>3?u.slice(0,2)+'••••':u},dom=u=>{try{return new URL(/^\w+:/.test(u)?u:'https://'+u).hostname}catch{return u||''}};
const enc=new TextEncoder(),dec=new TextDecoder();
let sel=null,key,db,docs=[],vault=[],tab='ask',q='',skip=false,t0=0,chat=[{b:1,t:'Ask me for any document or login. Try “passport”, “electricity bill” or “latest photo”.'}];
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
const sheet=(...n)=>{const o=h('div',{class:'ov',style:'z-index:8',onclick:e=>{if(e.target==o)o.remove()}},h('div',{class:'sh',role:'dialog','aria-modal':'true'},...n));document.body.append(o);setTimeout(()=>{const f=o.querySelector('input,textarea');f&&f.focus()});return o};
const gen=()=>{const c='abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%&*';return[...crypto.getRandomValues(new Uint8Array(16))].map(x=>c[x%c.length]).join('')};
function form(title,fs,save,rm){const err=h('p',{class:'err',role:'alert'});const o=sheet(h('h2',{},title),...fs.map(f=>{const inp=f.area?h('textarea',{id:'f_'+f.k,rows:3},f.v||''):h('input',{id:'f_'+f.k,value:f.v||'',autocomplete:'off',type:f.k=='pw'?'password':'text'}),eb=f.k=='pw'?ico('eye','Show password',()=>{const s=inp.type=='password';inp.type=s?'text':'password';eb.replaceChildren(ic(s?'eye-off':'eye'));eb.setAttribute('aria-label',s?'Hide password':'Show password')}):null;return h('label',{},f.l,eb?h('div',{class:'pwf'},inp,eb):inp,f.g&&btn('Generate password',()=>{inp.value=gen();inp.type='text'}))}),err,h('div',{class:'row'},btn('Save',async()=>{const r=await save(Object.fromEntries(fs.map(f=>[f.k,$('#f_'+f.k).value.trim()])));if(typeof r=='string'){err.textContent=r;return}if(r!==false)o.remove()},'p'),btn('Cancel',()=>o.remove()),rm&&btn('Delete',()=>{o.remove();rm()})))}
const cp=async t=>{try{await navigator.clipboard.writeText(t||'');toast('Copied. Clears in 30 seconds');setTimeout(()=>navigator.clipboard.writeText('').catch(()=>{}),3e4)}catch{toast('Could not copy')}};
// ---- documents
const pick=s=>{skip=true;$(s).click()};
async function addFiles(fl,cam,quiet){if(!key)return;let last;const made=[];for(const f of fl){const u=new Uint8Array(await f.arrayBuffer()),d={id:crypto.randomUUID(),name:cam?'Scan '+new Date().toISOString().slice(0,16).replace('T',' ')+'.jpg':f.name,type:f.type||'application/octet-stream',size:f.size,tags:'',cat:'',notes:'',added:Date.now()};if(d.type.startsWith('text/')||/\.(txt|md|csv|json)$/i.test(d.name))d.text=dec.decode(u).slice(0,2e5);await put('blobs',d.id,{id:d.id,d:await seal(u)});await put('docs',d.id,{id:d.id,d:await sealJ(d)});ix(d);docs.push(d);made.push(d);last=d}if(!quiet)toast('Saved '+fl.length+' file'+(fl.length>1?'s':''));render();if(last&&fl.length==1&&!quiet)editDoc(last);return made}
$('#fi').onchange=e=>{addFiles([...e.target.files]);e.target.value=''};$('#fc').onchange=e=>{addFiles([...e.target.files],1);e.target.value=''};
function editDoc(d){form('Details',[{k:'name',l:'Name',v:d.name},{k:'cat',l:'Category (e.g. ID proof, bill, salary)',v:d.cat},{k:'tags',l:'Tags (comma separated)',v:d.tags},{k:'notes',l:'Notes',v:d.notes,area:1}],async x=>{Object.assign(d,x,{name:x.name||d.name});await put('docs',d.id,{id:d.id,d:await sealJ(d)});ix(d);render()},()=>delDoc(d))}
async function delDoc(d){if(!confirm('Delete “'+d.name+'”? This cannot be undone.'))return false;await del('docs',d.id);await del('blobs',d.id);delete LP[d.id];docs=docs.filter(x=>x!==d);rmTmp();toast('Deleted');render();return true}
async function shareDocs(ds,pre){const P=window.Capacitor&&Capacitor.Plugins||{},native=!!(P.Filesystem&&P.Share);
 try{const fl=[],used=new Set();
  for(const d of ds){const u=pre&&pre.d===d?pre.u:await unseal((await get('blobs',d.id)).d);
   if(!native){fl.push(new File([u],d.name,{type:d.type}));continue}
   let nm=d.name.replace(/[^\w.\- ]/g,'_');if(used.has(nm))nm=(used.size+1)+'-'+nm;used.add(nm);
   fl.push((await P.Filesystem.writeFile({path:'open/'+nm,data:b64(u),directory:'CACHE',recursive:true})).uri)}
  skip=true;const title=ds.length==1?ds[0].name:ds.length+' files from Almari';
  if(native)await P.Share.share({title,dialogTitle:'Share',files:fl});
  else if(navigator.canShare&&navigator.canShare({files:fl}))await navigator.share({title,files:fl});
  else fl.forEach(f=>h('a',{href:URL.createObjectURL(f),download:f.name}).click())}
 catch(e){if(!/cancel|abort/i.test(String(e&&(e.message||e.name)||e)))toast('Could not share: '+(e&&e.message||e))}}
let vw,urls=[],wl,vclean;const LP={},PW={};
const awake=async on=>{try{const K=Capacitor.Plugins.KeepAwake;on?await K.keepAwake():await K.allowSleep()}catch{try{if(on)wl=await navigator.wakeLock.request('screen');else if(wl){wl.release();wl=null}}catch{}}};
function closeV(p){if(vclean){vclean();vclean=null}if(vw){vw.remove();vw=null;if(!p&&history.state&&history.state.v)history.back();awake(false)}urls.forEach(x=>URL.revokeObjectURL(x));urls=[]}
addEventListener('popstate',()=>vw&&closeV(1));
async function pdfView(d,u,body){const me=vw;
 if(!u.length){body.replaceChildren(h('p',{class:'mu'},'This file is empty.'));return}
 body.append(h('p',{class:'mu'},'Opening PDF…'));
 let doc,task,stop=0,n,S=[];
 try{const P=await import('./pdf.min.js');P.GlobalWorkerOptions.workerSrc='./pdf.worker.min.js';task=P.getDocument({data:u.slice()});
  task.onPassword=(up,why)=>{if(why==1&&PW[d.id]){up(PW[d.id]);return}const pw=prompt(why==2?'Wrong password. Try again:':'This PDF is password protected. Enter the password:');if(pw===null){stop=1;task.destroy()}else{PW[d.id]=pw;up(pw)}};
  doc=await task.promise;n=doc.numPages;const m=Math.min(n,300);
  for(let i=1;i<=m;i+=20)await Promise.all(Array.from({length:Math.min(20,m-i+1)},async(_,k)=>{const pg=await doc.getPage(i+k),v=pg.getViewport({scale:1});S[i+k]=[v.width,v.height];pg.cleanup()}));
  for(let i=m+1;i<=n;i++)S[i]=S[m]}
 catch(e){if(vw===me)body.replaceChildren(h('p',{class:'mu'},stop?'A password is needed to open this PDF.':e&&e.name=='InvalidPDFException'?'This file is damaged or is not a valid PDF.':'Could not open this PDF ('+(e&&e.message||e)+'). Use the Share button at the top to open it in another app.'));return}
 if(vw!==me){doc.destroy();return}
 let z=1,rot=0,cur=1,pages=[],io,raf;const box=h('div',{class:'vp'});body.replaceChildren(box);
 const dims=i=>rot%180?[S[i][1],S[i][0]]:S[i],fitW=()=>body.clientWidth-16;
 const rel=c=>{if(c._t){try{c._t.cancel()}catch{}c._t=null}if(c._r){c._r=0;c.width=1;c.height=1;c.classList.add('ld')}};
 const rend=async c=>{c._r=1;try{const pg=await doc.getPage(c._n),r=(pg.rotate+rot)%360,dp=Math.min(devicePixelRatio||1,2);let v=pg.getViewport({scale:c._s*dp,rotation:r});const a=v.width*v.height;if(a>16e6)v=pg.getViewport({scale:c._s*dp*Math.sqrt(16e6/a),rotation:r});if(!c._r)return;c.width=v.width|0;c.height=v.height|0;c._t=pg.render({canvasContext:c.getContext('2d'),viewport:v});await c._t.promise;c._t=null;c.classList.remove('ld')}catch{}};
 const pgAt=y=>{let lo=0,hi=pages.length-1;while(lo<hi){const m=(lo+hi+1)>>1;if(pages[m].offsetTop<=y)lo=m;else hi=m-1}return lo};
 const pb=ico('chevron-left','Previous page',()=>go(cur-1)),nb=ico('chevron-right','Next page',()=>go(cur+1)),pin=h('input',{type:'number',min:1,class:'pn',value:1,inputmode:'numeric','aria-label':'Page number'}),zl=h('span',{class:'rd','aria-live':'polite'},'100%');
 const upd=()=>{cur=pgAt(body.scrollTop+body.clientHeight/3)+1;pin.value=cur;LP[d.id]=cur;zl.textContent=Math.round(z*100)+'%';pb.disabled=cur<=1;nb.disabled=cur>=n};
 const draw=()=>{io&&io.disconnect();pages.forEach(rel);const w=fitW();box.replaceChildren();pages=[];io=new IntersectionObserver(es=>es.forEach(e=>{const c=e.target;if(e.isIntersecting){if(!c._r)rend(c)}else if(c._r)rel(c)}),{root:body,rootMargin:'800px'});for(let i=1;i<=n;i++){const[pw,ph]=dims(i),sc=w*z/pw,c=h('canvas',{class:'ld'});c.style.width=pw*sc+'px';c.style.height=ph*sc+'px';c._n=i;c._s=sc;pages.push(c);box.append(c);io.observe(c)}upd()};
 const redraw=(mx,my,k)=>{const sl=body.scrollLeft,y=body.scrollTop+my,i=pgAt(y),c=pages[i],f=(y-c.offsetTop)/c.offsetHeight;draw();const c2=pages[i];body.scrollTop=c2.offsetTop+f*c2.offsetHeight-my;body.scrollLeft=(sl+mx)*k-mx;upd()};
 const zoomAt=(nz,mx=body.clientWidth/2,my=body.clientHeight/2)=>{nz=Math.max(.3,Math.min(4,nz));if(nz==z)return;const k=nz/z;z=nz;redraw(mx,my,k)};
 const go=p=>{p=Math.max(1,Math.min(n,p|0||cur));body.scrollTop=pages[p-1].offsetTop-8;upd()};
 const fitP=()=>{const[pw,ph]=dims(cur);zoomAt(Math.min(1,(body.clientHeight-16)/(ph*fitW()/pw)));go(cur)};
 const rotate=()=>{rot=(rot+90)%360;redraw(body.clientWidth/2,body.clientHeight/2,1)};
 const fs=()=>{vw.classList.toggle('fs')};
 pin.onchange=()=>go(parseInt(pin.value));
 vw.append(h('div',{class:'vc'},h('div',{class:'grp'},pb,pin,h('span',{class:'rd'},'/ '+n),nb),h('div',{class:'grp'},ico('minus','Zoom out',()=>zoomAt(z/1.25)),zl,ico('plus','Zoom in',()=>zoomAt(z*1.25))),h('div',{class:'grp'},ico('move-horizontal','Fit width',()=>zoomAt(1)),ico('scan','Fit page',fitP),ico('rotate-cw','Rotate clockwise',rotate),ico('maximize','Full screen',fs),ico('repeat','Convert or export',()=>convertSheet([d],{d,u})))),h('button',{class:'b p fx',onclick:fs},ic('x',18),'Exit full screen'));
 body.addEventListener('scroll',()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(upd)},{passive:true});
 let tp=null,pr=1,t0=0,s0;const dist=t=>Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY),mid=t=>{const r=body.getBoundingClientRect();return[(t[0].clientX+t[1].clientX)/2-r.left,(t[0].clientY+t[1].clientY)/2-r.top]};
 body.addEventListener('touchstart',e=>{if(e.touches.length==2){const[mx,my]=mid(e.touches);tp={d:dist(e.touches),mx,my};pr=1;box.style.transformOrigin=`${body.scrollLeft+mx-8}px ${body.scrollTop+my-8}px`}else s0=[e.touches[0].clientX,e.touches[0].clientY]},{passive:true});
 body.addEventListener('touchmove',e=>{if(tp&&e.touches.length==2){pr=Math.max(.3/z,Math.min(4/z,dist(e.touches)/tp.d));box.style.transform=`scale(${pr})`}},{passive:true});
 body.addEventListener('touchend',e=>{if(tp){if(e.touches.length<2){const r=pr,p=tp;tp=null;box.style.transform='';if(Math.abs(r-1)>.03)zoomAt(z*r,p.mx,p.my)}return}
  if(e.touches.length==0&&e.changedTouches.length==1&&s0){const t=e.changedTouches[0];if(Math.hypot(t.clientX-s0[0],t.clientY-s0[1])<12){const now=Date.now();if(now-t0<300){const r=body.getBoundingClientRect();zoomAt(z<1.5?2.5:1,t.clientX-r.left,t.clientY-r.top);t0=0}else t0=now}}},{passive:true});
 vclean=()=>{io&&io.disconnect();pages.forEach(rel);cancelAnimationFrame(raf);doc.destroy()};
 draw();if(LP[d.id]>1)go(LP[d.id])}
function pinch(body,box,gz,zoomAt){let tp=null,pr=1,t0=0,s0;const dist=t=>Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY),mid=t=>{const r=body.getBoundingClientRect();return[(t[0].clientX+t[1].clientX)/2-r.left,(t[0].clientY+t[1].clientY)/2-r.top]};
 body.addEventListener('touchstart',e=>{if(e.touches.length==2){const[mx,my]=mid(e.touches);tp={d:dist(e.touches),mx,my};pr=1;box.style.transformOrigin=`${body.scrollLeft+mx-8}px ${body.scrollTop+my-8}px`}else s0=[e.touches[0].clientX,e.touches[0].clientY]},{passive:true});
 body.addEventListener('touchmove',e=>{if(tp&&e.touches.length==2){pr=Math.max(.5/gz(),Math.min(4/gz(),dist(e.touches)/tp.d));box.style.transform=`scale(${pr})`}},{passive:true});
 body.addEventListener('touchend',e=>{if(tp){if(e.touches.length<2){const r=pr,p=tp;tp=null;box.style.transform='';if(Math.abs(r-1)>.03)zoomAt(gz()*r,p.mx,p.my)}return}
  if(e.touches.length==0&&e.changedTouches.length==1&&s0){const t=e.changedTouches[0];if(Math.hypot(t.clientX-s0[0],t.clientY-s0[1])<12){const now=Date.now();if(now-t0<300){const r=body.getBoundingClientRect();zoomAt(gz()<1.5?2.5:1,t.clientX-r.left,t.clientY-r.top);t0=0}else t0=now}}},{passive:true})}
async function view(d){closeV();let u;try{u=await unseal((await get('blobs',d.id)).d)}catch{toast('Could not open this file');return}
 const isP=d.type=='application/pdf',isI=d.type.startsWith('image/'),isT=!isP&&!isI&&d.text!=null;let z=1,draw=()=>{};
 const body=h('div',{class:'vb'+(isP||isI||isT?' pdf':'')}),zl=h('span',{class:'rd','aria-live':'polite'},'100%'),box=h('div'),
 zoomAt=(nz,mx=body.clientWidth/2,my=body.clientHeight/2)=>{nz=Math.max(.5,Math.min(4,nz));if(nz==z)return;const k=nz/z,sl=body.scrollLeft,st=body.scrollTop;z=nz;draw();body.scrollLeft=(sl+mx)*k-mx;body.scrollTop=(st+my)*k-my};
 vw=h('div',{id:'vw',role:'dialog','aria-label':d.name},h('div',{class:'vh'},ico('chevron-left','Close viewer',()=>closeV()),h('b',{class:'nm'},d.name),ico('share-2','Share file',()=>shareDocs([d],{d,u})),ico('pencil','Edit details',()=>{closeV();editDoc(d)}),ico('trash-2','Delete file',async()=>{if(await delDoc(d))closeV()},'dg')),body);
 document.body.append(vw);history.pushState({v:1},'');awake(true);
 if(isI){const src=URL.createObjectURL(new Blob([u],{type:d.type})),im=h('img',{src,alt:d.name});urls.push(src);box.append(im);body.append(box);draw=()=>{im.style.width=z*(body.clientWidth-16)+'px';zl.textContent=Math.round(z*100)+'%'};draw()}
 else if(isP)await pdfView(d,u,body);
 else if(isT){const pre=h('pre',{},d.text);box.append(pre);body.append(box);draw=()=>{pre.style.fontSize=13*z+'px';zl.textContent=Math.round(z*100)+'%'};draw()}
 else body.append(h('p',{class:'mu'},'This file type can’t be shown inside the app. Use the Share button at the top to open it in another app.'));
 if(isI||isT){pinch(body,box,()=>z,zoomAt);vw.append(h('div',{class:'vc'},h('div',{class:'grp'},ico('minus','Zoom out',()=>zoomAt(z/1.25)),zl,ico('plus','Zoom in',()=>zoomAt(z*1.25)),ico('move-horizontal','Fit width',()=>zoomAt(1)),ico('repeat','Convert or export',()=>convertSheet([d],{d,u})))))}}
// ---- convert / export
const bn=n=>n.replace(/\.[^.]+$/,''),isImg=d=>d.type.startsWith('image/'),isPdf=d=>d.type=='application/pdf',isTxt=d=>!isImg(d)&&!isPdf(d)&&d.text!=null;
const toBlob=(c,t,q)=>new Promise((ok,no)=>c.toBlob(b=>b?ok(b):no(new Error('Could not create the image')),t,q));
const loadScript=src=>new Promise((ok,no)=>{const e=h('script',{src});e.onload=ok;e.onerror=()=>no(new Error('A converter file is missing from the app'));document.head.append(e)});
const pdfLib=async()=>{if(!window.PDFLib)await loadScript('pdf-lib.min.js');return PDFLib};
const pdfJs=async()=>{const P=await import('./pdf.min.js');P.GlobalWorkerOptions.workerSrc='./pdf.worker.min.js';return P};
async function imgCanvas(u,type,max){let bm;try{bm=await createImageBitmap(new Blob([u],{type}))}catch{throw new Error('This image format cannot be converted here')}const k=Math.min(1,max/Math.max(bm.width,bm.height)),w=Math.max(1,Math.round(bm.width*k)),ht=Math.max(1,Math.round(bm.height*k)),c=document.createElement('canvas');c.width=w;c.height=ht;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,w,ht);x.drawImage(bm,0,0,w,ht);bm.close&&bm.close();return c}
function textPages(t){const W=1240,H=1754,M=100,LH=44,pg=[];let c,x,y;const np=()=>{c=document.createElement('canvas');c.width=W;c.height=H;c._full=1;x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,W,H);x.fillStyle='#111';x.font='30px Inter,system-ui,sans-serif';y=M;pg.push(c)};np();
 for(const para of t.split('\n')){let line='';for(const w of para.split(/(\s+)/)){const tr=line+w;if(line&&x.measureText(tr).width>W-2*M){x.fillText(line,M,y);y+=LH;line=w.trimStart();if(y>H-M)np()}else line=tr}x.fillText(line,M,y);y+=LH;if(y>H-M)np()}
 if(y==M&&pg.length>1)pg.pop();return pg}
async function pdfToImgs(d,u,fmt,sc,say){const P=await pdfJs(),task=P.getDocument({data:u.slice()});let stop=0,doc;task.onPassword=(up,why)=>{if(why==1&&PW[d.id]){up(PW[d.id]);return}const pw=prompt(why==2?'Wrong password. Try again:':d.name+' is password protected. Enter the password:');if(pw===null){stop=1;task.destroy()}else{PW[d.id]=pw;up(pw)}};
 try{doc=await task.promise}catch(e){throw new Error(stop?'A password is needed to convert '+d.name:e&&e.name=='InvalidPDFException'?d.name+' is damaged or not a valid PDF':e&&e.message||String(e))}
 const n=doc.numPages,out=[],png=fmt=='png';
 for(let i=1;i<=n;i++){say(d.name+': page '+i+' of '+n);const pg=await doc.getPage(i);let v=pg.getViewport({scale:sc});const a=v.width*v.height;if(a>16e6)v=pg.getViewport({scale:sc*Math.sqrt(16e6/a)});const c=document.createElement('canvas');c.width=v.width|0;c.height=v.height|0;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);await pg.render({canvasContext:x,viewport:v}).promise;const b=await toBlob(c,png?'image/png':'image/jpeg',.92);out.push(new File([b],bn(d.name)+(n>1?' - page '+String(i).padStart(String(n).length,'0'):'')+(png?'.png':'.jpg'),{type:b.type}));c.width=c.height=1;pg.cleanup()}
 doc.destroy();return out}
async function buildPdf(items,a4,say){const L=await pdfLib(),pdf=await L.PDFDocument.create();
 for(const{d,u}of items){say('Adding '+d.name);
  if(isPdf(d)){let src;try{src=await L.PDFDocument.load(u)}catch{throw new Error(d.name+' is password protected or damaged, so it cannot be combined')}(await pdf.copyPages(src,src.getPageIndices())).forEach(p=>pdf.addPage(p));continue}
  for(const c of isTxt(d)?textPages(d.text):[await imgCanvas(u,d.type,2400)]){const ll=isTxt(d)||d.type=='image/png',b=new Uint8Array(await(await toBlob(c,ll?'image/png':'image/jpeg',.9)).arrayBuffer()),im=ll?await pdf.embedPng(b):await pdf.embedJpg(b);let PW,PH,dw,dh;
   if(c._full){PW=dw=595.28;PH=dh=841.89}else if(a4){const ls=im.width>im.height;PW=ls?841.89:595.28;PH=ls?595.28:841.89;const k=Math.min((PW-48)/im.width,(PH-48)/im.height);dw=im.width*k;dh=im.height*k}else{const k=Math.min(1,1000/Math.max(im.width,im.height));PW=dw=im.width*k;PH=dh=im.height*k}
   pdf.addPage([PW,PH]).drawImage(im,{x:(PW-dw)/2,y:(PH-dh)/2,width:dw,height:dh});c.width=c.height=1}}
 return pdf.save()}
async function runConv(kind,ds,pre,o,say){const items=[];for(const d of ds)items.push({d,u:pre&&pre.d===d?pre.u:await unseal((await get('blobs',d.id)).d)});const out=[],pf=(n,b)=>new File([b],n,{type:'application/pdf'});
 if(kind=='pdf')out.push(pf(items.length>1?'Combined '+new Date().toISOString().slice(0,10)+'.pdf':bn(ds[0].name)+'.pdf',await buildPdf(items,o.a4,say)));
 else if(kind=='each')for(const it of items)out.push(pf(bn(it.d.name)+'.pdf',await buildPdf([it],o.a4,say)));
 else for(const{d,u}of items){say(d.name);if(isPdf(d))out.push(...await pdfToImgs(d,u,kind,o.hq?3:2,say));else{const b=await toBlob(await imgCanvas(u,d.type,6000),kind=='png'?'image/png':'image/jpeg',.92);out.push(new File([b],bn(d.name)+(kind=='png'?'.png':'.jpg'),{type:b.type}))}}
 return out}
function convertSheet(ds,pre){if(!ds.length)return;if(!ds.every(d=>isImg(d)||isPdf(d)||isTxt(d))){toast('These file types cannot be converted');return}
 const o={a4:true,hq:false},many=ds.length>1,hasPdf=ds.some(isPdf),canImg=ds.every(d=>isImg(d)||isPdf(d)),hasFlat=ds.some(d=>!isPdf(d)),say=h('p',{class:'mu',role:'status'}),err=h('p',{class:'err',role:'alert'}),opts=h('div'),res=h('div');
 const opt=(i,t,s,k)=>h('button',{class:'card item',onclick:()=>go(k)},h('span',{class:'ficon'},ic(i)),h('span',{class:'imain'},h('b',{class:'nm'},t),h('span',{class:'tg'},s)));
 const seg=(label,names,get,set)=>{const bs=names.map((n,i)=>btn(n,()=>{set(i);mark()})),mark=()=>bs.forEach((x,j)=>{x.classList.toggle('p',j==get());x.setAttribute('aria-pressed',String(j==get()))});mark();return h('div',{},h('div',{class:'gt'},label),h('div',{class:'row'},bs))};
 if(!(ds.length==1&&isPdf(ds[0])))opts.append(opt('file-text',many?'Combine into one PDF':'PDF',many?'All files, oldest first, in a single PDF.':'Convert this file to a PDF.','pdf'));
 if(many&&!hasPdf)opts.append(opt('file-text','One PDF per file','Each file becomes its own PDF.','each'));
 if(canImg){opts.append(opt('image','JPG images',hasPdf?'Smaller files. PDF pages become one image each.':'Smaller files.','jpg'));opts.append(opt('image','PNG images',hasPdf?'Sharper, larger files. PDF pages become one image each.':'Sharper, larger files.','png'))}
 if(hasFlat)opts.append(seg('PDF page size',['A4 page','Fit to image'],()=>o.a4?0:1,i=>o.a4=!i));
 if(hasPdf&&canImg)opts.append(seg('Image quality from PDFs',['Standard','High'],()=>o.hq?1:0,i=>o.hq=!!i));
 const o2=sheet(h('h2',{},'Convert or export'),h('p',{class:'mu'},many?ds.length+' files selected':ds[0].name),opts,say,err,res,h('div',{class:'row'},btn('Close',()=>o2.remove())));
 const go=async k=>{opts.style.display='none';err.textContent='';say.textContent='Working…';
  try{const out=await runConv(k,ds,pre,o,t=>{say.textContent=t});if(!out.length)throw new Error('Nothing to convert');const made=await addFiles(out,0,1);say.textContent='';
   res.replaceChildren(h('p',{},'Saved '+made.length+' file'+(made.length==1?'':'s')+' to Documents.'),h('div',{class:'md'},made.slice(0,6).map(m=>h('div',{},m.name)),made.length>6&&h('div',{},'and '+(made.length-6)+' more')),h('div',{class:'row'},bi('share-2','Share',()=>shareDocs(made),'p')))}
  catch(e){say.textContent='';err.textContent=e&&e.message||String(e);opts.style.display=''}}}
const FI=d=>d.type.startsWith('image/')?'image':d.type=='application/pdf'||d.type.startsWith('text/')?'file-text':'file',TL=d=>d.type=='application/pdf'?'PDF':d.type.startsWith('image/')?'Image':d.type.startsWith('text/')?'Note':(d.name.split('.').pop()||'File').toUpperCase().slice(0,5);
const dCard=d=>h('button',{class:'card item','aria-label':'Open '+d.name,onclick:()=>view(d)},h('span',{class:'ficon'},ic(FI(d))),h('span',{class:'imain'},h('b',{class:'nm'},d.name),h('span',{class:'meta'},h('span',{},TL(d)),h('span',{},fmt(d.size)),h('span',{},new Date(d.added).toLocaleDateString())),d.tags&&h('span',{class:'tg'},d.tags)));
// ---- vault
function editV(v){const n=!v;v=v||{id:crypto.randomUUID()};form(n?'New login':'Edit login',[{k:'title',l:'Name (e.g. SBI net banking)',v:v.title},{k:'user',l:'ID / username',v:v.user},{k:'pw',l:'Password',v:v.pw,g:1},{k:'url',l:'Website or app',v:v.url},{k:'notes',l:'Notes',v:v.notes,area:1}],async x=>{if(!x.title)return 'Add a name for this login.';Object.assign(v,x);await put('vault',v.id,{id:v.id,d:await sealJ(v)});if(n)vault.push(v);render()},n?0:async()=>{if(confirm('Delete this login?')){await del('vault',v.id);vault=vault.filter(y=>y!==v);render()}})}
const vCard=v=>{let on=0;const pw=h('div',{class:'sec'},'••••••••'),eye=ico('eye','Show password',()=>{on=!on;pw.textContent=on?v.pw:'••••••••';eye.replaceChildren(ic(on?'eye-off':'eye'));eye.setAttribute('aria-label',on?'Hide password':'Show password')});
 return h('div',{class:'card'},h('div',{class:'item'},h('span',{class:'ficon'},ic('key-round')),h('span',{class:'imain'},h('b',{class:'nm'},v.title),h('span',{class:'meta'},h('span',{},mask(v.user)),v.url&&h('span',{},dom(v.url))))),pw,h('div',{class:'row'},v.user&&btn('Copy ID',()=>cp(v.user)),btn('Copy password',()=>cp(v.pw)),eye,ico('pencil','Edit login',()=>editV(v))))};
// ---- views
function askV(){const grp=(t,a)=>a.length?[h('div',{class:'gt'},t),...a]:[];
 const log=h('div',{class:'log'},h('div',{class:'card welcome'},h('b',{class:'ttl'},'What are you looking for?'),h('span',{class:'mu'},'Ask for a document or login. Try “passport”, “electricity bill” or “latest photo”.')),chat.slice(1).map(c=>{const r=c.r,any=r&&(r.d.length||r.v.length);return h('div',{class:'m'+(c.b?'':' u')+(any?' w':'')},c.t,any&&(r.wantV?[...grp('Logins',r.v.map(vCard)),...grp('Documents',r.d.map(dCard))]:[...grp('Documents',r.d.map(dCard)),...grp('Logins',r.v.map(vCard))]),any&&h('div',{class:'note'},'Suggested matches. Check that each one is what you meant.'))}));
 const go=()=>{const t=ta.value.trim();if(!t)return;const r=find(t),a=r.d.length,b=r.v.length;chat.push({t},{b:1,r,t:a+b?`Found ${a} document${a==1?'':'s'} and ${b} login${b==1?'':'s'}.`:'Nothing matches that. Try the file name, a tag, or a word from your notes.'});render()};
 const sb=h('button',{class:'b p ico sendbtn','aria-label':'Send',disabled:'',onclick:go},ic('send')),ta=h('textarea',{id:'qi',rows:1,placeholder:'Ask Almari…','aria-label':'Ask Almari',oninput:e=>{const x=e.target;x.style.height='auto';x.style.height=Math.min(x.scrollHeight,120)+'px';sb.disabled=!x.value.trim()},onkeydown:e=>{if(e.key=='Enter'&&!e.shiftKey){e.preventDefault();go()}}});
 setTimeout(()=>log.scrollTop=log.scrollHeight);return h('div',{class:'ask'},log,h('div',{class:'send'},ta,sb))}
function docsV(){const l=h('div',{class:'grid'}),bar=h('div',{class:'row'});
 const sCard=d=>{const on=sel.has(d.id);return h('button',{class:'card item'+(on?' on':''),role:'checkbox','aria-checked':String(on),'aria-label':d.name,onclick:()=>{on?sel.delete(d.id):sel.add(d.id);draw()}},h('span',{class:'chk'},on&&ic('check',16)),h('span',{class:'ficon'},ic(FI(d))),h('span',{class:'imain'},h('b',{class:'nm'},d.name),h('span',{class:'meta'},h('span',{},TL(d)),h('span',{},fmt(d.size)))))};
 const delSel=async()=>{if(!sel.size)return;const n=sel.size;if(!confirm('Delete '+n+' document'+(n==1?'':'s')+'? This cannot be undone.'))return;const ids=[...sel];for(const id of ids){await del('docs',id);await del('blobs',id);delete LP[id]}docs=docs.filter(x=>!ids.includes(x.id));sel=null;rmTmp();toast('Deleted '+n+' file'+(n==1?'':'s'));render()};
 const convSel=()=>convertSheet([...docs].filter(x=>sel&&sel.has(x.id)).sort((a,b)=>a.added-b.added));
 const shareSel=()=>shareDocs(docs.filter(x=>sel&&sel.has(x.id)));
 const draw=()=>{const a=q?find(q).d:[...docs].sort((x,y)=>y.added-x.added);l.replaceChildren(...(a.length?a.map(d=>sel?sCard(d):dCard(d)):[q?h('p',{class:'mu'},'No documents match “'+q+'”.'):emp('folder','Your documents will live here','Add a PDF, photo or note to get started.','Add files',()=>pick('#fi'))]));
  if(sel){const dl=bi('trash-2','Delete ('+sel.size+')',delSel,'p dg');dl.disabled=!sel.size;const sh=bi('share-2','Share ('+sel.size+')',shareSel,'p');sh.disabled=!sel.size;const cv=bi('repeat','Convert ('+sel.size+')',convSel);cv.disabled=!sel.size;bar.replaceChildren(sh,cv,dl,bi('check-square','Select all',()=>{a.forEach(d=>sel.add(d.id));draw()}),bi('x','Cancel',()=>{sel=null;draw()}))}
  else bar.replaceChildren(bi('plus','Add files',()=>pick('#fi'),'p'),bi('camera','Scan with camera',()=>pick('#fc')),...(docs.length?[bi('check-square','Select',()=>{sel=new Set();draw()})]:[]))};
 draw();return h('div',{class:'v'},h('h1',{class:'pt'},'Documents'),bar,h('div',{class:'sf'},ic('search',18),h('input',{type:'search',placeholder:'Search documents','aria-label':'Search documents',value:q,oninput:e=>{q=e.target.value;draw()}})),l)}
const vaultV=()=>h('div',{class:'v'},h('h1',{class:'pt'},'Vault'),vault.length?[h('div',{class:'row'},bi('plus','Add login',()=>editV(),'p')),h('div',{class:'grid'},vault.map(vCard))]:emp('key-round','Your vault','Keep your logins secure and easy to find.','Add login',()=>editV()));
function render(){if(tab!='docs')sel=null;$('#main').replaceChildren(tab=='ask'?askV():tab=='docs'?docsV():vaultV());document.querySelectorAll('nav button').forEach(b=>{if(b.dataset.t==tab)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')})}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{if(key){tab=b.dataset.t;render()}});
// ---- lock / unlock
const rmTmp=()=>{try{Capacitor.Plugins.Filesystem.rmdir({path:'open',directory:'CACHE',recursive:true}).catch(()=>{})}catch{}};
function showLock(){const n=!localStorage.almari;$('#lk').style.display='flex';$('#pw').value=$('#pw2').value='';$('#g2').style.display=n?'block':'none';$('#lh').textContent=n?'Create your master password':'Welcome back';$('#lp').textContent=n?'This password protects everything stored on this phone. Almari cannot reset it: if you forget it, your encrypted data cannot be recovered.':'Enter your master password to unlock your documents and logins.';$('#ub').textContent=n?'Create vault':'Unlock';$('#em').textContent=''}
function lock(){closeV();for(const k in PW)delete PW[k];sel=null;key=null;docs=[];vault=[];chat.length=1;document.querySelectorAll('.ov').forEach(o=>o.remove());rmTmp();showLock()}
async function unlock(){const p=$('#pw').value,mt=JSON.parse(localStorage.almari||'null'),b=$('#ub'),em=$('#em');if(p.length<6){em.textContent='Use at least 6 characters.';return}if(!mt&&p!=$('#pw2').value){em.textContent='The two passwords do not match.';return}
 b.disabled=true;b.textContent='Working…';
 try{if(!mt){const s=crypto.getRandomValues(new Uint8Array(16));key=await kdf(p,s);localStorage.almari=JSON.stringify({s:b64(s),v:b64(await seal(enc.encode('ok')))})}else{key=await kdf(p,unb64(mt.s));await unseal(unb64(mt.v))}}
 catch{key=null;b.disabled=false;b.textContent='Unlock';em.textContent='Wrong password.';return}
 db=db||await idb();docs=await Promise.all((await all('docs')).map(async r=>({...await openJ(r.d),id:r.id})));docs.forEach(ix);vault=await Promise.all((await all('vault')).map(async r=>({...await openJ(r.d),id:r.id})));
 b.disabled=false;$('#lk').style.display='none';rmTmp();render()}
$('#ub').onclick=unlock;$('#pw').onkeydown=$('#pw2').onkeydown=e=>{if(e.key=='Enter')unlock()};$('#lb').onclick=()=>key&&lock();
document.addEventListener('visibilitychange',()=>{if(document.hidden)t0=Date.now();else{if(key&&Date.now()-t0>(skip?9e5:12e4))lock();skip=false}});
const NI={docs:'folder',ask:'message-circle',vault:'key-round'};document.querySelectorAll('nav button').forEach(b=>b.prepend(ic(NI[b.dataset.t],22)));
$('#lb').append(ic('lock'));$('#pe').append(ic('eye'));
$('#pe').onclick=()=>{const t=$('#pw').type=='password'?'text':'password';$('#pw').type=t;$('#pw2').type=t;$('#pe').replaceChildren(ic(t=='text'?'eye-off':'eye'));$('#pe').setAttribute('aria-label',t=='text'?'Hide password':'Show password')};
const setT=t=>{document.documentElement.dataset.t=t;localStorage.th=t;$('#tb').replaceChildren(ic(t=='dark'?'sun':'moon'))};$('#tb').onclick=()=>setT(document.documentElement.dataset.t=='dark'?'light':'dark');setT(localStorage.th||'dark');
addEventListener('keydown',e=>{if(e.key=='Escape'){const o=[...document.querySelectorAll('.ov')].pop();if(o)o.remove();else if(vw)closeV()}});
showLock();
