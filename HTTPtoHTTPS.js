// ==UserScript==
// @name         TLS Redirect
// @version      1.1
// @description  Redirect from HTTP to HTTPS
// @author       hemlok89
// @match        http://*/*
// @grant        none
// ==/UserScript==

window.location.protocol = 'https:';
