import{s as d,z as c,d as f,p as m,i as p,c as g,e as h,h as v,D as u,E as b}from"./scheduler.D_DiFEDa.js";import{S as y,i as P,d as x,t as D,a as E,m as S,c as X,b as j}from"./index.uqldPLAT.js";import{g as q,a as z}from"./spread.CgU5AtxT.js";import"./index.9B820uFl.js";import{P as C}from"./progress.DdI88i5Q.js";import{c as _}from"./utils.C8VhKZ24.js";function I(o){let e,a;return{c(){e=v("div"),this.h()},l(s){e=g(s,"DIV",{class:!0,style:!0}),h(e).forEach(f),this.h()},h(){m(e,"class","h-full w-full flex-1 bg-primary transition-all"),m(e,"style",a=`transform: translateX(-${100-100*(o[2]??0)/(o[1]??1)}%)`)},m(s,r){p(s,e,r)},p(s,r){r&6&&a!==(a=`transform: translateX(-${100-100*(s[2]??0)/(s[1]??1)}%)`)&&m(e,"style",a)},d(s){s&&f(e)}}}function N(o){let e,a;const s=[{class:_("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",o[0])},o[3]];let r={$$slots:{default:[I]},$$scope:{ctx:o}};for(let t=0;t<s.length;t+=1)r=c(r,s[t]);return e=new C({props:r}),{c(){j(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,l){S(e,t,l),a=!0},p(t,[l]){const n=l&9?q(s,[l&1&&{class:_("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",t[0])},l&8&&z(t[3])]):{};l&22&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){a||(E(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function V(o,e,a){const s=["class","max","value"];let r=u(e,s),{class:t=void 0}=e,{max:l=100}=e,{value:n=void 0}=e;return o.$$set=i=>{e=c(c({},e),b(i)),a(3,r=u(e,s)),"class"in i&&a(0,t=i.class),"max"in i&&a(1,l=i.max),"value"in i&&a(2,n=i.value)},[t,l,n,r]}class H extends y{constructor(e){super(),P(this,e,V,N,d,{class:0,max:1,value:2})}}export{H as P};
