import{s as V,d as m,i as M,b as h,a2 as j,p as n,c as d,e as g,g as x,f as E,h as _,j as I,t as S}from"./scheduler.D_DiFEDa.js";import{S as z,i as A,d as B,t as C,a as D,m as F,c as N,b as O}from"./index.uqldPLAT.js";import{e as q,u as T,d as R}from"./each.8prNeyls.js";import"./index.9B820uFl.js";import"./utils.C8VhKZ24.js";import{S as U}from"./scroll-area.BQcScEIp.js";function P(i,e,t){const a=i.slice();return a[1]=e[t],a}function G(i,e){let t,a,o,c,s,r,l,p,w=e[1].artist+"",v,$;return{key:i,first:null,c(){t=_("figure"),a=_("div"),o=_("img"),s=I(),r=_("figcaption"),l=S(`Photo by
					`),p=_("span"),v=S(w),$=I(),this.h()},l(u){t=d(u,"FIGURE",{class:!0});var f=g(t);a=d(f,"DIV",{class:!0});var k=g(a);o=d(k,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),k.forEach(m),s=x(f),r=d(f,"FIGCAPTION",{class:!0});var b=g(r);l=E(b,`Photo by
					`),p=d(b,"SPAN",{class:!0});var y=g(p);v=E(y,w),y.forEach(m),b.forEach(m),$=x(f),f.forEach(m),this.h()},h(){j(o.src,c=e[1].art)||n(o,"src",c),n(o,"alt",`Photo by ${e[1].artist}`),n(o,"class","aspect-[3/4] h-fit w-fit object-cover"),n(o,"width",300),n(o,"height",400),n(a,"class","overflow-hidden rounded-md"),n(p,"class","font-semibold text-foreground"),n(r,"class","pt-2 text-xs text-muted-foreground"),n(t,"class","shrink-0"),this.first=t},m(u,f){M(u,t,f),h(t,a),h(a,o),h(t,s),h(t,r),h(r,l),h(r,p),h(p,v),h(t,$)},p(u,f){e=u},d(u){u&&m(t)}}}function H(i){let e,t=[],a=new Map,o=q(i[0]);const c=s=>s[1].artist;for(let s=0;s<o.length;s+=1){let r=P(i,o,s),l=c(r);a.set(l,t[s]=G(l,r))}return{c(){e=_("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=d(s,"DIV",{class:!0});var r=g(e);for(let l=0;l<t.length;l+=1)t[l].l(r);r.forEach(m),this.h()},h(){n(e,"class","flex w-max space-x-4 p-4")},m(s,r){M(s,e,r);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(s,r){r&1&&(o=q(s[0]),t=T(t,r,c,1,s,o,a,e,R,G,null,P))},d(s){s&&m(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function J(i){let e,t;return e=new U({props:{class:"w-96 whitespace-nowrap rounded-md border",orientation:"horizontal",$$slots:{default:[H]},$$scope:{ctx:i}}}),{c(){O(e.$$.fragment)},l(a){N(e.$$.fragment,a)},m(a,o){F(e,a,o),t=!0},p(a,[o]){const c={};o&16&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){t||(D(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){B(e,a)}}}function K(i){return[[{artist:"Ornella Binni",art:"https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"},{artist:"Tom Byrom",art:"https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"},{artist:"Vladimir Malyavko",art:"https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"}]]}class tt extends z{constructor(e){super(),A(this,e,K,J,V,{})}}export{tt as default};
