import{s as S,d as _,n as w,i as g,p as x,c as T,q as j,h as H,g as h,j as z}from"./scheduler.D_DiFEDa.js";import{S as C,i as R,d as i,t as o,a as p,m,c as u,b as c}from"./index.uqldPLAT.js";import{P as v}from"./pane-resizer.BBTb2S2G.js";import{R as L,a as M}from"./resizable-pane-group.BBn_1XNR.js";function D($){let e,n='<span class="font-semibold">One</span>';return{c(){e=H("div"),e.innerHTML=n,this.h()},l(t){e=T(t,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-16npcke"&&(e.innerHTML=n),this.h()},h(){x(e,"class","flex h-[200px] items-center justify-center p-6")},m(t,a){g(t,e,a)},p:w,d(t){t&&_(e)}}}function I($){let e,n='<span class="font-semibold">Two</span>';return{c(){e=H("div"),e.innerHTML=n,this.h()},l(t){e=T(t,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-j4am0j"&&(e.innerHTML=n),this.h()},h(){x(e,"class","flex h-full items-center justify-center p-6")},m(t,a){g(t,e,a)},p:w,d(t){t&&_(e)}}}function V($){let e,n='<span class="font-semibold">Three</span>';return{c(){e=H("div"),e.innerHTML=n,this.h()},l(t){e=T(t,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-3ma925"&&(e.innerHTML=n),this.h()},h(){x(e,"class","flex h-full items-center justify-center p-6")},m(t,a){g(t,e,a)},p:w,d(t){t&&_(e)}}}function q($){let e,n,t,a,r,f;return e=new v({props:{defaultSize:25,$$slots:{default:[I]},$$scope:{ctx:$}}}),t=new M({}),r=new v({props:{defaultSize:75,$$slots:{default:[V]},$$scope:{ctx:$}}}),{c(){c(e.$$.fragment),n=z(),c(t.$$.fragment),a=z(),c(r.$$.fragment)},l(s){u(e.$$.fragment,s),n=h(s),u(t.$$.fragment,s),a=h(s),u(r.$$.fragment,s)},m(s,l){m(e,s,l),g(s,n,l),m(t,s,l),g(s,a,l),m(r,s,l),f=!0},p(s,l){const d={};l&1&&(d.$$scope={dirty:l,ctx:s}),e.$set(d);const b={};l&1&&(b.$$scope={dirty:l,ctx:s}),r.$set(b)},i(s){f||(p(e.$$.fragment,s),p(t.$$.fragment,s),p(r.$$.fragment,s),f=!0)},o(s){o(e.$$.fragment,s),o(t.$$.fragment,s),o(r.$$.fragment,s),f=!1},d(s){s&&(_(n),_(a)),i(e,s),i(t,s),i(r,s)}}}function P($){let e,n;return e=new L({props:{direction:"vertical",$$slots:{default:[q]},$$scope:{ctx:$}}}),{c(){c(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const r={};a&1&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){o(e.$$.fragment,t),n=!1},d(t){i(e,t)}}}function k($){let e,n,t,a,r,f;return e=new v({props:{defaultSize:50,$$slots:{default:[D]},$$scope:{ctx:$}}}),t=new M({}),r=new v({props:{defaultSize:50,$$slots:{default:[P]},$$scope:{ctx:$}}}),{c(){c(e.$$.fragment),n=z(),c(t.$$.fragment),a=z(),c(r.$$.fragment)},l(s){u(e.$$.fragment,s),n=h(s),u(t.$$.fragment,s),a=h(s),u(r.$$.fragment,s)},m(s,l){m(e,s,l),g(s,n,l),m(t,s,l),g(s,a,l),m(r,s,l),f=!0},p(s,l){const d={};l&1&&(d.$$scope={dirty:l,ctx:s}),e.$set(d);const b={};l&1&&(b.$$scope={dirty:l,ctx:s}),r.$set(b)},i(s){f||(p(e.$$.fragment,s),p(t.$$.fragment,s),p(r.$$.fragment,s),f=!0)},o(s){o(e.$$.fragment,s),o(t.$$.fragment,s),o(r.$$.fragment,s),f=!1},d(s){s&&(_(n),_(a)),i(e,s),i(t,s),i(r,s)}}}function O($){let e,n;return e=new L({props:{direction:"horizontal",class:"max-w-md rounded-lg border",$$slots:{default:[k]},$$scope:{ctx:$}}}),{c(){c(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,[a]){const r={};a&1&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){o(e.$$.fragment,t),n=!1},d(t){i(e,t)}}}class G extends C{constructor(e){super(),R(this,e,null,O,S,{})}}export{G as default};
