import{s as z,z as b,d as m,n as k,A as S,i as A,c as w,e as D,h as E,D as y,E as P,b as f,p as I,g as V,j}from"./scheduler.D_DiFEDa.js";import{S as C,i as N,d as p,t as _,a as h,m as g,c as v,b as $}from"./index.uqldPLAT.js";import{g as B}from"./spread.CgU5AtxT.js";import{c as q}from"./utils.C8VhKZ24.js";function F(i){let e,a,l=[{class:a=q("animate-pulse rounded-md bg-muted",i[0])},i[1]],s={};for(let t=0;t<l.length;t+=1)s=b(s,l[t]);return{c(){e=E("div"),this.h()},l(t){e=w(t,"DIV",{class:!0}),D(e).forEach(m),this.h()},h(){S(e,s)},m(t,r){A(t,e,r)},p(t,[r]){S(e,s=B(l,[r&1&&a!==(a=q("animate-pulse rounded-md bg-muted",t[0]))&&{class:a},r&2&&t[1]]))},i:k,o:k,d(t){t&&m(e)}}}function G(i,e,a){const l=["class"];let s=y(e,l),{class:t=void 0}=e;return i.$$set=r=>{e=b(b({},e),P(r)),a(1,s=y(e,l)),"class"in r&&a(0,t=r.class)},[t,s]}class x extends C{constructor(e){super(),N(this,e,G,F,z,{class:0})}}function H(i){let e,a,l,s,t,r,o,d;return a=new x({props:{class:"h-12 w-12 rounded-full"}}),t=new x({props:{class:"h-4 w-[250px]"}}),o=new x({props:{class:"h-4 w-[200px]"}}),{c(){e=E("div"),$(a.$$.fragment),l=j(),s=E("div"),$(t.$$.fragment),r=j(),$(o.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var c=D(e);v(a.$$.fragment,c),l=V(c),s=w(c,"DIV",{class:!0});var u=D(s);v(t.$$.fragment,u),r=V(u),v(o.$$.fragment,u),u.forEach(m),c.forEach(m),this.h()},h(){I(s,"class","space-y-2"),I(e,"class","flex items-center space-x-4")},m(n,c){A(n,e,c),g(a,e,null),f(e,l),f(e,s),g(t,s,null),f(s,r),g(o,s,null),d=!0},p:k,i(n){d||(h(a.$$.fragment,n),h(t.$$.fragment,n),h(o.$$.fragment,n),d=!0)},o(n){_(a.$$.fragment,n),_(t.$$.fragment,n),_(o.$$.fragment,n),d=!1},d(n){n&&m(e),p(a),p(t),p(o)}}}class O extends C{constructor(e){super(),N(this,e,null,H,z,{})}}export{O as default};