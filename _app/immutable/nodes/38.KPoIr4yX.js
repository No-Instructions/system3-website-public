import{e as ut}from"../chunks/index.DYMvb8Iz.js";import{p as dt}from"../chunks/productivity.CxPsNlYz.js";import{g as pt,c as _t}from"../chunks/utils.C8VhKZ24.js";import{s as ft,d as p,a as U,i as mt,b as i,p as m,c as g,e as v,f as W,h,t as X,a4 as nt,q as gt,g as E,j as I,k as ht,n as vt}from"../chunks/scheduler.D_DiFEDa.js";import{S as $t,i as bt,d as q,t as k,a as w,m as A,c as z,b as M,g as st,f as it}from"../chunks/index.uqldPLAT.js";import{C as yt}from"../chunks/chevron-right.D1gWdJgI.js";import"../chunks/index.9B820uFl.js";import{S as kt}from"../chunks/scroll-area.BQcScEIp.js";import{p as wt}from"../chunks/stores.CojdI0bh.js";import"../chunks/form-demo.I_FsgVaC.js";import"../chunks/config.WvMhJhFT.js";import"../chunks/entry.DtDmLyLa.js";import{D as xt,T as Dt}from"../chunks/tree.Cwjy0cjl.js";import"../chunks/ctx.gjZ7gqPd.js";import"../chunks/index.DDMNy4X9.js";import"../chunks/root.svelte_svelte_type_style_lang.CmWxcNQk.js";const Et=async({params:n})=>{const{slug:e}=n;try{const{component:r,metadata:t}=await pt(e),a=It(e);return{metadata:{title:(a==null?void 0:a.title)||(t==null?void 0:t.title),description:t==null?void 0:t.description},component:r}}catch(r){throw console.error(r),ut(404,`Could not find ${e}`)}};function It(n){for(const e of dt.sidebarNav)for(const r of e.items){if(r.href===`/productivity/${n}`)return r;if(r.items){for(const t of r.items)if(t.href===`/productivity/${n}`)return t}}return null}const Qt=Object.freeze(Object.defineProperty({__proto__:null,load:Et},Symbol.toStringTag,{value:"Module"}));function lt(n){let e,r=n[0].description+"",t;return{c(){e=h("p"),t=X(r),this.h()},l(a){e=g(a,"P",{class:!0});var c=v(e);t=W(c,r),c.forEach(p),this.h()},h(){m(e,"class","text-balance text-lg text-muted-foreground")},m(a,c){mt(a,e,c),i(e,t)},p(a,c){c&1&&r!==(r=a[0].description+"")&&U(t,r)},d(a){a&&p(e)}}}function Ct(n){let e,r;return e=new Dt({}),{c(){M(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){A(e,t,a),r=!0},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function ct(n){let e,r;return e=new kt({props:{class:"h-full",$$slots:{default:[Ct]},$$scope:{ctx:n}}}),{c(){M(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){A(e,t,a),r=!0},p(t,a){const c={};a&16&&(c.$$scope={dirty:a,ctx:t}),e.$set(c)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function St(n){let e,r,t,a,c="Productivity",b,u,G,C,N=n[0].title+"",B,J,$,S,O=n[0].title+"",H,K,L,y,s,Q,x,R,V,D,Y=n[2].url.pathname,P;u=new yt({props:{class:"h-4 w-4"}});let l=n[0].description&&lt(n);var j=n[1];function Z(o,f){return{}}j&&(s=nt(j,Z())),x=new xt({});let d=ct(n);return{c(){e=h("main"),r=h("div"),t=h("div"),a=h("a"),a.textContent=c,b=I(),M(u.$$.fragment),G=I(),C=h("div"),B=X(N),J=I(),$=h("div"),S=h("h1"),H=X(O),K=I(),l&&l.c(),L=I(),y=h("div"),s&&M(s.$$.fragment),Q=I(),M(x.$$.fragment),R=I(),V=h("div"),D=h("div"),d.c(),this.h()},l(o){e=g(o,"MAIN",{class:!0});var f=v(e);r=g(f,"DIV",{class:!0});var _=v(r);t=g(_,"DIV",{class:!0});var T=v(t);a=g(T,"A",{href:!0,class:!0,"data-svelte-h":!0}),gt(a)!=="svelte-1guob1v"&&(a.textContent=c),b=E(T),z(u.$$.fragment,T),G=E(T),C=g(T,"DIV",{class:!0});var tt=v(C);B=W(tt,N),tt.forEach(p),T.forEach(p),J=E(_),$=g(_,"DIV",{class:!0});var F=v($);S=g(F,"H1",{class:!0});var et=v(S);H=W(et,O),et.forEach(p),K=E(F),l&&l.l(F),F.forEach(p),L=E(_),y=g(_,"DIV",{class:!0,id:!0});var rt=v(y);s&&z(s.$$.fragment,rt),rt.forEach(p),Q=E(_),z(x.$$.fragment,_),_.forEach(p),R=E(f),V=g(f,"DIV",{class:!0});var at=v(V);D=g(at,"DIV",{class:!0});var ot=v(D);d.l(ot),ot.forEach(p),at.forEach(p),f.forEach(p),this.h()},h(){m(a,"href","/productivity"),m(a,"class","hover:text-foreground"),m(C,"class","font-medium text-foreground"),m(t,"class","mb-4 flex items-center space-x-1 text-sm text-muted-foreground"),m(S,"class",_t("scroll-m-20 text-4xl font-bold tracking-tight")),m($,"class","space-y-2"),m(y,"class","markdown pb-12 pt-8"),m(y,"id","markdown"),m(r,"class","mx-auto w-full min-w-0"),m(D,"class","sticky top-14 -mt-10 h-[calc(100vh-3.5rem)] py-8"),m(V,"class","hidden text-sm xl:block"),m(e,"class","relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]")},m(o,f){mt(o,e,f),i(e,r),i(r,t),i(t,a),i(t,b),A(u,t,null),i(t,G),i(t,C),i(C,B),i(r,J),i(r,$),i($,S),i(S,H),i($,K),l&&l.m($,null),i(r,L),i(r,y),s&&A(s,y,null),i(r,Q),A(x,r,null),i(e,R),i(e,V),i(V,D),d.m(D,null),P=!0},p(o,[f]){if((!P||f&1)&&N!==(N=o[0].title+"")&&U(B,N),(!P||f&1)&&O!==(O=o[0].title+"")&&U(H,O),o[0].description?l?l.p(o,f):(l=lt(o),l.c(),l.m($,null)):l&&(l.d(1),l=null),f&2&&j!==(j=o[1])){if(s){st();const _=s;k(_.$$.fragment,1,0,()=>{q(_,1)}),it()}j?(s=nt(j,Z()),M(s.$$.fragment),w(s.$$.fragment,1),A(s,y,null)):s=null}f&4&&ft(Y,Y=o[2].url.pathname)?(st(),k(d,1,1,vt),it(),d=ct(o),d.c(),w(d,1),d.m(D,null)):d.p(o,f)},i(o){P||(w(u.$$.fragment,o),s&&w(s.$$.fragment,o),w(x.$$.fragment,o),w(d),P=!0)},o(o){k(u.$$.fragment,o),s&&k(s.$$.fragment,o),k(x.$$.fragment,o),k(d),P=!1},d(o){o&&p(e),q(u),l&&l.d(),s&&q(s),q(x),d.d(o)}}}function Vt(n,e,r){let t,a,c;ht(n,wt,u=>r(2,c=u));let{data:b}=e;return n.$$set=u=>{"data"in u&&r(3,b=u.data)},n.$$.update=()=>{n.$$.dirty&8&&r(1,t=b.component),n.$$.dirty&8&&r(0,a=b.metadata)},[a,t,c,b]}class Rt extends $t{constructor(e){super(),bt(this,e,Vt,St,ft,{data:3})}}export{Rt as component,Qt as universal};