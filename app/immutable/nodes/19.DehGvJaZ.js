import{s as fe,d as p,i as x,f as X,t as Q,z as Z,A as re,b as d,C as ve,ae as $e,p as u,c as _,e as U,g as E,q as N,h as v,j as D,D as se,E as be,n as J,a2 as K,a9 as me,Z as he}from"../chunks/scheduler.D_DiFEDa.js";import{S as pe,i as de,d as j,t as y,a as k,m as V,c as B,b as O,g as ge,f as _e}from"../chunks/index.uqldPLAT.js";import{e as W}from"../chunks/each.8prNeyls.js";import{g as we}from"../chunks/spread.CgU5AtxT.js";import"../chunks/form-demo.CdCUS8IN.js";import"../chunks/index.C7oMflsj.js";import{c as ie}from"../chunks/utils.DREkexI4.js";import{I as ee}from"../chunks/index.9pmqVC2f.js";import"../chunks/config.RmrLwRmw.js";import"../chunks/entry.BsU3B_FI.js";import{I as ke}from"../chunks/input.Y75M_gGB.js";import{L as xe}from"../chunks/label.BUvUOrDH.js";import"../chunks/ctx.umHR9d8j.js";import"../chunks/index.LrWe5HSb.js";import"../chunks/root.svelte_svelte_type_style_lang.BW7dnU17.js";import{B as ae}from"../chunks/button.B84cRB6J.js";import{B as ye}from"../chunks/index.DSxrYAwp.js";const Le=async()=>({title:"Authentication Example"}),st=Object.freeze(Object.defineProperty({__proto__:null,load:Le},Symbol.toStringTag,{value:"Module"}));function Ie(c){let e;return{c(){e=Q("Email")},l(r){e=X(r,"Email")},m(r,t){x(r,e,t)},d(r){r&&p(e)}}}function ne(c){let e,r;return e=new ee.spinner({props:{class:"mr-2 h-4 w-4 animate-spin"}}),{c(){O(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){V(e,t,s),r=!0},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Ee(c){let e,r,t=c[1]&&ne();return{c(){t&&t.c(),e=Q(`
				Sign In with Email`)},l(s){t&&t.l(s),e=X(s,`
				Sign In with Email`)},m(s,o){t&&t.m(s,o),x(s,e,o),r=!0},p(s,o){s[1]?t?o&2&&k(t,1):(t=ne(),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(ge(),y(t,1,1,()=>{t=null}),_e())},i(s){r||(k(t),r=!0)},o(s){y(t),r=!1},d(s){s&&p(e),t&&t.d(s)}}}function De(c){let e,r;return e=new ee.gitHub({props:{class:"mr-2 h-4 w-4"}}),{c(){O(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){V(e,t,s),r=!0},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Me(c){let e,r;return e=new ee.spinner({props:{class:"mr-2 h-4 w-4 animate-spin"}}),{c(){O(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){V(e,t,s),r=!0},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Re(c){let e,r,t,s;const o=[Me,De],n=[];function a(l,i){return l[1]?0:1}return e=a(c),r=n[e]=o[e](c),{c(){r.c(),t=Q(`
		GitHub`)},l(l){r.l(l),t=X(l,`
		GitHub`)},m(l,i){n[e].m(l,i),x(l,t,i),s=!0},p(l,i){let g=e;e=a(l),e!==g&&(ge(),y(n[g],1,1,()=>{n[g]=null}),_e(),r=n[e],r||(r=n[e]=o[e](l),r.c()),k(r,1),r.m(t.parentNode,t))},i(l){s||(k(r),s=!0)},o(l){y(r),s=!1},d(l){l&&p(t),n[e].d(l)}}}function Ue(c){let e,r,t,s,o,n,a,l,i,g,$,R='<div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span></div> <div class="relative flex justify-center text-xs uppercase"><span class="bg-background px-2 text-muted-foreground">Or continue with</span></div>',q,L,I,A,M,Y;o=new xe({props:{class:"sr-only",for:"email",$$slots:{default:[Ie]},$$scope:{ctx:c}}}),a=new ke({props:{id:"email",placeholder:"name@example.com",type:"email",autocapitalize:"none",autocomplete:"email",autocorrect:"off",disabled:c[1]}}),i=new ae({props:{type:"submit",disabled:c[1],$$slots:{default:[Ee]},$$scope:{ctx:c}}}),L=new ae({props:{variant:"outline",type:"button",disabled:c[1],$$slots:{default:[Re]},$$scope:{ctx:c}}});let P=[{class:I=ie("grid gap-6",c[0])},c[3]],z={};for(let f=0;f<P.length;f+=1)z=Z(z,P[f]);return{c(){e=v("div"),r=v("form"),t=v("div"),s=v("div"),O(o.$$.fragment),n=D(),O(a.$$.fragment),l=D(),O(i.$$.fragment),g=D(),$=v("div"),$.innerHTML=R,q=D(),O(L.$$.fragment),this.h()},l(f){e=_(f,"DIV",{class:!0});var m=U(e);r=_(m,"FORM",{});var G=U(r);t=_(G,"DIV",{class:!0});var S=U(t);s=_(S,"DIV",{class:!0});var w=U(s);B(o.$$.fragment,w),n=E(w),B(a.$$.fragment,w),w.forEach(p),l=E(S),B(i.$$.fragment,S),S.forEach(p),G.forEach(p),g=E(m),$=_(m,"DIV",{class:!0,"data-svelte-h":!0}),N($)!=="svelte-19xf8ns"&&($.innerHTML=R),q=E(m),B(L.$$.fragment,m),m.forEach(p),this.h()},h(){u(s,"class","grid gap-1"),u(t,"class","grid gap-2"),u($,"class","relative"),re(e,z)},m(f,m){x(f,e,m),d(e,r),d(r,t),d(t,s),V(o,s,null),d(s,n),V(a,s,null),d(t,l),V(i,t,null),d(e,g),d(e,$),d(e,q),V(L,e,null),A=!0,M||(Y=ve(r,"submit",$e(c[2])),M=!0)},p(f,[m]){const G={};m&16&&(G.$$scope={dirty:m,ctx:f}),o.$set(G);const S={};m&2&&(S.disabled=f[1]),a.$set(S);const w={};m&2&&(w.disabled=f[1]),m&18&&(w.$$scope={dirty:m,ctx:f}),i.$set(w);const h={};m&2&&(h.disabled=f[1]),m&18&&(h.$$scope={dirty:m,ctx:f}),L.$set(h),re(e,z=we(P,[(!A||m&1&&I!==(I=ie("grid gap-6",f[0])))&&{class:I},m&8&&f[3]]))},i(f){A||(k(o.$$.fragment,f),k(a.$$.fragment,f),k(i.$$.fragment,f),k(L.$$.fragment,f),A=!0)},o(f){y(o.$$.fragment,f),y(a.$$.fragment,f),y(i.$$.fragment,f),y(L.$$.fragment,f),A=!1},d(f){f&&p(e),j(o),j(a),j(i),j(L),M=!1,Y()}}}function Ae(c,e,r){const t=["class"];let s=se(e,t),{class:o=void 0}=e,n=!1;async function a(){r(1,n=!0),setTimeout(()=>{r(1,n=!1)},3e3)}return c.$$set=l=>{e=Z(Z({},e),be(l)),r(3,s=se(e,t)),"class"in l&&r(0,o=l.class)},[o,n,a,s]}class He extends pe{constructor(e){super(),de(this,e,Ae,Ue,fe,{class:0})}}const C={sources:{avif:""+new URL("../assets/authentication-light.DBgGV2wt.avif",import.meta.url).href+" 1668w, "+new URL("../assets/authentication-light.Bx6YcncM.avif",import.meta.url).href+" 3336w",webp:""+new URL("../assets/authentication-light.CpprP8KY.webp",import.meta.url).href+" 1668w, "+new URL("../assets/authentication-light.B0Ll8Mpy.webp",import.meta.url).href+" 3336w",png:""+new URL("../assets/authentication-light.C7tFi-57.png",import.meta.url).href+" 1668w, "+new URL("../assets/authentication-light.A0-pAkxQ.png",import.meta.url).href+" 3336w"},img:{src:""+new URL("../assets/authentication-light.A0-pAkxQ.png",import.meta.url).href,w:3336,h:2e3}},T={sources:{avif:""+new URL("../assets/authentication-dark.fOjocseW.avif",import.meta.url).href+" 1668w, "+new URL("../assets/authentication-dark.970rr92E.avif",import.meta.url).href+" 3336w",webp:""+new URL("../assets/authentication-dark.BWhuiFPb.webp",import.meta.url).href+" 1668w, "+new URL("../assets/authentication-dark.C7s4J4Gz.webp",import.meta.url).href+" 3336w",png:""+new URL("../assets/authentication-dark.rXiglMYP.png",import.meta.url).href+" 1668w, "+new URL("../assets/authentication-dark.DDFy0oXA.png",import.meta.url).href+" 3336w"},img:{src:""+new URL("../assets/authentication-dark.DDFy0oXA.png",import.meta.url).href,w:3336,h:2e3}};function le(c,e,r){const t=c.slice();return t[0]=e[r][0],t[1]=e[r][1],t}function ce(c,e,r){const t=c.slice();return t[0]=e[r][0],t[1]=e[r][1],t}function Ce(c){let e,r,t,s,o=W(Object.entries(C.sources)),n=[];for(let a=0;a<o.length;a+=1)n[a]=oe(ce(c,o,a));return{c(){e=v("picture");for(let a=0;a<n.length;a+=1)n[a].c();r=D(),t=v("img"),this.h()},l(a){e=_(a,"PICTURE",{});var l=U(e);for(let i=0;i<n.length;i+=1)n[i].l(l);r=E(l),t=_(l,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),l.forEach(p),this.h()},h(){K(t.src,s=C.img.src)||u(t,"src",s),u(t,"alt","Authentication"),u(t,"class","block dark:hidden"),u(t,"width",C.img.w),u(t,"height",C.img.h)},m(a,l){x(a,e,l);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null);d(e,r),d(e,t)},p(a,l){if(l&0){o=W(Object.entries(C.sources));let i;for(i=0;i<o.length;i+=1){const g=ce(a,o,i);n[i]?n[i].p(g,l):(n[i]=oe(g),n[i].c(),n[i].m(e,r))}for(;i<n.length;i+=1)n[i].d(1);n.length=o.length}},d(a){a&&p(e),he(n,a)}}}function Te(c){let e,r;return{c(){e=v("img"),this.h()},l(t){e=_(t,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){K(e.src,r=C.img.src)||u(e,"src",r),u(e,"alt","Authentication"),u(e,"class","block dark:hidden"),u(e,"width",C.img.w),u(e,"height",C.img.h)},m(t,s){x(t,e,s)},p:J,d(t){t&&p(e)}}}function oe(c){let e,r;return{c(){e=v("source"),this.h()},l(t){e=_(t,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){me(e,r=c[1])||u(e,"srcset",r),u(e,"type","image/"+c[0])},m(t,s){x(t,e,s)},p:J,d(t){t&&p(e)}}}function je(c){let e,r,t,s,o=W(Object.entries(T.sources)),n=[];for(let a=0;a<o.length;a+=1)n[a]=ue(le(c,o,a));return{c(){e=v("picture");for(let a=0;a<n.length;a+=1)n[a].c();r=D(),t=v("img"),this.h()},l(a){e=_(a,"PICTURE",{});var l=U(e);for(let i=0;i<n.length;i+=1)n[i].l(l);r=E(l),t=_(l,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),l.forEach(p),this.h()},h(){K(t.src,s=T.img.src)||u(t,"src",s),u(t,"alt","Authentication"),u(t,"class","hidden dark:block"),u(t,"width",T.img.w),u(t,"height",T.img.h)},m(a,l){x(a,e,l);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null);d(e,r),d(e,t)},p(a,l){if(l&0){o=W(Object.entries(T.sources));let i;for(i=0;i<o.length;i+=1){const g=le(a,o,i);n[i]?n[i].p(g,l):(n[i]=ue(g),n[i].c(),n[i].m(e,r))}for(;i<n.length;i+=1)n[i].d(1);n.length=o.length}},d(a){a&&p(e),he(n,a)}}}function Ve(c){let e,r;return{c(){e=v("img"),this.h()},l(t){e=_(t,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){K(e.src,r=T.img.src)||u(e,"src",r),u(e,"alt","Authentication"),u(e,"class","hidden dark:block"),u(e,"width",T.img.w),u(e,"height",T.img.h)},m(t,s){x(t,e,s)},p:J,d(t){t&&p(e)}}}function ue(c){let e,r;return{c(){e=v("source"),this.h()},l(t){e=_(t,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){me(e,r=c[1])||u(e,"srcset",r),u(e,"type","image/"+c[0])},m(t,s){x(t,e,s)},p:J,d(t){t&&p(e)}}}function Be(c){let e;return{c(){e=Q("Login")},l(r){e=X(r,"Login")},m(r,t){x(r,e,t)},d(r){r&&p(e)}}}function Oe(c){let e,r,t,s,o,n,a,l=`<div class="absolute inset-0 bg-cover" style="background-image: url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1376&amp;q=80);"></div> <div class="relative z-20 flex items-center text-lg font-medium">Acme Inc</div> <div class="relative z-20 mt-auto"><blockquote class="space-y-2"><p class="text-lg">“This library has saved me countless hours of work and helped me deliver
					stunning designs to my clients faster than ever before. Highly
					recommended!”</p> <footer class="text-sm">Sofia Davis</footer></blockquote></div>`,i,g,$,R,q='<h1 class="text-2xl font-semibold tracking-tight">Create an account</h1> <p class="text-sm text-muted-foreground">Enter your email below to create your account</p>',L,I,A,M,Y=`By clicking continue, you agree to our
				<a href="/terms" class="underline underline-offset-4 hover:text-primary">Terms of Service</a>
				and
				<a href="/privacy" class="underline underline-offset-4 hover:text-primary">Privacy Policy</a>
				.`,P;function z(h,b){return typeof C=="string"?Te:Ce}let m=z()(c);function G(h,b){return typeof T=="string"?Ve:je}let w=G()(c);return o=new ye({props:{href:"/examples/authentication",variant:"ghost",class:"absolute right-4 top-4 md:right-8 md:top-8",$$slots:{default:[Be]},$$scope:{ctx:c}}}),I=new He({}),{c(){e=v("div"),m.c(),r=D(),w.c(),t=D(),s=v("div"),O(o.$$.fragment),n=D(),a=v("div"),a.innerHTML=l,i=D(),g=v("div"),$=v("div"),R=v("div"),R.innerHTML=q,L=D(),O(I.$$.fragment),A=D(),M=v("p"),M.innerHTML=Y,this.h()},l(h){e=_(h,"DIV",{class:!0});var b=U(e);m.l(b),r=E(b),w.l(b),b.forEach(p),t=E(h),s=_(h,"DIV",{class:!0});var H=U(s);B(o.$$.fragment,H),n=E(H),a=_(H,"DIV",{class:!0,"data-svelte-h":!0}),N(a)!=="svelte-1g994up"&&(a.innerHTML=l),i=E(H),g=_(H,"DIV",{class:!0});var te=U(g);$=_(te,"DIV",{class:!0});var F=U($);R=_(F,"DIV",{class:!0,"data-svelte-h":!0}),N(R)!=="svelte-uu2jk5"&&(R.innerHTML=q),L=E(F),B(I.$$.fragment,F),A=E(F),M=_(F,"P",{class:!0,"data-svelte-h":!0}),N(M)!=="svelte-1pqdsfa"&&(M.innerHTML=Y),F.forEach(p),te.forEach(p),H.forEach(p),this.h()},h(){u(e,"class","md:hidden"),u(a,"class","relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"),u(R,"class","flex flex-col space-y-2 text-center"),u(M,"class","px-8 text-center text-sm text-muted-foreground"),u($,"class","mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"),u(g,"class","lg:p-8"),u(s,"class","container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0")},m(h,b){x(h,e,b),m.m(e,null),d(e,r),w.m(e,null),x(h,t,b),x(h,s,b),V(o,s,null),d(s,n),d(s,a),d(s,i),d(s,g),d(g,$),d($,R),d($,L),V(I,$,null),d($,A),d($,M),P=!0},p(h,[b]){m.p(h,b),w.p(h,b);const H={};b&64&&(H.$$scope={dirty:b,ctx:h}),o.$set(H)},i(h){P||(k(o.$$.fragment,h),k(I.$$.fragment,h),P=!0)},o(h){y(o.$$.fragment,h),y(I.$$.fragment,h),P=!1},d(h){h&&(p(e),p(t),p(s)),m.d(),w.d(),j(o),j(I)}}}class it extends pe{constructor(e){super(),de(this,e,null,Oe,fe,{})}}export{it as component,st as universal};
