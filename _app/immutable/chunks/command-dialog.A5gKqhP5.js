import{s as q,z as x,l as J,u as U,m as Y,o as I,T as A,U as E,D as z,E as O,d as u,i as p,f as N,t as j,n as L,g as w,c as b,q as P,j as k,h as S,p as Q,Y as V}from"./scheduler.D_DiFEDa.js";import{S as B,i as F,t as _,a as i,h as D,d as c,m as d,c as g,b as v}from"./index.uqldPLAT.js";import{C as W}from"./Calendar.DcISKcr0.js";import{F as X,C as M,E as Z,G as y}from"./Gear.BLNlH5dk.js";import{P as ee}from"./Person.Bzy0hsmS.js";import{R as te}from"./Rocket.B3-2avLH.js";import"./ctx.gjZ7gqPd.js";import"./utils.C8VhKZ24.js";import{g as G,a as H}from"./spread.CgU5AtxT.js";import{C as ne,a as se,b as ae,c as h}from"./command-input.BwVHBeFQ.js";import{D as me,R as oe}from"./index.BmrpOI2S.js";import{C as K}from"./command-group.AhChMf_I.js";import{C as re}from"./command-list.CP3cm3je.js";import{C as $e}from"./command-separator.Dvy1wsid.js";function fe(f){let e;const m=f[3].default,n=J(m,f,f[6],null);return{c(){n&&n.c()},l($){n&&n.l($)},m($,o){n&&n.m($,o),e=!0},p($,o){n&&n.p&&(!e||o&64)&&U(n,m,$,$[6],e?I(m,$[6],o,null):Y($[6]),null)},i($){e||(i(n,$),e=!0)},o($){_(n,$),e=!1},d($){n&&n.d($)}}}function le(f){let e,m,n;const $=[{class:"[&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground [&_[data-cmdk-group]:not([hidden])_~[data-cmdk-group]]:pt-0 [&_[data-cmdk-group]]:px-2 [&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5 [&_[data-cmdk-input]]:h-12 [&_[data-cmdk-item]]:px-2 [&_[data-cmdk-item]]:py-3 [&_[data-cmdk-item]_svg]:h-5 [&_[data-cmdk-item]_svg]:w-5"},f[2]];function o(t){f[4](t)}let a={$$slots:{default:[fe]},$$scope:{ctx:f}};for(let t=0;t<$.length;t+=1)a=x(a,$[t]);return f[1]!==void 0&&(a.value=f[1]),e=new ne({props:a}),A.push(()=>D(e,"value",o)),{c(){v(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,s){const r=s&4?G($,[$[0],H(t[2])]):{};s&64&&(r.$$scope={dirty:s,ctx:t}),!m&&s&2&&(m=!0,r.value=t[1],E(()=>m=!1)),e.$set(r)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function ue(f){let e,m;return e=new me({props:{class:"overflow-hidden p-0",$$slots:{default:[le]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,$){d(e,n,$),m=!0},p(n,$){const o={};$&70&&(o.$$scope={dirty:$,ctx:n}),e.$set(o)},i(n){m||(i(e.$$.fragment,n),m=!0)},o(n){_(e.$$.fragment,n),m=!1},d(n){c(e,n)}}}function pe(f){let e,m,n;const $=[f[2]];function o(t){f[5](t)}let a={$$slots:{default:[ue]},$$scope:{ctx:f}};for(let t=0;t<$.length;t+=1)a=x(a,$[t]);return f[0]!==void 0&&(a.open=f[0]),e=new oe({props:a}),A.push(()=>D(e,"open",o)),{c(){v(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,[s]){const r=s&4?G($,[H(t[2])]):{};s&70&&(r.$$scope={dirty:s,ctx:t}),!m&&s&1&&(m=!0,r.open=t[0],E(()=>m=!1)),e.$set(r)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function _e(f,e,m){const n=["open","value"];let $=z(e,n),{$$slots:o={},$$scope:a}=e,{open:t=!1}=e,{value:s=void 0}=e;function r(C){s=C,m(1,s)}function l(C){t=C,m(0,t)}return f.$$set=C=>{e=x(x({},e),O(C)),m(2,$=z(e,n)),"open"in C&&m(0,t=C.open),"value"in C&&m(1,s=C.value),"$$scope"in C&&m(6,a=C.$$scope)},[t,s,$,o,r,l,a]}let ie=class extends B{constructor(e){super(),F(this,e,_e,pe,q,{open:0,value:1})}};function ce(f){let e;return{c(){e=j("No results found.")},l(m){e=N(m,"No results found.")},m(m,n){p(m,e,n)},d(m){m&&u(e)}}}function de(f){let e,m,n,$="Calendar",o;return e=new W({props:{class:"mr-2 h-4 w-4"}}),{c(){v(e.$$.fragment),m=k(),n=S("span"),n.textContent=$},l(a){g(e.$$.fragment,a),m=w(a),n=b(a,"SPAN",{"data-svelte-h":!0}),P(n)!=="svelte-pp2iz0"&&(n.textContent=$)},m(a,t){d(e,a,t),p(a,m,t),p(a,n,t),o=!0},p:L,i(a){o||(i(e.$$.fragment,a),o=!0)},o(a){_(e.$$.fragment,a),o=!1},d(a){a&&(u(m),u(n)),c(e,a)}}}function ge(f){let e,m,n,$="Search Emoji",o;return e=new X({props:{class:"mr-2 h-4 w-4"}}),{c(){v(e.$$.fragment),m=k(),n=S("span"),n.textContent=$},l(a){g(e.$$.fragment,a),m=w(a),n=b(a,"SPAN",{"data-svelte-h":!0}),P(n)!=="svelte-ktab6w"&&(n.textContent=$)},m(a,t){d(e,a,t),p(a,m,t),p(a,n,t),o=!0},p:L,i(a){o||(i(e.$$.fragment,a),o=!0)},o(a){_(e.$$.fragment,a),o=!1},d(a){a&&(u(m),u(n)),c(e,a)}}}function ve(f){let e,m,n,$="Launch",o;return e=new te({props:{class:"mr-2 h-4 w-4"}}),{c(){v(e.$$.fragment),m=k(),n=S("span"),n.textContent=$},l(a){g(e.$$.fragment,a),m=w(a),n=b(a,"SPAN",{"data-svelte-h":!0}),P(n)!=="svelte-cnjkip"&&(n.textContent=$)},m(a,t){d(e,a,t),p(a,m,t),p(a,n,t),o=!0},p:L,i(a){o||(i(e.$$.fragment,a),o=!0)},o(a){_(e.$$.fragment,a),o=!1},d(a){a&&(u(m),u(n)),c(e,a)}}}function Ce(f){let e,m,n,$,o,a;return e=new h({props:{$$slots:{default:[de]},$$scope:{ctx:f}}}),n=new h({props:{$$slots:{default:[ge]},$$scope:{ctx:f}}}),o=new h({props:{$$slots:{default:[ve]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment),m=k(),v(n.$$.fragment),$=k(),v(o.$$.fragment)},l(t){g(e.$$.fragment,t),m=w(t),g(n.$$.fragment,t),$=w(t),g(o.$$.fragment,t)},m(t,s){d(e,t,s),p(t,m,s),d(n,t,s),p(t,$,s),d(o,t,s),a=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),n.$set(l);const C={};s&4&&(C.$$scope={dirty:s,ctx:t}),o.$set(C)},i(t){a||(i(e.$$.fragment,t),i(n.$$.fragment,t),i(o.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),_(n.$$.fragment,t),_(o.$$.fragment,t),a=!1},d(t){t&&(u(m),u($)),c(e,t),c(n,t),c(o,t)}}}function we(f){let e;return{c(){e=j("⌘P")},l(m){e=N(m,"⌘P")},m(m,n){p(m,e,n)},d(m){m&&u(e)}}}function ke(f){let e,m,n,$="Profile",o,a,t;return e=new ee({props:{class:"mr-2 h-4 w-4"}}),a=new M({props:{$$slots:{default:[we]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment),m=k(),n=S("span"),n.textContent=$,o=k(),v(a.$$.fragment)},l(s){g(e.$$.fragment,s),m=w(s),n=b(s,"SPAN",{"data-svelte-h":!0}),P(n)!=="svelte-pjez1p"&&(n.textContent=$),o=w(s),g(a.$$.fragment,s)},m(s,r){d(e,s,r),p(s,m,r),p(s,n,r),p(s,o,r),d(a,s,r),t=!0},p(s,r){const l={};r&4&&(l.$$scope={dirty:r,ctx:s}),a.$set(l)},i(s){t||(i(e.$$.fragment,s),i(a.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),_(a.$$.fragment,s),t=!1},d(s){s&&(u(m),u(n),u(o)),c(e,s),c(a,s)}}}function be(f){let e;return{c(){e=j("⌘B")},l(m){e=N(m,"⌘B")},m(m,n){p(m,e,n)},d(m){m&&u(e)}}}function Pe(f){let e,m,n,$="Mail",o,a,t;return e=new Z({props:{class:"mr-2 h-4 w-4"}}),a=new M({props:{$$slots:{default:[be]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment),m=k(),n=S("span"),n.textContent=$,o=k(),v(a.$$.fragment)},l(s){g(e.$$.fragment,s),m=w(s),n=b(s,"SPAN",{"data-svelte-h":!0}),P(n)!=="svelte-1llrmg9"&&(n.textContent=$),o=w(s),g(a.$$.fragment,s)},m(s,r){d(e,s,r),p(s,m,r),p(s,n,r),p(s,o,r),d(a,s,r),t=!0},p(s,r){const l={};r&4&&(l.$$scope={dirty:r,ctx:s}),a.$set(l)},i(s){t||(i(e.$$.fragment,s),i(a.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),_(a.$$.fragment,s),t=!1},d(s){s&&(u(m),u(n),u(o)),c(e,s),c(a,s)}}}function Se(f){let e;return{c(){e=j("⌘S")},l(m){e=N(m,"⌘S")},m(m,n){p(m,e,n)},d(m){m&&u(e)}}}function he(f){let e,m,n,$="Settings",o,a,t;return e=new y({props:{class:"mr-2 h-4 w-4"}}),a=new M({props:{$$slots:{default:[Se]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment),m=k(),n=S("span"),n.textContent=$,o=k(),v(a.$$.fragment)},l(s){g(e.$$.fragment,s),m=w(s),n=b(s,"SPAN",{"data-svelte-h":!0}),P(n)!=="svelte-1vto2yn"&&(n.textContent=$),o=w(s),g(a.$$.fragment,s)},m(s,r){d(e,s,r),p(s,m,r),p(s,n,r),p(s,o,r),d(a,s,r),t=!0},p(s,r){const l={};r&4&&(l.$$scope={dirty:r,ctx:s}),a.$set(l)},i(s){t||(i(e.$$.fragment,s),i(a.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),_(a.$$.fragment,s),t=!1},d(s){s&&(u(m),u(n),u(o)),c(e,s),c(a,s)}}}function xe(f){let e,m,n,$,o,a;return e=new h({props:{$$slots:{default:[ke]},$$scope:{ctx:f}}}),n=new h({props:{$$slots:{default:[Pe]},$$scope:{ctx:f}}}),o=new h({props:{$$slots:{default:[he]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment),m=k(),v(n.$$.fragment),$=k(),v(o.$$.fragment)},l(t){g(e.$$.fragment,t),m=w(t),g(n.$$.fragment,t),$=w(t),g(o.$$.fragment,t)},m(t,s){d(e,t,s),p(t,m,s),d(n,t,s),p(t,$,s),d(o,t,s),a=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),n.$set(l);const C={};s&4&&(C.$$scope={dirty:s,ctx:t}),o.$set(C)},i(t){a||(i(e.$$.fragment,t),i(n.$$.fragment,t),i(o.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),_(n.$$.fragment,t),_(o.$$.fragment,t),a=!1},d(t){t&&(u(m),u($)),c(e,t),c(n,t),c(o,t)}}}function Ne(f){let e,m,n,$,o,a,t,s;return e=new ae({props:{$$slots:{default:[ce]},$$scope:{ctx:f}}}),n=new K({props:{heading:"Suggestions",$$slots:{default:[Ce]},$$scope:{ctx:f}}}),o=new $e({}),t=new K({props:{heading:"Settings",$$slots:{default:[xe]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment),m=k(),v(n.$$.fragment),$=k(),v(o.$$.fragment),a=k(),v(t.$$.fragment)},l(r){g(e.$$.fragment,r),m=w(r),g(n.$$.fragment,r),$=w(r),g(o.$$.fragment,r),a=w(r),g(t.$$.fragment,r)},m(r,l){d(e,r,l),p(r,m,l),d(n,r,l),p(r,$,l),d(o,r,l),p(r,a,l),d(t,r,l),s=!0},p(r,l){const C={};l&4&&(C.$$scope={dirty:l,ctx:r}),e.$set(C);const R={};l&4&&(R.$$scope={dirty:l,ctx:r}),n.$set(R);const T={};l&4&&(T.$$scope={dirty:l,ctx:r}),t.$set(T)},i(r){s||(i(e.$$.fragment,r),i(n.$$.fragment,r),i(o.$$.fragment,r),i(t.$$.fragment,r),s=!0)},o(r){_(e.$$.fragment,r),_(n.$$.fragment,r),_(o.$$.fragment,r),_(t.$$.fragment,r),s=!1},d(r){r&&(u(m),u($),u(a)),c(e,r),c(n,r),c(o,r),c(t,r)}}}function je(f){let e,m,n,$;return e=new se({props:{placeholder:"Type a command or search..."}}),n=new re({props:{$$slots:{default:[Ne]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment),m=k(),v(n.$$.fragment)},l(o){g(e.$$.fragment,o),m=w(o),g(n.$$.fragment,o)},m(o,a){d(e,o,a),p(o,m,a),d(n,o,a),$=!0},p(o,a){const t={};a&4&&(t.$$scope={dirty:a,ctx:o}),n.$set(t)},i(o){$||(i(e.$$.fragment,o),i(n.$$.fragment,o),$=!0)},o(o){_(e.$$.fragment,o),_(n.$$.fragment,o),$=!1},d(o){o&&u(m),c(e,o),c(n,o)}}}function Ae(f){let e,m=`Press
	<kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span class="text-xs">⌘</span>J</kbd>`,n,$,o,a;function t(r){f[1](r)}let s={$$slots:{default:[je]},$$scope:{ctx:f}};return f[0]!==void 0&&(s.open=f[0]),$=new ie({props:s}),A.push(()=>D($,"open",t)),{c(){e=S("p"),e.innerHTML=m,n=k(),v($.$$.fragment),this.h()},l(r){e=b(r,"P",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-ryx872"&&(e.innerHTML=m),n=w(r),g($.$$.fragment,r),this.h()},h(){Q(e,"class","text-sm text-muted-foreground")},m(r,l){p(r,e,l),p(r,n,l),d($,r,l),a=!0},p(r,[l]){const C={};l&4&&(C.$$scope={dirty:l,ctx:r}),!o&&l&1&&(o=!0,C.open=r[0],E(()=>o=!1)),$.$set(C)},i(r){a||(i($.$$.fragment,r),a=!0)},o(r){_($.$$.fragment,r),a=!1},d(r){r&&(u(e),u(n)),c($,r)}}}function Ee(f,e,m){let n=!1;V(()=>{function o(a){a.key==="j"&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),m(0,n=!n))}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}});function $(o){n=o,m(0,n)}return[n,$]}class Ie extends B{constructor(e){super(),F(this,e,Ee,Ae,q,{})}}export{Ie as default};
