import{s as I,d as c,i as g,f as w,t as S,n as L,g as v,j as b,b as D,p as k,c as V,e as x,h as E}from"./scheduler.D_DiFEDa.js";import{S as P,i as R,d as o,t as u,a as m,m as _,c as i,b as p}from"./index.uqldPLAT.js";import{C as j}from"./card.DfXx_qAa.js";import{C as q}from"./card-content.XxJ7Y_ju.js";import"./utils.C8VhKZ24.js";import{C as z,a as B}from"./card-title.CJIB0edQ.js";import{L as F}from"./label.CKjN0RUN.js";import{R as G,S as H,V as J,a as K,b as C}from"./index.CIJ4llF1.js";function M(f){let e;return{c(){e=S("Product Status")},l(s){e=w(s,"Product Status")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function N(f){let e,s;return e=new B({props:{$$slots:{default:[M]},$$scope:{ctx:f}}}),{c(){p(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){_(e,t,$),s=!0},p(t,$){const r={};$&1&&(r.$$scope={dirty:$,ctx:t}),e.$set(r)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){o(e,t)}}}function O(f){let e;return{c(){e=S("Status")},l(s){e=w(s,"Status")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function Q(f){let e,s;return e=new J({props:{placeholder:"Select status"}}),{c(){p(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){_(e,t,$),s=!0},p:L,i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){o(e,t)}}}function T(f){let e;return{c(){e=S("Draft")},l(s){e=w(s,"Draft")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function U(f){let e;return{c(){e=S("Active")},l(s){e=w(s,"Active")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function W(f){let e;return{c(){e=S("Archived")},l(s){e=w(s,"Archived")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function X(f){let e,s,t,$,r,l;return e=new C({props:{value:"draft",label:"Draft",$$slots:{default:[T]},$$scope:{ctx:f}}}),t=new C({props:{value:"published",label:"Active",$$slots:{default:[U]},$$scope:{ctx:f}}}),r=new C({props:{value:"archived",label:"Archived",$$slots:{default:[W]},$$scope:{ctx:f}}}),{c(){p(e.$$.fragment),s=b(),p(t.$$.fragment),$=b(),p(r.$$.fragment)},l(a){i(e.$$.fragment,a),s=v(a),i(t.$$.fragment,a),$=v(a),i(r.$$.fragment,a)},m(a,n){_(e,a,n),g(a,s,n),_(t,a,n),g(a,$,n),_(r,a,n),l=!0},p(a,n){const d={};n&1&&(d.$$scope={dirty:n,ctx:a}),e.$set(d);const h={};n&1&&(h.$$scope={dirty:n,ctx:a}),t.$set(h);const A={};n&1&&(A.$$scope={dirty:n,ctx:a}),r.$set(A)},i(a){l||(m(e.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),l=!0)},o(a){u(e.$$.fragment,a),u(t.$$.fragment,a),u(r.$$.fragment,a),l=!1},d(a){a&&(c(s),c($)),o(e,a),o(t,a),o(r,a)}}}function Y(f){let e,s,t,$;return e=new H({props:{id:"status","aria-label":"Select status",$$slots:{default:[Q]},$$scope:{ctx:f}}}),t=new K({props:{$$slots:{default:[X]},$$scope:{ctx:f}}}),{c(){p(e.$$.fragment),s=b(),p(t.$$.fragment)},l(r){i(e.$$.fragment,r),s=v(r),i(t.$$.fragment,r)},m(r,l){_(e,r,l),g(r,s,l),_(t,r,l),$=!0},p(r,l){const a={};l&1&&(a.$$scope={dirty:l,ctx:r}),e.$set(a);const n={};l&1&&(n.$$scope={dirty:l,ctx:r}),t.$set(n)},i(r){$||(m(e.$$.fragment,r),m(t.$$.fragment,r),$=!0)},o(r){u(e.$$.fragment,r),u(t.$$.fragment,r),$=!1},d(r){r&&c(s),o(e,r),o(t,r)}}}function Z(f){let e,s,t,$,r,l;return t=new F({props:{for:"status",$$slots:{default:[O]},$$scope:{ctx:f}}}),r=new G({props:{$$slots:{default:[Y]},$$scope:{ctx:f}}}),{c(){e=E("div"),s=E("div"),p(t.$$.fragment),$=b(),p(r.$$.fragment),this.h()},l(a){e=V(a,"DIV",{class:!0});var n=x(e);s=V(n,"DIV",{class:!0});var d=x(s);i(t.$$.fragment,d),$=v(d),i(r.$$.fragment,d),d.forEach(c),n.forEach(c),this.h()},h(){k(s,"class","grid gap-3"),k(e,"class","grid gap-6")},m(a,n){g(a,e,n),D(e,s),_(t,s,null),D(s,$),_(r,s,null),l=!0},p(a,n){const d={};n&1&&(d.$$scope={dirty:n,ctx:a}),t.$set(d);const h={};n&1&&(h.$$scope={dirty:n,ctx:a}),r.$set(h)},i(a){l||(m(t.$$.fragment,a),m(r.$$.fragment,a),l=!0)},o(a){u(t.$$.fragment,a),u(r.$$.fragment,a),l=!1},d(a){a&&c(e),o(t),o(r)}}}function y(f){let e,s,t,$;return e=new z({props:{$$slots:{default:[N]},$$scope:{ctx:f}}}),t=new q({props:{$$slots:{default:[Z]},$$scope:{ctx:f}}}),{c(){p(e.$$.fragment),s=b(),p(t.$$.fragment)},l(r){i(e.$$.fragment,r),s=v(r),i(t.$$.fragment,r)},m(r,l){_(e,r,l),g(r,s,l),_(t,r,l),$=!0},p(r,l){const a={};l&1&&(a.$$scope={dirty:l,ctx:r}),e.$set(a);const n={};l&1&&(n.$$scope={dirty:l,ctx:r}),t.$set(n)},i(r){$||(m(e.$$.fragment,r),m(t.$$.fragment,r),$=!0)},o(r){u(e.$$.fragment,r),u(t.$$.fragment,r),$=!1},d(r){r&&c(s),o(e,r),o(t,r)}}}function ee(f){let e,s;return e=new j({props:{"data-x-chunk-name":"dashboard-07-chunk-3","data-x-chunk-description":"A card with a form to edit the product status",$$slots:{default:[y]},$$scope:{ctx:f}}}),{c(){p(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){_(e,t,$),s=!0},p(t,[$]){const r={};$&1&&(r.$$scope={dirty:$,ctx:t}),e.$set(r)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){o(e,t)}}}class ce extends P{constructor(e){super(),R(this,e,null,ee,I,{})}}export{ce as default};
