import{s as B,d as _,i as k,f as O,t as P,z as H,n as J,p as v,g as D,c as E,j as I,h as U,e as j,Z as W,b as M,W as Z,k as N,a3 as R}from"./scheduler.D_DiFEDa.js";import{S as G,i as K,d as w,t as b,a as g,m as C,c as S,b as F,g as L,f as Q}from"./index.uqldPLAT.js";import{e as T}from"./each.8prNeyls.js";import{g as X,a as ee}from"./spread.CgU5AtxT.js";import{z as V}from"./index.Cj8yNO9G.js";import{S as te,s as se,z as ae}from"./index.DhfbqFPB.js";import"./index.DYMvb8Iz.js";import{F as oe,C as re,a as ne,b as le,c as fe,t as Y}from"./form-demo.I_FsgVaC.js";import{p as ie}from"./stores.CojdI0bh.js";import{C as ce}from"./checkbox.Dwm68rfQ.js";import{F as me,a as ue}from"./form-legend.1oOmN2b2.js";function q(l,e,t){const s=l.slice();s[9]=e[t];const r=s[0].items.includes(s[9].id);return s[10]=r,s}function $e(l){let e;return{c(){e=P("Sidebar")},l(t){e=O(t,"Sidebar")},m(t,s){k(t,e,s)},d(t){t&&_(e)}}}function pe(l){let e;return{c(){e=P("Select the items you want to display in the sidebar.")},l(t){e=O(t,"Select the items you want to display in the sidebar.")},m(t,s){k(t,e,s)},d(t){t&&_(e)}}}function _e(l){let e=l[9].label+"",t;return{c(){t=P(e)},l(s){t=O(s,e)},m(s,r){k(s,t,r)},p:J,d(s){s&&_(t)}}}function de(l){let e,t,s,r,f,c,p,$;function u(...o){return l[7](l[9],...o)}const i=[l[13],{checked:l[10]},{onCheckedChange:u}];let n={};for(let o=0;o<i.length;o+=1)n=H(n,i[o]);return e=new ce({props:n}),s=new ne({props:{class:"font-normal",$$slots:{default:[_e]},$$scope:{ctx:l}}}),{c(){F(e.$$.fragment),t=I(),F(s.$$.fragment),r=I(),f=U("input"),this.h()},l(o){S(e.$$.fragment,o),t=D(o),S(s.$$.fragment,o),r=D(o),f=E(o,"INPUT",{type:!0,name:!0}),this.h()},h(){f.hidden=!0,v(f,"type","checkbox"),v(f,"name",c=l[13].name),f.value=l[9].id,f.checked=p=l[10]},m(o,a){C(e,o,a),k(o,t,a),C(s,o,a),k(o,r,a),k(o,f,a),$=!0},p(o,a){l=o;const m=a&8241?X(i,[a&8192&&ee(l[13]),a&1&&{checked:l[10]},a&48&&{onCheckedChange:u}]):{};e.$set(m);const d={};a&16384&&(d.$$scope={dirty:a,ctx:l}),s.$set(d),(!$||a&8192&&c!==(c=l[13].name))&&v(f,"name",c),(!$||a&1&&p!==(p=l[10]))&&(f.checked=p)},i(o){$||(g(e.$$.fragment,o),g(s.$$.fragment,o),$=!0)},o(o){b(e.$$.fragment,o),b(s.$$.fragment,o),$=!1},d(o){o&&(_(t),_(r),_(f)),w(e,o),w(s,o)}}}function x(l){let e,t,s;return t=new re({props:{$$slots:{default:[de,({attrs:r})=>({13:r}),({attrs:r})=>r?8192:0]},$$scope:{ctx:l}}}),{c(){e=U("div"),F(t.$$.fragment),this.h()},l(r){e=E(r,"DIV",{class:!0});var f=j(e);S(t.$$.fragment,f),f.forEach(_),this.h()},h(){v(e,"class","flex flex-row items-start space-x-3")},m(r,f){k(r,e,f),C(t,e,null),s=!0},p(r,f){const c={};f&24577&&(c.$$scope={dirty:f,ctx:r}),t.$set(c)},i(r){s||(g(t.$$.fragment,r),s=!0)},o(r){b(t.$$.fragment,r),s=!1},d(r){r&&_(e),w(t)}}}function he(l){let e,t,s,r,f,c,p,$,u;t=new ue({props:{class:"text-base",$$slots:{default:[$e]},$$scope:{ctx:l}}}),r=new oe({props:{$$slots:{default:[pe]},$$scope:{ctx:l}}});let i=T(A),n=[];for(let a=0;a<i.length;a+=1)n[a]=x(q(l,i,a));const o=a=>b(n[a],1,1,()=>{n[a]=null});return $=new le({}),{c(){e=U("div"),F(t.$$.fragment),s=I(),F(r.$$.fragment),f=I(),c=U("div");for(let a=0;a<n.length;a+=1)n[a].c();p=I(),F($.$$.fragment),this.h()},l(a){e=E(a,"DIV",{class:!0});var m=j(e);S(t.$$.fragment,m),s=D(m),S(r.$$.fragment,m),m.forEach(_),f=D(a),c=E(a,"DIV",{class:!0});var d=j(c);for(let z=0;z<n.length;z+=1)n[z].l(d);p=D(d),S($.$$.fragment,d),d.forEach(_),this.h()},h(){v(e,"class","mb-4"),v(c,"class","space-y-2")},m(a,m){k(a,e,m),C(t,e,null),M(e,s),C(r,e,null),k(a,f,m),k(a,c,m);for(let d=0;d<n.length;d+=1)n[d]&&n[d].m(c,null);M(c,p),C($,c,null),u=!0},p(a,m){const d={};m&16384&&(d.$$scope={dirty:m,ctx:a}),t.$set(d);const z={};if(m&16384&&(z.$$scope={dirty:m,ctx:a}),r.$set(z),m&8241){i=T(A);let h;for(h=0;h<i.length;h+=1){const y=q(a,i,h);n[h]?(n[h].p(y,m),g(n[h],1)):(n[h]=x(y),n[h].c(),g(n[h],1),n[h].m(c,p))}for(L(),h=i.length;h<n.length;h+=1)o(h);Q()}},i(a){if(!u){g(t.$$.fragment,a),g(r.$$.fragment,a);for(let m=0;m<i.length;m+=1)g(n[m]);g($.$$.fragment,a),u=!0}},o(a){b(t.$$.fragment,a),b(r.$$.fragment,a),n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)b(n[m]);b($.$$.fragment,a),u=!1},d(a){a&&(_(e),_(f),_(c)),w(t),w(r),W(n,a),w($)}}}function ge(l){let e;return{c(){e=P("Update display")},l(t){e=O(t,"Update display")},m(t,s){k(t,e,s)},d(t){t&&_(e)}}}function be(l){let e,t;return e=new te({props:{data:l[0]}}),{c(){F(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,r){C(e,s,r),t=!0},p(s,r){const f={};r&1&&(f.data=s[0]),e.$set(f)},i(s){t||(g(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){w(e,s)}}}function ke(l){let e,t,s,r,f,c,p,$;t=new me({props:{form:l[1],name:"items",class:"space-y-0",$$slots:{default:[he]},$$scope:{ctx:l}}}),r=new fe({props:{$$slots:{default:[ge]},$$scope:{ctx:l}}});let u=be(l);return{c(){e=U("form"),F(t.$$.fragment),s=I(),F(r.$$.fragment),f=I(),u&&u.c(),this.h()},l(i){e=E(i,"FORM",{action:!0,method:!0,class:!0});var n=j(e);S(t.$$.fragment,n),s=D(n),S(r.$$.fragment,n),f=D(n),u&&u.l(n),n.forEach(_),this.h()},h(){v(e,"action","/?/checkboxMultiple"),v(e,"method","POST"),v(e,"class","space-y-8")},m(i,n){k(i,e,n),C(t,e,null),M(e,s),C(r,e,null),M(e,f),u&&u.m(e,null),c=!0,p||($=Z(l[3].call(null,e)),p=!0)},p(i,[n]){const o={};n&16385&&(o.$$scope={dirty:n,ctx:i}),t.$set(o);const a={};n&16384&&(a.$$scope={dirty:n,ctx:i}),r.$set(a),u.p(i,n)},i(i){c||(g(t.$$.fragment,i),g(r.$$.fragment,i),g(u),c=!0)},o(i){b(t.$$.fragment,i),b(r.$$.fragment,i),b(u),c=!1},d(i){i&&_(e),w(t),w(r),u&&u.d(),p=!1,$()}}}const A=[{id:"recents",label:"Recents"},{id:"home",label:"Home"},{id:"applications",label:"Applications"},{id:"desktop",label:"Desktop"},{id:"downloads",label:"Downloads"},{id:"documents",label:"Documents"}],ve=V.object({items:V.array(V.string()).refine(l=>l.some(e=>e),{message:"You have to select at least one item."})});function we(l,e,t){let s,r;N(l,ie,o=>t(8,r=o));let{form:f=r.data.checkboxMultiple}=e;const c=se(f,{validators:ae(ve),onUpdated:({form:o})=>{o.valid?Y.success(`You submitted ${JSON.stringify(o.data,null,2)}`):Y.error("Please fix the errors in the form.")}}),{form:p,enhance:$}=c;N(l,p,o=>t(0,s=o));function u(o){R(p,s.items=[...s.items,o],s)}function i(o){R(p,s.items=s.items.filter(a=>a!==o),s)}const n=(o,a)=>{a?u(o.id):i(o.id)};return l.$$set=o=>{"form"in o&&t(6,f=o.form)},[s,c,p,$,u,i,f,n]}class Pe extends G{constructor(e){super(),K(this,e,we,ke,B,{form:6})}}export{Pe as default,ve as formSchema};