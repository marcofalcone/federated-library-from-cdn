var remoteLibrary;!function(){"use strict";var e,r,t={},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,{a:r}),r},o.d=function(e,r){for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(r,t){return o.f[t](e,r),r}),[]))},o.u=function(e){return e+".bundle.js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},e={},r="remoteLibrary:",o.l=function(t,n,i,u){if(e[t])e[t].push(n);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+i){a=s;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",r+i),a.src=t),e[t]=[n];var d=function(r,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){var e={970:0};o.f.j=function(r,t){var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=e[r]=[t,o]}));t.push(n[2]=i);var u=o.p+o.u(r),a=new Error;o.l(u,(function(t){if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,n[1](a)}}),"chunk-"+r,r)}};var r=function(r,t){var n,i,u=t[0],a=t[1],c=t[2],f=0;if(u.some((function(r){return 0!==e[r]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);c&&c(o)}for(r&&r(t);f<u.length;f++)i=u[f],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},t=self.webpackChunkremoteLibrary=self.webpackChunkremoteLibrary||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}(),o.nc=void 0;var i,u,a,c,f={};i=f,u={"./Button":function(){return o.e(585).then((function(){return function(){return o(585)}}))}},a=function(e,r){return o.R=r,r=o.o(u,e)?u[e]():Promise.resolve().then((function(){throw new Error('Module "'+e+'" does not exist in container.')})),o.R=void 0,r},c=function(e,r){if(o.S){var t="default",n=o.S[t];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return o.S[t]=e,o.I(t,r)}},o.d(i,{get:function(){return a},init:function(){return c}}),remoteLibrary=f}();