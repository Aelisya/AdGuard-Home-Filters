// ==UserScript==
// @name         Secure Redirect
// @version      1.1
// @description  A simple userscript that redirects pages to https:.
// @author       Aelisya
// @match        *
// @grant        none
// ==/UserScript==
document.location.replace(document.location.href.replace(/http\:/, 'https:'));
