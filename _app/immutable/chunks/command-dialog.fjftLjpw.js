import{s as M,z as P,l as Y,u as F,m as G,o as I,T as A,U as D,D as B,E as O,d as u,i as p,f as N,t as j,n as E,g as w,c as k,q as S,j as b,h,p as Q,Y as V}from"./scheduler.D_DiFEDa.js";import{S as U,i as H,t as i,a as _,h as L,d as c,m as d,c as g,b as C}from"./index.uqldPLAT.js";import{S as W,C as X,a as Z,b as T}from"./command-shortcut.BmJRU3X4.js";import{C as y}from"./calendar.D-KHoyYg.js";import{C as ee}from"./credit-card.B10kirrb.js";import{S as te}from"./settings.CTFcu8D-.js";import{U as ne}from"./user.BepJ1h9c.js";import"./ctx.gjZ7gqPd.js";import"./utils.C8VhKZ24.js";import{g as R,a as J}from"./spread.CgU5AtxT.js";import{C as se,a as ae,b as me,c as K,d as x}from"./command-input.ky_m2GMJ.js";import{D as oe,R as re}from"./index.DiF7AIcr.js";import{C as $e}from"./command-list.2VmrEfUX.js";function fe(f){let e;const m=f[3].default,n=Y(m,f,f[6],null);return{c(){n&&n.c()},l($){n&&n.l($)},m($,o){n&&n.m($,o),e=!0},p($,o){n&&n.p&&(!e||o&64)&&F(n,m,$,$[6],e?I(m,$[6],o,null):G($[6]),null)},i($){e||(_(n,$),e=!0)},o($){i(n,$),e=!1},d($){n&&n.d($)}}}function le(f){let e,m,n;const $=[{class:"[&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground [&_[data-cmdk-group]:not([hidden])_~[data-cmdk-group]]:pt-0 [&_[data-cmdk-group]]:px-2 [&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5 [&_[data-cmdk-input]]:h-12 [&_[data-cmdk-item]]:px-2 [&_[data-cmdk-item]]:py-3 [&_[data-cmdk-item]_svg]:h-5 [&_[data-cmdk-item]_svg]:w-5"},f[2]];function o(t){f[4](t)}let a={$$slots:{default:[fe]},$$scope:{ctx:f}};for(let t=0;t<$.length;t+=1)a=P(a,$[t]);return f[1]!==void 0&&(a.value=f[1]),e=new se({props:a}),A.push(()=>L(e,"value",o)),{c(){C(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,s){const r=s&4?R($,[$[0],J(t[2])]):{};s&64&&(r.$$scope={dirty:s,ctx:t}),!m&&s&2&&(m=!0,r.value=t[1],D(()=>m=!1)),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function ue(f){let e,m;return e=new oe({props:{class:"overflow-hidden p-0 shadow-lg",$$slots:{default:[le]},$$scope:{ctx:f}}}),{c(){C(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,$){d(e,n,$),m=!0},p(n,$){const o={};$&70&&(o.$$scope={dirty:$,ctx:n}),e.$set(o)},i(n){m||(_(e.$$.fragment,n),m=!0)},o(n){i(e.$$.fragment,n),m=!1},d(n){c(e,n)}}}function pe(f){let e,m,n;const $=[f[2]];function o(t){f[5](t)}let a={$$slots:{default:[ue]},$$scope:{ctx:f}};for(let t=0;t<$.length;t+=1)a=P(a,$[t]);return f[0]!==void 0&&(a.open=f[0]),e=new re({props:a}),A.push(()=>L(e,"open",o)),{c(){C(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,[s]){const r=s&4?R($,[J(t[2])]):{};s&70&&(r.$$scope={dirty:s,ctx:t}),!m&&s&1&&(m=!0,r.open=t[0],D(()=>m=!1)),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function ie(f,e,m){const n=["open","value"];let $=B(e,n),{$$slots:o={},$$scope:a}=e,{open:t=!1}=e,{value:s=void 0}=e;function r(v){s=v,m(1,s)}function l(v){t=v,m(0,t)}return f.$$set=v=>{e=P(P({},e),O(v)),m(2,$=B(e,n)),"open"in v&&m(0,t=v.open),"value"in v&&m(1,s=v.value),"$$scope"in v&&m(6,a=v.$$scope)},[t,s,$,o,r,l,a]}let _e=class extends U{constructor(e){super(),H(this,e,ie,pe,M,{open:0,value:1})}};function ce(f){let e;return{c(){e=j("No results found.")},l(m){e=N(m,"No results found.")},m(m,n){p(m,e,n)},d(m){m&&u(e)}}}function de(f){let e,m,n,$="Calendar",o;return e=new y({props:{class:"mr-2 h-4 w-4"}}),{c(){C(e.$$.fragment),m=b(),n=h("span"),n.textContent=$},l(a){g(e.$$.fragment,a),m=w(a),n=k(a,"SPAN",{"data-svelte-h":!0}),S(n)!=="svelte-pp2iz0"&&(n.textContent=$)},m(a,t){d(e,a,t),p(a,m,t),p(a,n,t),o=!0},p:E,i(a){o||(_(e.$$.fragment,a),o=!0)},o(a){i(e.$$.fragment,a),o=!1},d(a){a&&(u(m),u(n)),c(e,a)}}}function ge(f){let e,m,n,$="Search Emoji",o;return e=new W({props:{class:"mr-2 h-4 w-4"}}),{c(){C(e.$$.fragment),m=b(),n=h("span"),n.textContent=$},l(a){g(e.$$.fragment,a),m=w(a),n=k(a,"SPAN",{"data-svelte-h":!0}),S(n)!=="svelte-ktab6w"&&(n.textContent=$)},m(a,t){d(e,a,t),p(a,m,t),p(a,n,t),o=!0},p:E,i(a){o||(_(e.$$.fragment,a),o=!0)},o(a){i(e.$$.fragment,a),o=!1},d(a){a&&(u(m),u(n)),c(e,a)}}}function Ce(f){let e,m,n,$="Calculator",o;return e=new X({props:{class:"mr-2 h-4 w-4"}}),{c(){C(e.$$.fragment),m=b(),n=h("span"),n.textContent=$},l(a){g(e.$$.fragment,a),m=w(a),n=k(a,"SPAN",{"data-svelte-h":!0}),S(n)!=="svelte-1qbitju"&&(n.textContent=$)},m(a,t){d(e,a,t),p(a,m,t),p(a,n,t),o=!0},p:E,i(a){o||(_(e.$$.fragment,a),o=!0)},o(a){i(e.$$.fragment,a),o=!1},d(a){a&&(u(m),u(n)),c(e,a)}}}function ve(f){let e,m,n,$,o,a;return e=new x({props:{$$slots:{default:[de]},$$scope:{ctx:f}}}),n=new x({props:{$$slots:{default:[ge]},$$scope:{ctx:f}}}),o=new x({props:{$$slots:{default:[Ce]},$$scope:{ctx:f}}}),{c(){C(e.$$.fragment),m=b(),C(n.$$.fragment),$=b(),C(o.$$.fragment)},l(t){g(e.$$.fragment,t),m=w(t),g(n.$$.fragment,t),$=w(t),g(o.$$.fragment,t)},m(t,s){d(e,t,s),p(t,m,s),d(n,t,s),p(t,$,s),d(o,t,s),a=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),n.$set(l);const v={};s&4&&(v.$$scope={dirty:s,ctx:t}),o.$set(v)},i(t){a||(_(e.$$.fragment,t),_(n.$$.fragment,t),_(o.$$.fragment,t),a=!0)},o(t){i(e.$$.fragment,t),i(n.$$.fragment,t),i(o.$$.fragment,t),a=!1},d(t){t&&(u(m),u($)),c(e,t),c(n,t),c(o,t)}}}function we(f){let e;return{c(){e=j("⌘P")},l(m){e=N(m,"⌘P")},m(m,n){p(m,e,n)},d(m){m&&u(e)}}}function be(f){let e,m,n,$="Profile",o,a,t;return e=new ne({props:{class:"mr-2 h-4 w-4"}}),a=new T({props:{$$slots:{default:[we]},$$scope:{ctx:f}}}),{c(){C(e.$$.fragment),m=b(),n=h("span"),n.textContent=$,o=b(),C(a.$$.fragment)},l(s){g(e.$$.fragment,s),m=w(s),n=k(s,"SPAN",{"data-svelte-h":!0}),S(n)!=="svelte-pjez1p"&&(n.textContent=$),o=w(s),g(a.$$.fragment,s)},m(s,r){d(e,s,r),p(s,m,r),p(s,n,r),p(s,o,r),d(a,s,r),t=!0},p(s,r){const l={};r&4&&(l.$$scope={dirty:r,ctx:s}),a.$set(l)},i(s){t||(_(e.$$.fragment,s),_(a.$$.fragment,s),t=!0)},o(s){i(e.$$.fragment,s),i(a.$$.fragment,s),t=!1},d(s){s&&(u(m),u(n),u(o)),c(e,s),c(a,s)}}}function ke(f){let e;return{c(){e=j("⌘B")},l(m){e=N(m,"⌘B")},m(m,n){p(m,e,n)},d(m){m&&u(e)}}}function Se(f){let e,m,n,$="Billing",o,a,t;return e=new ee({props:{class:"mr-2 h-4 w-4"}}),a=new T({props:{$$slots:{default:[ke]},$$scope:{ctx:f}}}),{c(){C(e.$$.fragment),m=b(),n=h("span"),n.textContent=$,o=b(),C(a.$$.fragment)},l(s){g(e.$$.fragment,s),m=w(s),n=k(s,"SPAN",{"data-svelte-h":!0}),S(n)!=="svelte-tviiiv"&&(n.textContent=$),o=w(s),g(a.$$.fragment,s)},m(s,r){d(e,s,r),p(s,m,r),p(s,n,r),p(s,o,r),d(a,s,r),t=!0},p(s,r){const l={};r&4&&(l.$$scope={dirty:r,ctx:s}),a.$set(l)},i(s){t||(_(e.$$.fragment,s),_(a.$$.fragment,s),t=!0)},o(s){i(e.$$.fragment,s),i(a.$$.fragment,s),t=!1},d(s){s&&(u(m),u(n),u(o)),c(e,s),c(a,s)}}}function he(f){let e;return{c(){e=j("⌘S")},l(m){e=N(m,"⌘S")},m(m,n){p(m,e,n)},d(m){m&&u(e)}}}function xe(f){let e,m,n,$="Settings",o,a,t;return e=new te({props:{class:"mr-2 h-4 w-4"}}),a=new T({props:{$$slots:{default:[he]},$$scope:{ctx:f}}}),{c(){C(e.$$.fragment),m=b(),n=h("span"),n.textContent=$,o=b(),C(a.$$.fragment)},l(s){g(e.$$.fragment,s),m=w(s),n=k(s,"SPAN",{"data-svelte-h":!0}),S(n)!=="svelte-1vto2yn"&&(n.textContent=$),o=w(s),g(a.$$.fragment,s)},m(s,r){d(e,s,r),p(s,m,r),p(s,n,r),p(s,o,r),d(a,s,r),t=!0},p(s,r){const l={};r&4&&(l.$$scope={dirty:r,ctx:s}),a.$set(l)},i(s){t||(_(e.$$.fragment,s),_(a.$$.fragment,s),t=!0)},o(s){i(e.$$.fragment,s),i(a.$$.fragment,s),t=!1},d(s){s&&(u(m),u(n),u(o)),c(e,s),c(a,s)}}}function Pe(f){let e,m,n,$,o,a;return e=new x({props:{$$slots:{default:[be]},$$scope:{ctx:f}}}),n=new x({props:{$$slots:{default:[Se]},$$scope:{ctx:f}}}),o=new x({props:{$$slots:{default:[xe]},$$scope:{ctx:f}}}),{c(){C(e.$$.fragment),m=b(),C(n.$$.fragment),$=b(),C(o.$$.fragment)},l(t){g(e.$$.fragment,t),m=w(t),g(n.$$.fragment,t),$=w(t),g(o.$$.fragment,t)},m(t,s){d(e,t,s),p(t,m,s),d(n,t,s),p(t,$,s),d(o,t,s),a=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),n.$set(l);const v={};s&4&&(v.$$scope={dirty:s,ctx:t}),o.$set(v)},i(t){a||(_(e.$$.fragment,t),_(n.$$.fragment,t),_(o.$$.fragment,t),a=!0)},o(t){i(e.$$.fragment,t),i(n.$$.fragment,t),i(o.$$.fragment,t),a=!1},d(t){t&&(u(m),u($)),c(e,t),c(n,t),c(o,t)}}}function Ne(f){let e,m,n,$,o,a,t,s;return e=new me({props:{$$slots:{default:[ce]},$$scope:{ctx:f}}}),n=new K({props:{heading:"Suggestions",$$slots:{default:[ve]},$$scope:{ctx:f}}}),o=new Z({}),t=new K({props:{heading:"Settings",$$slots:{default:[Pe]},$$scope:{ctx:f}}}),{c(){C(e.$$.fragment),m=b(),C(n.$$.fragment),$=b(),C(o.$$.fragment),a=b(),C(t.$$.fragment)},l(r){g(e.$$.fragment,r),m=w(r),g(n.$$.fragment,r),$=w(r),g(o.$$.fragment,r),a=w(r),g(t.$$.fragment,r)},m(r,l){d(e,r,l),p(r,m,l),d(n,r,l),p(r,$,l),d(o,r,l),p(r,a,l),d(t,r,l),s=!0},p(r,l){const v={};l&4&&(v.$$scope={dirty:l,ctx:r}),e.$set(v);const q={};l&4&&(q.$$scope={dirty:l,ctx:r}),n.$set(q);const z={};l&4&&(z.$$scope={dirty:l,ctx:r}),t.$set(z)},i(r){s||(_(e.$$.fragment,r),_(n.$$.fragment,r),_(o.$$.fragment,r),_(t.$$.fragment,r),s=!0)},o(r){i(e.$$.fragment,r),i(n.$$.fragment,r),i(o.$$.fragment,r),i(t.$$.fragment,r),s=!1},d(r){r&&(u(m),u($),u(a)),c(e,r),c(n,r),c(o,r),c(t,r)}}}function je(f){let e,m,n,$;return e=new ae({props:{placeholder:"Type a command or search..."}}),n=new $e({props:{$$slots:{default:[Ne]},$$scope:{ctx:f}}}),{c(){C(e.$$.fragment),m=b(),C(n.$$.fragment)},l(o){g(e.$$.fragment,o),m=w(o),g(n.$$.fragment,o)},m(o,a){d(e,o,a),p(o,m,a),d(n,o,a),$=!0},p(o,a){const t={};a&4&&(t.$$scope={dirty:a,ctx:o}),n.$set(t)},i(o){$||(_(e.$$.fragment,o),_(n.$$.fragment,o),$=!0)},o(o){i(e.$$.fragment,o),i(n.$$.fragment,o),$=!1},d(o){o&&u(m),c(e,o),c(n,o)}}}function Ae(f){let e,m=`Press
	<kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span class="text-xs">⌘</span>J</kbd>`,n,$,o,a;function t(r){f[1](r)}let s={$$slots:{default:[je]},$$scope:{ctx:f}};return f[0]!==void 0&&(s.open=f[0]),$=new _e({props:s}),A.push(()=>L($,"open",t)),{c(){e=h("p"),e.innerHTML=m,n=b(),C($.$$.fragment),this.h()},l(r){e=k(r,"P",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-ryx872"&&(e.innerHTML=m),n=w(r),g($.$$.fragment,r),this.h()},h(){Q(e,"class","text-sm text-muted-foreground")},m(r,l){p(r,e,l),p(r,n,l),d($,r,l),a=!0},p(r,[l]){const v={};l&4&&(v.$$scope={dirty:l,ctx:r}),!o&&l&1&&(o=!0,v.open=r[0],D(()=>o=!1)),$.$set(v)},i(r){a||(_($.$$.fragment,r),a=!0)},o(r){i($.$$.fragment,r),a=!1},d(r){r&&(u(e),u(n)),c($,r)}}}function De(f,e,m){let n=!1;V(()=>{function o(a){a.key==="j"&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),m(0,n=!n))}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}});function $(o){n=o,m(0,n)}return[n,$]}class Ge extends U{constructor(e){super(),H(this,e,De,Ae,M,{})}}export{Ge as default};
