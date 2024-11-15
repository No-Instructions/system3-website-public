import{s as T,d as p,i as g,f as z,t as E,z as U,n as j,g as S,j as w,p as F,B as D,C as V,c as k,h as q,q as A,b as O,W as B,e as I,k as R,a3 as J}from"./scheduler.D_DiFEDa.js";import{S as M,i as W,d,t as _,a as c,m as b,c as h,b as v}from"./index.uqldPLAT.js";import{g as G,a as H}from"./spread.CgU5AtxT.js";import{z as Y}from"./index.Cj8yNO9G.js";import{S as K,s as L,z as Q}from"./index.DhfbqFPB.js";import"./index.DYMvb8Iz.js";import{e as X,C as Z,a as y,F as x,b as ee,c as te,t as N}from"./form-demo.I_FsgVaC.js";import{p as re}from"./stores.CojdI0bh.js";import{R as se,V as ae,S as ne,a as le,b as P}from"./index.CIJ4llF1.js";function me(o){let t;return{c(){t=E("Email")},l(s){t=z(s,"Email")},m(s,r){g(s,t,r)},d(s){s&&p(t)}}}function oe(o){let t,s;return t=new ae({props:{placeholder:"Select a verified email to display"}}),{c(){v(t.$$.fragment)},l(r){h(t.$$.fragment,r)},m(r,l){b(t,r,l),s=!0},p:j,i(r){s||(c(t.$$.fragment,r),s=!0)},o(r){_(t.$$.fragment,r),s=!1},d(r){d(t,r)}}}function fe(o){let t,s,r,l,n,f;return t=new P({props:{value:"m@example.com",label:"m@example.com"}}),r=new P({props:{value:"m@google.com",label:"m@google.com"}}),n=new P({props:{value:"m@support.com",label:"m@support.com"}}),{c(){v(t.$$.fragment),s=w(),v(r.$$.fragment),l=w(),v(n.$$.fragment)},l(e){h(t.$$.fragment,e),s=S(e),h(r.$$.fragment,e),l=S(e),h(n.$$.fragment,e)},m(e,m){b(t,e,m),g(e,s,m),b(r,e,m),g(e,l,m),b(n,e,m),f=!0},p:j,i(e){f||(c(t.$$.fragment,e),c(r.$$.fragment,e),c(n.$$.fragment,e),f=!0)},o(e){_(t.$$.fragment,e),_(r.$$.fragment,e),_(n.$$.fragment,e),f=!1},d(e){e&&(p(s),p(l)),d(t,e),d(r,e),d(n,e)}}}function $e(o){let t,s,r,l;const n=[o[9]];let f={$$slots:{default:[oe]},$$scope:{ctx:o}};for(let e=0;e<n.length;e+=1)f=U(f,n[e]);return t=new ne({props:f}),r=new le({props:{$$slots:{default:[fe]},$$scope:{ctx:o}}}),{c(){v(t.$$.fragment),s=w(),v(r.$$.fragment)},l(e){h(t.$$.fragment,e),s=S(e),h(r.$$.fragment,e)},m(e,m){b(t,e,m),g(e,s,m),b(r,e,m),l=!0},p(e,m){const i=m&512?G(n,[H(e[9])]):{};m&1024&&(i.$$scope={dirty:m,ctx:e}),t.$set(i);const a={};m&1024&&(a.$$scope={dirty:m,ctx:e}),r.$set(a)},i(e){l||(c(t.$$.fragment,e),c(r.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),_(r.$$.fragment,e),l=!1},d(e){e&&p(s),d(t,e),d(r,e)}}}function ie(o){let t,s,r,l,n,f,e,m,i;return t=new y({props:{$$slots:{default:[me]},$$scope:{ctx:o}}}),r=new se({props:{selected:o[1],onSelectedChange:o[6],$$slots:{default:[$e]},$$scope:{ctx:o}}}),{c(){v(t.$$.fragment),s=w(),v(r.$$.fragment),l=w(),n=q("input"),this.h()},l(a){h(t.$$.fragment,a),s=S(a),h(r.$$.fragment,a),l=S(a),n=k(a,"INPUT",{name:!0}),this.h()},h(){n.hidden=!0,F(n,"name",f=o[9].name)},m(a,$){b(t,a,$),g(a,s,$),b(r,a,$),g(a,l,$),g(a,n,$),D(n,o[0].email),e=!0,m||(i=V(n,"input",o[7]),m=!0)},p(a,$){const u={};$&1024&&(u.$$scope={dirty:$,ctx:a}),t.$set(u);const C={};$&2&&(C.selected=a[1]),$&1&&(C.onSelectedChange=a[6]),$&1536&&(C.$$scope={dirty:$,ctx:a}),r.$set(C),(!e||$&512&&f!==(f=a[9].name))&&F(n,"name",f),$&1&&n.value!==a[0].email&&D(n,a[0].email)},i(a){e||(c(t.$$.fragment,a),c(r.$$.fragment,a),e=!0)},o(a){_(t.$$.fragment,a),_(r.$$.fragment,a),e=!1},d(a){a&&(p(s),p(l),p(n)),d(t,a),d(r,a),m=!1,i()}}}function ue(o){let t,s,r="email settings",l;return{c(){t=E("You can manage email address in your "),s=q("a"),s.textContent=r,l=E("."),this.h()},l(n){t=z(n,"You can manage email address in your "),s=k(n,"A",{href:!0,"data-svelte-h":!0}),A(s)!=="svelte-pnyatx"&&(s.textContent=r),l=z(n,"."),this.h()},h(){F(s,"href","/examples/forms")},m(n,f){g(n,t,f),g(n,s,f),g(n,l,f)},p:j,d(n){n&&(p(t),p(s),p(l))}}}function pe(o){let t,s,r,l,n,f;return t=new Z({props:{$$slots:{default:[ie,({attrs:e})=>({9:e}),({attrs:e})=>e?512:0]},$$scope:{ctx:o}}}),r=new x({props:{$$slots:{default:[ue]},$$scope:{ctx:o}}}),n=new ee({}),{c(){v(t.$$.fragment),s=w(),v(r.$$.fragment),l=w(),v(n.$$.fragment)},l(e){h(t.$$.fragment,e),s=S(e),h(r.$$.fragment,e),l=S(e),h(n.$$.fragment,e)},m(e,m){b(t,e,m),g(e,s,m),b(r,e,m),g(e,l,m),b(n,e,m),f=!0},p(e,m){const i={};m&1539&&(i.$$scope={dirty:m,ctx:e}),t.$set(i);const a={};m&1024&&(a.$$scope={dirty:m,ctx:e}),r.$set(a)},i(e){f||(c(t.$$.fragment,e),c(r.$$.fragment,e),c(n.$$.fragment,e),f=!0)},o(e){_(t.$$.fragment,e),_(r.$$.fragment,e),_(n.$$.fragment,e),f=!1},d(e){e&&(p(s),p(l)),d(t,e),d(r,e),d(n,e)}}}function _e(o){let t;return{c(){t=E("Submit")},l(s){t=z(s,"Submit")},m(s,r){g(s,t,r)},d(s){s&&p(t)}}}function ce(o){let t,s;return t=new K({props:{data:o[0]}}),{c(){v(t.$$.fragment)},l(r){h(t.$$.fragment,r)},m(r,l){b(t,r,l),s=!0},p(r,l){const n={};l&1&&(n.data=r[0]),t.$set(n)},i(r){s||(c(t.$$.fragment,r),s=!0)},o(r){_(t.$$.fragment,r),s=!1},d(r){d(t,r)}}}function ge(o){let t,s,r,l,n,f,e,m;s=new X({props:{form:o[2],name:"email",$$slots:{default:[pe]},$$scope:{ctx:o}}}),l=new te({props:{$$slots:{default:[_e]},$$scope:{ctx:o}}});let i=ce(o);return{c(){t=q("form"),v(s.$$.fragment),r=w(),v(l.$$.fragment),n=w(),i&&i.c(),this.h()},l(a){t=k(a,"FORM",{method:!0,action:!0,class:!0});var $=I(t);h(s.$$.fragment,$),r=S($),h(l.$$.fragment,$),n=S($),i&&i.l($),$.forEach(p),this.h()},h(){F(t,"method","POST"),F(t,"action","/?/select"),F(t,"class","w-2/3 space-y-6")},m(a,$){g(a,t,$),b(s,t,null),O(t,r),b(l,t,null),O(t,n),i&&i.m(t,null),f=!0,e||(m=B(o[4].call(null,t)),e=!0)},p(a,[$]){const u={};$&1027&&(u.$$scope={dirty:$,ctx:a}),s.$set(u);const C={};$&1024&&(C.$$scope={dirty:$,ctx:a}),l.$set(C),i.p(a,$)},i(a){f||(c(s.$$.fragment,a),c(l.$$.fragment,a),c(i),f=!0)},o(a){_(s.$$.fragment,a),_(l.$$.fragment,a),_(i),f=!1},d(a){a&&p(t),d(s),d(l),i&&i.d(),e=!1,m()}}}const de=Y.object({email:Y.string({required_error:"Please select an email to display"}).email()});function be(o,t,s){let r,l,n;R(o,re,u=>s(8,n=u));let{form:f=n.data.select}=t;const e=L(f,{validators:Q(de),onUpdated:({form:u})=>{u.valid?N.success(`You submitted ${JSON.stringify(u.data,null,2)}`):N.error("Please fix the errors in the form.")}}),{form:m,enhance:i}=e;R(o,m,u=>s(0,l=u));const a=u=>{u&&J(m,l.email=u.value,l)};function $(){l.email=this.value,m.set(l)}return o.$$set=u=>{"form"in u&&s(5,f=u.form)},o.$$.update=()=>{o.$$.dirty&1&&s(1,r=l.email?{label:l.email,value:l.email}:void 0)},[l,r,e,m,i,f,a,$]}class je extends M{constructor(t){super(),W(this,t,be,ge,T,{form:5})}}export{je as default,de as formSchema};
