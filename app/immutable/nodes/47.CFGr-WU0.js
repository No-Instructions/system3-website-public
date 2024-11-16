import{s as $,d as i,n as D,i as b,b as c,p as h,c as m,e as L,$ as j,g as T,f as P,h as p,a0 as q,j as E,t as R,Z as N,q as V}from"../chunks/scheduler.D_DiFEDa.js";import{e as Z}from"../chunks/each.8prNeyls.js";import{S as z,i as A}from"../chunks/index.uqldPLAT.js";function G(w,t,y){const d=w.slice();return d[1]=t[y],d}function U(w){let t,y,d,C=w[1].icon+"",k,l,M=w[1].title+"",_,f,o,u=w[1].description+"",x,S;return{c(){t=p("div"),y=p("div"),d=new q(!1),k=E(),l=p("h3"),_=R(M),f=E(),o=p("p"),x=R(u),S=E(),this.h()},l(g){t=m(g,"DIV",{class:!0});var r=L(t);y=m(r,"DIV",{class:!0});var v=L(y);d=j(v,!1),v.forEach(i),k=T(r),l=m(r,"H3",{class:!0});var s=L(l);_=P(s,M),s.forEach(i),f=T(r),o=m(r,"P",{class:!0});var e=L(o);x=P(e,u),e.forEach(i),S=T(r),r.forEach(i),this.h()},h(){d.a=null,h(y,"class","mb-4 flex h-24 items-center justify-center transition-transform group-hover:scale-110"),h(l,"class","text-lg font-semibold"),h(o,"class","text-sm text-muted-foreground"),h(t,"class","group rounded-lg border bg-background p-6 transition-all duration-300 hover:bg-primary/5 hover:shadow-lg")},m(g,r){b(g,t,r),c(t,y),d.m(C,y),c(t,k),c(t,l),c(l,_),c(t,f),c(t,o),c(o,x),c(t,S)},p:D,d(g){g&&i(t)}}}function O(w){let t,y='<div class="prose"><h1>Use cases sandbox</h1> <p>This page experiments with ways to show different use cases for Relay. Goals:</p> <ol><li>Help visitors identify their use case</li> <li>Show versatility without overwhelming</li> <li>Use illustrations that are both abstract and recognizable</li> <li>Maintain visual consistency across different cases</li></ol> <p>Current approach:</p> <ul><li>SVG illustrations with simple animations</li> <li>Consistent style using primary brand colors</li> <li>Abstract representations that suggest rather than depict</li> <li>Hover effects to encourage exploration</li></ul> <p>Each illustration aims to capture the essence of the use case without being too literal.</p></div>',d,C,k,l,M='<nav class="flex gap-4 text-sm text-muted-foreground"><a href="/sandbox/core">Core features</a> <a href="/sandbox/testimonials">Social proof</a> <a href="/sandbox/work">Work</a> <a href="/sandbox/how">How it works</a> <span class="font-semibold text-primary">Use cases</span></nav>',_,f,o,u,x,S="Perfect for",g,r,v=Z(w[0]),s=[];for(let e=0;e<v.length;e+=1)s[e]=U(G(w,v,e));return{c(){t=p("div"),t.innerHTML=y,d=E(),C=p("hr"),k=E(),l=p("div"),l.innerHTML=M,_=E(),f=p("section"),o=p("div"),u=p("div"),x=p("h2"),x.textContent=S,g=E(),r=p("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=m(e,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-14k5vgb"&&(t.innerHTML=y),d=T(e),C=m(e,"HR",{class:!0}),k=T(e),l=m(e,"DIV",{class:!0,"data-svelte-h":!0}),V(l)!=="svelte-1xui65b"&&(l.innerHTML=M),_=T(e),f=m(e,"SECTION",{class:!0});var n=L(f);o=m(n,"DIV",{class:!0});var a=L(o);u=m(a,"DIV",{class:!0});var H=L(u);x=m(H,"H2",{class:!0,"data-svelte-h":!0}),V(x)!=="svelte-1e5159v"&&(x.textContent=S),g=T(H),r=m(H,"DIV",{class:!0});var B=L(r);for(let I=0;I<s.length;I+=1)s[I].l(B);B.forEach(i),H.forEach(i),a.forEach(i),n.forEach(i),this.h()},h(){h(t,"class","container py-8"),h(C,"class","my-8 border-t"),h(l,"class","container py-4"),h(x,"class","mb-16 text-center text-3xl font-semibold"),h(r,"class","grid gap-8 sm:grid-cols-2 lg:grid-cols-4"),h(u,"class","mx-auto max-w-[780px]"),h(o,"class","container"),h(f,"class","border-y bg-secondary/50 py-24")},m(e,n){b(e,t,n),b(e,d,n),b(e,C,n),b(e,k,n),b(e,l,n),b(e,_,n),b(e,f,n),c(f,o),c(o,u),c(u,x),c(u,g),c(u,r);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(r,null)},p(e,[n]){if(n&1){v=Z(e[0]);let a;for(a=0;a<v.length;a+=1){const H=G(e,v,a);s[a]?s[a].p(H,n):(s[a]=U(H),s[a].c(),s[a].m(r,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=v.length}},i:D,o:D,d(e){e&&(i(t),i(d),i(C),i(k),i(l),i(_),i(f)),N(s,e)}}}function W(w){return[[{title:"Teams and startups",description:"Collaborate on docs, specs, and knowledge bases",icon:`<svg width="100" height="100" viewBox="0 0 100 100" class="text-primary">
                <g class="animate-fade-in">
                    <!-- Network of connected nodes -->
                    <circle cx="50" cy="20" r="8" class="fill-primary/20 stroke-primary" stroke-width="2"/>
                    <circle cx="20" cy="60" r="8" class="fill-primary/20 stroke-primary" stroke-width="2"/>
                    <circle cx="80" cy="60" r="8" class="fill-primary/20 stroke-primary" stroke-width="2"/>
                    <circle cx="50" cy="80" r="8" class="fill-primary/20 stroke-primary" stroke-width="2"/>

                    <!-- Connecting lines with drawing animation -->
                    <line x1="50" y1="28" x2="20" y2="52" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="50" y1="28" x2="80" y2="52" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="20" y1="60" x2="50" y2="80" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="80" y1="60" x2="50" y2="80" class="stroke-primary animate-draw" stroke-width="2"/>
                </g>
            </svg>`},{title:"Researchers and writers",description:"Share research notes and draft together",icon:`<svg width="100" height="100" viewBox="0 0 100 100" class="text-primary">
                <g class="animate-fade-in">
                    <!-- Stacked papers effect -->
                    <rect x="20" y="40" width="60" height="50" class="fill-primary/10 stroke-primary animate-slide-up" stroke-width="2"/>
                    <rect x="25" y="35" width="60" height="50" class="fill-primary/10 stroke-primary animate-slide-up" stroke-width="2"/>
                    <rect x="30" y="30" width="60" height="50" class="fill-primary/10 stroke-primary animate-slide-up" stroke-width="2"/>

                    <!-- Text lines -->
                    <line x1="40" y1="45" x2="80" y2="45" class="stroke-primary/60 animate-draw" stroke-width="2"/>
                    <line x1="40" y1="55" x2="70" y2="55" class="stroke-primary/60 animate-draw" stroke-width="2"/>
                    <line x1="40" y1="65" x2="75" y2="65" class="stroke-primary/60 animate-draw" stroke-width="2"/>
                </g>
            </svg>`},{title:"Students",description:"Study together and share notes",icon:`<svg width="100" height="100" viewBox="0 0 100 100" class="text-primary">
                <g class="animate-fade-in">
                    <!-- Mind map elements -->
                    <circle cx="50" cy="40" r="5" class="fill-primary/20 stroke-primary animate-pulse" stroke-width="2"/>
                    <circle cx="30" cy="60" r="5" class="fill-primary/20 stroke-primary animate-pulse" stroke-width="2"/>
                    <circle cx="70" cy="60" r="5" class="fill-primary/20 stroke-primary animate-pulse" stroke-width="2"/>
                    <circle cx="50" cy="80" r="5" class="fill-primary/20 stroke-primary animate-pulse" stroke-width="2"/>

                    <!-- Connecting lines -->
                    <line x1="50" y1="45" x2="30" y2="55" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="50" y1="45" x2="70" y2="55" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="30" y1="65" x2="50" y2="75" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="70" y1="65" x2="50" y2="75" class="stroke-primary animate-draw" stroke-width="2"/>
                </g>
            </svg>`},{title:"TTRPG players",description:"Build worlds and play together",icon:`<svg width="100" height="100" viewBox="0 0 100 100" class="text-primary">
                <g class="animate-fade-in">
                    <!-- Hexagonal grid -->
                    <path d="M50 20 L70 30 L70 50 L50 60 L30 50 L30 30 Z"
                          class="fill-primary/10 stroke-primary animate-pulse" stroke-width="2"/>
                    <path d="M50 40 L70 50 L70 70 L50 80 L30 70 L30 50 Z"
                          class="fill-primary/10 stroke-primary animate-pulse" stroke-width="2"/>
                    <path d="M70 30 L90 40 L90 60 L70 70 L50 60 L50 40 Z"
                          class="fill-primary/10 stroke-primary animate-pulse" stroke-width="2"/>
                </g>
            </svg>`}]]}class Q extends z{constructor(t){super(),A(this,t,W,O,$,{})}}export{Q as component};
