// ==UserScript==
// @name          Update insecure Request
// @description	  Auto upgrade insecure requests.
// @author        Macqael
// @homepage      https://github.com/Macqael/AdGuard-Home-Filters
// @include       https://*/*
// @run-at        document-start
// @version       1.202103071
// ==/UserScript==
(()=>{
const meta = document.createElement('meta');
meta.httpEquiv = "Content-Security-Policy";
meta.content = "upgrade-insecure-requests";
document.getElementsByTagName('head')[0].appendChild(meta);
})();