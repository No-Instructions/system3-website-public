import{s as b,d as _,i as g,f as v,t as C,g as w,j as A}from"./scheduler.D_DiFEDa.js";import{S as h,i as E,d as i,t as f,a as m,m as c,c as p,b as u}from"./index.uqldPLAT.js";import{C as P}from"./circle-alert.Cb56mkCw.js";import"./index.DI0Fc03u.js";import{A as S,a as Y,b as j}from"./alert-title.ztB93ijw.js";function q($){let t;return{c(){t=C("Error")},l(s){t=v(s,"Error")},m(s,r){g(s,t,r)},d(s){s&&_(t)}}}function k($){let t;return{c(){t=C("Your session has expired. Please login again.")},l(s){t=v(s,"Your session has expired. Please login again.")},m(s,r){g(s,t,r)},d(s){s&&_(t)}}}function z($){let t,s,r,o,a,l;return t=new P({props:{class:"h-4 w-4"}}),r=new Y({props:{$$slots:{default:[q]},$$scope:{ctx:$}}}),a=new j({props:{$$slots:{default:[k]},$$scope:{ctx:$}}}),{c(){u(t.$$.fragment),s=A(),u(r.$$.fragment),o=A(),u(a.$$.fragment)},l(e){p(t.$$.fragment,e),s=w(e),p(r.$$.fragment,e),o=w(e),p(a.$$.fragment,e)},m(e,n){c(t,e,n),g(e,s,n),c(r,e,n),g(e,o,n),c(a,e,n),l=!0},p(e,n){const d={};n&1&&(d.$$scope={dirty:n,ctx:e}),r.$set(d);const x={};n&1&&(x.$$scope={dirty:n,ctx:e}),a.$set(x)},i(e){l||(m(t.$$.fragment,e),m(r.$$.fragment,e),m(a.$$.fragment,e),l=!0)},o(e){f(t.$$.fragment,e),f(r.$$.fragment,e),f(a.$$.fragment,e),l=!1},d(e){e&&(_(s),_(o)),i(t,e),i(r,e),i(a,e)}}}function B($){let t,s;return t=new S({props:{variant:"destructive",$$slots:{default:[z]},$$scope:{ctx:$}}}),{c(){u(t.$$.fragment)},l(r){p(t.$$.fragment,r)},m(r,o){c(t,r,o),s=!0},p(r,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:r}),t.$set(a)},i(r){s||(m(t.$$.fragment,r),s=!0)},o(r){f(t.$$.fragment,r),s=!1},d(r){i(t,r)}}}class J extends h{constructor(t){super(),E(this,t,null,B,b,{})}}export{J as default};