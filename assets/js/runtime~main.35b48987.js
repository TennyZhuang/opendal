(()=>{"use strict";var e,t,r,a,o,c={},n={};function f(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return c[e].call(r.exports,r,r.exports,f),r.exports}f.m=c,e=[],f.O=(t,r,a,o)=>{if(!r){var c=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var n=!0,b=0;b<r.length;b++)(!1&o||c>=o)&&Object.keys(f.O).every((e=>f.O[e](r[b])))?r.splice(b--,1):(n=!1,o<c&&(c=o));if(n){e.splice(i--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,f.d(o,c),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({13:"01a85c17",53:"935f2afb",89:"62a401e9",103:"ccc49370",157:"283e63f8",195:"c4f5d8e4",301:"b2f554cd",309:"4fb2b91a",358:"f3200a52",372:"1db64337",455:"07df3158",477:"1957547a",514:"1be78505",533:"b2b675dd",535:"814f3328",608:"9e4087bc",610:"6875c492",661:"3806ecb0",713:"a7023ddc",716:"a0405932",719:"8f4159f2",757:"57a16c1d",794:"02514dc9",817:"14eb3368",832:"ece86388",886:"a6aa9e1f",918:"17896441",948:"e19a6781",983:"ae4554eb"}[e]||e)+"."+{13:"287b54fd",53:"b07ccbce",89:"555d86d8",103:"1536bedc",157:"c5889d28",195:"afa21a77",210:"5a199272",301:"01304f6e",309:"c4e0977c",358:"3a8c6075",372:"2983cebc",455:"5ec2c321",477:"2f10ff57",514:"f44eed00",529:"1811366d",533:"035f3452",535:"03be8526",608:"c481a347",610:"5f8b7a56",661:"d2c86b76",713:"edd4bb6a",716:"d04a267d",719:"372be4bc",757:"ce6f5a44",794:"a7883f1d",817:"cd092571",832:"f1337e80",886:"65b2b652",918:"a9c0d133",948:"39489a1f",972:"6be868f4",983:"ebfe9372"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="opendal-website:",f.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var n,b;if(void 0!==r)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var u=d[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(b=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),b&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/",f.gca=function(e){return e={17896441:"918","01a85c17":"13","935f2afb":"53","62a401e9":"89",ccc49370:"103","283e63f8":"157",c4f5d8e4:"195",b2f554cd:"301","4fb2b91a":"309",f3200a52:"358","1db64337":"372","07df3158":"455","1957547a":"477","1be78505":"514",b2b675dd:"533","814f3328":"535","9e4087bc":"608","6875c492":"610","3806ecb0":"661",a7023ddc:"713",a0405932:"716","8f4159f2":"719","57a16c1d":"757","02514dc9":"794","14eb3368":"817",ece86388:"832",a6aa9e1f:"886",e19a6781:"948",ae4554eb:"983"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=f.p+f.u(t),n=new Error;f.l(c,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,a[1](n)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],n=r[1],b=r[2],d=0;if(c.some((t=>0!==e[t]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(b)var i=b(f)}for(t&&t(r);d<c.length;d++)o=c[d],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(i)},r=self.webpackChunkopendal_website=self.webpackChunkopendal_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();