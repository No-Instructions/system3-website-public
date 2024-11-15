import{s as te,d as h,r as oe,i as g,p as f,c as _,e as w,h as p,a as fe,b,g as k,f as ue,j as $,t as he,Z as H,k as me,n as N,a2 as q,a9 as se,l as _e,u as pe,m as de,o as ge,q as ve}from"../chunks/scheduler.D_DiFEDa.js";import{S as re,i as le,j as be,a as L,g as ae,t as U,f as ie,d as T,m as A,c as P,b as G,k as we}from"../chunks/index.uqldPLAT.js";import{e as j}from"../chunks/each.8prNeyls.js";import{a as ke}from"../chunks/index.D5mVFuQK.js";import{c as $e}from"../chunks/index.d7NS32TL.js";import{c as C}from"../chunks/utils.C8VhKZ24.js";import{p as ye}from"../chunks/stores.CojdI0bh.js";import"../chunks/index.9B820uFl.js";import{B as xe}from"../chunks/button.D3IjJBO3.js";import{S as Le}from"../chunks/separator.BudVf3Q6.js";function Y(o,e,i){const t=o.slice();t[5]=e[i];const c=t[2].url.pathname===t[5].href;return t[6]=c,t}function J(o){let e,i,t,c;return{c(){e=p("div"),this.h()},l(r){e=_(r,"DIV",{class:!0}),w(e).forEach(h),this.h()},h(){f(e,"class","absolute inset-0 rounded-md bg-muted")},m(r,a){g(r,e,a),c=!0},i(r){c||(r&&oe(()=>{c&&(t&&t.end(1),i=we(e,o[3],{key:"active-sidebar-tab"}),i.start())}),c=!0)},o(r){i&&i.invalidate(),r&&(t=be(e,o[4],{key:"active-sidebar-tab"})),c=!1},d(r){r&&h(e),r&&t&&t.end()}}}function Re(o){let e,i,t=o[5].title+"",c,r,a=o[6]&&J(o);return{c(){a&&a.c(),e=$(),i=p("div"),c=he(t),r=$(),this.h()},l(s){a&&a.l(s),e=k(s),i=_(s,"DIV",{class:!0});var n=w(i);c=ue(n,t),n.forEach(h),r=k(s),this.h()},h(){f(i,"class","relative")},m(s,n){a&&a.m(s,n),g(s,e,n),g(s,i,n),b(i,c),g(s,r,n)},p(s,n){s[6]?a?n&6&&L(a,1):(a=J(s),a.c(),L(a,1),a.m(e.parentNode,e)):a&&(ae(),U(a,1,1,()=>{a=null}),ie()),n&2&&t!==(t=s[5].title+"")&&fe(c,t)},d(s){s&&(h(e),h(i),h(r)),a&&a.d(s)}}}function z(o){let e,i;return e=new xe({props:{href:o[5].href,variant:"ghost",class:C(!o[6]&&"hover:underline","relative justify-start hover:bg-transparent"),"data-sveltekit-noscroll":!0,$$slots:{default:[Re]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,c){A(e,t,c),i=!0},p(t,c){const r={};c&2&&(r.href=t[5].href),c&6&&(r.class=C(!t[6]&&"hover:underline","relative justify-start hover:bg-transparent")),c&518&&(r.$$scope={dirty:c,ctx:t}),e.$set(r)},i(t){i||(L(e.$$.fragment,t),i=!0)},o(t){U(e.$$.fragment,t),i=!1},d(t){T(e,t)}}}function Ue(o){let e,i,t,c=j(o[1]),r=[];for(let s=0;s<c.length;s+=1)r[s]=z(Y(o,c,s));const a=s=>U(r[s],1,1,()=>{r[s]=null});return{c(){e=p("nav");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=_(s,"NAV",{class:!0});var n=w(e);for(let l=0;l<r.length;l+=1)r[l].l(n);n.forEach(h),this.h()},h(){f(e,"class",i=C("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",o[0]))},m(s,n){g(s,e,n);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(s,[n]){if(n&6){c=j(s[1]);let l;for(l=0;l<c.length;l+=1){const m=Y(s,c,l);r[l]?(r[l].p(m,n),L(r[l],1)):(r[l]=z(m),r[l].c(),L(r[l],1),r[l].m(e,null))}for(ae(),l=c.length;l<r.length;l+=1)a(l);ie()}(!t||n&1&&i!==(i=C("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",s[0])))&&f(e,"class",i)},i(s){if(!t){for(let n=0;n<c.length;n+=1)L(r[n]);t=!0}},o(s){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)U(r[n]);t=!1},d(s){s&&h(e),H(r,s)}}}function Ee(o,e,i){let t;me(o,ye,n=>i(2,t=n));let{class:c=void 0}=e,{items:r}=e;const[a,s]=$e({duration:250,easing:ke});return o.$$set=n=>{"class"in n&&i(0,c=n.class),"items"in n&&i(1,r=n.items)},[c,r,t,a,s]}class Ie extends re{constructor(e){super(),le(this,e,Ee,Ue,te,{class:0,items:1})}}const y={sources:{avif:""+new URL("../assets/forms-light.CofTi7pW.avif",import.meta.url).href+" 1668w, "+new URL("../assets/forms-light.BA7NaumK.avif",import.meta.url).href+" 3336w",webp:""+new URL("../assets/forms-light.BsuNyKn2.webp",import.meta.url).href+" 1668w, "+new URL("../assets/forms-light.scKWfkYK.webp",import.meta.url).href+" 3336w",png:""+new URL("../assets/forms-light._oRpVOjY.png",import.meta.url).href+" 1668w, "+new URL("../assets/forms-light.D56PwMnq.png",import.meta.url).href+" 3336w"},img:{src:""+new URL("../assets/forms-light.D56PwMnq.png",import.meta.url).href,w:3336,h:3124}},x={sources:{avif:""+new URL("../assets/forms-dark.BJwzNpy8.avif",import.meta.url).href+" 1668w, "+new URL("../assets/forms-dark.D5irnzkh.avif",import.meta.url).href+" 3336w",webp:""+new URL("../assets/forms-dark.OsulcHFY.webp",import.meta.url).href+" 1668w, "+new URL("../assets/forms-dark.CX-XX-bX.webp",import.meta.url).href+" 3336w",png:""+new URL("../assets/forms-dark.BvreaYLH.png",import.meta.url).href+" 1668w, "+new URL("../assets/forms-dark.D4EdJTO_.png",import.meta.url).href+" 3336w"},img:{src:""+new URL("../assets/forms-dark.D4EdJTO_.png",import.meta.url).href,w:3336,h:3124}};function W(o,e,i){const t=o.slice();return t[3]=e[i][0],t[4]=e[i][1],t}function Z(o,e,i){const t=o.slice();return t[3]=e[i][0],t[4]=e[i][1],t}function De(o){let e,i,t,c,r=j(Object.entries(y.sources)),a=[];for(let s=0;s<r.length;s+=1)a[s]=Q(Z(o,r,s));return{c(){e=p("picture");for(let s=0;s<a.length;s+=1)a[s].c();i=$(),t=p("img"),this.h()},l(s){e=_(s,"PICTURE",{});var n=w(e);for(let l=0;l<a.length;l+=1)a[l].l(n);i=k(n),t=_(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),n.forEach(h),this.h()},h(){q(t.src,c=y.img.src)||f(t,"src",c),f(t,"alt","Forms"),f(t,"class","block dark:hidden"),f(t,"width",y.img.w),f(t,"height",y.img.h)},m(s,n){g(s,e,n);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);b(e,i),b(e,t)},p(s,n){if(n&0){r=j(Object.entries(y.sources));let l;for(l=0;l<r.length;l+=1){const m=Z(s,r,l);a[l]?a[l].p(m,n):(a[l]=Q(m),a[l].c(),a[l].m(e,i))}for(;l<a.length;l+=1)a[l].d(1);a.length=r.length}},d(s){s&&h(e),H(a,s)}}}function Oe(o){let e,i;return{c(){e=p("img"),this.h()},l(t){e=_(t,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){q(e.src,i=y.img.src)||f(e,"src",i),f(e,"alt","Forms"),f(e,"class","block dark:hidden"),f(e,"width",y.img.w),f(e,"height",y.img.h)},m(t,c){g(t,e,c)},p:N,d(t){t&&h(e)}}}function Q(o){let e,i;return{c(){e=p("source"),this.h()},l(t){e=_(t,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){se(e,i=o[4])||f(e,"srcset",i),f(e,"type","image/"+o[3])},m(t,c){g(t,e,c)},p:N,d(t){t&&h(e)}}}function je(o){let e,i,t,c,r=j(Object.entries(x.sources)),a=[];for(let s=0;s<r.length;s+=1)a[s]=ee(W(o,r,s));return{c(){e=p("picture");for(let s=0;s<a.length;s+=1)a[s].c();i=$(),t=p("img"),this.h()},l(s){e=_(s,"PICTURE",{});var n=w(e);for(let l=0;l<a.length;l+=1)a[l].l(n);i=k(n),t=_(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),n.forEach(h),this.h()},h(){q(t.src,c=x.img.src)||f(t,"src",c),f(t,"alt","Forms"),f(t,"class","hidden dark:block"),f(t,"width",x.img.w),f(t,"height",x.img.h)},m(s,n){g(s,e,n);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);b(e,i),b(e,t)},p(s,n){if(n&0){r=j(Object.entries(x.sources));let l;for(l=0;l<r.length;l+=1){const m=W(s,r,l);a[l]?a[l].p(m,n):(a[l]=ee(m),a[l].c(),a[l].m(e,i))}for(;l<a.length;l+=1)a[l].d(1);a.length=r.length}},d(s){s&&h(e),H(a,s)}}}function Me(o){let e,i;return{c(){e=p("img"),this.h()},l(t){e=_(t,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){q(e.src,i=x.img.src)||f(e,"src",i),f(e,"alt","Forms"),f(e,"class","hidden dark:block"),f(e,"width",x.img.w),f(e,"height",x.img.h)},m(t,c){g(t,e,c)},p:N,d(t){t&&h(e)}}}function ee(o){let e,i;return{c(){e=p("source"),this.h()},l(t){e=_(t,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){se(e,i=o[4])||f(e,"srcset",i),f(e,"type","image/"+o[3])},m(t,c){g(t,e,c)},p:N,d(t){t&&h(e)}}}function Se(o){let e,i,t,c,r,a='<h2 class="text-2xl font-bold tracking-tight">Settings</h2> <p class="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>',s,n,l,m,E,R,B,I,D;function ne(u,d){return typeof y=="string"?Oe:De}let M=ne()(o);function ce(u,d){return typeof x=="string"?Me:je}let S=ce()(o);n=new Le({props:{class:"my-6"}}),R=new Ie({props:{items:o[0]}});const F=o[2].default,v=_e(F,o,o[1],null);return{c(){e=p("div"),M.c(),i=$(),S.c(),t=$(),c=p("div"),r=p("div"),r.innerHTML=a,s=$(),G(n.$$.fragment),l=$(),m=p("div"),E=p("aside"),G(R.$$.fragment),B=$(),I=p("div"),v&&v.c(),this.h()},l(u){e=_(u,"DIV",{class:!0});var d=w(e);M.l(d),i=k(d),S.l(d),d.forEach(h),t=k(u),c=_(u,"DIV",{class:!0});var O=w(c);r=_(O,"DIV",{class:!0,"data-svelte-h":!0}),ve(r)!=="svelte-qsxjsu"&&(r.innerHTML=a),s=k(O),P(n.$$.fragment,O),l=k(O),m=_(O,"DIV",{class:!0});var V=w(m);E=_(V,"ASIDE",{class:!0});var K=w(E);P(R.$$.fragment,K),K.forEach(h),B=k(V),I=_(V,"DIV",{class:!0});var X=w(I);v&&v.l(X),X.forEach(h),V.forEach(h),O.forEach(h),this.h()},h(){f(e,"class","md:hidden"),f(r,"class","space-y-0.5"),f(E,"class","-mx-4 lg:w-1/5"),f(I,"class","flex-1 lg:max-w-2xl"),f(m,"class","flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0"),f(c,"class","hidden space-y-6 p-10 pb-16 md:block")},m(u,d){g(u,e,d),M.m(e,null),b(e,i),S.m(e,null),g(u,t,d),g(u,c,d),b(c,r),b(c,s),A(n,c,null),b(c,l),b(c,m),b(m,E),A(R,E,null),b(m,B),b(m,I),v&&v.m(I,null),D=!0},p(u,[d]){M.p(u,d),S.p(u,d),v&&v.p&&(!D||d&2)&&pe(v,F,u,u[1],D?ge(F,u[1],d,null):de(u[1]),null)},i(u){D||(L(n.$$.fragment,u),L(R.$$.fragment,u),L(v,u),D=!0)},o(u){U(n.$$.fragment,u),U(R.$$.fragment,u),U(v,u),D=!1},d(u){u&&(h(e),h(t),h(c)),M.d(),S.d(),T(n),T(R),v&&v.d(u)}}}function Ve(o,e,i){let{$$slots:t={},$$scope:c}=e;const r=[{title:"Profile",href:"/examples/forms"},{title:"Account",href:"/examples/forms/account"},{title:"Appearance",href:"/examples/forms/appearance"},{title:"Notifications",href:"/examples/forms/notifications"},{title:"Display",href:"/examples/forms/display"}];return o.$$set=a=>{"$$scope"in a&&i(1,c=a.$$scope)},[r,c,t]}class Ye extends re{constructor(e){super(),le(this,e,Ve,Se,te,{})}}export{Ye as component};
