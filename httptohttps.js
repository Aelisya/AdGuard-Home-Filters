// ==UserScript==
// @name         Secure Redirect
// @version      1.0
// @description  A simple userscript that redirects pages to https:.
// @author       Aelisya
// @match        *
// @grant        none
// ==/UserScript==
(function (w) {
    'use strict';
    var secureProtocol = 'https';
    if ( !w.location.protocol.startsWith(secureProtocol) ) {
        w.location.href = w.location.href.replace(/^[^:]+/, secureProtocol);
    }
})(window);
