if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"dac5f1c3a2f0302d418ec68d5b003a73"},{url:"/_next/static/0q_p6TNl378o6IL2EhINA/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/0q_p6TNl378o6IL2EhINA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-1cee8c32ffef505f.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/23-377eecf13f975708.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/231-a89d8cc151afd52f.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/35.03ae917f238a8966.js",revision:"03ae917f238a8966"},{url:"/_next/static/chunks/435-68817b62806dfaa4.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/959-2233e343e753441a.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/_not-found/page-c3d7bfc1806ec87c.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/layout-b107d738334d0ac1.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/login/page-230e8ce8b01dfb66.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/page-2fd3589479f904a3.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/signup/page-1dd2d6f070ed6339.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/updates/page-8f7d762fa346d0d7.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/web/apps/page-e0499f408ae21a37.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/web/layout-ff91f2ceeebb3568.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/web/page-d01d1c7ea1fdcfc6.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/web/settings/page-6339bf4a8a34998b.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/app/web/store/page-a5ecc4b402392662.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/fd9d1056-2737f78bfff3f6bf.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/main-app-c02f1f61e47d6b96.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/main-ca737c14dfc4404a.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8cd199f6c5e3a8b4.js",revision:"0q_p6TNl378o6IL2EhINA"},{url:"/_next/static/css/c3becef6b1c4eb08.css",revision:"c3becef6b1c4eb08"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/addonsdk/functions.js",revision:"3d8e184fd2bbf12fbc207616fdd46c07"},{url:"/icon.png",revision:"4860f375128a1c2f804d1773010c47d9"},{url:"/images/icons/icon-128x128.png",revision:"9f77770335cef3e5accbfe100b1bfa7d"},{url:"/images/icons/icon-144x144.png",revision:"0a83bee99e9c6b057d17476d23948a69"},{url:"/images/icons/icon-152x152.png",revision:"7d75bfa1a7367ea4bfa39d55742db4a1"},{url:"/images/icons/icon-192x192.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/images/icons/icon-384x384.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/images/icons/icon-512x512.png",revision:"83e21e900099c4d36e3097f36e582006"},{url:"/images/icons/icon-72x72.png",revision:"5056241dad1f6613f06e2afa8140e1f4"},{url:"/images/icons/icon-96x96.png",revision:"23e71a7c942be6d40ced3a717606a2a5"},{url:"/images/icons/maskable_icon.png",revision:"a9f1aa9fc191c4d044e131d3d9f8fe74"},{url:"/manifest.json",revision:"b1215f4136e96c13e596c2517664e769"},{url:"/updates.md",revision:"3193edd45c458ac77f7344c5c9b56fe1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
