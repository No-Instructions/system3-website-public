import{s as u,z as _,l as p,u as g,m as d,o as $,D as c,E as h}from"./scheduler.D_DiFEDa.js";import{S as v,i as A,t as m,a as f,d as b,m as S,c as j,b as q}from"./index.uqldPLAT.js";import{g as z,a as C}from"./spread.CgU5AtxT.js";import"./index.9B820uFl.js";import{A as D}from"./aspect-ratio.D_PlgU41.js";function E(r){let t;const a=r[2].default,s=p(a,r,r[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,e){s&&s.m(o,e),t=!0},p(o,e){s&&s.p&&(!t||e&8)&&g(s,a,o,o[3],t?$(a,o[3],e,null):d(o[3]),null)},i(o){t||(f(s,o),t=!0)},o(o){m(s,o),t=!1},d(o){s&&s.d(o)}}}function P(r){let t,a;const s=[{ratio:r[0]},r[1]];let o={$$slots:{default:[E]},$$scope:{ctx:r}};for(let e=0;e<s.length;e+=1)o=_(o,s[e]);return t=new D({props:o}),{c(){q(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,i){S(t,e,i),a=!0},p(e,[i]){const n=i&3?z(s,[i&1&&{ratio:e[0]},i&2&&C(e[1])]):{};i&8&&(n.$$scope={dirty:i,ctx:e}),t.$set(n)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){m(t.$$.fragment,e),a=!1},d(e){b(t,e)}}}function k(r,t,a){const s=["ratio"];let o=c(t,s),{$$slots:e={},$$scope:i}=t,{ratio:n=4/3}=t;return r.$$set=l=>{t=_(_({},t),h(l)),a(1,o=c(t,s)),"ratio"in l&&a(0,n=l.ratio),"$$scope"in l&&a(3,i=l.$$scope)},[n,o,e,i]}class J extends v{constructor(t){super(),A(this,t,k,P,u,{ratio:0})}}export{J as A};
