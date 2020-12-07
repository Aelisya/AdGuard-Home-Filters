// ==UserScript==
// @name         Disable Hyperlink Auditing
// @namespace    https://tech.jacenboy.com/hyperlink-auditing
// @version      1.3
// @description  A simple script that removes hyperlink auditing from all websites.
// @author       JacenBoy
// @match        http*://*/*
// @grant        none
// @run-at document-end
// ==/UserScript==
(function() {
  'use strict';
  let hyperlinks = Array.from(document.getElementsByTagName("a"));
  hyperlinks.forEach(a => {
      if (a.hasAttribute("ping")) {
          a.removeAttribute("ping");
      }
      if (a.hasAttribute("data-ping-url")) {
        a.removeAttribute("data-ping-url");
      }
  });
})();
