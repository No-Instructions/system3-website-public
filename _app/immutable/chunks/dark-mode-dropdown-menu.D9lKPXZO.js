import{s as M,d as l,n as T,i as f,p as q,g as w,c as B,q as L,j as k,h as R,f as S,t as b}from"./scheduler.D_DiFEDa.js";import{S as j,i as z,d as u,t as c,a as i,m as p,c as _,b as d}from"./index.uqldPLAT.js";import{S as A,M as N}from"./Sun.BShO7r8-.js";import{s as C,r as P}from"./mode.r2CvKGt-.js";import"./form-demo.I_FsgVaC.js";import"./index.9B820uFl.js";import{R as x,T as E,D as F,a as h}from"./index.Ch7IoPvW.js";import{B as G}from"./button.D3IjJBO3.js";function H($){let e,r,t,a,n,m="Toggle theme",o;return e=new A({props:{class:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}}),t=new N({props:{class:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}}),{c(){d(e.$$.fragment),r=k(),d(t.$$.fragment),a=k(),n=R("span"),n.textContent=m,this.h()},l(s){_(e.$$.fragment,s),r=w(s),_(t.$$.fragment,s),a=w(s),n=B(s,"SPAN",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-ntgole"&&(n.textContent=m),this.h()},h(){q(n,"class","sr-only")},m(s,g){p(e,s,g),f(s,r,g),p(t,s,g),f(s,a,g),f(s,n,g),o=!0},p:T,i(s){o||(i(e.$$.fragment,s),i(t.$$.fragment,s),o=!0)},o(s){c(e.$$.fragment,s),c(t.$$.fragment,s),o=!1},d(s){s&&(l(r),l(a),l(n)),u(e,s),u(t,s)}}}function I($){let e,r;return e=new G({props:{builders:[$[3]],variant:"outline",size:"icon",$$slots:{default:[H]},$$scope:{ctx:$}}}),{c(){d(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,a){p(e,t,a),r=!0},p(t,a){const n={};a&8&&(n.builders=[t[3]]),a&16&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){c(e.$$.fragment,t),r=!1},d(t){u(e,t)}}}function J($){let e;return{c(){e=b("Light")},l(r){e=S(r,"Light")},m(r,t){f(r,e,t)},d(r){r&&l(e)}}}function K($){let e;return{c(){e=b("Dark")},l(r){e=S(r,"Dark")},m(r,t){f(r,e,t)},d(r){r&&l(e)}}}function O($){let e;return{c(){e=b("System")},l(r){e=S(r,"System")},m(r,t){f(r,e,t)},d(r){r&&l(e)}}}function Q($){let e,r,t,a,n,m;return e=new h({props:{$$slots:{default:[J]},$$scope:{ctx:$}}}),e.$on("click",$[0]),t=new h({props:{$$slots:{default:[K]},$$scope:{ctx:$}}}),t.$on("click",$[1]),n=new h({props:{$$slots:{default:[O]},$$scope:{ctx:$}}}),n.$on("click",$[2]),{c(){d(e.$$.fragment),r=k(),d(t.$$.fragment),a=k(),d(n.$$.fragment)},l(o){_(e.$$.fragment,o),r=w(o),_(t.$$.fragment,o),a=w(o),_(n.$$.fragment,o)},m(o,s){p(e,o,s),f(o,r,s),p(t,o,s),f(o,a,s),p(n,o,s),m=!0},p(o,s){const g={};s&16&&(g.$$scope={dirty:s,ctx:o}),e.$set(g);const D={};s&16&&(D.$$scope={dirty:s,ctx:o}),t.$set(D);const v={};s&16&&(v.$$scope={dirty:s,ctx:o}),n.$set(v)},i(o){m||(i(e.$$.fragment,o),i(t.$$.fragment,o),i(n.$$.fragment,o),m=!0)},o(o){c(e.$$.fragment,o),c(t.$$.fragment,o),c(n.$$.fragment,o),m=!1},d(o){o&&(l(r),l(a)),u(e,o),u(t,o),u(n,o)}}}function U($){let e,r,t,a;return e=new E({props:{asChild:!0,$$slots:{default:[I,({builder:n})=>({3:n}),({builder:n})=>n?8:0]},$$scope:{ctx:$}}}),t=new F({props:{align:"end",$$slots:{default:[Q]},$$scope:{ctx:$}}}),{c(){d(e.$$.fragment),r=k(),d(t.$$.fragment)},l(n){_(e.$$.fragment,n),r=w(n),_(t.$$.fragment,n)},m(n,m){p(e,n,m),f(n,r,m),p(t,n,m),a=!0},p(n,m){const o={};m&24&&(o.$$scope={dirty:m,ctx:n}),e.$set(o);const s={};m&16&&(s.$$scope={dirty:m,ctx:n}),t.$set(s)},i(n){a||(i(e.$$.fragment,n),i(t.$$.fragment,n),a=!0)},o(n){c(e.$$.fragment,n),c(t.$$.fragment,n),a=!1},d(n){n&&l(r),u(e,n),u(t,n)}}}function V($){let e,r;return e=new x({props:{$$slots:{default:[U]},$$scope:{ctx:$}}}),{c(){d(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,a){p(e,t,a),r=!0},p(t,[a]){const n={};a&16&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){c(e.$$.fragment,t),r=!1},d(t){u(e,t)}}}function W($){return[()=>C("light"),()=>C("dark"),()=>P()]}class se extends j{constructor(e){super(),z(this,e,W,V,M,{})}}export{se as default};
