import{s as d,z as c,d as f,p as m,i as g,c as p,e as h,h as v,D as u,E as b}from"./scheduler.D_DiFEDa.js";import{S as y,i as P,d as x,t as D,a as E,m as S,c as X,b as j}from"./index.uqldPLAT.js";import{g as q,a as z}from"./spread.CgU5AtxT.js";import"./index.9B820uFl.js";import{P as C}from"./progress.DdI88i5Q.js";import{c as _}from"./utils.C8VhKZ24.js";function I(o){let e,a;return{c(){e=v("div"),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0}),h(e).forEach(f),this.h()},h(){m(e,"class","h-full w-full flex-1 bg-primary transition-all"),m(e,"style",a=`transform: translateX(-${100-100*(o[2]??0)/(o[1]??1)}%)`)},m(t,r){g(t,e,r)},p(t,r){r&6&&a!==(a=`transform: translateX(-${100-100*(t[2]??0)/(t[1]??1)}%)`)&&m(e,"style",a)},d(t){t&&f(e)}}}function N(o){let e,a;const t=[{class:_("relative h-4 w-full overflow-hidden rounded-full bg-secondary",o[0])},o[3]];let r={$$slots:{default:[I]},$$scope:{ctx:o}};for(let s=0;s<t.length;s+=1)r=c(r,t[s]);return e=new C({props:r}),{c(){j(e.$$.fragment)},l(s){X(e.$$.fragment,s)},m(s,l){S(e,s,l),a=!0},p(s,[l]){const i=l&9?q(t,[l&1&&{class:_("relative h-4 w-full overflow-hidden rounded-full bg-secondary",s[0])},l&8&&z(s[3])]):{};l&22&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){a||(E(e.$$.fragment,s),a=!0)},o(s){D(e.$$.fragment,s),a=!1},d(s){x(e,s)}}}function V(o,e,a){const t=["class","max","value"];let r=u(e,t),{class:s=void 0}=e,{max:l=100}=e,{value:i=void 0}=e;return o.$$set=n=>{e=c(c({},e),b(n)),a(3,r=u(e,t)),"class"in n&&a(0,s=n.class),"max"in n&&a(1,l=n.max),"value"in n&&a(2,i=n.value)},[s,l,i,r]}class H extends y{constructor(e){super(),P(this,e,V,N,d,{class:0,max:1,value:2})}}export{H as P};
