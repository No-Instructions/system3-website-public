import{s as z,z as u,l as T,u as k,m as N,o as S,T as j,U as q,D as _,E as C,F as D}from"./scheduler.D_DiFEDa.js";import{S as E,i as F,t as p,a as b,h as P,d as U,m as V,c as A,b as B}from"./index.uqldPLAT.js";import{g as G,a as H}from"./spread.CgU5AtxT.js";import"./index.9B820uFl.js";import{T as I}from"./toggle.CuchbFc9.js";import{t as g}from"./index.vPd9afM8.js";import{c as d}from"./utils.C8VhKZ24.js";function J(i){let e;const o=i[5].default,t=T(o,i,i[8],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,n){t&&t.p&&(!e||n&256)&&k(t,o,a,a[8],e?S(o,a[8],n,null):N(a[8]),null)},i(a){e||(b(t,a),e=!0)},o(a){p(t,a),e=!1},d(a){t&&t.d(a)}}}function K(i){let e,o,t;const a=[{class:d(g({variant:i[2],size:i[3],className:i[1]}))},i[4]];function n(s){i[6](s)}let f={$$slots:{default:[J]},$$scope:{ctx:i}};for(let s=0;s<a.length;s+=1)f=u(f,a[s]);return i[0]!==void 0&&(f.pressed=i[0]),e=new I({props:f}),j.push(()=>P(e,"pressed",n)),e.$on("click",i[7]),{c(){B(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,r){V(e,s,r),t=!0},p(s,[r]){const c=r&30?G(a,[r&14&&{class:d(g({variant:s[2],size:s[3],className:s[1]}))},r&16&&H(s[4])]):{};r&256&&(c.$$scope={dirty:r,ctx:s}),!o&&r&1&&(o=!0,c.pressed=s[0],q(()=>o=!1)),e.$set(c)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){U(e,s)}}}function L(i,e,o){const t=["class","variant","size","pressed"];let a=_(e,t),{$$slots:n={},$$scope:f}=e,{class:s=void 0}=e,{variant:r="default"}=e,{size:c="default"}=e,{pressed:m=void 0}=e;function v(l){m=l,o(0,m)}function h(l){D.call(this,i,l)}return i.$$set=l=>{e=u(u({},e),C(l)),o(4,a=_(e,t)),"class"in l&&o(1,s=l.class),"variant"in l&&o(2,r=l.variant),"size"in l&&o(3,c=l.size),"pressed"in l&&o(0,m=l.pressed),"$$scope"in l&&o(8,f=l.$$scope)},[m,s,r,c,a,n,v,h,f]}class Z extends E{constructor(e){super(),F(this,e,L,K,z,{class:1,variant:2,size:3,pressed:0})}}export{Z as T};