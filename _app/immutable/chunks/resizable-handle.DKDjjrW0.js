import{s as L,d as _,n as x,i as d,p as w,c as H,q as S,h as C,g as b,j as z}from"./scheduler.D_DiFEDa.js";import{S as M,i as R,d as f,t as $,a as p,m,c as u,b as c}from"./index.uqldPLAT.js";import{P as v}from"./pane-resizer.BBTb2S2G.js";import{R as T,a as j}from"./resizable-pane-group.BBn_1XNR.js";function q(i){let e,a='<span class="font-semibold">Sidebar</span>';return{c(){e=C("div"),e.innerHTML=a,this.h()},l(t){e=H(t,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-yxq411"&&(e.innerHTML=a),this.h()},h(){w(e,"class","flex h-full items-center justify-center p-6")},m(t,n){d(t,e,n)},p:x,d(t){t&&_(e)}}}function D(i){let e,a='<span class="font-semibold">Content</span>';return{c(){e=C("div"),e.innerHTML=a,this.h()},l(t){e=H(t,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-et15fw"&&(e.innerHTML=a),this.h()},h(){w(e,"class","flex h-full items-center justify-center p-6")},m(t,n){d(t,e,n)},p:x,d(t){t&&_(e)}}}function I(i){let e,a,t,n,r,o;return e=new v({props:{defaultSize:25,$$slots:{default:[q]},$$scope:{ctx:i}}}),t=new j({props:{withHandle:!0}}),r=new v({props:{defaultSize:75,$$slots:{default:[D]},$$scope:{ctx:i}}}),{c(){c(e.$$.fragment),a=z(),c(t.$$.fragment),n=z(),c(r.$$.fragment)},l(s){u(e.$$.fragment,s),a=b(s),u(t.$$.fragment,s),n=b(s),u(r.$$.fragment,s)},m(s,l){m(e,s,l),d(s,a,l),m(t,s,l),d(s,n,l),m(r,s,l),o=!0},p(s,l){const h={};l&1&&(h.$$scope={dirty:l,ctx:s}),e.$set(h);const g={};l&1&&(g.$$scope={dirty:l,ctx:s}),r.$set(g)},i(s){o||(p(e.$$.fragment,s),p(t.$$.fragment,s),p(r.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),$(t.$$.fragment,s),$(r.$$.fragment,s),o=!1},d(s){s&&(_(a),_(n)),f(e,s),f(t,s),f(r,s)}}}function P(i){let e,a;return e=new T({props:{direction:"horizontal",class:"min-h-[200px] max-w-md rounded-lg border",$$slots:{default:[I]},$$scope:{ctx:i}}}),{c(){c(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){m(e,t,n),a=!0},p(t,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){$(e.$$.fragment,t),a=!1},d(t){f(e,t)}}}class B extends M{constructor(e){super(),R(this,e,null,P,L,{})}}export{B as default};
