import{s as V,d as u,n as j,i as p,b as d,p as g,c as $,e as k,f as A,g as C,h as v,t as B,j as w,Z as H,q as T}from"./scheduler.D_DiFEDa.js";import{S as Z,i as z,d as q,t as h,a as _,m as D,c as E,b as I,g as F,f as G}from"./index.uqldPLAT.js";import{e as b}from"./each.8prNeyls.js";import"./index.9B820uFl.js";import"./utils.C8VhKZ24.js";import{S as J}from"./scroll-area.BQcScEIp.js";import{S as K}from"./separator.BudVf3Q6.js";function S(f,e,l){const r=f.slice();return r[1]=e[l],r}function y(f){let e,l=f[1]+"",r,o,c,i;return c=new K({props:{class:"my-2"}}),{c(){e=v("div"),r=B(l),o=w(),I(c.$$.fragment),this.h()},l(t){e=$(t,"DIV",{class:!0});var m=k(e);r=A(m,l),m.forEach(u),o=C(t),E(c.$$.fragment,t),this.h()},h(){g(e,"class","text-sm")},m(t,m){p(t,e,m),d(e,r),p(t,o,m),D(c,t,m),i=!0},p:j,i(t){i||(_(c.$$.fragment,t),i=!0)},o(t){h(c.$$.fragment,t),i=!1},d(t){t&&(u(e),u(o)),q(c,t)}}}function L(f){let e,l,r="Tags",o,c,i=b(f[0]),t=[];for(let s=0;s<i.length;s+=1)t[s]=y(S(f,i,s));const m=s=>h(t[s],1,1,()=>{t[s]=null});return{c(){e=v("div"),l=v("h4"),l.textContent=r,o=w();for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=$(s,"DIV",{class:!0});var n=k(e);l=$(n,"H4",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-1mu1d6y"&&(l.textContent=r),o=C(n);for(let a=0;a<t.length;a+=1)t[a].l(n);n.forEach(u),this.h()},h(){g(l,"class","mb-4 text-sm font-medium leading-none"),g(e,"class","p-4")},m(s,n){p(s,e,n),d(e,l),d(e,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);c=!0},p(s,n){if(n&1){i=b(s[0]);let a;for(a=0;a<i.length;a+=1){const x=S(s,i,a);t[a]?(t[a].p(x,n),_(t[a],1)):(t[a]=y(x),t[a].c(),_(t[a],1),t[a].m(e,null))}for(F(),a=i.length;a<t.length;a+=1)m(a);G()}},i(s){if(!c){for(let n=0;n<i.length;n+=1)_(t[n]);c=!0}},o(s){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)h(t[n]);c=!1},d(s){s&&u(e),H(t,s)}}}function M(f){let e,l;return e=new J({props:{class:"h-72 w-48 rounded-md border",$$slots:{default:[L]},$$scope:{ctx:f}}}),{c(){I(e.$$.fragment)},l(r){E(e.$$.fragment,r)},m(r,o){D(e,r,o),l=!0},p(r,[o]){const c={};o&16&&(c.$$scope={dirty:o,ctx:r}),e.$set(c)},i(r){l||(_(e.$$.fragment,r),l=!0)},o(r){h(e.$$.fragment,r),l=!1},d(r){q(e,r)}}}function N(f){return[Array.from({length:50}).map((l,r,o)=>`v1.2.0-beta.${o.length-r}`)]}class Y extends Z{constructor(e){super(),z(this,e,N,M,V,{})}}export{Y as default};
