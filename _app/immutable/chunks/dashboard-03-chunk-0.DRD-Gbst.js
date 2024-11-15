import{s as Te,d as m,i as D,f as k,t as R,n as le,b as u,p as x,c as b,e as T,g as v,q as ae,h as E,j as h}from"./scheduler.D_DiFEDa.js";import{S as Ve,i as Se,d as c,t as i,a as p,m as g,c as d,b as _}from"./index.uqldPLAT.js";import{R as Ce,B as Le,T as Me}from"./turtle.C4IjDqUZ.js";import{I as we}from"./input.BjqzFpqL.js";import{T as ke}from"./textarea.B_luFjlU.js";import{L as re}from"./label.CKjN0RUN.js";import{R as be,S as Ee,V as De,a as Ie,b as ne}from"./index.CIJ4llF1.js";function Re(o){let e;return{c(){e=R("Model")},l(t){e=k(t,"Model")},m(t,r){D(t,e,r)},d(t){t&&m(e)}}}function He(o){let e,t;return e=new De({props:{placeholder:"Select a model"}}),{c(){_(e.$$.fragment)},l(r){d(e.$$.fragment,r)},m(r,l){g(e,r,l),t=!0},p:le,i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){i(e.$$.fragment,r),t=!1},d(r){c(e,r)}}}function Ne(o){let e,t,r,l,n=`<p>Neural
										<span class="font-medium text-foreground">Genesis</span></p> <p class="text-xs" data-description="">Our fastest model for general use cases.</p>`,$;return t=new Ce({props:{class:"size-5"}}),{c(){e=E("div"),_(t.$$.fragment),r=h(),l=E("div"),l.innerHTML=n,this.h()},l(s){e=b(s,"DIV",{class:!0});var a=T(e);d(t.$$.fragment,a),r=v(a),l=b(a,"DIV",{class:!0,"data-svelte-h":!0}),ae(l)!=="svelte-1vswftd"&&(l.innerHTML=n),a.forEach(m),this.h()},h(){x(l,"class","grid gap-0.5"),x(e,"class","flex items-start gap-3 text-muted-foreground")},m(s,a){D(s,e,a),g(t,e,null),u(e,r),u(e,l),$=!0},p:le,i(s){$||(p(t.$$.fragment,s),$=!0)},o(s){i(t.$$.fragment,s),$=!1},d(s){s&&m(e),c(t)}}}function Ae(o){let e,t,r,l,n=`<p>Neural
										<span class="font-medium text-foreground">Explorer</span></p> <p class="text-xs" data-description="">Performance and speed for efficiency.</p>`,$;return t=new Le({props:{class:"size-5"}}),{c(){e=E("div"),_(t.$$.fragment),r=h(),l=E("div"),l.innerHTML=n,this.h()},l(s){e=b(s,"DIV",{class:!0});var a=T(e);d(t.$$.fragment,a),r=v(a),l=b(a,"DIV",{class:!0,"data-svelte-h":!0}),ae(l)!=="svelte-1pm3j9i"&&(l.innerHTML=n),a.forEach(m),this.h()},h(){x(l,"class","grid gap-0.5"),x(e,"class","flex items-start gap-3 text-muted-foreground")},m(s,a){D(s,e,a),g(t,e,null),u(e,r),u(e,l),$=!0},p:le,i(s){$||(p(t.$$.fragment,s),$=!0)},o(s){i(t.$$.fragment,s),$=!1},d(s){s&&m(e),c(t)}}}function qe(o){let e,t,r,l,n=`<p>Neural
										<span class="font-medium text-foreground">Quantum</span></p> <p class="text-xs" data-description="">The most powerful model for complex computations.</p>`,$;return t=new Me({props:{class:"size-5"}}),{c(){e=E("div"),_(t.$$.fragment),r=h(),l=E("div"),l.innerHTML=n,this.h()},l(s){e=b(s,"DIV",{class:!0});var a=T(e);d(t.$$.fragment,a),r=v(a),l=b(a,"DIV",{class:!0,"data-svelte-h":!0}),ae(l)!=="svelte-19v0c2y"&&(l.innerHTML=n),a.forEach(m),this.h()},h(){x(l,"class","grid gap-0.5"),x(e,"class","flex items-start gap-3 text-muted-foreground")},m(s,a){D(s,e,a),g(t,e,null),u(e,r),u(e,l),$=!0},p:le,i(s){$||(p(t.$$.fragment,s),$=!0)},o(s){i(t.$$.fragment,s),$=!1},d(s){s&&m(e),c(t)}}}function ze(o){let e,t,r,l,n,$;return e=new ne({props:{value:"genesis",$$slots:{default:[Ne]},$$scope:{ctx:o}}}),r=new ne({props:{value:"explorer",$$slots:{default:[Ae]},$$scope:{ctx:o}}}),n=new ne({props:{value:"quantum",$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){_(e.$$.fragment),t=h(),_(r.$$.fragment),l=h(),_(n.$$.fragment)},l(s){d(e.$$.fragment,s),t=v(s),d(r.$$.fragment,s),l=v(s),d(n.$$.fragment,s)},m(s,a){g(e,s,a),D(s,t,a),g(r,s,a),D(s,l,a),g(n,s,a),$=!0},p(s,a){const C={};a&1&&(C.$$scope={dirty:a,ctx:s}),e.$set(C);const I={};a&1&&(I.$$scope={dirty:a,ctx:s}),r.$set(I);const L={};a&1&&(L.$$scope={dirty:a,ctx:s}),n.$set(L)},i(s){$||(p(e.$$.fragment,s),p(r.$$.fragment,s),p(n.$$.fragment,s),$=!0)},o(s){i(e.$$.fragment,s),i(r.$$.fragment,s),i(n.$$.fragment,s),$=!1},d(s){s&&(m(t),m(l)),c(e,s),c(r,s),c(n,s)}}}function Fe(o){let e,t,r,l;return e=new Ee({props:{id:"model",class:"items-start [&_[data-description]]:hidden",$$slots:{default:[He]},$$scope:{ctx:o}}}),r=new Ie({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}}),{c(){_(e.$$.fragment),t=h(),_(r.$$.fragment)},l(n){d(e.$$.fragment,n),t=v(n),d(r.$$.fragment,n)},m(n,$){g(e,n,$),D(n,t,$),g(r,n,$),l=!0},p(n,$){const s={};$&1&&(s.$$scope={dirty:$,ctx:n}),e.$set(s);const a={};$&1&&(a.$$scope={dirty:$,ctx:n}),r.$set(a)},i(n){l||(p(e.$$.fragment,n),p(r.$$.fragment,n),l=!0)},o(n){i(e.$$.fragment,n),i(r.$$.fragment,n),l=!1},d(n){n&&m(t),c(e,n),c(r,n)}}}function Ge(o){let e;return{c(){e=R("Temperature")},l(t){e=k(t,"Temperature")},m(t,r){D(t,e,r)},d(t){t&&m(e)}}}function Pe(o){let e;return{c(){e=R("Top P")},l(t){e=k(t,"Top P")},m(t,r){D(t,e,r)},d(t){t&&m(e)}}}function je(o){let e;return{c(){e=R("Top K")},l(t){e=k(t,"Top K")},m(t,r){D(t,e,r)},d(t){t&&m(e)}}}function Be(o){let e;return{c(){e=R("Role")},l(t){e=k(t,"Role")},m(t,r){D(t,e,r)},d(t){t&&m(e)}}}function Ke(o){let e,t;return e=new De({props:{placeholder:"Select a role"}}),{c(){_(e.$$.fragment)},l(r){d(e.$$.fragment,r)},m(r,l){g(e,r,l),t=!0},p:le,i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){i(e.$$.fragment,r),t=!1},d(r){c(e,r)}}}function Oe(o){let e;return{c(){e=R("System")},l(t){e=k(t,"System")},m(t,r){D(t,e,r)},d(t){t&&m(e)}}}function Ue(o){let e;return{c(){e=R("User")},l(t){e=k(t,"User")},m(t,r){D(t,e,r)},d(t){t&&m(e)}}}function Qe(o){let e;return{c(){e=R("Assistant")},l(t){e=k(t,"Assistant")},m(t,r){D(t,e,r)},d(t){t&&m(e)}}}function Ye(o){let e,t,r,l,n,$;return e=new ne({props:{value:"system",$$slots:{default:[Oe]},$$scope:{ctx:o}}}),r=new ne({props:{value:"user",$$slots:{default:[Ue]},$$scope:{ctx:o}}}),n=new ne({props:{value:"assistant",$$slots:{default:[Qe]},$$scope:{ctx:o}}}),{c(){_(e.$$.fragment),t=h(),_(r.$$.fragment),l=h(),_(n.$$.fragment)},l(s){d(e.$$.fragment,s),t=v(s),d(r.$$.fragment,s),l=v(s),d(n.$$.fragment,s)},m(s,a){g(e,s,a),D(s,t,a),g(r,s,a),D(s,l,a),g(n,s,a),$=!0},p(s,a){const C={};a&1&&(C.$$scope={dirty:a,ctx:s}),e.$set(C);const I={};a&1&&(I.$$scope={dirty:a,ctx:s}),r.$set(I);const L={};a&1&&(L.$$scope={dirty:a,ctx:s}),n.$set(L)},i(s){$||(p(e.$$.fragment,s),p(r.$$.fragment,s),p(n.$$.fragment,s),$=!0)},o(s){i(e.$$.fragment,s),i(r.$$.fragment,s),i(n.$$.fragment,s),$=!1},d(s){s&&(m(t),m(l)),c(e,s),c(r,s),c(n,s)}}}function Je(o){let e,t,r,l;return e=new Ee({props:{$$slots:{default:[Ke]},$$scope:{ctx:o}}}),r=new Ie({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){_(e.$$.fragment),t=h(),_(r.$$.fragment)},l(n){d(e.$$.fragment,n),t=v(n),d(r.$$.fragment,n)},m(n,$){g(e,n,$),D(n,t,$),g(r,n,$),l=!0},p(n,$){const s={};$&1&&(s.$$scope={dirty:$,ctx:n}),e.$set(s);const a={};$&1&&(a.$$scope={dirty:$,ctx:n}),r.$set(a)},i(n){l||(p(e.$$.fragment,n),p(r.$$.fragment,n),l=!0)},o(n){i(e.$$.fragment,n),i(r.$$.fragment,n),l=!1},d(n){n&&m(t),c(e,n),c(r,n)}}}function We(o){let e;return{c(){e=R("Content")},l(t){e=k(t,"Content")},m(t,r){D(t,e,r)},d(t){t&&m(e)}}}function Xe(o){let e,t,r,l,n="Settings",$,s,a,C,I,L,H,N,me,U,ue,A,q,z,ce,Q,ie,F,G,pe,Y,ge,S,J,xe="Messages",de,P,j,_e,B,ve,K,O,he,W,$e;return a=new re({props:{for:"model",$$slots:{default:[Re]},$$scope:{ctx:o}}}),I=new be({props:{$$slots:{default:[Fe]},$$scope:{ctx:o}}}),N=new re({props:{for:"temperature",$$slots:{default:[Ge]},$$scope:{ctx:o}}}),U=new we({props:{id:"temperature",type:"number",placeholder:"0.4"}}),z=new re({props:{for:"top-p",$$slots:{default:[Pe]},$$scope:{ctx:o}}}),Q=new we({props:{id:"top-p",type:"number",placeholder:"0.7"}}),G=new re({props:{for:"top-k",$$slots:{default:[je]},$$scope:{ctx:o}}}),Y=new we({props:{id:"top-k",type:"number",placeholder:"0.0"}}),j=new re({props:{for:"role",$$slots:{default:[Be]},$$scope:{ctx:o}}}),B=new be({props:{selected:{value:"system",label:"system"},$$slots:{default:[Je]},$$scope:{ctx:o}}}),O=new re({props:{for:"content",$$slots:{default:[We]},$$scope:{ctx:o}}}),W=new ke({props:{id:"content",placeholder:"You are a...",class:"min-h-[9.5rem]"}}),{c(){e=E("div"),t=E("form"),r=E("fieldset"),l=E("legend"),l.textContent=n,$=h(),s=E("div"),_(a.$$.fragment),C=h(),_(I.$$.fragment),L=h(),H=E("div"),_(N.$$.fragment),me=h(),_(U.$$.fragment),ue=h(),A=E("div"),q=E("div"),_(z.$$.fragment),ce=h(),_(Q.$$.fragment),ie=h(),F=E("div"),_(G.$$.fragment),pe=h(),_(Y.$$.fragment),ge=h(),S=E("fieldset"),J=E("legend"),J.textContent=xe,de=h(),P=E("div"),_(j.$$.fragment),_e=h(),_(B.$$.fragment),ve=h(),K=E("div"),_(O.$$.fragment),he=h(),_(W.$$.fragment),this.h()},l(f){e=b(f,"DIV",{class:!0,"data-x-chunk-name":!0,"data-x-chunk-description":!0});var w=T(e);t=b(w,"FORM",{class:!0});var X=T(t);r=b(X,"FIELDSET",{class:!0});var V=T(r);l=b(V,"LEGEND",{class:!0,"data-svelte-h":!0}),ae(l)!=="svelte-1vwenep"&&(l.textContent=n),$=v(V),s=b(V,"DIV",{class:!0});var Z=T(s);d(a.$$.fragment,Z),C=v(Z),d(I.$$.fragment,Z),Z.forEach(m),L=v(V),H=b(V,"DIV",{class:!0});var y=T(H);d(N.$$.fragment,y),me=v(y),d(U.$$.fragment,y),y.forEach(m),ue=v(V),A=b(V,"DIV",{class:!0});var ee=T(A);q=b(ee,"DIV",{class:!0});var te=T(q);d(z.$$.fragment,te),ce=v(te),d(Q.$$.fragment,te),te.forEach(m),ie=v(ee),F=b(ee,"DIV",{class:!0});var se=T(F);d(G.$$.fragment,se),pe=v(se),d(Y.$$.fragment,se),se.forEach(m),ee.forEach(m),V.forEach(m),ge=v(X),S=b(X,"FIELDSET",{class:!0});var M=T(S);J=b(M,"LEGEND",{class:!0,"data-svelte-h":!0}),ae(J)!=="svelte-1kpgp2o"&&(J.textContent=xe),de=v(M),P=b(M,"DIV",{class:!0});var fe=T(P);d(j.$$.fragment,fe),_e=v(fe),d(B.$$.fragment,fe),fe.forEach(m),ve=v(M),K=b(M,"DIV",{class:!0});var oe=T(K);d(O.$$.fragment,oe),he=v(oe),d(W.$$.fragment,oe),oe.forEach(m),M.forEach(m),X.forEach(m),w.forEach(m),this.h()},h(){x(l,"class","-ml-1 px-1 text-sm font-medium"),x(s,"class","grid gap-3"),x(H,"class","grid gap-3"),x(q,"class","grid gap-3"),x(F,"class","grid gap-3"),x(A,"class","grid grid-cols-2 gap-4"),x(r,"class","grid gap-6 rounded-lg border p-4"),x(J,"class","-ml-1 px-1 text-sm font-medium"),x(P,"class","grid gap-3"),x(K,"class","grid gap-3"),x(S,"class","grid gap-6 rounded-lg border p-4"),x(t,"class","grid w-full items-start gap-6"),x(e,"class","relative hidden flex-col items-start gap-8 md:flex"),x(e,"data-x-chunk-name","dashboard-03-chunk-0"),x(e,"data-x-chunk-description","A settings form a configuring an AI model and messages.")},m(f,w){D(f,e,w),u(e,t),u(t,r),u(r,l),u(r,$),u(r,s),g(a,s,null),u(s,C),g(I,s,null),u(r,L),u(r,H),g(N,H,null),u(H,me),g(U,H,null),u(r,ue),u(r,A),u(A,q),g(z,q,null),u(q,ce),g(Q,q,null),u(A,ie),u(A,F),g(G,F,null),u(F,pe),g(Y,F,null),u(t,ge),u(t,S),u(S,J),u(S,de),u(S,P),g(j,P,null),u(P,_e),g(B,P,null),u(S,ve),u(S,K),g(O,K,null),u(K,he),g(W,K,null),$e=!0},p(f,[w]){const X={};w&1&&(X.$$scope={dirty:w,ctx:f}),a.$set(X);const V={};w&1&&(V.$$scope={dirty:w,ctx:f}),I.$set(V);const Z={};w&1&&(Z.$$scope={dirty:w,ctx:f}),N.$set(Z);const y={};w&1&&(y.$$scope={dirty:w,ctx:f}),z.$set(y);const ee={};w&1&&(ee.$$scope={dirty:w,ctx:f}),G.$set(ee);const te={};w&1&&(te.$$scope={dirty:w,ctx:f}),j.$set(te);const se={};w&1&&(se.$$scope={dirty:w,ctx:f}),B.$set(se);const M={};w&1&&(M.$$scope={dirty:w,ctx:f}),O.$set(M)},i(f){$e||(p(a.$$.fragment,f),p(I.$$.fragment,f),p(N.$$.fragment,f),p(U.$$.fragment,f),p(z.$$.fragment,f),p(Q.$$.fragment,f),p(G.$$.fragment,f),p(Y.$$.fragment,f),p(j.$$.fragment,f),p(B.$$.fragment,f),p(O.$$.fragment,f),p(W.$$.fragment,f),$e=!0)},o(f){i(a.$$.fragment,f),i(I.$$.fragment,f),i(N.$$.fragment,f),i(U.$$.fragment,f),i(z.$$.fragment,f),i(Q.$$.fragment,f),i(G.$$.fragment,f),i(Y.$$.fragment,f),i(j.$$.fragment,f),i(B.$$.fragment,f),i(O.$$.fragment,f),i(W.$$.fragment,f),$e=!1},d(f){f&&m(e),c(a),c(I),c(N),c(U),c(z),c(Q),c(G),c(Y),c(j),c(B),c(O),c(W)}}}class at extends Ve{constructor(e){super(),Se(this,e,null,Xe,Te,{})}}export{at as default};