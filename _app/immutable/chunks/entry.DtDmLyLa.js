import{L as me,Y as mt}from"./scheduler.D_DiFEDa.js";import{w as be}from"./index.BUY9SMGD.js";import{H as ae,S as Ae,R as Me}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function yt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function _t(e){return e.split("%25").map(decodeURI).join("%25")}function wt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function de({href:e}){return e.split("#")[0]}const vt=["href","pathname","search","toString","toJSON"];function bt(e,n,t){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),r[o](i));n();const s=Reflect.get(r,o);return typeof s=="function"?s.bind(r):s}}),enumerable:!0,configurable:!0});for(const r of vt)Object.defineProperty(a,r,{get(){return n(),e[r]},enumerable:!0,configurable:!0});return a}const At="/__data.json",kt=".html__data.json";function St(e){return e.endsWith(".html")?e.replace(/\.html$/,kt):e.replace(/\/$/,"")+At}function Et(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Rt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const qe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&H.delete(ke(e)),qe(e,n));const H=new Map;function It(e,n){const t=ke(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const s=a.getAttribute("data-ttl");return s&&H.set(t,{body:r,init:o,ttl:1e3*Number(s)}),a.getAttribute("data-b64")!==null&&(r=Rt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function Ut(e,n,t){if(H.size>0){const a=ke(e,t),r=H.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);H.delete(a)}}return window.fetch(n,t)}function ke(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${Et(...r)}"]`}return a}const Lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function xt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ct(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const s=a.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return he(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return he(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Lt.exec(c),[,h,y,u,p]=d;return n.push({name:u,matcher:p,optional:!!h,rest:!!y,chained:y?f===1&&s[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return he(c)}).join("")}).join("")}/?$`),params:n}}function Tt(e){return!/^\([^)]+\)$/.test(e)}function Ct(e){return e.slice(1).split("/").filter(Tt)}function Pt(e,n,t){const a={},r=e.slice(1),o=r.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=r[i-s];if(c.chained&&c.rest&&s&&(f=r.slice(i-s,i+1).filter(d=>d).join("/"),s=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){a[c.name]=f;const d=n[i+1],h=r[i+1];d&&!d.rest&&d.optional&&h&&c.chained&&(s=0),!d&&!h&&Object.keys(a).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return a}function he(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Nt({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([i,[c,f,d]])=>{const{pattern:h,params:y}=xt(i),u={id:i,exec:p=>{const l=h.exec(p);if(l)return Pt(l,y,a)},errors:[1,...d||[]].map(p=>e[p]),layouts:[0,...f||[]].map(s),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[r.has(i),e[i]]}}function Ke(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Pe(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}var Ge;const L=((Ge=globalThis.__sveltekit_wfmedx)==null?void 0:Ge.base)??"";var He;const Ot=((He=globalThis.__sveltekit_wfmedx)==null?void 0:He.assets)??L,jt="1731707558738",Ye="sveltekit:snapshot",We="sveltekit:scroll",Je="sveltekit:states",$t="sveltekit:pageurl",$="sveltekit:history",q="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function ze(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function Se(){return{x:pageXOffset,y:pageYOffset}}function O(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ne={...X,"":X.hover};function Xe(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Xe(e)}}function ye(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!a||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===J&&e.hasAttribute("download");return{url:t,external:r,target:a,download:o}}function Z(e){let n=null,t=null,a=null,r=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)a===null&&(a=O(i,"preload-code")),r===null&&(r=O(i,"preload-data")),n===null&&(n=O(i,"keepfocus")),t===null&&(t=O(i,"noscroll")),o===null&&(o=O(i,"reload")),s===null&&(s=O(i,"replacestate")),i=Xe(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ne[a??"off"],preload_data:Ne[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Oe(e){const n=be(e);let t=!0;function a(){t=!0,n.update(s=>s)}function r(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:a,set:r,subscribe:o}}function Dt(){const{set:e,subscribe:n}=be(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${Ot}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const s=(await r.json()).version!==jt;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:a}}function re(e,n){return e.origin!==J||!e.pathname.startsWith(n)}function dn(e){const n=new DataView(e);let t="";for(let a=0;a<e.byteLength;a++)t+=String.fromCharCode(n.getUint8(a));return Ft(t)}function je(e){const n=Vt(e),t=new ArrayBuffer(n.length),a=new DataView(t);for(let r=0;r<t.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return t}const Qe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Vt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,a=0;for(let r=0;r<e.length;r++)t<<=6,t|=Qe.indexOf(e[r]),a+=6,a===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=a=0);return a===12?(t>>=4,n+=String.fromCharCode(t)):a===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}function Ft(e){let n="";for(let t=0;t<e.length;t+=3){const a=[void 0,void 0,void 0,void 0];a[0]=e.charCodeAt(t)>>2,a[1]=(e.charCodeAt(t)&3)<<4,e.length>t+1&&(a[1]|=e.charCodeAt(t+1)>>4,a[2]=(e.charCodeAt(t+1)&15)<<2),e.length>t+2&&(a[2]|=e.charCodeAt(t+2)>>6,a[3]=e.charCodeAt(t+2)&63);for(let r=0;r<a.length;r++)typeof a[r]>"u"?n+="=":n+=Qe[a[r]]}return n}const Bt=-1,Gt=-2,Ht=-3,Mt=-4,qt=-5,Kt=-6;function hn(e,n){return et(JSON.parse(e),n)}function et(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,s=!1){if(o===Bt)return;if(o===Ht)return NaN;if(o===Mt)return 1/0;if(o===qt)return-1/0;if(o===Kt)return-0;if(s)throw new Error("Invalid input");if(o in a)return a[o];const i=t[o];if(!i||typeof i!="object")a[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(i[1]));switch(c){case"Date":a[o]=new Date(i[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<i.length;u+=1)d.add(r(i[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<i.length;u+=2)h.set(r(i[u]),r(i[u+1]));break;case"RegExp":a[o]=new RegExp(i[1],i[2]);break;case"Object":a[o]=Object(i[1]);break;case"BigInt":a[o]=BigInt(i[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<i.length;u+=2)y[i[u]]=r(i[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],p=i[1],l=je(p),m=new u(l);a[o]=m;break}case"ArrayBuffer":{const u=i[1],p=je(u);a[o]=p;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);a[o]=c;for(let f=0;f<i.length;f+=1){const d=i[f];d!==Gt&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in i){const d=i[f];c[f]=r(d)}}return a[o]}return r(0)}const tt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...tt];const Yt=new Set([...tt]);[...Yt];function Wt(e){return e.filter(n=>n!=null)}const Jt="x-sveltekit-invalidated",zt="x-sveltekit-trailing-slash";function Q(e){return e instanceof ae||e instanceof Ae?e.status:500}function Xt(e){return e instanceof Ae?e.text:"Internal Error"}const N=Ke(We)??{},K=Ke(Ye)??{},T={url:Oe({}),page:Oe({}),navigating:be(null),updated:Dt()};function Ee(e){N[e]=Se()}function Zt(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;K[t];)delete K[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}async function nt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(L||"/");e&&await e.update()}}function $e(){}let oe,_e,ee,x,we,B;const at=[],te=[];let I=null;const Re=[],Qt=[];let j=[],_={branch:[],error:null,url:null},Ie=!1,ne=!1,De=!0,Y=!1,G=!1,rt=!1,ie=!1,P,S,U,E,F;const M=new Set;let pe;async function pn(e,n,t){var r,o;document.URL!==location.href&&(location.href=location.href),B=e,oe=Nt(e),x=document.documentElement,we=n,_e=e.nodes[0],ee=e.nodes[1],_e(),ee(),S=(r=history.state)==null?void 0:r[$],U=(o=history.state)==null?void 0:o[q],S||(S=U=Date.now(),history.replaceState({...history.state,[$]:S,[q]:U},""));const a=N[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await cn(we,t):on(location.href,{replaceState:!0}),sn()}async function en(){if(await(pe||(pe=Promise.resolve())),!pe)return;pe=null;const e=le(_.url,!0);I=null;const n=F={},t=e&&await xe(e);if(!(!t||n!==F)){if(t.type==="redirect")return se(new URL(t.location,_.url).href,{},1,n);t.props.page&&(E=t.props.page),_=t.state,ot(),P.$set(t.props)}}function ot(){at.length=0,ie=!1}function it(e){te.some(n=>n==null?void 0:n.snapshot)&&(K[e]=te.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function st(e){var n;(n=K[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=te[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function Ve(){Ee(S),Pe(We,N),it(U),Pe(Ye,K)}async function se(e,n,t,a){return z({type:"goto",url:ze(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(ie=!0)}})}async function tn(e){if(e.id!==(I==null?void 0:I.id)){const n={};M.add(n),I={id:e.id,token:n,promise:xe({...e,preload:n}).then(t=>(M.delete(n),t.type==="loaded"&&t.state.error&&(I=null),t))}}return I.promise}async function ge(e){const n=oe.find(t=>t.exec(ft(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function ct(e,n,t){var o;_=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),E=e.props.page,P=new B.root({target:n,props:{...e.props,stores:T,components:te},hydrate:t,sync:!1}),st(U);const r={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(s=>s(r)),ne=!0}function W({url:e,params:n,branch:t,status:a,error:r,route:o,form:s}){let i="never";if(L&&(e.pathname===L||e.pathname===L+"/"))i="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(i=u.slash);e.pathname=yt(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Wt(t).map(u=>u.node.component),page:E}};s!==void 0&&(c.props.form=s);let f={},d=!E,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const p=t[u],l=_.branch[u];(p==null?void 0:p.data)!==(l==null?void 0:l.data)&&(d=!0),p&&(f={...f,...p.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==r||s!==void 0&&s!==E.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:s??null,data:d?f:E.data}),c}async function Ue({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var d,h,y;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const m of l){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const p={route:new Proxy(r,{get:(l,m)=>(i&&(c.route=!0),l[m])}),params:new Proxy(a,{get:(l,m)=>(i&&c.params.add(m),l[m])}),data:(o==null?void 0:o.data)??null,url:bt(t,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,m){let b;l instanceof Request?(b=l.url,m={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...m}):b=l;const R=new URL(b,t);return i&&u(R.href),R.origin===t.origin&&(b=R.href.slice(t.origin.length)),ne?Ut(b,R.href,m):It(b,m)},setHeaders:()=>{},depends:u,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,p)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Fe(e,n,t,a,r,o){if(ie)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const s of r.search_params)if(a.has(s))return!0;for(const s of r.params)if(o[s]!==_.params[s])return!0;for(const s of r.dependencies)if(at.some(i=>i(new URL(s))))return!0;return!1}function Le(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function nn(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(s=>o.includes(s))&&o.every(s=>r.includes(s))&&t.delete(a)}return t}function Be({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:E,constructors:[]}}}async function xe({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((I==null?void 0:I.id)===e)return M.delete(I.token),I.promise;const{errors:s,layouts:i,leaf:c}=r,f=[...i,c];s.forEach(g=>g==null?void 0:g().catch(()=>{})),f.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?r.id!==_.route.id:!1,u=nn(_.url,t);let p=!1;const l=f.map((g,v)=>{var C;const A=_.branch[v],k=!!(g!=null&&g[0])&&((A==null?void 0:A.loader)!==g[1]||Fe(p,y,h,u,(C=A.server)==null?void 0:C.uses,a));return k&&(p=!0),k});if(l.some(Boolean)){try{d=await ht(t,l)}catch(g){const v=await D(g,{url:t,params:a,route:{id:e}});return M.has(o)?Be({error:v,url:t,params:a,route:r}):ce({status:Q(g),error:v,url:t,route:r})}if(d.type==="redirect")return d}const m=d==null?void 0:d.nodes;let b=!1;const R=f.map(async(g,v)=>{var fe;if(!g)return;const A=_.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&g[1]===(A==null?void 0:A.loader)&&!Fe(b,y,h,u,(fe=A.universal)==null?void 0:fe.uses,a))return A;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Ue({loader:g[1],url:t,params:a,route:r,parent:async()=>{var Ce;const Te={};for(let ue=0;ue<v;ue+=1)Object.assign(Te,(Ce=await R[ue])==null?void 0:Ce.data);return Te},server_data_node:Le(k===void 0&&g[0]?{type:"skip"}:k??null,g[0]?A==null?void 0:A.server:void 0)})});for(const g of R)g.catch(()=>{});const w=[];for(let g=0;g<f.length;g+=1)if(f[g])try{w.push(await R[g])}catch(v){if(v instanceof Me)return{type:"redirect",location:v.location};if(M.has(o))return Be({error:await D(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let A=Q(v),k;if(m!=null&&m.includes(v))A=v.status??A,k=v.error;else if(v instanceof ae)k=v.body;else{if(await T.updated.check())return await nt(),await V(t);k=await D(v,{params:a,url:t,route:{id:r.id}})}const C=await lt(g,w,s);return C?W({url:t,params:a,branch:w.slice(0,C.idx).concat(C.node),status:A,error:k,route:r}):await dt(t,{id:r.id},k,A)}else w.push(void 0);return W({url:t,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function lt(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:n,url:t,route:a}){const r={};let o=null;if(B.server_loads[0]===0)try{const f=await ht(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==J||t.pathname!==location.pathname||Ie)&&await V(t)}const i=await Ue({loader:_e,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Le(o)}),c={node:await ee(),loader:ee,universal:null,server:null,data:null};return W({url:t,params:r,branch:[i,c],status:e,error:n,route:null})}function le(e,n){if(!e||re(e,L))return;let t;try{t=B.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const a=ft(t);for(const r of oe){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:n,route:r,params:wt(o),url:e}}}function ft(e){return _t(e.slice(L.length)||"/")}function ut({url:e,type:n,intent:t,delta:a}){let r=!1;const o=gt(_,t,e,n);a!==void 0&&(o.navigation.delta=a);const s={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return Y||Re.forEach(i=>i(s)),r?null:o}async function z({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=$e,block:d=$e}){const h=le(n,!1),y=ut({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=S,p=U;f(),Y=!0,ne&&T.navigating.set(y.navigation),F=c;let l=h&&await xe(h);if(!l){if(re(n,L))return await V(n);l=await dt(n,{id:null},await D(new Ae(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,F!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await ce({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return se(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await T.updated.check()&&(await nt(),await V(n));if(ot(),Ee(u),it(p),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=t?t.state:s,!t){const w=o?0:1,g={[$]:S+=w,[q]:U+=w,[Je]:s};(o?history.replaceState:history.pushState).call(history,g,"",n),o||Zt(S,U)}if(I=null,l.props.page.state=s,ne){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Qt.map(g=>g(y.navigation)))).filter(g=>typeof g=="function");if(w.length>0){let g=function(){j=j.filter(v=>!w.includes(v))};w.push(g),j.push(...w)}P.$set(l.props),rt=!0}else ct(l,we,!1);const{activeElement:m}=document;await me();const b=t?t.scroll:r?Se():null;if(De){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==m&&document.activeElement!==document.body;!a&&!R&&ve(),De=!0,l.props.page&&(E=l.props.page),Y=!1,e==="popstate"&&st(U),y.fulfil(void 0),j.forEach(w=>w(y.navigation)),T.navigating.set(null)}async function dt(e,n,t,a){return e.origin===J&&e.pathname===location.pathname&&!Ie?await ce({status:a,error:t,url:e,route:n}):await V(e)}function an(){let e;x.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{a(s,2)},20)});function n(o){o.defaultPrevented||a(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(ge(s.target.href),t.unobserve(s.target))},{threshold:0});function a(o,s){const i=Ze(o,x);if(!i)return;const{url:c,external:f,download:d}=ye(i,L);if(f||d)return;const h=Z(i),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(s<=h.preload_data){const u=le(c,!1);u&&tn(u)}else s<=h.preload_code&&ge(c.pathname)}function r(){t.disconnect();for(const o of x.querySelectorAll("a")){const{url:s,external:i,download:c}=ye(o,L);if(i||c)continue;const f=Z(o);f.reload||(f.preload_code===X.viewport&&t.observe(o),f.preload_code===X.eager&&ge(s.pathname))}}j.push(r),r()}function D(e,n){if(e instanceof ae)return e.body;const t=Q(e),a=Xt(e);return B.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function rn(e,n){mt(()=>(e.push(n),()=>{const t=e.indexOf(n);e.splice(t,1)}))}function gn(e){rn(Re,e)}function on(e,n={}){return e=ze(e),e.origin!==J?Promise.reject(new Error("goto: invalid URL")):se(e,n,0)}function mn(){return ie=!0,en()}async function yn(e){if(e.type==="error"){const n=new URL(location.href),{branch:t,route:a}=_;if(!a)return;const r=await lt(_.branch.length,t,a.errors);if(r){const o=W({url:n,params:_.params,branch:t.slice(0,r.idx).concat(r.node),status:e.status??500,error:e.error,route:a});_=o.state,P.$set(o.props),me().then(ve)}}else e.type==="redirect"?se(e.location,{invalidateAll:!0},0):(P.$set({form:null,page:{...E,form:e.data,status:e.status}}),await me(),P.$set({form:e.data}),e.type==="success"&&ve())}function sn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Ve(),!Y){const r=gt(_,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Re.forEach(s=>s(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ve()}),(n=navigator.connection)!=null&&n.saveData||an(),x.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=Ze(t.composedPath()[0],x);if(!a)return;const{url:r,external:o,target:s,download:i}=ye(a,L);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=Z(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[d,h]=r.href.split("#"),y=d===de(location);if(o||c.reload&&(!y||!h)){ut({url:r,type:"link"})?Y=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const p=a.ownerDocument.getElementById(decodeURIComponent(h));p&&(p.scrollIntoView(),p.focus())}return}if(G=!0,Ee(S),e(r),!c.replace_state)return;G=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),z({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),x.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const i=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(re(i,L))return;const c=t.target,f=Z(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),i.search=new URLSearchParams(d).toString(),z({type:"form",url:i,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[$]){const r=t.state[$];if(F={},r===S)return;const o=N[r],s=t.state[Je]??{},i=new URL(t.state[$t]??location.href),c=t.state[q],f=de(location)===de(_.url);if(c===U&&(rt||f)){e(i),N[S]=Se(),o&&scrollTo(o.x,o.y),s!==E.state&&(E={...E,state:s},P.$set({page:E})),S=r;return}const h=r-S;await z({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{S=r,U=c},block:()=>{history.go(-h)},nav_token:F})}else if(!G){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[$]:++S,[q]:U},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){_.url=t,T.page.set({...E,url:t}),T.page.notify()}}async function cn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:s,form:i}){Ie=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=le(c,!1)||{});let f;try{const d=a.map(async(u,p)=>{const l=s[p];return l!=null&&l.uses&&(l.uses=pt(l.uses)),Ue({loader:B.nodes[u],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<p;b+=1)Object.assign(m,(await d[b]).data);return m},server_data_node:Le(l)})}),h=await Promise.all(d),y=oe.find(({id:u})=>u===o.id);if(y){const u=y.layouts;for(let p=0;p<u.length;p++)u[p]||h.splice(p,0,void 0)}f=W({url:c,params:r,branch:h,status:n,error:t,form:i,route:y??null})}catch(d){if(d instanceof Me){await V(new URL(d.location,location.href));return}f=await ce({status:Q(d),error:await D(d,{url:c,params:r,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),ct(f,e,!0)}async function ht(e,n){var r;const t=new URL(e);t.pathname=St(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(zt,"1"),t.searchParams.append(Jt,n.map(o=>o?"1":"0").join(""));const a=await qe(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ae(a.status,o)}return new Promise(async o=>{var h;const s=new Map,i=a.body.getReader(),c=new TextDecoder;function f(y){return et(y,{Promise:u=>new Promise((p,l)=>{s.set(u,{fulfil:p,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await i.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const p=d.indexOf(`
`);if(p===-1)break;const l=JSON.parse(d.slice(0,p));if(d=d.slice(p+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=pt(m.uses),m.data=f(m.data))}),o(l);else if(l.type==="chunk"){const{id:m,data:b,error:R}=l,w=s.get(m);s.delete(m),R?w.reject(f(R)):w.fulfil(f(b))}}}})}function pt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function ve(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const s=r[o],i=a.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}a.removeAllRanges()}})}}}function gt(e,n,t,a){var c,f;let r,o;const s=new Promise((d,h)=>{r=d,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:a,complete:s},fulfil:r,reject:o}}export{Gt as H,Ht as N,Mt as P,Bt as U,qt as a,Kt as b,yn as c,gn as d,dn as e,pn as f,on as g,mn as i,hn as p,T as s};
