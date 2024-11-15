function Xt(t){return Object.prototype.toString.call(t)==="[object Object]"}function wt(t){return Xt(t)||Array.isArray(t)}function Yt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Et(t,n){const e=Object.keys(t),s=Object.keys(n);if(e.length!==s.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),r=JSON.stringify(Object.keys(n.breakpoints||{}));return c!==r?!1:e.every(o=>{const u=t[o],i=n[o];return typeof u=="function"?`${u}`==`${i}`:!wt(u)||!wt(i)?u===i:Et(u,i)})}function Ct(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function _t(t,n){if(t.length!==n.length)return!1;const e=Ct(t),s=Ct(n);return e.every((c,r)=>{const o=s[r];return Et(c,o)})}function vt(t){return typeof t=="number"}function xt(t){return typeof t=="string"}function Lt(t){return typeof t=="boolean"}function kt(t){return Object.prototype.toString.call(t)==="[object Object]"}function M(t){return Math.abs(t)}function It(t){return Math.sign(t)}function dt(t,n){return M(t-n)}function Zt(t,n){if(t===0||n===0||M(t)<=M(n))return 0;const e=dt(M(t),M(n));return M(e/t)}function ct(t){return ut(t).map(Number)}function V(t){return t[at(t)]}function at(t){return Math.max(0,t.length-1)}function Ot(t,n){return n===at(t)}function Nt(t,n=0){return Array.from(Array(t),(e,s)=>n+s)}function ut(t){return Object.keys(t)}function zt(t,n){return[t,n].reduce((e,s)=>(ut(s).forEach(c=>{const r=e[c],o=s[c],u=kt(r)&&kt(o);e[c]=u?zt(r,o):o}),e),{})}function Bt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Wt(t,n){const e={start:s,center:c,end:r};function s(){return 0}function c(i){return r(i)/2}function r(i){return n-i}function o(i,f){return xt(t)?e[t](i):t(n,i,f)}return{measure:o}}function ft(){let t=[];function n(c,r,o,u={passive:!0}){let i;if("addEventListener"in c)c.addEventListener(r,o,u),i=()=>c.removeEventListener(r,o,u);else{const f=c;f.addListener(o),i=()=>f.removeListener(o)}return t.push(i),s}function e(){t=t.filter(c=>c())}const s={add:n,clear:e};return s}function tn(t,n,e,s){const c=ft(),r=1e3/60;let o=null,u=0,i=0;function f(){c.add(t,"visibilitychange",()=>{t.hidden&&g()})}function h(){S(),c.clear()}function a(y){o||(o=y);const l=y-o;for(o=y,u+=l;u>=r;)e(),u-=r;const m=M(u/r);s(m),i&&n.requestAnimationFrame(a)}function p(){i||(i=n.requestAnimationFrame(a))}function S(){n.cancelAnimationFrame(i),o=null,u=0,i=0}function g(){o=null,u=0}return{init:f,destroy:h,start:p,stop:S,update:e,render:s}}function nn(t,n){const e=t==="y"?"y":"x",s=t==="y"?"x":"y",c=u(),r=i();function o(h){const{width:a,height:p}=h;return e==="x"?a:p}function u(){return e==="y"?"top":n==="rtl"?"right":"left"}function i(){return e==="y"?"bottom":n==="rtl"?"left":"right"}return{scroll:e,cross:s,startEdge:c,endEdge:r,measureSize:o}}function tt(t=0,n=0){const e=M(t-n);function s(f){return f<t}function c(f){return f>n}function r(f){return s(f)||c(f)}function o(f){return r(f)?s(f)?t:n:f}function u(f){return e?f-e*Math.ceil((f-n)/e):f}return{length:e,max:n,min:t,constrain:o,reachedAny:r,reachedMax:c,reachedMin:s,removeOffset:u}}function Vt(t,n,e){const{constrain:s}=tt(0,t),c=t+1;let r=o(n);function o(p){return e?M((c+p)%c):s(p)}function u(){return r}function i(p){return r=o(p),a}function f(p){return h().set(u()+p)}function h(){return Vt(t,u(),e)}const a={get:u,set:i,add:f,clone:h};return a}function en(t){const n=t==="rtl"?-1:1;function e(c){return c*n}return{apply:e}}function on(t,n,e,s,c,r,o,u,i,f,h,a,p,S,g,d,y,l,m,x){const{cross:v}=t,L=["INPUT","SELECT","TEXTAREA"],A={passive:!1},F=ft(),E=ft(),I=tt(50,225).constrain(g.measure(20)),O={mouse:300,touch:400},T={mouse:500,touch:600},C=d?43:25;let j=!1,H=0,$=0,G=!1,X=!1,Y=!1,U=!1;function ot(b){if(!x)return;function D(k){(Lt(x)||x(b,k))&&st(k)}const w=e;F.add(w,"dragstart",k=>k.preventDefault(),A).add(w,"touchmove",()=>{},A).add(w,"touchend",()=>{}).add(w,"touchstart",D).add(w,"mousedown",D).add(w,"touchcancel",N).add(w,"contextmenu",N).add(w,"click",Q,!0)}function q(){F.clear(),E.clear()}function nt(){const b=U?s:e;E.add(b,"touchmove",z,A).add(b,"touchend",N).add(b,"mousemove",z,A).add(b,"mouseup",N)}function et(b){const D=b.nodeName||"";return L.includes(D)}function K(){return(d?T:O)[U?"mouse":"touch"]}function rt(b,D){const w=p.add(It(b)*-1),k=a.byDistance(b,!d).distance;return d||M(b)<I?k:l&&D?k*.5:a.byIndex(w.get(),0).distance}function st(b){const D=Bt(b,c);U=D,!(D&&b.button!==0)&&(et(b.target)||(Y=d&&D&&!b.buttons&&j,j=dt(r.get(),u.get())>=2,G=!0,o.pointerDown(b),h.useFriction(0).useDuration(0),r.set(u),nt(),H=o.readPoint(b),$=o.readPoint(b,v),S.emit("pointerDown")))}function z(b){const D=o.readPoint(b),w=o.readPoint(b,v),k=dt(D,H),_=dt(w,$);if(!X&&!U&&(!b.cancelable||(X=k>_,!X)))return N(b);const R=o.pointerMove(b);k>y&&(Y=!0),h.useFriction(.3).useDuration(1),i.start(),r.add(n.apply(R)),b.preventDefault()}function N(b){const w=a.byDistance(0,!1).index!==p.get(),k=o.pointerUp(b)*K(),_=rt(n.apply(k),w),R=Zt(k,_),Z=C-10*R,J=m+R/50;X=!1,G=!1,E.clear(),h.useDuration(Z).useFriction(J),f.distance(_,!d),U=!1,S.emit("pointerUp")}function Q(b){Y&&(b.stopPropagation(),b.preventDefault())}function B(){return G}return{init:ot,pointerDown:B,destroy:q}}function rn(t,n){let s,c;function r(a){return a.timeStamp}function o(a,p){const g=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(Bt(a,n)?a:a.touches[0])[g]}function u(a){return s=a,c=a,o(a)}function i(a){const p=o(a)-o(c),S=r(a)-r(s)>170;return c=a,S&&(s=a),p}function f(a){if(!s||!c)return 0;const p=o(c)-o(s),S=r(a)-r(s),g=r(a)-r(c)>170,d=p/S;return S&&!g&&M(d)>.1?d:0}return{pointerDown:u,pointerMove:i,pointerUp:f,readPoint:o}}function sn(){function t(e){const{offsetTop:s,offsetLeft:c,offsetWidth:r,offsetHeight:o}=e;return{top:s,right:c+r,bottom:s+o,left:c,width:r,height:o}}return{measure:t}}function cn(t){function n(s){return t*(s/100)}return{measure:n}}function un(t,n,e,s,c,r,o){let u,i,f=[],h=!1;function a(d){return c.measureSize(o.measure(d))}function p(d){if(!r)return;i=a(t),f=s.map(a);function y(m){for(const x of m){const v=x.target===t,L=s.indexOf(x.target),A=v?i:f[L],F=a(v?t:s[L]);if(M(F-A)>=.5){e.requestAnimationFrame(()=>{d.reInit(),n.emit("resize")});break}}}u=new ResizeObserver(m=>{h||(Lt(r)||r(d,m))&&y(m)}),[t].concat(s).forEach(m=>u.observe(m))}function S(){u&&u.disconnect(),h=!0}return{init:p,destroy:S}}function fn(t,n,e,s,c){let r=0,o=0,u=s,i=c,f=t.get(),h=0;function a(){const L=e.get()-t.get(),A=!u;let F=0;return A?(r=0,t.set(e),F=L):(r+=L/u,r*=i,f+=r,t.add(r),F=f-h),o=It(F),h=f,v}function p(){const L=e.get()-n.get();return M(L)<.001}function S(){return u}function g(){return o}function d(){return r}function y(){return m(s)}function l(){return x(c)}function m(L){return u=L,v}function x(L){return i=L,v}const v={direction:g,duration:S,velocity:d,seek:a,settled:p,useBaseFriction:l,useBaseDuration:y,useFriction:x,useDuration:m};return v}function an(t,n,e,s,c){const r=c.measure(10),o=c.measure(50),u=tt(.1,.99);let i=!1;function f(){return!(i||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function h(S){if(!f())return;const g=t.reachedMin(n.get())?"min":"max",d=M(t[g]-n.get()),y=e.get()-n.get(),l=u.constrain(d/o);e.subtract(y*l),!S&&M(y)<r&&(e.set(t.constrain(e.get())),s.useDuration(25).useBaseFriction())}function a(S){i=!S}return{constrain:h,toggleActive:a}}function ln(t,n,e,s,c){const r=tt(-n+t,0),o=h(),u=f(),i=a();function f(){const S=o[0],g=V(o),d=o.lastIndexOf(S),y=o.indexOf(g)+1;return tt(d,y)}function h(){return e.map((S,g)=>{const d=!g,y=Ot(e,g);return d?r.max:y?r.min:r.constrain(S)}).map(S=>parseFloat(S.toFixed(3)))}function a(){if(n<=t+c)return[r.max];if(s==="keepSnaps")return o;const{min:S,max:g}=u;return o.slice(S,g)}return{snapsContained:i,scrollContainLimit:u}}function dn(t,n,e){const s=n[0],c=e?s-t:V(n);return{limit:tt(c,s)}}function pn(t,n,e,s){const r=n.min+.1,o=n.max+.1,{reachedMin:u,reachedMax:i}=tt(r,o);function f(p){return p===1?i(e.get()):p===-1?u(e.get()):!1}function h(p){if(!f(p))return;const S=t*(p*-1);s.forEach(g=>g.add(S))}return{loop:h}}function gn(t){const{max:n,length:e}=t;function s(r){const o=r-n;return e?o/-e:0}return{get:s}}function mn(t,n,e,s,c){const{startEdge:r,endEdge:o}=t,{groupSlides:u}=c,i=a().map(n.measure),f=p(),h=S();function a(){return u(s).map(d=>V(d)[o]-d[0][r]).map(M)}function p(){return s.map(d=>e[r]-d[r]).map(d=>-M(d))}function S(){return u(f).map(d=>d[0]).map((d,y)=>d+i[y])}return{snaps:f,snapsAligned:h}}function hn(t,n,e,s,c,r){const{groupSlides:o}=c,{min:u,max:i}=s,f=h();function h(){const p=o(r),S=!t||n==="keepSnaps";return e.length===1?[r]:S?p:p.slice(u,i).map((g,d,y)=>{const l=!d,m=Ot(y,d);if(l){const x=V(y[0])+1;return Nt(x)}if(m){const x=at(r)-V(y)[0]+1;return Nt(x,V(y)[0])}return g})}return{slideRegistry:f}}function yn(t,n,e,s,c){const{reachedAny:r,removeOffset:o,constrain:u}=s;function i(g){return g.concat().sort((d,y)=>M(d)-M(y))[0]}function f(g){const d=t?o(g):u(g),y=n.map(m=>m-d).map(m=>h(m,0)).map((m,x)=>({diff:m,index:x})).sort((m,x)=>M(m.diff)-M(x.diff)),{index:l}=y[0];return{index:l,distance:d}}function h(g,d){const y=[g,g+e,g-e];if(!t)return y[0];if(!d)return i(y);const l=y.filter(m=>It(m)===d);return l.length?i(l):V(y)-e}function a(g,d){const y=n[g]-c.get(),l=h(y,d);return{index:g,distance:l}}function p(g,d){const y=c.get()+g,{index:l,distance:m}=f(y),x=!t&&r(y);if(!d||x)return{index:l,distance:g};const v=n[l]-m,L=g+h(v,0);return{index:l,distance:L}}return{byDistance:p,byIndex:a,shortcut:h}}function Sn(t,n,e,s,c,r,o){function u(a){const p=a.distance,S=a.index!==n.get();r.add(p),p&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),S&&(e.set(n.get()),n.set(a.index),o.emit("select"))}function i(a,p){const S=c.byDistance(a,p);u(S)}function f(a,p){const S=n.clone().set(a),g=c.byIndex(S.get(),p);u(g)}return{distance:i,index:f}}function bn(t,n,e,s,c,r){let o=0;function u(){r.add(document,"keydown",i,!1),n.forEach(f)}function i(a){a.code==="Tab"&&(o=new Date().getTime())}function f(a){const p=()=>{if(new Date().getTime()-o>10)return;t.scrollLeft=0;const d=n.indexOf(a),y=e.findIndex(l=>l.includes(d));vt(y)&&(c.useDuration(0),s.index(y,0))};r.add(a,"focus",p,{passive:!0,capture:!0})}return{init:u}}function pt(t){let n=t;function e(){return n}function s(i){n=o(i)}function c(i){n+=o(i)}function r(i){n-=o(i)}function o(i){return vt(i)?i:i.get()}return{get:e,set:s,add:c,subtract:r}}function jt(t,n,e){const s=t.scroll==="x"?o:u,c=e.style;let r=!1;function o(p){return`translate3d(${p}px,0px,0px)`}function u(p){return`translate3d(0px,${p}px,0px)`}function i(p){r||(c.transform=s(n.apply(p)))}function f(p){r=!p}function h(){r||(c.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:h,to:i,toggleActive:f}}function xn(t,n,e,s,c,r,o,u,i,f){const a=ct(r),p=ct(r).reverse(),S=m().concat(x());function g(E,I){return E.reduce((O,T)=>O-r[T],I)}function d(E,I){return E.reduce((O,T)=>g(O,I)>0?O.concat([T]):O,[])}function y(E){return o.map((I,O)=>({start:I-c[O]+.5+E,end:I+e-.5+E}))}function l(E,I,O){const T=y(I);return E.map(C=>{const j=O?0:-s,H=O?s:0,$=O?"end":"start",G=T[C][$];return{index:C,loopPoint:G,slideLocation:pt(-1),translate:jt(t,n,f[C]),target:()=>i.get()>G?j:H}})}function m(){const E=u[0],I=d(p,E);return l(I,s,!1)}function x(){const E=e-u[0]-1,I=d(a,E);return l(I,-s,!0)}function v(){return S.every(({index:E})=>{const I=a.filter(O=>O!==E);return g(I,e)<=.1})}function L(){S.forEach(E=>{const{target:I,translate:O,slideLocation:T}=E,C=I();C!==T.get()&&(O.to(C),T.set(C))})}function A(){S.forEach(E=>E.translate.clear())}return{canLoop:v,clear:A,loop:L,loopPoints:S}}function En(t,n,e){let s,c=!1;function r(i){if(!e)return;function f(h){for(const a of h)if(a.type==="childList"){i.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(h=>{c||(Lt(e)||e(i,h))&&f(h)}),s.observe(t,{childList:!0})}function o(){s&&s.disconnect(),c=!0}return{init:r,destroy:o}}function vn(t,n,e,s){const c={};let r=null,o=null,u,i=!1;function f(){u=new IntersectionObserver(g=>{i||(g.forEach(d=>{const y=n.indexOf(d.target);c[y]=d}),r=null,o=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(g=>u.observe(g))}function h(){u&&u.disconnect(),i=!0}function a(g){return ut(c).reduce((d,y)=>{const l=parseInt(y),{isIntersecting:m}=c[l];return(g&&m||!g&&!m)&&d.push(l),d},[])}function p(g=!0){if(g&&r)return r;if(!g&&o)return o;const d=a(g);return g&&(r=d),g||(o=d),d}return{init:f,destroy:h,get:p}}function Ln(t,n,e,s,c,r){const{measureSize:o,startEdge:u,endEdge:i}=t,f=e[0]&&c,h=g(),a=d(),p=e.map(o),S=y();function g(){if(!f)return 0;const m=e[0];return M(n[u]-m[u])}function d(){if(!f)return 0;const m=r.getComputedStyle(V(s));return parseFloat(m.getPropertyValue(`margin-${i}`))}function y(){return e.map((m,x,v)=>{const L=!x,A=Ot(v,x);return L?p[x]+h:A?p[x]+a:v[x+1][u]-m[u]}).map(M)}return{slideSizes:p,slideSizesWithGaps:S,startGap:h,endGap:a}}function In(t,n,e,s,c,r,o,u,i,f){const{startEdge:h,endEdge:a}=t,p=vt(s);function S(l,m){return ct(l).filter(x=>x%m===0).map(x=>l.slice(x,x+m))}function g(l){return l.length?ct(l).reduce((m,x)=>{const v=V(m)||0,L=v===0,A=x===at(l),F=r[h]-o[v][h],E=r[h]-o[x][a],I=!c&&L?n.apply(u):0,O=!c&&A?n.apply(i):0;return M(E-O-(F+I))>e+f&&m.push(x),A&&m.push(l.length),m},[]).map((m,x,v)=>{const L=Math.max(v[x-1]||0);return l.slice(L,m)}):[]}function d(l){return p?S(l,s):g(l)}return{groupSlides:d}}function On(t,n,e,s,c,r,o){const{align:u,axis:i,direction:f,startIndex:h,loop:a,duration:p,dragFree:S,dragThreshold:g,inViewThreshold:d,slidesToScroll:y,skipSnaps:l,containScroll:m,watchResize:x,watchSlides:v,watchDrag:L}=r,A=2,F=sn(),E=F.measure(n),I=e.map(F.measure),O=en(f),T=nn(i,f),C=T.measureSize(E),j=cn(C),H=Wt(u,C),$=!a&&!!m,G=a||!!m,{slideSizes:X,slideSizesWithGaps:Y,startGap:U,endGap:ot}=Ln(T,E,I,e,G,c),q=In(T,O,C,y,a,E,I,U,ot,A),{snaps:nt,snapsAligned:et}=mn(T,H,E,I,q),K=-V(nt)+V(Y),{snapsContained:rt,scrollContainLimit:st}=ln(C,K,et,m,A),z=$?rt:et,{limit:N}=dn(K,z,a),Q=Vt(at(z),h,a),B=Q.clone(),P=ct(e),b=({dragHandler:W,scrollBody:St,scrollBounds:bt,options:{loop:lt}})=>{lt||bt.constrain(W.pointerDown()),St.seek()},D=({scrollBody:W,translate:St,location:bt,offsetLocation:lt,scrollLooper:Rt,slideLooper:$t,dragHandler:Ut,animation:Kt,eventHandler:Mt,options:{loop:Qt}},Jt)=>{const Pt=W.velocity(),Ft=W.settled();Ft&&!Ut.pointerDown()&&(Kt.stop(),Mt.emit("settle")),Ft||Mt.emit("scroll"),lt.set(bt.get()-Pt+Pt*Jt),Qt&&(Rt.loop(W.direction()),$t.loop()),St.to(lt.get())},w=tn(s,c,()=>b(yt),W=>D(yt,W)),k=.68,_=z[Q.get()],R=pt(_),Z=pt(_),J=pt(_),it=fn(R,Z,J,p,k),mt=yn(a,z,K,N,J),ht=Sn(w,Q,B,it,mt,J,o),Dt=gn(N),At=ft(),Gt=vn(n,e,o,d),{slideRegistry:Tt}=hn($,m,z,st,q,P),qt=bn(t,e,Tt,ht,it,At),yt={ownerDocument:s,ownerWindow:c,eventHandler:o,containerRect:E,slideRects:I,animation:w,axis:T,direction:O,dragHandler:on(T,O,t,s,c,J,rn(T,c),R,w,ht,it,mt,Q,o,j,S,g,l,k,L),eventStore:At,percentOfView:j,index:Q,indexPrevious:B,limit:N,location:R,offsetLocation:Z,options:r,resizeHandler:un(n,o,c,e,T,x,F),scrollBody:it,scrollBounds:an(N,R,J,it,j),scrollLooper:pn(K,N,Z,[R,Z,J]),scrollProgress:Dt,scrollSnapList:z.map(Dt.get),scrollSnaps:z,scrollTarget:mt,scrollTo:ht,slideLooper:xn(T,O,C,K,X,Y,nt,z,Z,e),slideFocus:qt,slidesHandler:En(n,o,v),slidesInView:Gt,slideIndexes:P,slideRegistry:Tt,slidesToScroll:q,target:J,translate:jt(T,O,n)};return yt}function Dn(){const t={};let n;function e(i){n=i}function s(i){return t[i]||[]}function c(i){return s(i).forEach(f=>f(n,i)),u}function r(i,f){return t[i]=s(i).concat([f]),u}function o(i,f){return t[i]=s(i).filter(h=>h!==f),u}const u={init:e,emit:c,off:o,on:r};return u}const An={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Tn(t){function n(r,o){return zt(r,o||{})}function e(r){const o=r.breakpoints||{},u=ut(o).filter(i=>t.matchMedia(i).matches).map(i=>o[i]).reduce((i,f)=>n(i,f),{});return n(r,u)}function s(r){return r.map(o=>ut(o.breakpoints||{})).reduce((o,u)=>o.concat(u),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:s}}function Mn(t){let n=[];function e(r,o){return n=o.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(r,t)),o.reduce((u,i)=>Object.assign(u,{[i.name]:i}),{})}function s(){n=n.filter(r=>r.destroy())}return{init:e,destroy:s}}function gt(t,n,e){const s=t.ownerDocument,c=s.defaultView,r=Tn(c),o=Mn(r),u=ft(),i=Dn(),{mergeOptions:f,optionsAtMedia:h,optionsMediaQueries:a}=r,{on:p,off:S,emit:g}=i,d=T;let y=!1,l,m=f(An,gt.globalOptions),x=f(m),v=[],L,A,F;function E(){const{container:P,slides:b}=x;A=(xt(P)?t.querySelector(P):P)||t.children[0];const w=xt(b)?A.querySelectorAll(b):b;F=[].slice.call(w||A.children)}function I(P){const b=On(t,A,F,s,c,P,i);if(P.loop&&!b.slideLooper.canLoop()){const D=Object.assign({},P,{loop:!1});return I(D)}return b}function O(P,b){y||(m=f(m,P),x=h(m),v=b||v,E(),l=I(x),a([m,...v.map(({options:D})=>D)]).forEach(D=>u.add(D,"change",T)),x.active&&(l.translate.to(l.location.get()),l.animation.init(),l.slidesInView.init(),l.slideFocus.init(),l.eventHandler.init(B),l.resizeHandler.init(B),l.slidesHandler.init(B),l.options.loop&&l.slideLooper.loop(),A.offsetParent&&F.length&&l.dragHandler.init(B),L=o.init(B,v)))}function T(P,b){const D=q();C(),O(f({startIndex:D},P),b),i.emit("reInit")}function C(){l.dragHandler.destroy(),l.eventStore.clear(),l.translate.clear(),l.slideLooper.clear(),l.resizeHandler.destroy(),l.slidesHandler.destroy(),l.slidesInView.destroy(),l.animation.destroy(),o.destroy(),u.clear()}function j(){y||(y=!0,u.clear(),C(),i.emit("destroy"))}function H(P,b,D){!x.active||y||(l.scrollBody.useBaseFriction().useDuration(b===!0?0:x.duration),l.scrollTo.index(P,D||0))}function $(P){const b=l.index.add(1).get();H(b,P,-1)}function G(P){const b=l.index.add(-1).get();H(b,P,1)}function X(){return l.index.add(1).get()!==q()}function Y(){return l.index.add(-1).get()!==q()}function U(){return l.scrollSnapList}function ot(){return l.scrollProgress.get(l.location.get())}function q(){return l.index.get()}function nt(){return l.indexPrevious.get()}function et(){return l.slidesInView.get()}function K(){return l.slidesInView.get(!1)}function rt(){return L}function st(){return l}function z(){return t}function N(){return A}function Q(){return F}const B={canScrollNext:X,canScrollPrev:Y,containerNode:N,internalEngine:st,destroy:j,off:S,on:p,emit:g,plugins:rt,previousScrollSnap:nt,reInit:d,rootNode:z,scrollNext:$,scrollPrev:G,scrollProgress:ot,scrollSnapList:U,scrollTo:H,selectedScrollSnap:q,slideNodes:Q,slidesInView:et,slidesNotInView:K};return O(n,e),setTimeout(()=>i.emit("init"),0),B}gt.globalOptions=void 0;function Ht(t,n={options:{},plugins:[]}){let e=n,s;return Yt()&&(gt.globalOptions=Ht.globalOptions,s=gt(t,e.options,e.plugins),s.on("init",()=>t.dispatchEvent(new CustomEvent("emblaInit",{detail:s})))),{destroy:()=>{s&&s.destroy()},update:c=>{const r=!Et(e.options,c.options),o=!_t(e.plugins,c.plugins);!r&&!o||(e=c,s&&s.reInit(e.options,e.plugins))}}}Ht.globalOptions=void 0;export{Ht as e};
