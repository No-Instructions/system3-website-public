import{s as N,d as r,n as I,i as m,$ as U,P as x,a0 as M,p as b,c as S,e as E,g as B,h as P,j as L,f as C,t as G}from"./scheduler.D_DiFEDa.js";import{S as Q,i as W,d as f,t as d,a as _,m as y,c as g,b as h}from"./index.uqldPLAT.js";import{B as X}from"./blueprint.BVrJzGxq.js";import"./form-demo.I_FsgVaC.js";import"./index.9B820uFl.js";import"./utils.C8VhKZ24.js";import{C as Y}from"./component-preview.DKoeck7Z.js";import"./entry.DtDmLyLa.js";import{M as Z}from"./manual-install.C0FtD4-J.js";import"./config.WvMhJhFT.js";import"./ctx.gjZ7gqPd.js";import"./index.DDMNy4X9.js";import"./root.svelte_svelte_type_style_lang.CmWxcNQk.js";import{P as R}from"./pre.DuYz_Z_K.js";import{H as z}from"./h2.x_ErggQC.js";import{O as A}from"./ol.m4XuEsKj.js";import{L as J}from"./li.DkECmDn_.js";function ss(F){let s,t=`<code data-language="svelte" data-theme="Lambda Studio — Blackout" style="display: grid;"><span data-line=""><span style="color:#FFF8">&lt;</span><span style="color:#FFF">script lang</span><span style="color:#FFF8">=</span><span style="color:#FFF8">"ts"</span><span style="color:#FFF8">></span></span>
<span data-line=""><span style="color:#FFF8">  import</span><span style="color:#FFF8"> &#123;</span><span style="color:#FFF"> onMount </span><span style="color:#FFF8">&#125;</span><span style="color:#FFF8"> from</span><span style="color:#FFF8"> "svelte"</span><span style="color:#FFF8">;</span></span>
<span data-line=""><span style="color:#FFF8">  import</span><span style="color:#FFF8"> &#123;</span><span style="color:#FFF"> Progress </span><span style="color:#FFF8">&#125;</span><span style="color:#FFF8"> from</span><span style="color:#FFF8"> "$lib/components/ui/progress/index.js"</span><span style="color:#FFF8">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color:#FFF8">  let</span><span style="color:#FFF"> value </span><span style="color:#FFF8">=</span><span style="color:#FFF8"> 13;</span></span>
<span data-line=""><span style="color:#FFF">  onMount</span><span style="color:#FFF8">(()</span><span style="color:#FFF8"> =></span><span style="color:#FFF8"> &#123;</span></span>
<span data-line=""><span style="color:#FFF8">    const</span><span style="color:#FFF"> timer </span><span style="color:#FFF8">=</span><span style="color:#FFF"> setTimeout</span><span style="color:#FFF8">(()</span><span style="color:#FFF8"> =></span><span style="color:#FFF8"> (</span><span style="color:#FFF">value </span><span style="color:#FFF8">=</span><span style="color:#FFF8"> 66),</span><span style="color:#FFF8"> 500);</span></span>
<span data-line=""><span style="color:#FFF8">    return</span><span style="color:#FFF8"> ()</span><span style="color:#FFF8"> =></span><span style="color:#FFF"> clearTimeout</span><span style="color:#FFF8">(</span><span style="color:#FFF">timer</span><span style="color:#FFF8">);</span></span>
<span data-line=""><span style="color:#FFF8">  &#125;);</span></span>
<span data-line=""><span style="color:#FFF8">&lt;/</span><span style="color:#FFF">script</span><span style="color:#FFF8">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color:#FFF8">&lt;</span><span style="color:#FFF">Progress &#123;value&#125; max</span><span style="color:#FFF8">=&#123;100&#125;</span><span style="color:#FFF"> class</span><span style="color:#FFF8">=</span><span style="color:#FFF8">"w-[60%]"</span><span style="color:#FFF8"> /></span></span></code>`,a;return{c(){s=new M(!1),a=x(),this.h()},l(e){s=U(e,!1),a=x(),this.h()},h(){s.a=a},m(e,l){s.m(t,e,l),m(e,a,l)},p:I,d(e){e&&(r(a),s.d())}}}function as(F){let s,t=`<code data-language="svelte" data-theme="Lambda Studio — Blackout" style="display: grid;"><span data-line=""><span style="color:#FFF8">&lt;</span><span style="color:#FFF">script lang</span><span style="color:#FFF8">=</span><span style="color:#FFF8">"ts"</span><span style="color:#FFF8">></span></span>
<span data-line=""><span style="color:#FFF8">  import</span><span style="color:#FFF8"> &#123;</span><span style="color:#FFF"> onMount </span><span style="color:#FFF8">&#125;</span><span style="color:#FFF8"> from</span><span style="color:#FFF8"> "svelte"</span><span style="color:#FFF8">;</span></span>
<span data-line=""><span style="color:#FFF8">  import</span><span style="color:#FFF8"> &#123;</span><span style="color:#FFF"> Progress </span><span style="color:#FFF8">&#125;</span><span style="color:#FFF8"> from</span><span style="color:#FFF8"> "$lib/components/ui/progress/index.js"</span><span style="color:#FFF8">;</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color:#FFF8">  let</span><span style="color:#FFF"> value </span><span style="color:#FFF8">=</span><span style="color:#FFF8"> 13;</span></span>
<span data-line=""><span style="color:#FFF">  onMount</span><span style="color:#FFF8">(()</span><span style="color:#FFF8"> =></span><span style="color:#FFF8"> &#123;</span></span>
<span data-line=""><span style="color:#FFF8">    const</span><span style="color:#FFF"> timer </span><span style="color:#FFF8">=</span><span style="color:#FFF"> setTimeout</span><span style="color:#FFF8">(()</span><span style="color:#FFF8"> =></span><span style="color:#FFF8"> (</span><span style="color:#FFF">value </span><span style="color:#FFF8">=</span><span style="color:#FFF8"> 66),</span><span style="color:#FFF8"> 500);</span></span>
<span data-line=""><span style="color:#FFF8">    return</span><span style="color:#FFF8"> ()</span><span style="color:#FFF8"> =></span><span style="color:#FFF"> clearTimeout</span><span style="color:#FFF8">(</span><span style="color:#FFF">timer</span><span style="color:#FFF8">);</span></span>
<span data-line=""><span style="color:#FFF8">  &#125;);</span></span>
<span data-line=""><span style="color:#FFF8">&lt;/</span><span style="color:#FFF">script</span><span style="color:#FFF8">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color:#FFF8">&lt;</span><span style="color:#FFF">Progress &#123;value&#125; max</span><span style="color:#FFF8">=&#123;100&#125;</span><span style="color:#FFF"> class</span><span style="color:#FFF8">=</span><span style="color:#FFF8">"w-[60%]"</span><span style="color:#FFF8"> /></span></span></code>`,a;return{c(){s=new M(!1),a=x(),this.h()},l(e){s=U(e,!1),a=x(),this.h()},h(){s.a=a},m(e,l){s.m(t,e,l),m(e,a,l)},p:I,d(e){e&&(r(a),s.d())}}}function es(F){let s,t,a,e,l,c,$;return t=new R({props:{class:"Lambda Studio — Blackout",tabindex:"0","data-language":"svelte","data-theme":"Lambda Studio — Blackout",$$slots:{default:[ss]},$$scope:{ctx:F}}}),e=new R({props:{class:"Lambda Studio — Blackout",tabindex:"0","data-language":"svelte","data-theme":"Lambda Studio — Blackout",$$slots:{default:[as]},$$scope:{ctx:F}}}),{c(){s=P("figure"),h(t.$$.fragment),a=P("figure"),h(e.$$.fragment),l=L(),c=P("div"),this.h()},l(n){s=S(n,"FIGURE",{__src__:!0,__style__:!0,class:!0,"data-rehype-pretty-code-figure":!0});var p=E(s);g(t.$$.fragment,p),p.forEach(r),a=S(n,"FIGURE",{__src__:!0,__style__:!0,class:!0,"data-rehype-pretty-code-figure":!0});var u=E(a);g(e.$$.fragment,u),u.forEach(r),l=B(n),c=S(n,"DIV",{}),E(c).forEach(r),this.h()},h(){b(s,"__src__","../src/lib/registry/new-york/example/progress-demo.svelte"),b(s,"__style__","new-york"),b(s,"class","code"),b(s,"data-rehype-pretty-code-figure",""),b(a,"__src__","../src/lib/registry/default/example/progress-demo.svelte"),b(a,"__style__","default"),b(a,"class","code"),b(a,"data-rehype-pretty-code-figure","")},m(n,p){m(n,s,p),y(t,s,null),m(n,a,p),y(e,a,null),m(n,l,p),m(n,c,p),$=!0},p(n,p){const u={};p&1&&(u.$$scope={dirty:p,ctx:n}),t.$set(u);const w={};p&1&&(w.$$scope={dirty:p,ctx:n}),e.$set(w)},i(n){$||(_(t.$$.fragment,n),_(e.$$.fragment,n),$=!0)},o(n){d(t.$$.fragment,n),d(e.$$.fragment,n),$=!1},d(n){n&&(r(s),r(a),r(l),r(c)),f(t),f(e)}}}function ts(F){let s;return{c(){s=G("Installation")},l(t){s=C(t,"Installation")},m(t,a){m(t,s,a)},d(t){t&&r(s)}}}function ns(F){let s,t='<code data-language="bash" data-theme="Lambda Studio — Blackout" style="display: grid;"><span data-line=""><span style="color:#FFF;font-weight:bold">npx</span><span style="color:#FFF8"> shadcn-svelte@latest</span><span style="color:#FFF8"> add</span><span style="color:#FFF8"> progress</span></span></code>',a;return{c(){s=new M(!1),a=x(),this.h()},l(e){s=U(e,!1),a=x(),this.h()},h(){s.a=a},m(e,l){s.m(t,e,l),m(e,a,l)},p:I,d(e){e&&(r(a),s.d())}}}function ls(F){let s,t,a="<code>bits-ui</code>",e;return{c(){s=G("Install "),t=new M(!1),e=G(":"),this.h()},l(l){s=C(l,"Install "),t=U(l,!1),e=C(l,":"),this.h()},h(){t.a=e},m(l,c){m(l,s,c),t.m(a,l,c),m(l,e,c)},p:I,d(l){l&&(r(s),t.d(),r(e))}}}function os(F){let s,t;return s=new J({props:{$$slots:{default:[ls]},$$scope:{ctx:F}}}),{c(){h(s.$$.fragment)},l(a){g(s.$$.fragment,a)},m(a,e){y(s,a,e),t=!0},p(a,e){const l={};e&1&&(l.$$scope={dirty:e,ctx:a}),s.$set(l)},i(a){t||(_(s.$$.fragment,a),t=!0)},o(a){d(s.$$.fragment,a),t=!1},d(a){f(s,a)}}}function ps(F){let s,t='<code data-language="bash" data-theme="Lambda Studio — Blackout" style="display: grid;"><span data-line=""><span style="color:#FFF;font-weight:bold">npm</span><span style="color:#FFF8"> install</span><span style="color:#FFF8"> bits-ui</span></span></code>',a;return{c(){s=new M(!1),a=x(),this.h()},l(e){s=U(e,!1),a=x(),this.h()},h(){s.a=a},m(e,l){s.m(t,e,l),m(e,a,l)},p:I,d(e){e&&(r(a),s.d())}}}function rs(F){let s;return{c(){s=G("Copy and paste the component source files linked at the top of this page into your project.")},l(t){s=C(t,"Copy and paste the component source files linked at the top of this page into your project.")},m(t,a){m(t,s,a)},d(t){t&&r(s)}}}function Fs(F){let s,t;return s=new J({props:{$$slots:{default:[rs]},$$scope:{ctx:F}}}),{c(){h(s.$$.fragment)},l(a){g(s.$$.fragment,a)},m(a,e){y(s,a,e),t=!0},p(a,e){const l={};e&1&&(l.$$scope={dirty:e,ctx:a}),s.$set(l)},i(a){t||(_(s.$$.fragment,a),t=!0)},o(a){d(s.$$.fragment,a),t=!1},d(a){f(s,a)}}}function cs(F){let s,t,a,e,l,c,$;return s=new A({props:{$$slots:{default:[os]},$$scope:{ctx:F}}}),e=new R({props:{class:"Lambda Studio — Blackout",tabindex:"0","data-language":"bash","data-theme":"Lambda Studio — Blackout",$$slots:{default:[ps]},$$scope:{ctx:F}}}),c=new A({props:{start:"2",$$slots:{default:[Fs]},$$scope:{ctx:F}}}),{c(){h(s.$$.fragment),t=L(),a=P("figure"),h(e.$$.fragment),l=L(),h(c.$$.fragment),this.h()},l(n){g(s.$$.fragment,n),t=B(n),a=S(n,"FIGURE",{"data-rehype-pretty-code-figure":!0});var p=E(a);g(e.$$.fragment,p),p.forEach(r),l=B(n),g(c.$$.fragment,n),this.h()},h(){b(a,"data-rehype-pretty-code-figure","")},m(n,p){y(s,n,p),m(n,t,p),m(n,a,p),y(e,a,null),m(n,l,p),y(c,n,p),$=!0},p(n,p){const u={};p&1&&(u.$$scope={dirty:p,ctx:n}),s.$set(u);const w={};p&1&&(w.$$scope={dirty:p,ctx:n}),e.$set(w);const v={};p&1&&(v.$$scope={dirty:p,ctx:n}),c.$set(v)},i(n){$||(_(s.$$.fragment,n),_(e.$$.fragment,n),_(c.$$.fragment,n),$=!0)},o(n){d(s.$$.fragment,n),d(e.$$.fragment,n),d(c.$$.fragment,n),$=!1},d(n){n&&(r(t),r(a),r(l)),f(s,n),f(e),f(c,n)}}}function is(F){let s;return{c(){s=G("Usage")},l(t){s=C(t,"Usage")},m(t,a){m(t,s,a)},d(t){t&&r(s)}}}function ms(F){let s,t=`<code data-language="svelte" data-theme="Lambda Studio — Blackout" style="display: grid;"><span data-line=""><span style="color:#FFF8">&lt;</span><span style="color:#FFF">script lang</span><span style="color:#FFF8">=</span><span style="color:#FFF8">"ts"</span><span style="color:#FFF8">></span></span>
<span data-line=""><span style="color:#FFF8">  import</span><span style="color:#FFF8"> &#123;</span><span style="color:#FFF"> Progress </span><span style="color:#FFF8">&#125;</span><span style="color:#FFF8"> from</span><span style="color:#FFF8"> "$lib/components/ui/progress"</span><span style="color:#FFF8">;</span></span>
<span data-line=""><span style="color:#FFF8">&lt;/</span><span style="color:#FFF">script</span><span style="color:#FFF8">></span></span>
<span data-line=""> </span>
<span data-line=""><span style="color:#FFF8">&lt;</span><span style="color:#FFF">Progress value</span><span style="color:#FFF8">=&#123;33&#125;</span><span style="color:#FFF8"> /></span></span></code>`,a;return{c(){s=new M(!1),a=x(),this.h()},l(e){s=U(e,!1),a=x(),this.h()},h(){s.a=a},m(e,l){s.m(t,e,l),m(e,a,l)},p:I,d(e){e&&(r(a),s.d())}}}function us(F){let s,t,a,e,l,c,$,n,p,u,w,v,k,T;return s=new Y({props:{name:"progress-demo",$$slots:{default:[es]},$$scope:{ctx:F}}}),a=new z({props:{id:"installation",$$slots:{default:[ts]},$$scope:{ctx:F}}}),c=new R({props:{class:"Lambda Studio — Blackout",tabindex:"0","data-language":"bash","data-theme":"Lambda Studio — Blackout",$$slots:{default:[ns]},$$scope:{ctx:F}}}),n=new Z({props:{$$slots:{default:[cs]},$$scope:{ctx:F}}}),u=new z({props:{id:"usage",$$slots:{default:[is]},$$scope:{ctx:F}}}),k=new R({props:{class:"Lambda Studio — Blackout",tabindex:"0","data-language":"svelte","data-theme":"Lambda Studio — Blackout",$$slots:{default:[ms]},$$scope:{ctx:F}}}),{c(){h(s.$$.fragment),t=L(),h(a.$$.fragment),e=L(),l=P("figure"),h(c.$$.fragment),$=L(),h(n.$$.fragment),p=L(),h(u.$$.fragment),w=L(),v=P("figure"),h(k.$$.fragment),this.h()},l(o){g(s.$$.fragment,o),t=B(o),g(a.$$.fragment,o),e=B(o),l=S(o,"FIGURE",{"data-rehype-pretty-code-figure":!0});var i=E(l);g(c.$$.fragment,i),i.forEach(r),$=B(o),g(n.$$.fragment,o),p=B(o),g(u.$$.fragment,o),w=B(o),v=S(o,"FIGURE",{"data-rehype-pretty-code-figure":!0});var j=E(v);g(k.$$.fragment,j),j.forEach(r),this.h()},h(){b(l,"data-rehype-pretty-code-figure",""),b(v,"data-rehype-pretty-code-figure","")},m(o,i){y(s,o,i),m(o,t,i),y(a,o,i),m(o,e,i),m(o,l,i),y(c,l,null),m(o,$,i),y(n,o,i),m(o,p,i),y(u,o,i),m(o,w,i),m(o,v,i),y(k,v,null),T=!0},p(o,i){const j={};i&1&&(j.$$scope={dirty:i,ctx:o}),s.$set(j);const H={};i&1&&(H.$$scope={dirty:i,ctx:o}),a.$set(H);const D={};i&1&&(D.$$scope={dirty:i,ctx:o}),c.$set(D);const O={};i&1&&(O.$$scope={dirty:i,ctx:o}),n.$set(O);const q={};i&1&&(q.$$scope={dirty:i,ctx:o}),u.$set(q);const V={};i&1&&(V.$$scope={dirty:i,ctx:o}),k.$set(V)},i(o){T||(_(s.$$.fragment,o),_(a.$$.fragment,o),_(c.$$.fragment,o),_(n.$$.fragment,o),_(u.$$.fragment,o),_(k.$$.fragment,o),T=!0)},o(o){d(s.$$.fragment,o),d(a.$$.fragment,o),d(c.$$.fragment,o),d(n.$$.fragment,o),d(u.$$.fragment,o),d(k.$$.fragment,o),T=!1},d(o){o&&(r(t),r(e),r(l),r($),r(p),r(w),r(v)),f(s,o),f(a,o),f(c),f(n,o),f(u,o),f(k)}}}function $s(F){let s,t;return s=new X({props:{metadata:K,$$slots:{default:[us]},$$scope:{ctx:F}}}),{c(){h(s.$$.fragment)},l(a){g(s.$$.fragment,a)},m(a,e){y(s,a,e),t=!0},p(a,[e]){const l={};e&1&&(l.$$scope={dirty:e,ctx:a}),s.$set(l)},i(a){t||(_(s.$$.fragment,a),t=!0)},o(a){d(s.$$.fragment,a),t=!1},d(a){f(s,a)}}}const K={title:"Progress",description:"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",component:!0,source:"https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/lib/registry/default/ui/progress",bits:"https://www.bits-ui.com/docs/components/progress"},{title:Us,description:Ms,component:js,source:Cs,bits:Gs}=K;class Rs extends Q{constructor(s){super(),W(this,s,null,$s,N,{})}}export{Rs as default,K as metadata};
