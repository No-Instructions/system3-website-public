import{s as A,z as j,l as J,u as K,m as O,o as Q,E as q,d as u,i as k,f as B,t as H,g as M,j as E,b as d,p as V,c as S,e as Y,h as D,q as R,n as U}from"./scheduler.D_DiFEDa.js";import{S as F,i as G,t as p,a as g,d as h,m as v,c as b,b as w}from"./index.uqldPLAT.js";import{e as L,u as W,d as X}from"./each.8prNeyls.js";import{g as Z,a as y}from"./spread.CgU5AtxT.js";import{I as ee}from"./Icon.CgGvhtnL.js";import{C as te}from"./check.sDi2MZ_6.js";import{B as se}from"./index.oJb_0on9.js";import{C as ae}from"./card.DfXx_qAa.js";import{C as re}from"./card-content.XxJ7Y_ju.js";import{C as ne}from"./card-description.CCiZZL97.js";import{C as oe}from"./card-footer.B1MFR6va.js";import{C as le,a as fe}from"./card-title.CJIB0edQ.js";import{S as ce}from"./switch.Bde0_6wh.js";function ie(f){let e;const a=f[2].default,t=J(a,f,f[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&8)&&K(t,a,r,r[3],e?Q(a,r[3],s,null):O(r[3]),null)},i(r){e||(g(t,r),e=!0)},o(r){p(t,r),e=!1},d(r){t&&t.d(r)}}}function $e(f){let e,a;const t=[{name:"bell-ring"},f[1],{iconNode:f[0]}];let r={$$slots:{default:[ie]},$$scope:{ctx:f}};for(let s=0;s<t.length;s+=1)r=j(r,t[s]);return e=new ee({props:r}),{c(){w(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,l){v(e,s,l),a=!0},p(s,[l]){const n=l&3?Z(t,[t[0],l&2&&y(s[1]),l&1&&{iconNode:s[0]}]):{};l&8&&(n.$$scope={dirty:l,ctx:s}),e.$set(n)},i(s){a||(g(e.$$.fragment,s),a=!0)},o(s){p(e.$$.fragment,s),a=!1},d(s){h(e,s)}}}function ue(f,e,a){let{$$slots:t={},$$scope:r}=e;const s=[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}]];return f.$$set=l=>{a(1,e=j(j({},e),q(l))),"$$scope"in l&&a(3,r=l.$$scope)},e=q(e),[s,e,t,r]}class me extends F{constructor(e){super(),G(this,e,ue,$e,A,{})}}function T(f,e,a){const t=f.slice();return t[1]=e[a],t[3]=a,t}function _e(f){let e;return{c(){e=H("Notifications")},l(a){e=B(a,"Notifications")},m(a,t){k(a,e,t)},d(a){a&&u(e)}}}function de(f){let e;return{c(){e=H("You have 3 unread messages.")},l(a){e=B(a,"You have 3 unread messages.")},m(a,t){k(a,e,t)},d(a){a&&u(e)}}}function pe(f){let e,a,t,r;return e=new fe({props:{$$slots:{default:[_e]},$$scope:{ctx:f}}}),t=new ne({props:{$$slots:{default:[de]},$$scope:{ctx:f}}}),{c(){w(e.$$.fragment),a=E(),w(t.$$.fragment)},l(s){b(e.$$.fragment,s),a=M(s),b(t.$$.fragment,s)},m(s,l){v(e,s,l),k(s,a,l),v(t,s,l),r=!0},p(s,l){const n={};l&16&&(n.$$scope={dirty:l,ctx:s}),e.$set(n);const i={};l&16&&(i.$$scope={dirty:l,ctx:s}),t.$set(i)},i(s){r||(g(e.$$.fragment,s),g(t.$$.fragment,s),r=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),r=!1},d(s){s&&u(a),h(e,s),h(t,s)}}}function z(f,e){let a,t,r,s,l,n=e[1].title+"",i,m,$,x=e[1].description+"",I,N;return{key:f,first:null,c(){a=D("div"),t=D("span"),r=E(),s=D("div"),l=D("p"),i=H(n),m=E(),$=D("p"),I=H(x),N=E(),this.h()},l(C){a=S(C,"DIV",{class:!0});var o=Y(a);t=S(o,"SPAN",{class:!0}),Y(t).forEach(u),r=M(o),s=S(o,"DIV",{class:!0});var c=Y(s);l=S(c,"P",{class:!0});var _=Y(l);i=B(_,n),_.forEach(u),m=M(c),$=S(c,"P",{class:!0});var P=Y($);I=B(P,x),P.forEach(u),c.forEach(u),N=M(o),o.forEach(u),this.h()},h(){V(t,"class","flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"),V(l,"class","text-sm font-medium leading-none"),V($,"class","text-sm text-muted-foreground"),V(s,"class","space-y-1"),V(a,"class","mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"),this.first=a},m(C,o){k(C,a,o),d(a,t),d(a,r),d(a,s),d(s,l),d(l,i),d(s,m),d(s,$),d($,I),d(a,N)},p(C,o){e=C},d(C){C&&u(a)}}}function ge(f){let e,a,t,r,s='<p class="text-sm font-medium leading-none">Push Notifications</p> <p class="text-sm text-muted-foreground">Send notifications to device.</p>',l,n,i,m,$=[],x=new Map,I;a=new me({}),n=new ce({});let N=L(f[0]);const C=o=>o[3];for(let o=0;o<N.length;o+=1){let c=T(f,N,o),_=C(c);x.set(_,$[o]=z(_,c))}return{c(){e=D("div"),w(a.$$.fragment),t=E(),r=D("div"),r.innerHTML=s,l=E(),w(n.$$.fragment),i=E(),m=D("div");for(let o=0;o<$.length;o+=1)$[o].c();this.h()},l(o){e=S(o,"DIV",{class:!0});var c=Y(e);b(a.$$.fragment,c),t=M(c),r=S(c,"DIV",{class:!0,"data-svelte-h":!0}),R(r)!=="svelte-g15cb1"&&(r.innerHTML=s),l=M(c),b(n.$$.fragment,c),c.forEach(u),i=M(o),m=S(o,"DIV",{});var _=Y(m);for(let P=0;P<$.length;P+=1)$[P].l(_);_.forEach(u),this.h()},h(){V(r,"class","flex-1 space-y-1"),V(e,"class","flex items-center space-x-4 rounded-md border p-4")},m(o,c){k(o,e,c),v(a,e,null),d(e,t),d(e,r),d(e,l),v(n,e,null),k(o,i,c),k(o,m,c);for(let _=0;_<$.length;_+=1)$[_]&&$[_].m(m,null);I=!0},p(o,c){c&1&&(N=L(o[0]),$=W($,c,C,1,o,N,x,m,X,z,null,T))},i(o){I||(g(a.$$.fragment,o),g(n.$$.fragment,o),I=!0)},o(o){p(a.$$.fragment,o),p(n.$$.fragment,o),I=!1},d(o){o&&(u(e),u(i),u(m)),h(a),h(n);for(let c=0;c<$.length;c+=1)$[c].d()}}}function he(f){let e,a,t;return e=new te({props:{class:"mr-2 h-4 w-4"}}),{c(){w(e.$$.fragment),a=H(" Mark all as read")},l(r){b(e.$$.fragment,r),a=B(r," Mark all as read")},m(r,s){v(e,r,s),k(r,a,s),t=!0},p:U,i(r){t||(g(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){r&&u(a),h(e,r)}}}function ve(f){let e,a;return e=new se({props:{class:"w-full",$$slots:{default:[he]},$$scope:{ctx:f}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){v(e,t,r),a=!0},p(t,r){const s={};r&16&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){h(e,t)}}}function be(f){let e,a,t,r,s,l;return e=new le({props:{$$slots:{default:[pe]},$$scope:{ctx:f}}}),t=new re({props:{class:"grid gap-4",$$slots:{default:[ge]},$$scope:{ctx:f}}}),s=new oe({props:{$$slots:{default:[ve]},$$scope:{ctx:f}}}),{c(){w(e.$$.fragment),a=E(),w(t.$$.fragment),r=E(),w(s.$$.fragment)},l(n){b(e.$$.fragment,n),a=M(n),b(t.$$.fragment,n),r=M(n),b(s.$$.fragment,n)},m(n,i){v(e,n,i),k(n,a,i),v(t,n,i),k(n,r,i),v(s,n,i),l=!0},p(n,i){const m={};i&16&&(m.$$scope={dirty:i,ctx:n}),e.$set(m);const $={};i&16&&($.$$scope={dirty:i,ctx:n}),t.$set($);const x={};i&16&&(x.$$scope={dirty:i,ctx:n}),s.$set(x)},i(n){l||(g(e.$$.fragment,n),g(t.$$.fragment,n),g(s.$$.fragment,n),l=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),p(s.$$.fragment,n),l=!1},d(n){n&&(u(a),u(r)),h(e,n),h(t,n),h(s,n)}}}function we(f){let e,a;return e=new ae({props:{class:"w-[380px]",$$slots:{default:[be]},$$scope:{ctx:f}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){v(e,t,r),a=!0},p(t,[r]){const s={};r&16&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){h(e,t)}}}function Ce(f){return[[{title:"Your call has been confirmed.",description:"1 hour ago"},{title:"You have a new message!",description:"1 hour ago"},{title:"Your subscription is expiring soon!",description:"2 hours ago"}]]}class je extends F{constructor(e){super(),G(this,e,Ce,we,A,{})}}export{je as default};