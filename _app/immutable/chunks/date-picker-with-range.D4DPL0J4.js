import{s as F,d as u,a as D,i as c,f as $,t as _,P as V,n as N,g as T,j as B,T as C,U as R,p as U,c as q,e as E,h as I}from"./scheduler.D_DiFEDa.js";import{S as M,i as O,d as m,t as d,a as g,m as b,c as v,b as k,h as S}from"./index.uqldPLAT.js";import{C as z}from"./calendar.D-KHoyYg.js";import{$ as p,e as A,f as j}from"./index.9B820uFl.js";import{c as y}from"./utils.C8VhKZ24.js";import{B as G}from"./index.oJb_0on9.js";import{R as H}from"./range-calendar-prev-button.BkCGvwti.js";import{R as J,T as K,P as L}from"./index.B5BtY-rM.js";function Q(l){let e;return{c(){e=_("Pick a date")},l(n){e=$(n,"Pick a date")},m(n,t){c(n,e,t)},p:N,d(n){n&&u(e)}}}function W(l){let e=l[2].format(l[1].toDate(p()))+"",n;return{c(){n=_(e)},l(t){n=$(t,e)},m(t,r){c(t,n,r)},p(t,r){r&2&&e!==(e=t[2].format(t[1].toDate(p()))+"")&&D(n,e)},d(t){t&&u(n)}}}function X(l){let e;function n(a,o){return a[0].end?Z:Y}let t=n(l),r=t(l);return{c(){r.c(),e=V()},l(a){r.l(a),e=V()},m(a,o){r.m(a,o),c(a,e,o)},p(a,o){t===(t=n(a))&&r?r.p(a,o):(r.d(1),r=t(a),r&&(r.c(),r.m(e.parentNode,e)))},d(a){a&&u(e),r.d(a)}}}function Y(l){let e=l[2].format(l[0].start.toDate(p()))+"",n;return{c(){n=_(e)},l(t){n=$(t,e)},m(t,r){c(t,n,r)},p(t,r){r&1&&e!==(e=t[2].format(t[0].start.toDate(p()))+"")&&D(n,e)},d(t){t&&u(n)}}}function Z(l){let e=l[2].format(l[0].start.toDate(p()))+"",n,t,r=l[2].format(l[0].end.toDate(p()))+"",a;return{c(){n=_(e),t=_(" - "),a=_(r)},l(o){n=$(o,e),t=$(o," - "),a=$(o,r)},m(o,f){c(o,n,f),c(o,t,f),c(o,a,f)},p(o,f){f&1&&e!==(e=o[2].format(o[0].start.toDate(p()))+"")&&D(n,e),f&1&&r!==(r=o[2].format(o[0].end.toDate(p()))+"")&&D(a,r)},d(o){o&&(u(n),u(t),u(a))}}}function x(l){let e,n,t,r;e=new z({props:{class:"mr-2 h-4 w-4"}});function a(s,i){return s[0]&&s[0].start?X:s[1]?W:Q}let o=a(l),f=o(l);return{c(){k(e.$$.fragment),n=B(),f.c(),t=V()},l(s){v(e.$$.fragment,s),n=T(s),f.l(s),t=V()},m(s,i){b(e,s,i),c(s,n,i),f.m(s,i),c(s,t,i),r=!0},p(s,i){o===(o=a(s))&&f?f.p(s,i):(f.d(1),f=o(s),f&&(f.c(),f.m(t.parentNode,t)))},i(s){r||(g(e.$$.fragment,s),r=!0)},o(s){d(e.$$.fragment,s),r=!1},d(s){s&&(u(n),u(t)),m(e,s),f.d(s)}}}function ee(l){let e,n;return e=new G({props:{variant:"outline",class:y("w-[300px] justify-start text-left font-normal",!l[0]&&"text-muted-foreground"),builders:[l[5]],$$slots:{default:[x]},$$scope:{ctx:l}}}),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const a={};r&1&&(a.class=y("w-[300px] justify-start text-left font-normal",!t[0]&&"text-muted-foreground")),r&32&&(a.builders=[t[5]]),r&67&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function te(l){var s;let e,n,t,r;function a(i){l[3](i)}function o(i){l[4](i)}let f={initialFocus:!0,numberOfMonths:2,placeholder:(s=l[0])==null?void 0:s.start};return l[0]!==void 0&&(f.value=l[0]),l[1]!==void 0&&(f.startValue=l[1]),e=new H({props:f}),C.push(()=>S(e,"value",a)),C.push(()=>S(e,"startValue",o)),{c(){k(e.$$.fragment)},l(i){v(e.$$.fragment,i)},m(i,h){b(e,i,h),r=!0},p(i,h){var P;const w={};h&1&&(w.placeholder=(P=i[0])==null?void 0:P.start),!n&&h&1&&(n=!0,w.value=i[0],R(()=>n=!1)),!t&&h&2&&(t=!0,w.startValue=i[1],R(()=>t=!1)),e.$set(w)},i(i){r||(g(e.$$.fragment,i),r=!0)},o(i){d(e.$$.fragment,i),r=!1},d(i){m(e,i)}}}function ae(l){let e,n,t,r;return e=new K({props:{asChild:!0,$$slots:{default:[ee,({builder:a})=>({5:a}),({builder:a})=>a?32:0]},$$scope:{ctx:l}}}),t=new L({props:{class:"w-auto p-0",align:"start",$$slots:{default:[te]},$$scope:{ctx:l}}}),{c(){k(e.$$.fragment),n=B(),k(t.$$.fragment)},l(a){v(e.$$.fragment,a),n=T(a),v(t.$$.fragment,a)},m(a,o){b(e,a,o),c(a,n,o),b(t,a,o),r=!0},p(a,o){const f={};o&99&&(f.$$scope={dirty:o,ctx:a}),e.$set(f);const s={};o&67&&(s.$$scope={dirty:o,ctx:a}),t.$set(s)},i(a){r||(g(e.$$.fragment,a),g(t.$$.fragment,a),r=!0)},o(a){d(e.$$.fragment,a),d(t.$$.fragment,a),r=!1},d(a){a&&u(n),m(e,a),m(t,a)}}}function re(l){let e,n,t;return n=new J({props:{openFocus:!0,$$slots:{default:[ae]},$$scope:{ctx:l}}}),{c(){e=I("div"),k(n.$$.fragment),this.h()},l(r){e=q(r,"DIV",{class:!0});var a=E(e);v(n.$$.fragment,a),a.forEach(u),this.h()},h(){U(e,"class","grid gap-2")},m(r,a){c(r,e,a),b(n,e,null),t=!0},p(r,[a]){const o={};a&67&&(o.$$scope={dirty:a,ctx:r}),n.$set(o)},i(r){t||(g(n.$$.fragment,r),t=!0)},o(r){d(n.$$.fragment,r),t=!1},d(r){r&&u(e),m(n)}}}function ne(l,e,n){const t=new A("en-US",{dateStyle:"medium"});let r={start:new j(2022,1,20),end:new j(2022,1,20).add({days:20})},a;function o(s){r=s,n(0,r)}function f(s){a=s,n(1,a)}return[r,a,t,o,f]}class $e extends M{constructor(e){super(),O(this,e,ne,re,F,{})}}export{$e as default};
