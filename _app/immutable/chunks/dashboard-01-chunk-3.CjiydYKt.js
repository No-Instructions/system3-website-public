import{s as b,d as f,i as $,f as k,t as A,g as d,j as g,n as q,p as h,c as C,q as v,h as w}from"./scheduler.D_DiFEDa.js";import{S as j,i as D,d as l,t as m,a as i,m as u,c as p,b as _}from"./index.uqldPLAT.js";import{A as N}from"./activity.CuKqz8E5.js";import{C as S}from"./card.Chq66ear.js";import{C as y}from"./card-content.CwXGFnWn.js";import"./utils.C8VhKZ24.js";import{C as I,a as P}from"./card-title.DuP5-jiC.js";function V(o){let e;return{c(){e=A("Active Now")},l(r){e=k(r,"Active Now")},m(r,s){$(r,e,s)},d(r){r&&f(e)}}}function z(o){let e,r,s,n;return e=new P({props:{class:"text-sm font-medium",$$slots:{default:[V]},$$scope:{ctx:o}}}),s=new N({props:{class:"h-4 w-4 text-muted-foreground"}}),{c(){_(e.$$.fragment),r=g(),_(s.$$.fragment)},l(t){p(e.$$.fragment,t),r=d(t),p(s.$$.fragment,t)},m(t,a){u(e,t,a),$(t,r,a),u(s,t,a),n=!0},p(t,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:t}),e.$set(c)},i(t){n||(i(e.$$.fragment,t),i(s.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),m(s.$$.fragment,t),n=!1},d(t){t&&f(r),l(e,t),l(s,t)}}}function B(o){let e,r="+573",s,n,t="+201 since last hour";return{c(){e=w("div"),e.textContent=r,s=g(),n=w("p"),n.textContent=t,this.h()},l(a){e=C(a,"DIV",{class:!0,"data-svelte-h":!0}),v(e)!=="svelte-wkspeq"&&(e.textContent=r),s=d(a),n=C(a,"P",{class:!0,"data-svelte-h":!0}),v(n)!=="svelte-1mic6sp"&&(n.textContent=t),this.h()},h(){h(e,"class","text-2xl font-bold"),h(n,"class","text-xs text-muted-foreground")},m(a,c){$(a,e,c),$(a,s,c),$(a,n,c)},p:q,d(a){a&&(f(e),f(s),f(n))}}}function E(o){let e,r,s,n;return e=new I({props:{class:"flex flex-row items-center justify-between space-y-0 pb-2",$$slots:{default:[z]},$$scope:{ctx:o}}}),s=new y({props:{$$slots:{default:[B]},$$scope:{ctx:o}}}),{c(){_(e.$$.fragment),r=g(),_(s.$$.fragment)},l(t){p(e.$$.fragment,t),r=d(t),p(s.$$.fragment,t)},m(t,a){u(e,t,a),$(t,r,a),u(s,t,a),n=!0},p(t,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:t}),e.$set(c);const x={};a&1&&(x.$$scope={dirty:a,ctx:t}),s.$set(x)},i(t){n||(i(e.$$.fragment,t),i(s.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),m(s.$$.fragment,t),n=!1},d(t){t&&f(r),l(e,t),l(s,t)}}}function F(o){let e,r;return e=new S({props:{"data-x-chunk-name":"dashboard-01-chunk-3","data-x-chunk-description":"A card showing the total active users and the percentage difference from last hour.",$$slots:{default:[E]},$$scope:{ctx:o}}}),{c(){_(e.$$.fragment)},l(s){p(e.$$.fragment,s)},m(s,n){u(e,s,n),r=!0},p(s,[n]){const t={};n&1&&(t.$$scope={dirty:n,ctx:s}),e.$set(t)},i(s){r||(i(e.$$.fragment,s),r=!0)},o(s){m(e.$$.fragment,s),r=!1},d(s){l(e,s)}}}class Q extends j{constructor(e){super(),D(this,e,null,F,b,{})}}export{Q as default};