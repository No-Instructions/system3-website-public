import{s as P,d,a as R,i as b,f as k,g as v,t as C,j as w,Z as A,P as S,T as q,U as E,L as F}from"./scheduler.D_DiFEDa.js";import{S as I,i as K,d as p,t as m,a as $,m as c,c as i,b as _,g as L,f as U,h as V}from"./index.uqldPLAT.js";import{e as j}from"./each.8prNeyls.js";import{C as Z}from"./Check.CWam98RO.js";import{C as z}from"./CaretSort.b0wyrEyt.js";import"./ctx.gjZ7gqPd.js";import{C as D,a as G,b as H,c as J}from"./command-input.BwVHBeFQ.js";import"./index.9B820uFl.js";import{c as N}from"./utils.C8VhKZ24.js";import{C as M}from"./command-group.AhChMf_I.js";import{R as O,T as Q,P as W}from"./index.ACw38bWg.js";import{B as X}from"./button.D3IjJBO3.js";function B(f,e,s){const r=f.slice();return r[8]=e[s],r}function Y(f){let e,s,r,n;return r=new z({props:{class:"ml-2 h-4 w-4 shrink-0 opacity-50"}}),{c(){e=C(f[2]),s=w(),_(r.$$.fragment)},l(t){e=k(t,f[2]),s=v(t),i(r.$$.fragment,t)},m(t,a){b(t,e,a),b(t,s,a),c(r,t,a),n=!0},p(t,a){(!n||a&4)&&R(e,t[2])},i(t){n||($(r.$$.fragment,t),n=!0)},o(t){m(r.$$.fragment,t),n=!1},d(t){t&&(d(e),d(s)),p(r,t)}}}function x(f){let e,s;return e=new X({props:{builders:[f[11]],variant:"outline",role:"combobox","aria-expanded":f[1],class:"w-[200px] justify-between",$$slots:{default:[Y]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment)},l(r){i(e.$$.fragment,r)},m(r,n){c(e,r,n),s=!0},p(r,n){const t={};n&2048&&(t.builders=[r[11]]),n&2&&(t["aria-expanded"]=r[1]),n&4100&&(t.$$scope={dirty:n,ctx:r}),e.$set(t)},i(r){s||($(e.$$.fragment,r),s=!0)},o(r){m(e.$$.fragment,r),s=!1},d(r){p(e,r)}}}function y(f){let e;return{c(){e=C("No framework found.")},l(s){e=k(s,"No framework found.")},m(s,r){b(s,e,r)},d(s){s&&d(e)}}}function ee(f){let e,s,r=f[8].label+"",n,t,a;return e=new Z({props:{class:N("mr-2 h-4 w-4",f[0]!==f[8].value&&"text-transparent")}}),{c(){_(e.$$.fragment),s=w(),n=C(r),t=w()},l(o){i(e.$$.fragment,o),s=v(o),n=k(o,r),t=v(o)},m(o,l){c(e,o,l),b(o,s,l),b(o,n,l),b(o,t,l),a=!0},p(o,l){const g={};l&1&&(g.class=N("mr-2 h-4 w-4",o[0]!==o[8].value&&"text-transparent")),e.$set(g)},i(o){a||($(e.$$.fragment,o),a=!0)},o(o){m(e.$$.fragment,o),a=!1},d(o){o&&(d(s),d(n),d(t)),p(e,o)}}}function T(f){let e,s;function r(...n){return f[5](f[7],...n)}return e=new J({props:{value:f[8].value,onSelect:r,$$slots:{default:[ee]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment)},l(n){i(e.$$.fragment,n)},m(n,t){c(e,n,t),s=!0},p(n,t){f=n;const a={};t&129&&(a.onSelect=r),t&4097&&(a.$$scope={dirty:t,ctx:f}),e.$set(a)},i(n){s||($(e.$$.fragment,n),s=!0)},o(n){m(e.$$.fragment,n),s=!1},d(n){p(e,n)}}}function te(f){let e,s,r=j(f[3]),n=[];for(let a=0;a<r.length;a+=1)n[a]=T(B(f,r,a));const t=a=>m(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=S()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);e=S()},m(a,o){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(a,o);b(a,e,o),s=!0},p(a,o){if(o&153){r=j(a[3]);let l;for(l=0;l<r.length;l+=1){const g=B(a,r,l);n[l]?(n[l].p(g,o),$(n[l],1)):(n[l]=T(g),n[l].c(),$(n[l],1),n[l].m(e.parentNode,e))}for(L(),l=r.length;l<n.length;l+=1)t(l);U()}},i(a){if(!s){for(let o=0;o<r.length;o+=1)$(n[o]);s=!0}},o(a){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)m(n[o]);s=!1},d(a){a&&d(e),A(n,a)}}}function re(f){let e,s,r,n,t,a;return e=new G({props:{placeholder:"Search framework...",class:"h-9"}}),r=new H({props:{$$slots:{default:[y]},$$scope:{ctx:f}}}),t=new M({props:{$$slots:{default:[te]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment),s=w(),_(r.$$.fragment),n=w(),_(t.$$.fragment)},l(o){i(e.$$.fragment,o),s=v(o),i(r.$$.fragment,o),n=v(o),i(t.$$.fragment,o)},m(o,l){c(e,o,l),b(o,s,l),c(r,o,l),b(o,n,l),c(t,o,l),a=!0},p(o,l){const g={};l&4096&&(g.$$scope={dirty:l,ctx:o}),r.$set(g);const u={};l&4225&&(u.$$scope={dirty:l,ctx:o}),t.$set(u)},i(o){a||($(e.$$.fragment,o),$(r.$$.fragment,o),$(t.$$.fragment,o),a=!0)},o(o){m(e.$$.fragment,o),m(r.$$.fragment,o),m(t.$$.fragment,o),a=!1},d(o){o&&(d(s),d(n)),p(e,o),p(r,o),p(t,o)}}}function oe(f){let e,s;return e=new D({props:{$$slots:{default:[re]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment)},l(r){i(e.$$.fragment,r)},m(r,n){c(e,r,n),s=!0},p(r,n){const t={};n&4225&&(t.$$scope={dirty:n,ctx:r}),e.$set(t)},i(r){s||($(e.$$.fragment,r),s=!0)},o(r){m(e.$$.fragment,r),s=!1},d(r){p(e,r)}}}function ne(f){let e,s,r,n;return e=new Q({props:{asChild:!0,$$slots:{default:[x,({builder:t})=>({11:t}),({builder:t})=>t?2048:0]},$$scope:{ctx:f}}}),r=new W({props:{class:"w-[200px] p-0",$$slots:{default:[oe]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment),s=w(),_(r.$$.fragment)},l(t){i(e.$$.fragment,t),s=v(t),i(r.$$.fragment,t)},m(t,a){c(e,t,a),b(t,s,a),c(r,t,a),n=!0},p(t,a){const o={};a&6150&&(o.$$scope={dirty:a,ctx:t}),e.$set(o);const l={};a&4225&&(l.$$scope={dirty:a,ctx:t}),r.$set(l)},i(t){n||($(e.$$.fragment,t),$(r.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),m(r.$$.fragment,t),n=!1},d(t){t&&d(s),p(e,t),p(r,t)}}}function ae(f){let e,s,r;function n(a){f[6](a)}let t={$$slots:{default:[ne,({ids:a})=>({7:a}),({ids:a})=>a?128:0]},$$scope:{ctx:f}};return f[1]!==void 0&&(t.open=f[1]),e=new O({props:t}),q.push(()=>V(e,"open",n)),{c(){_(e.$$.fragment)},l(a){i(e.$$.fragment,a)},m(a,o){c(e,a,o),r=!0},p(a,[o]){const l={};o&4231&&(l.$$scope={dirty:o,ctx:a}),!s&&o&2&&(s=!0,l.open=a[1],E(()=>s=!1)),e.$set(l)},i(a){r||($(e.$$.fragment,a),r=!0)},o(a){m(e.$$.fragment,a),r=!1},d(a){p(e,a)}}}function se(f,e,s){let r;const n=[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}];let t=!1,a="";function o(u){s(1,t=!1),F().then(()=>{var h;(h=document.getElementById(u))==null||h.focus()})}const l=(u,h)=>{s(0,a=h),o(u.trigger)};function g(u){t=u,s(1,t)}return f.$$.update=()=>{var u;f.$$.dirty&1&&s(2,r=((u=n.find(h=>h.value===a))==null?void 0:u.label)??"Select a framework...")},[a,t,r,n,o,l,g]}class he extends I{constructor(e){super(),K(this,e,se,ae,P,{})}}export{he as default};
