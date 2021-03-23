// ==UserScript==
// @name AdGuard Extra 
// @name:nl AdGuard Extra 
// @name:zh-TW AdGuard Extra 
// @name:pt-PT AdGuard Extra 
// @name:be AdGuard Extra 
// @name:da AdGuard Extra 
// @name:uk AdGuard Extra 
// @name:sr AdGuard dodatno 
// @name:sl Uporabi AdGuard Extra 
// @name:sk AdGuard Extra 
// @name:es AdGuard Extra 
// @name:cs AdGuard Extra 
// @name:lt AdGuard Extra 
// @name:hr AdGuard Extra 
// @namespace    adguard
// @version      1.0.223
// @description AdGuard Extra is designed to solve complicated cases when regular ad blocking rules aren't enough. 
// @description:ko AdGuard Extra는 일반적인 광고 차단 규칙이 충분하지 않은 복잡한 문제를 해결하도록 설계되었습니다. 
// @description:zh AdGuard Extra在常规广告阻止规则不够时能够解决复杂情况。 
// @description:nl AdGuard Extra is bedoeld om ingewikkelde gevallen op te lossen wanneer de normale advertentie blokkeringsregels niet voldoende blijken. 
// @description:ar من المفترض أن يحل AdGuard Extra الحالات المعقدة حينما لا تكون قواعد حجب الإعلانات العادية كافية. 
// @description:no AdGuard Extra skal løse kompliserte problemer når vanlige annonseblokkeringsregler ikke er nok. 
// @description:cs AdGuard Extra má za úkol řešit složité případy, když běžná pravidla pro blokování reklam nestačí. 
// @description:pl AdGuard Extra ma za zadanie rozwiązanie skomplikowanych przypadków, gdy zawodzą zasady zwykłych programów blokujących reklamy. 
// @description:de AdGuard Extra soll komplizierte Aufgaben lösen, wenn regelmäßige Regeln zur Werbeblockierung nicht ausreichen. 
// @description:pt-PT O AdGuard Extra é indicado para resolver casos complicados onde as regras regulares de bloqueio de anúncios não são suficientes. 
// @description:es AdGuard Extra está diseñado para resolver casos complicados cuando las reglas regulares para bloqueo de anuncios no son suficientes. 
// @description:pt O AdGuard Extra é indicado para resolver casos complicados onde as regras regulares de bloqueio de anúncios não são suficientes. 
// @description:fa قرار است وقتی قوانین عادیِ مسدودسازی تبلیغات کفایت نمی‌کنند،AdGuard Extra مسائل پیچیده‌ای را حل کند. 
// @description:ro AdGuard Extra este conceput să rezolve cazurile complicate în care regulile obișnuite de blocare a reclamelor nu sunt suficiente. 
// @description:he AdGuard Extra אמור להוות פתרון למקרים מורכבים בהם כללי חסימת פרסומות רגילים אינם מספיקים. 
// @description:ru AdGuard Extra предназначен для решения более сложных задач, когда обычных правил блокировки рекламы недостаточно. 
// @description:hu Az AdGuard Extra arra szolgál, hogy bonyolult eseteket oldjon meg akkor, amikor a hagyományos reklámblokkolási szabályok nem elégségesek. 
// @description:sk AdGuard Extra má za úlohu riešiť zložité prípady, keď bežné pravidlá blokovania reklám nestačia. 
// @description:it AdGuard Extra è destinato a risolvere i casi complicati in cui le regole di blocco degli annunci regolari non sono sufficienti. 
// @description:sl AdGuard Extra naj bi rešil zapletene primere, ko običajna pravila za zaviranje oglasov niso dovolj. 
// @description:be AdGuard Extra закліканы вырашаць складаныя выпадкі, калі звычайных правілаў блакавання рэкламы недастаткова. 
// @description:sr AdGuard Extra trebalo bi da reši komplikovane slučajeve u kojima standardna pravila blokiranja reklama nisu dovoljna. 
// @description:da AdGuard Extra er designet til at løse komplicerede sager, når de almindelige regler til annonceblokering ikke er nok. 
// @description:sv AdGuard Extra ska lösa komplicerade fall när vanliga regler för reklamblockering inte räcker till. 
// @description:et AdGuard Ekstra eesmärk on lahendada keerulisi juhtumeid, kui tavalistest reklaami blokeerimis reeglitest ei piisa. 
// @description:hr AdGuard Extra je dizajniran za rješavanje kompleksnih slučajeva kada opća pravila blokade oglasa nisu dovoljna. 
// @description:zh-TW 當常規的廣告封鎖規則不夠時，AdGuard Extra 旨在解決複雜的情況。 
// @description:vi AdGuard Extra được dùng để giải quyết các trường hợp phức tạp khi các quy tắc chặn quảng cáo thông thường không thể đáp ứng. 
// @description:uk AdGuard Extra призначений для вирішення складних завдань, коли звичайних правил для блокування реклами недостатньо. 
// @description:tr AdGuard Extra, normal reklam engelleme kurallarının yeterli olmadığı karmaşık durumları çözmek için tasarlanmıştır. 
// @description:hy AdGuard Extra նախատեսում է լուծել ավելի բարդ խնդիրներ, երբ սովորական գովազդային արգելափակումները բավական չեն: 
// @description:fr AdGuard Extra doit résoudre des problèmes compliqués où les règles de blocage classiques ne fonctionnent pas. 
// @description:bg AdGuard Extra решава сложни случаи, в които редовните правила за блокиране на реклами не са достатъчни. 
// @description:lt AdGuard Extra yra skirtas išspręsti sudėtingesnius atvejus, kai nepakanka įprastų skelbimų blokavimo taisyklių. 
// @description:ja 通常の広告ブロックルールでは解決できない複雑な問題を解決するための拡張機能です。 
// @downloadURL  https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.user.js
// @updateURL    https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.meta.js
// @homepageURL  https://adguard.com/
// @author       AdGuard
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// @exclude *://mil.ru/*
// @exclude *wikipedia.org*
// @exclude *icloud.com*
// @exclude *hangouts.google.com*
// @exclude *www.facebook.com/plugins/*
// @exclude *www.facebook.com/v*/plugins*
// @exclude *disqus.com/embed/comments*
// @exclude *vk.com/widget*
// @exclude *twitter.com/intent/*
// @exclude *www.youtube.com/embed/*
// @exclude *player.vimeo.com*
// @exclude *coub.com/embed*
// @exclude *staticxx.facebook.com/connect/xd_arbiter/*
// @exclude *vk.com/q_frame*
// @exclude *tpc.googlesyndication.com*
// @exclude *syndication.twitter.com*
// @exclude *platform.twitter.com*
// @exclude *tutosdeath.blogspot.com*
// @exclude *notifications.google.com*
// @exclude *google.com/recaptcha/*
// @exclude *bizmania.ru/*
// ==/UserScript==
'use strict';var win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
var browser = {
  window: win,
  document: win.document,
  location: win.document.location,
  console: {},
  querySelector: win.document.querySelector.bind(win.document),
  querySelectorAll: win.document.querySelectorAll.bind(win.document),
  getAttribute: Function.prototype.call.bind(HTMLElement.prototype.getAttribute),
  setAttribute: Function.prototype.call.bind(HTMLElement.prototype.setAttribute),
  removeAttribute: Function.prototype.call.bind(HTMLElement.prototype.removeAttribute),
  defineProperty: Object.defineProperty,
  MutationObserver: win.MutationObserver
};
Object.keys(browser.window.console).forEach(function (name) {
  browser.console[name] = browser.window.console[name];
});function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var arrayLikeToArray = _arrayLikeToArray;function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
var arrayWithoutHoles = _arrayWithoutHoles;function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
var iterableToArray = _iterableToArray;function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
var unsupportedIterableToArray = _unsupportedIterableToArray;function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var nonIterableSpread = _nonIterableSpread;function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
var toConsumableArray = _toConsumableArray;function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var classCallCheck = _classCallCheck;function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var createClass = _createClass;var UserInteractionTracker = function () {
  function UserInteractionTracker() {
    var _this = this;
    classCallCheck(this, UserInteractionTracker);
    this.TRACKED_EVENTS = ['auxclick', 'click', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseout', 'mouseup', 'wheel', 'keydown', 'keypress', 'keyup'];
    this.LAST_EVENT_TIMEOUT_MS = 10;
    this.lastEventType = '';
    this.lastEventTime = '';
    var trackEvent = function trackEvent(event) {
      _this.lastEventType = event.type;
      _this.lastEventTime = Date.now();
    };
    for (var i = 0; i < this.TRACKED_EVENTS.length; i += 1) {
      document.documentElement.addEventListener(this.TRACKED_EVENTS[i], trackEvent, true);
    }
  }
  createClass(UserInteractionTracker, [{
    key: "getCurrentEvent",
    value: function getCurrentEvent() {
      if (!this.lastEventType || !this.lastEventTime) {
        return null;
      }
      var isTimeout = Date.now() - this.lastEventTime > this.LAST_EVENT_TIMEOUT_MS;
      if (!isTimeout) {
        return this.lastEventType;
      }
      return null;
    }
  }]);
  return UserInteractionTracker;
}();
var userInteractionTracker = new UserInteractionTracker();var hosts = {
  '4pda.ru': '*://*.4pda.ru/*',
  'adguard.com': '*://*.adguard.com/*',
  'auto.ru': '*://*.auto.ru/*',
  'media.auto.ru': '*://*.media.auto.ru/*',
  'yandex.ru': '*://*.yandex.ru/*',
  'yandex.kz': '*://*.yandex.kz/*',
  'yandex.by': '*://*.yandex.by/*',
  'yandex.ua': '*://*.yandex.ua/*',
  'yandex.md': '*://*.yandex.md/*',
  'yandex.fr': '*://*.yandex.fr/*',
  'yandex.lv': '*://*.yandex.lv/*',
  'yandex.ee': '*://*.yandex.ee/*',
  'yandex.com.tr': '*://*.yandex.com.tr/*',
  'yandex.com': '*://*.yandex.com/*',
  'afisha.yandex.ru': '*://*.afisha.yandex.ru/*',
  'afisha.yandex.kz': '*://*.afisha.yandex.kz/*',
  'afisha.yandex.by': '*://*.afisha.yandex.by/*',
  'afisha.yandex.ua': '*://*.afisha.yandex.ua/*',
  'afisha.yandex.md': '*://*.afisha.yandex.md/*',
  'mail.yandex.ru': '*://*.mail.yandex.ru/*',
  'mail.yandex.kz': '*://*.mail.yandex.kz/*',
  'mail.yandex.by': '*://*.mail.yandex.by/*',
  'mail.yandex.ua': '*://*.mail.yandex.ua/*',
  'mail.yandex.md': '*://*.mail.yandex.md/*',
  'news.yandex.ru': '*://*.news.yandex.ru/*',
  'news.yandex.kz': '*://*.news.yandex.kz/*',
  'news.yandex.by': '*://*.news.yandex.by/*',
  'news.yandex.ua': '*://*.news.yandex.ua/*',
  'news.yandex.md': '*://*.news.yandex.md/*',
  'music.yandex.ru': '*://*.music.yandex.ru/*',
  'music.yandex.kz': '*://*.music.yandex.kz/*',
  'music.yandex.by': '*://*.music.yandex.by/*',
  'music.yandex.ua': '*://*.music.yandex.ua/*',
  'music.yandex.md': '*://*.music.yandex.md/*',
  'tv.yandex.ru': '*://*.tv.yandex.ru/*',
  'tv.yandex.kz': '*://*.tv.yandex.kz/*',
  'tv.yandex.by': '*://*.tv.yandex.by/*',
  'tv.yandex.ua': '*://*.tv.yandex.ua/*',
  'tv.yandex.md': '*://*.tv.yandex.md/*',
  'zen.yandex.ru': '*://*.zen.yandex.ru/*',
  'zen.yandex.kz': '*://*.zen.yandex.kz/*',
  'zen.yandex.by': '*://*.zen.yandex.by/*',
  'zen.yandex.ua': '*://*.zen.yandex.ua/*',
  'zen.yandex.md': '*://*.zen.yandex.md/*',
  'docviewer.yandex.ru': '*://*.docviewer.yandex.ru/*',
  'docviewer.yandex.kz': '*://*.docviewer.yandex.kz/*',
  'docviewer.yandex.by': '*://*.docviewer.yandex.by/*',
  'docviewer.yandex.ua': '*://*.docviewer.yandex.ua/*',
  'docviewer.yandex.md': '*://*.docviewer.yandex.md/*',
  'docviewer.yandex.com.tr': '*://*.docviewer.yandex.com.tr/*',
  'drive2.ru': '*://*.drive2.ru/*',
  'drive2.com': '*://*.drive2.com/*',
  'kinopoisk.ru': '*://*.kinopoisk.ru/*',
  'eda.ru': '*://*.eda.ru/*',
  'facebook.com': '*://*.facebook.com/*',
  'facebookcorewwwi.onion': '*://*.facebookcorewwwi.onion/*',
  'e.mail.ru': '*://*.e.mail.ru/*',
  'octavius.mail.ru': '*://*.octavius.mail.ru/*',
  'mail.ru': '*://*.mail.ru/*',
  'news.mail.ru': '*://*.news.mail.ru/*',
  'auto.mail.ru': '*://*.auto.mail.ru/*',
  'sportmail.ru': '*://*.sportmail.ru/*',
  'horo.mail.ru': '*://*.horo.mail.ru/*',
  'deti.mail.ru': '*://*.deti.mail.ru/*',
  'lady.mail.ru': '*://*.lady.mail.ru/*',
  'hi-tech.mail.ru': '*://*.hi-tech.mail.ru/*',
  'minigames.mail.ru': '*://*.minigames.mail.ru/*',
  'otvet.mail.ru': '*://*.otvet.mail.ru/*',
  'ok.ru': '*://*.ok.ru/*',
  'rambler.ru': '*://*.rambler.ru/*',
  'championat.com': '*://*.championat.com/*',
  'gazeta.ru': '*://*.gazeta.ru/*',
  'lenta.ru': '*://*.lenta.ru/*',
  'quto.ru': '*://*.quto.ru/*',
  'rns.online': '*://*.rns.online/*',
  'passion.ru': '*://*.passion.ru/*',
  'wp.pl': '*://*.wp.pl/*',
  'vidstream.online': '*://*.vidstream.online/*',
  'livejournal.com': '*://*.livejournal.com/*',
  'varlamov.ru': '*://*.varlamov.ru/*',
  'lena-miro.ru': '*://*.lena-miro.ru/*',
  'olegmakarenko.ru': '*://*.olegmakarenko.ru/*',
  'periskop.su': '*://*.periskop.su/*',
  'levik.blog': '*://*.levik.blog/*',
  'vadimrazumov.ru': '*://*.vadimrazumov.ru/*',
  'otzovik.com': '*://*.otzovik.com/*',
  'sinoptik.ua': '*://*.sinoptik.ua/*',
  'censor.net': '*://*.censor.net/*',
  'multiup.org': '*://*.multiup.org/*',
  'yaplakal.com': '*://*.yaplakal.com/*',
  'yap.ru': '*://*.yap.ru/*',
  'pravda.com.ua': '*://*.pravda.com.ua/*',
  'epravda.com.ua': '*://*.epravda.com.ua/*',
  'glianec.com': '*://*.glianec.com/*',
  'ostro.org': '*://*.ostro.org/*',
  'nashamama.com': '*://*.nashamama.com/*',
  'bilshe.com': '*://*.bilshe.com/*',
  'zdorovia.com.ua': '*://*.zdorovia.com.ua/*',
  'i.factor.ua': '*://*.i.factor.ua/*',
  'gismeteo.ua': '*://*.gismeteo.ua/*',
  '1777.ru': '*://*.1777.ru/*',
  'cn.ru': '*://*.cn.ru/*',
  'finance.i.ua': '*://*.finance.i.ua/*',
  'glavcom.ua': '*://*.glavcom.ua/*',
  'hvylya.net': '*://*.hvylya.net/*',
  'kp.ua': '*://*.kp.ua/*',
  'love.i.ua': '*://*.love.i.ua/*',
  'newsone.ua': '*://*.newsone.ua/*',
  'peers.tv': '*://*.peers.tv/*',
  'radio.i.ua': '*://*.radio.i.ua/*',
  'real-vin.com': '*://*.real-vin.com/*',
  'viks.bz': '*://*.viks.bz/*',
  'vsetv.com': '*://*.vsetv.com/*',
  'tv.ua': '*://*.tv.ua/*',
  'isport.ua': '*://*.isport.ua/*',
  'eurointegration.com.ua': '*://*.eurointegration.com.ua/*',
  'u-news.com.ua': '*://*.u-news.com.ua/*',
  'strana.ua': '*://*.strana.ua/*',
  '4mama.ua': '*://*.4mama.ua/*',
  'bigmir.net': '*://*.bigmir.net/*',
  'dengi.ua': '*://*.dengi.ua/*',
  'enovosty.com': '*://*.enovosty.com/*',
  'facenews.ua': '*://*.facenews.ua/*',
  'football24.ua': '*://*.football24.ua/*',
  'gorod.dp.ua': '*://*.gorod.dp.ua/*',
  'inforesist.org': '*://*.inforesist.org/*',
  'kolobok.ua': '*://*.kolobok.ua/*',
  'liga.net': '*://*.liga.net/*',
  'nnovosti.info': '*://*.nnovosti.info/*',
  'smak.ua': '*://*.smak.ua/*',
  'tochka.net': '*://*.tochka.net/*',
  'ukr.net': '*://*.ukr.net/*',
  'nv.ua': '*://*.nv.ua/*',
  'meteo.ua': '*://*.meteo.ua/*',
  'besplatka.ua': '*://*.besplatka.ua/*',
  'lifedon.com.ua': '*://*.lifedon.com.ua/*',
  'sheee.co.il': '*://*.sheee.co.il/*',
  'walla.co.il': '*://*.walla.co.il/*'
};function generateRandomString() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function observeDomChanges(callback) {
  var domMutationObserver = new browser.MutationObserver(function (mutations) {
    if (userInteractionTracker.getCurrentEvent()) {
      return;
    }
    callback(mutations);
  });
  domMutationObserver.observe(browser.document, {
    childList: true,
    subtree: true
  });
}
function disableScripts(pattern) {
  observeDomChanges(function (mutations) {
    mutations.forEach(function (mutation) {
      for (var i = 0; i < mutation.addedNodes.length; i += 1) {
        var node = mutation.addedNodes[i];
        if (node.localName === 'script' && node.innerText.match(pattern)) {
          node.remove();
        }
      }
    });
  });
}
function safeGetStylesheetRules(sheet) {
  try {
    if (sheet.rules === null) {
      return [];
    }
    return sheet.rules;
  } catch (e) {
    return [];
  }
}
function removeNode(node) {
  return node && node.parentNode && node.parentNode.removeChild(node);
}
function browserSupported() {
  return !(navigator.userAgent && navigator.userAgent.match(/(MSIE|Trident)/));
}
var hideViaDisplayProperty = function hideViaDisplayProperty(node) {
  if (node) {
    node.style.setProperty('display', 'none', 'important');
  }
};
var hideViaPositionProperty = function hideViaPositionProperty(node) {
  if (node) {
    node.style.position = 'absolute';
    node.style.top = '-99999px';
  }
};
var iterateCSSRules = function iterateCSSRules(func) {
  toConsumableArray(browser.document.styleSheets).forEach(function (sheet) {
    toConsumableArray(safeGetStylesheetRules(sheet)).forEach(function (rule) {
      func(rule);
    });
  });
};
var hideRulesByCondition = function hideRulesByCondition(pattern, condition) {
  iterateCSSRules(function (rule) {
    if (rule.selectorText && condition(rule.selectorText, pattern)) {
      hideViaDisplayProperty(rule);
    }
  });
};
var stringPatternCondition = function stringPatternCondition(selector, pattern) {
  return selector.includes(pattern);
};
var regexpPatternCondition = function regexpPatternCondition(selector, pattern) {
  return pattern.test(selector);
};
var hideCssRulesBySelectorText = function hideCssRulesBySelectorText(pattern) {
  if (pattern && pattern.constructor === String) {
    hideRulesByCondition(pattern, stringPatternCondition);
  } else if (pattern && pattern.constructor === RegExp) {
    hideRulesByCondition(pattern, regexpPatternCondition);
  } else {
    throw new Error('The arguments must be type of String or RegExp');
  }
};
var isMatchingHostnames = function isMatchingHostnames() {
  for (var _len = arguments.length, hostnames = new Array(_len), _key = 0; _key < _len; _key++) {
    hostnames[_key] = arguments[_key];
  }
  return browserSupported() && hostnames.some(function (hostname) {
    if (!hosts[hostname]) {
      return false;
    }
    var hostPattern = hosts[hostname].replace('*://*.', '');
    return browser.location.origin.match(hostPattern);
  });
};
var injectHidingRuleForClassname = function () {
  var injectedRules = [];
  return function (className) {
    var hidingRule = ".".concat(className, " { display: none !important }");
    if (injectedRules.some(function (rule) {
      return rule === hidingRule;
    })) {
      return;
    }
    var styleSheets = browser.document.styleSheets;
    var styleSheet = styleSheets[styleSheets.length - 1];
    if (!styleSheet) {
      var style = browser.document.createElement('style');
      browser.document.head.appendChild(style);
      styleSheet = style.sheet;
    }
    styleSheet.insertRule(hidingRule, styleSheet.cssRules.length);
    injectedRules.push(hidingRule);
  };
}();if (isMatchingHostnames('facebook.com', 'facebookcorewwwi.onion')) {
  var hideFeedAds = function hideFeedAds() {
    var posts = browser.querySelectorAll('div[id^="substream_"] div[id^="hyperfeed_story_id"]');
    if (posts.length <= 0) {
      return;
    }
    posts.forEach(function (post) {
      if (post.style.display === 'none') {
        return;
      }
      var dataFt;
      Object.keys(post).some(function (key) {
        if (!post[key]) {
          return false;
        }
        dataFt = post[key]['data-ft'];
        return !!dataFt;
      });
      if (!dataFt) {
        return;
      }
      var sponsored1 = dataFt.includes('"is_sponsored":1');
      var sponsored2 = dataFt.includes('"ei":') && !dataFt.includes('"page_id":"');
      if (sponsored1 || sponsored2) {
        post.style.display = 'none';
      }
    });
  };
  var hideMarketplaceAds = function hideMarketplaceAds() {
    var posts = browser.querySelectorAll('div[data-testid="marketplace_home_feed"] > div > div > div[class] > div[class] > div > div[class]:not([style*="display:none"])');
    if (posts.length <= 0) {
      return;
    }
    posts.forEach(function (post) {
      var html = post.outerHTML;
      if (!html) {
        return;
      }
      if (html.includes('/ads/about/')) {
        post.style = 'display:none!important;';
      }
    });
  };
  observeDomChanges(function () {
    hideFeedAds();
    hideMarketplaceAds();
  });
}if (isMatchingHostnames('4pda.ru') && !browser.location.pathname.startsWith('/amp/')) {
  var remove = function remove(node) {
    return node && node.parentNode.removeChild(node);
  };
  var width = function width() {
    return browser.window.innerWidth || browser.document.body.clientWidth || 0;
  };
  var height = function height() {
    return browser.window.innerHeight || browser.document.body.clientHeight || 0;
  };
  var blockHeaderAds = function blockHeaderAds() {
    var header = browser.querySelector('.menu-main');
    if (!header) {
      return;
    }
    header = header.parentNode.parentNode;
    for (var i = 0; i < header.parentNode.children.length; i += 1) {
      var childNode = header.parentNode.children[i];
      if (childNode !== header) {
        hideViaDisplayProperty(childNode);
      } else {
        return;
      }
    }
  };
  var isAppPromo = function isAppPromo(element) {
    var appPromoHeader = element === null || element === void 0 ? void 0 : element.firstElementChild;
    return (appPromoHeader === null || appPromoHeader === void 0 ? void 0 : appPromoHeader.tagName) === 'H2' && /[AmopPrАорР]{8}/.test(appPromoHeader === null || appPromoHeader === void 0 ? void 0 : appPromoHeader.innerText);
  };
  var blockSidebarAds = function blockSidebarAds() {
    var _devdbcArticle$nextSi, _adElement$firstEleme;
    var aside = browser.querySelectorAll('[class]:not([id]) > [id]:not([class]) > :first-child + [id][class] > [class]:not([id])');
    toConsumableArray(aside).forEach(function (itm) {
      if ((itm === null || itm === void 0 ? void 0 : itm.firstElementChild) === null || itm.offsetHeight > 999 || isAppPromo(itm)) {
        hideViaPositionProperty(itm);
      }
    });
    var devdbcArticle = browser.querySelector('div[id^="devdbc_articles"]');
    var adElement = devdbcArticle === null || devdbcArticle === void 0 ? void 0 : (_devdbcArticle$nextSi = devdbcArticle.nextSibling) === null || _devdbcArticle$nextSi === void 0 ? void 0 : _devdbcArticle$nextSi.nextSibling;
    if (!/DIV|SPAN|SCRIPT/.test(adElement === null || adElement === void 0 ? void 0 : (_adElement$firstEleme = adElement.firstElementChild) === null || _adElement$firstEleme === void 0 ? void 0 : _adElement$firstEleme.tagName)) {
      hideViaPositionProperty(adElement);
    }
  };
  var blockNewSidebarAds = function blockNewSidebarAds() {
    var adElements = browser.querySelectorAll('[id][class] > .slider-list ~ div[class]:not([id])');
    if (adElements) {
      toConsumableArray(adElements).forEach(function (adElement) {
        if ((adElement === null || adElement === void 0 ? void 0 : adElement.textContent.indexOf('HUAWEI')) > 0 || (adElement === null || adElement === void 0 ? void 0 : adElement.textContent.indexOf('vive-zoneid')) > 0) {
          hideViaPositionProperty(adElement);
        }
      });
    }
  };
  var blockMobileAds = function blockMobileAds() {
    var elements = browser.querySelectorAll('body > :not(div):not(a)');
    if (elements.length === 0) {
      return;
    }
    toConsumableArray(elements).forEach(function (el) {
      hideViaDisplayProperty(el);
    });
    var btn = browser.querySelector('body > a[role="button"]');
    if (btn) {
      hideViaDisplayProperty(btn);
    }
  };
  var blockMobileHeaderFooterAds = function blockMobileHeaderFooterAds() {
    if (navigator.userAgent.match('Mobile')) {
      var headerAdsImg = browser.querySelector('article a[target="_blank"] > img');
      var footerButtonAdsImg = browser.querySelector('body > a[class][role="button"]');
      var footerAdsImg = footerButtonAdsImg === null || footerButtonAdsImg === void 0 ? void 0 : footerButtonAdsImg.previousSibling;
      if (headerAdsImg) {
        hideViaDisplayProperty(headerAdsImg.parentNode);
      }
      if (footerButtonAdsImg && footerAdsImg) {
        hideViaDisplayProperty(footerButtonAdsImg);
        hideViaDisplayProperty(footerAdsImg);
      }
    }
  };
  var fixNavMenu = function fixNavMenu() {
    var adLink = browser.querySelector('.menu-main .menu-main-item > a[style*="background"]');
    if (!adLink) {
      return;
    }
    hideViaDisplayProperty(adLink);
  };
  var isMobile = function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };
  var fixAdsPlaceholder = function fixAdsPlaceholder() {
    var _adsScript$parentNode, _adsScript$nextElemen;
    var adsScript = browser.document.querySelector('script[src^="//4pda.ru/ad/www"]');
    var adsContainer = adsScript === null || adsScript === void 0 ? void 0 : (_adsScript$parentNode = adsScript.parentNode) === null || _adsScript$parentNode === void 0 ? void 0 : _adsScript$parentNode.parentNode;
    if (adsContainer && (adsScript === null || adsScript === void 0 ? void 0 : (_adsScript$nextElemen = adsScript.nextElementSibling) === null || _adsScript$nextElemen === void 0 ? void 0 : _adsScript$nextElemen.className) !== 'slider-news' && !isMobile()) {
      adsContainer.style.marginTop = '-100px';
    }
  };
  var restoreBackground = function restoreBackground() {
    var body = browser.document.body;
    body.setAttribute('style', "".concat(body.getAttribute('style') || '', ";background-color:#E6E7E9!important"));
    var extra = 'background-image:none!important;background-color:transparent!important';
    var fakeStyles = new WeakMap();
    var styleProxy = {
      get: function get(target, prop) {
        return fakeStyles.get(target)[prop] || target[prop];
      },
      set: function set(target, prop, value) {
        var fakeStyle = fakeStyles.get(target);
        (prop in fakeStyle ? fakeStyle : target)[prop] = value;
        return true;
      }
    };
    toConsumableArray(browser.querySelectorAll('[id]:not(A), A')).forEach(function (itm) {
      if (!(itm.offsetWidth > 0.95 * width() && itm.offsetHeight > 0.85 * height())) {
        return;
      }
      if (itm.tagName !== 'A') {
        fakeStyles.set(itm.style, {
          backgroundImage: itm.style.backgroundImage,
          backgroundColor: itm.style.backgroundColor
        });
        try {
          browser.defineProperty(itm, 'style', {
            value: new Proxy(itm.style, styleProxy),
            enumerable: true
          });
        } catch (_unused) {}
        browser.setAttribute(itm, 'style', "".concat(browser.getAttribute(itm, 'style') || '', ";").concat(extra));
      }
      if (itm.tagName === 'A') {
        browser.setAttribute(itm, 'style', 'display:none!important');
      }
    });
    fixAdsPlaceholder();
  };
  var blockForumAds = function blockForumAds() {
    var itm = browser.querySelector('#logostrip');
    if (itm) {
      remove(itm.parentNode.nextSibling);
    }
    if (browser.location.pathname.startsWith('/forum/dl/')) {
      var setBackground = function setBackground(node) {
        return browser.setAttribute(node, 'style', "".concat(browser.getAttribute(node, 'style') || '', ";background-color:#4ebaf6!important"));
      };
      setBackground(browser.document.body);
      toConsumableArray(browser.querySelectorAll('body > div')).forEach(function (item) {
        if (!item.querySelector('.dw-fdwlink, .content') && !item.classList.contains('footer')) {
          remove(item);
        } else {
          setBackground(item);
        }
      });
    }
  };
  var blockAdInFeed = function blockAdInFeed() {
    var elements = browser.querySelectorAll('[id][class] > article[class^="post"]:not([itemid])');
    toConsumableArray(elements).forEach(function (element) {
      if (!element.querySelector('div[id^="poll-ajax-frame"]')) {
        hideViaPositionProperty(element);
      }
    });
  };
  browser.window.addEventListener('DOMContentLoaded', function () {
    var isForum = browser.location.pathname.startsWith('/forum/');
    var isUserProfile = isForum && browser.location.href.indexOf('showuser') > 0;
    if (isForum) {
      blockForumAds();
      if (isUserProfile) {
        blockHeaderAds();
      }
    } else {
      blockNewSidebarAds();
      blockHeaderAds();
      fixNavMenu();
      restoreBackground();
      blockMobileAds();
    }
  });
  observeDomChanges(function () {
    blockMobileHeaderFooterAds();
    blockAdInFeed();
    blockSidebarAds();
  });
}var hideFeedsAdsBlocks = function hideFeedsAdsBlocks() {
  try {
    var wrappers = browser.document.querySelectorAll('.feed__row > .feed__item-wrap');
    var classNames = ['doc', 'card', 'carousel'];
    toConsumableArray(wrappers).forEach(function (wrapper) {
      if (!classNames.some(function (name) {
        return wrapper.firstElementChild.firstElementChild.className.includes(name);
      }) && wrapper.firstElementChild.firstElementChild.classList.length < 5) {
        hideViaPositionProperty(wrapper);
      }
    });
    var cardwrappers = browser.querySelectorAll('.feed__row .feed__item > div[class^="card-wrapper"]');
    toConsumableArray(cardwrappers).forEach(function (card) {
      if (!card.className.includes('is-desktop')) {
        hideViaPositionProperty(card);
      }
    });
  } catch (_unused) {}
};
if (isMatchingHostnames('zen.yandex.ru', 'zen.yandex.kz', 'zen.yandex.by', 'zen.yandex.ua', 'zen.yandex.md')) {
  var hideArticletAds = function hideArticletAds() {
    try {
      var articleBlocks = browser.document.querySelectorAll('div.article-render__block');
      toConsumableArray(articleBlocks).forEach(function (block) {
        if (block.firstElementChild.classList.length >= 3) {
          hideViaPositionProperty(block);
        }
      });
      var sidebarAds = browser.document.querySelector('.article-right-ad-block');
      hideViaPositionProperty(sidebarAds);
    } catch (_unused2) {}
  };
  observeDomChanges(function () {
    hideArticletAds();
    hideFeedsAdsBlocks();
  });
}if (isMatchingHostnames('yandex.ru', 'yandex.kz', 'yandex.by', 'yandex.ua', 'yandex.md', 'yandex.fr', 'yandex.com.tr', 'yandex.com', 'yandex.lv', 'yandex.ee')) {
  if (browser.location.pathname.startsWith('/sport')) {
    var hideSportAds = function hideSportAds() {
      var _browser$document$que;
      var adsCard = (_browser$document$que = browser.document.querySelector('div[class$="item__card"] div[class^="turbo-"]')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.parentNode;
      if (!adsCard) {
        return;
      }
      var adsClassName = adsCard.classList[0];
      if (adsClassName && !adsClassName.startsWith('card')) {
        injectHidingRuleForClassname(adsClassName);
      }
    };
    observeDomChanges(function () {
      hideSportAds();
    });
  }
  if (browser.location.pathname.startsWith('/video/')) {
    var adBelowPlayer = function adBelowPlayer() {
      var videoInfo = browser.querySelector('.VideoViewer-Info');
      var adElement = videoInfo === null || videoInfo === void 0 ? void 0 : videoInfo.nextElementSibling;
      if (adElement && !(adElement !== null && adElement !== void 0 && adElement.className.startsWith('RelatedSnippets'))) {
        hideViaPositionProperty(adElement);
      }
    };
    var hideVideoListAds = function hideVideoListAds() {
      var videoList = browser.querySelectorAll('.direct');
      if (!videoList.length) {
        return;
      }
      toConsumableArray(videoList).forEach(function (listItem) {
        hideViaDisplayProperty(listItem);
      });
    };
    var hideSidebarAds = function hideSidebarAds() {
      var adElements = browser.querySelectorAll('.Viewer-ScrollContainer > div[role="button"]');
      if (adElements) {
        toConsumableArray(adElements).forEach(function (element) {
          if (element && !element.querySelector('a[href^="https://yandex.ru/video/"]')) {
            hideViaDisplayProperty(element);
          }
        });
      }
    };
    observeDomChanges(function () {
      adBelowPlayer();
      hideVideoListAds();
      hideSidebarAds();
    });
  }
  if (browser.location.pathname.startsWith('/pogoda/') || browser.location.pathname.startsWith('/weather/')) {
    var hideAdsByClassName = function hideAdsByClassName(className) {
      var adsBlocks = browser.document.getElementsByClassName(className);
      toConsumableArray(adsBlocks).forEach(function (ads) {
        hideViaPositionProperty(ads);
      });
    };
    var weatherAds = function weatherAds() {
      var adElements = browser.querySelectorAll('div[id]');
      if (adElements.length) {
        toConsumableArray(adElements).forEach(function (adElement) {
          var _neighbourWeatherAd$t;
          var neighbourWeatherAd = adElement.nextElementSibling;
          if (adElement.id !== 'root' && !(adElement !== null && adElement !== void 0 && adElement.className.startsWith('content')) && neighbourWeatherAd && ((_neighbourWeatherAd$t = neighbourWeatherAd.textContent) === null || _neighbourWeatherAd$t === void 0 ? void 0 : _neighbourWeatherAd$t.indexOf('xored=data')) > 0) {
            hideViaPositionProperty(adElement);
          }
        });
      }
    };
    var weatherAdPopup = function weatherAdPopup() {
      var wetherRemains = browser.querySelectorAll('style + div > div');
      var AdPopup = toConsumableArray(wetherRemains).find(function (wetherRemain) {
        var _wetherRemain$lastChi;
        return ((_wetherRemain$lastChi = wetherRemain.lastChild) === null || _wetherRemain$lastChi === void 0 ? void 0 : _wetherRemain$lastChi.innerText) === 'Реклама';
      });
      if (AdPopup) {
        hideViaPositionProperty(AdPopup.parentNode);
      }
      if (AdPopup && navigator.userAgent.match('Mobile')) {
        hideViaPositionProperty(AdPopup.parentNode.parentNode);
      }
    };
    var hideMonthForecastAds = function hideMonthForecastAds() {
      var _contentSections$, _contentSections$$chi, _contentSections$$chi2;
      var contentSections = browser.document.querySelectorAll('.content__section');
      var adsClassName = (_contentSections$ = contentSections[0]) === null || _contentSections$ === void 0 ? void 0 : (_contentSections$$chi = _contentSections$.children[1]) === null || _contentSections$$chi === void 0 ? void 0 : (_contentSections$$chi2 = _contentSections$$chi.firstElementChild) === null || _contentSections$$chi2 === void 0 ? void 0 : _contentSections$$chi2.classList[0];
      if (!adsClassName) {
        return;
      }
      hideAdsByClassName(adsClassName);
    };
    var hideMapForecastAds = function hideMapForecastAds() {
      var adsElements = browser.document.querySelectorAll('div[data-bem] > div');
      var adsDirect = toConsumableArray(adsElements).find(function (adsElement) {
        var _adsElement$querySele;
        return ((_adsElement$querySele = adsElement.querySelector('div')) === null || _adsElement$querySele === void 0 ? void 0 : _adsElement$querySele.innerText) === 'Скрыть рекламу';
      });
      if (!adsDirect) {
        return;
      }
      hideViaPositionProperty(adsDirect);
    };
    observeDomChanges(function () {
      weatherAds();
      weatherAdPopup();
      hideMonthForecastAds();
      hideMapForecastAds();
    });
  }
  if (browser.location.pathname.startsWith('/maps/')) {
    var hideSidebarDirect = function hideSidebarDirect() {
      var _yandexDirectHeader$p, _yandexDirectHeader$p2;
      var yandexDirectHeader = browser.querySelector('.sidebar-container a[href^="https://direct.yandex.ru/"]');
      if (!yandexDirectHeader) {
        return;
      }
      var adsContainer = (_yandexDirectHeader$p = yandexDirectHeader.parentNode) === null || _yandexDirectHeader$p === void 0 ? void 0 : (_yandexDirectHeader$p2 = _yandexDirectHeader$p.parentNode) === null || _yandexDirectHeader$p2 === void 0 ? void 0 : _yandexDirectHeader$p2.parentNode;
      if (!adsContainer || adsContainer.className.startsWith('masstransit')) {
        return;
      }
      hideViaDisplayProperty(adsContainer);
    };
    observeDomChanges(function () {
      hideSidebarDirect();
    });
  }
  if (browser.location.pathname.startsWith('/q/')) {
    var directAds = function directAds() {
      var elementFeedAds = browser.document.querySelectorAll('#page script + section > div[class] + div div[class] > div[class]');
      if (elementFeedAds) {
        toConsumableArray(elementFeedAds).forEach(function (elementFeedAd) {
          if (elementFeedAd && elementFeedAd.offsetWidth === 732 && (elementFeedAd.offsetHeight === 292 || elementFeedAd.offsetHeight === 252)) {
            hideViaPositionProperty(elementFeedAd);
          }
        });
      }
      var rightColumnElements = browser.document.querySelectorAll('#page div[class]:last-child div[style] > div > div[class]');
      if (rightColumnElements) {
        toConsumableArray(rightColumnElements).forEach(function (rightColumnElement) {
          var rightColumnNextElement = rightColumnElement === null || rightColumnElement === void 0 ? void 0 : rightColumnElement.nextElementSibling;
          if (rightColumnElement && rightColumnElement !== null && rightColumnElement !== void 0 && rightColumnElement.innerText.startsWith('ЧИТАЙТЕ ТАКЖЕ')) {
            hideViaPositionProperty(rightColumnNextElement);
          }
        });
      }
    };
    var remainAds = function remainAds() {
      var remainBlocks = browser.document.querySelectorAll('div > span[class]');
      toConsumableArray(remainBlocks).forEach(function (remainBlock) {
        var _remainBlock$parentNo, _remainBlock$parentNo2;
        var remainAd = (remainBlock === null || remainBlock === void 0 ? void 0 : remainBlock.innerText) === 'Реклама';
        var adsContainer = remainBlock === null || remainBlock === void 0 ? void 0 : (_remainBlock$parentNo = remainBlock.parentNode) === null || _remainBlock$parentNo === void 0 ? void 0 : (_remainBlock$parentNo2 = _remainBlock$parentNo.parentNode) === null || _remainBlock$parentNo2 === void 0 ? void 0 : _remainBlock$parentNo2.parentNode;
        if (!remainAd) {
          return;
        }
        if (remainAd && adsContainer) {
          hideViaPositionProperty(adsContainer);
        }
      });
    };
    observeDomChanges(function () {
      directAds();
      remainAds();
    });
  }
  if (browser.location.pathname.startsWith('/search/')) {
    var adSearchElements = function adSearchElements() {
      var searchElements = browser.document.querySelectorAll('.serp_js_inited.main .serp-list > .serp-item');
      if (searchElements) {
        toConsumableArray(searchElements).forEach(function (searchElement) {
          var _searchElement$queryS;
          if (searchElement && searchElement.querySelector('h2 > a[data-event-required]') && ((_searchElement$queryS = searchElement.querySelector('.label')) !== null && _searchElement$queryS !== void 0 && _searchElement$queryS.innerText.includes('реклама') || searchElement.querySelector('.direct-label'))) {
            hideViaPositionProperty(searchElement);
          }
        });
      }
    };
    observeDomChanges(function () {
      adSearchElements();
    });
  }
  if (isMatchingHostnames('yandex.ru') && browser.location.pathname === '/') {
    var adUnderSearch = function adUnderSearch() {
      var elements = browser.document.querySelectorAll('.widgets[role="main"] *:not(div) > div[class]:not([class*="widget"]) *:not(div) > div[class] > div[class]');
      if (elements) {
        toConsumableArray(elements).forEach(function (element) {
          if (element && !element.className.startsWith('home') && !element.className.startsWith('services') && !element.className.startsWith('input') && !element.className.startsWith('search')) {
            hideViaPositionProperty(element);
          }
        });
      }
    };
    observeDomChanges(function () {
      adUnderSearch();
    });
  }
  var addedRules = {};
  var hideMainPageAds = function hideMainPageAds() {
    function getMainSelector(x) {
      if (x.banner && x.banner.cls) {
        var parentPath = x.banner.cls.banner__parent;
        if (!parentPath) {
          parentPath = x.banner.cls['b-banner__content_direct'];
        }
        return parentPath;
      }
      if (x.banner && x.banner.refresh) {
        var containerPath = x.banner.refresh.bannerContainer;
        if (!containerPath) {
          return null;
        }
        return containerPath;
      }
      return null;
    }
    function removeBanner(x) {
      var selector = getMainSelector(x);
      if (selector) {
        selector = ".".concat(selector);
        if (addedRules[selector]) {
          return;
        }
        addedRules[selector] = true;
        toConsumableArray(browser.querySelectorAll(selector)).forEach(function (banner) {
          browser.setAttribute(banner, 'style', 'display:none!important');
        });
        toConsumableArray(browser.document.styleSheets).forEach(function (sheet) {
          try {
            if (sheet.disabled) {
              return;
            }
            var cssRules = safeGetStylesheetRules(sheet);
            for (var i = 0; i < cssRules.length; i += 1) {
              var rule = cssRules[i];
              if (rule.cssText.includes(' 728px 90px')) {
                sheet.disabled = true;
                continue;
              }
            }
          } catch (_unused) {}
        });
        return;
      }
      if (addedRules['div-hidden-by-size']) {
        return;
      }
      var divCollection = browser.querySelectorAll('div.main div');
      toConsumableArray(divCollection).forEach(function (elem) {
        if (elem.clientWidth === 728 && elem.clientHeight === 90) {
          elem.remove();
          addedRules['div-hidden-by-size'] = true;
        }
      });
    }
    if (browser.window.home && browser.window.home.export) {
      removeBanner(browser.window.home.export);
    }
  };
  var findAds = function findAds() {
    var adIds = [];
    if (!browser.window.Ya) {
      return adIds;
    }
    Object.keys(browser.window.Ya).forEach(function (key) {
      var value = browser.window.Ya[key];
      if (!value || !value.adUsageStorageVars || !value.adUsageStorageVars.ads || !value.adUsageStorageVars.ads.list) {
        return;
      }
      value.adUsageStorageVars.ads.list.forEach(function (el) {
        if (el.renderTo && !adIds.includes(el.renderTo)) {
          adIds.push(el.renderTo);
        }
      });
    });
    return adIds;
  };
  var hideYaDirectAds = function hideYaDirectAds() {
    var adIds = findAds();
    if (!adIds || adIds.length === 0) {
      return;
    }
    var styleSheet = toConsumableArray(browser.document.styleSheets).find(function (sheet) {
      if (safeGetStylesheetRules(sheet).length > 0 && !sheet.disabled) {
        return true;
      }
      return false;
    });
    if (!styleSheet) {
      return;
    }
    adIds.forEach(function (id) {
      var el = browser.document.getElementById(id);
      if (!el) {
        return;
      }
      var selector = "#".concat(id);
      var classAttr = el.getAttribute('class');
      if (classAttr) {
        selector = "[class=\"".concat(classAttr, "\"]");
      }
      var cssRule = "".concat(selector, " { display: none!important; }");
      if (!addedRules[cssRule]) {
        addedRules[cssRule] = true;
        styleSheet.insertRule(cssRule);
      }
    });
  };
  var hideYandexBrowserAds = function hideYandexBrowserAds() {
    var adsContainer = browser.querySelector('.container__banner');
    if (adsContainer && adsContainer.querySelector('[class^="direct"]')) {
      hideViaPositionProperty(adsContainer);
    }
  };
  var oneDirectZenFeed = function oneDirectZenFeed() {
    var zenCategories = browser.querySelectorAll('.placeholder-card__container');
    toConsumableArray(zenCategories).forEach(function (zenCategorie) {
      var _zenCategorie$firstEl;
      var zenChildAttributes = (_zenCategorie$firstEl = zenCategorie.firstElementChild) === null || _zenCategorie$firstEl === void 0 ? void 0 : _zenCategorie$firstEl.attributes;
      if (!zenChildAttributes) {
        return;
      }
      for (var i = 0; i < zenChildAttributes.length; i += 1) {
        if (zenChildAttributes[i] && /^[a-zA-Z0-9]{2}_[a-zA-Z0-9]{2}$/.test(zenChildAttributes[i].value)) {
          hideViaPositionProperty(zenCategorie);
        }
      }
    });
  };
  browser.document.addEventListener('DOMContentLoaded', function () {
    hideMainPageAds();
    hideYaDirectAds();
  }, false);
  observeDomChanges(function () {
    hideYandexBrowserAds();
    hideMainPageAds();
    hideYaDirectAds();
    hideFeedsAdsBlocks();
    oneDirectZenFeed();
  });
}if (isMatchingHostnames('kinopoisk.ru')) {
  var hideAdblockWarning = function hideAdblockWarning() {
    var node = browser.querySelector('div[class^="adblock-warning"]');
    removeNode(node);
  };
  var hideBrandingAds = function hideBrandingAds() {
    var probeStyles = browser.querySelectorAll('style[id]');
    toConsumableArray(probeStyles).forEach(function (styleEl) {
      if (styleEl.sheet && styleEl.sheet.rules.length <= 10) {
        removeNode(styleEl);
      }
    });
    iterateCSSRules(function (rule) {
      if (rule.selectorText && rule.selectorText.indexOf('.kinopoisk-header-branding__link') === 0) {
        hideViaDisplayProperty(rule);
      } else if (rule.selectorText && rule.selectorText.indexOf('.kinopoisk-header-branding__image') === 0) {
        rule.style.visibility = 'hidden';
      }
    });
    toConsumableArray(browser.querySelectorAll('.page-content > div[id]:not([class])')).forEach(function (probe) {
      if (probe.querySelector(':scope > div[id][style]')) {
        removeNode(probe);
      }
    });
  };
  var hideAdsByStylesheet = function hideAdsByStylesheet() {
    var adsSheet = browser.querySelector('.mb-style-tag');
    if (!adsSheet || !adsSheet.sheet || adsSheet.sheet.cssRules.length !== 1) {
      return;
    }
    hideViaDisplayProperty(adsSheet.sheet.cssRules[0]);
  };
  if (browser.location.hostname === 'kinopoisk.ru' || browser.location.hostname === 'www.kinopoisk.ru') {
    Object.defineProperty(Object.prototype, 'Rtb', {
      value: undefined
    });
  }
  observeDomChanges(function () {
    hideAdblockWarning();
    hideBrandingAds();
    hideAdsByStylesheet();
  });
}if (isMatchingHostnames('yandex.ru', 'yandex.kz', 'yandex.by', 'yandex.ua', 'yandex.md', 'yandex.fr', 'yandex.com.tr', 'yandex.com') && browser.location.pathname.startsWith('/news')) {
  var hideSidebarAds$1 = function hideSidebarAds() {
    injectHidingRuleForClassname('news-advert__column');
  };
  var hideGridAds = function hideGridAds() {
    injectHidingRuleForClassname('news-advert__card');
  };
  var hideRubricAds = function hideRubricAds() {
    var rubricsHeaders = browser.document.querySelectorAll('.news-top-rubric-heading');
    toConsumableArray(rubricsHeaders).forEach(function (item) {
      if (item.firstElementChild && item.firstElementChild.innerText === 'Реклама') {
        hideViaPositionProperty(item);
        hideViaPositionProperty(item.nextElementSibling);
      }
    });
  };
  var hideYandexDirect = function hideYandexDirect() {
    var _mainContainer$firstE, _layout$, _layout$$firstElement;
    var mainContainer = browser.document.querySelector('[role="main"]');
    var layout = mainContainer === null || mainContainer === void 0 ? void 0 : (_mainContainer$firstE = mainContainer.firstElementChild) === null || _mainContainer$firstE === void 0 ? void 0 : _mainContainer$firstE.children;
    if (layout && layout.length === 2 && ((_layout$ = layout[0]) === null || _layout$ === void 0 ? void 0 : (_layout$$firstElement = _layout$.firstElementChild) === null || _layout$$firstElement === void 0 ? void 0 : _layout$$firstElement.tagName) === 'H3') {
      var sidebar = layout[1];
      hideViaPositionProperty(sidebar);
      var newsContainer = layout[0];
      var newsAds = newsContainer === null || newsContainer === void 0 ? void 0 : newsContainer.lastElementChild;
      hideViaPositionProperty(newsAds);
    }
  };
  var mobileDirect = function mobileDirect() {
    if (navigator.userAgent.match('Mobile')) {
      var mobileAds = browser.querySelectorAll('.mg-layout > div[class][data-log-id]');
      toConsumableArray(mobileAds).forEach(function (mobileAd) {
        if (mobileAd.querySelector('div[style*="width: 100%"]') || !mobileAd.querySelector('h1.mg-story__title')) {
          hideViaPositionProperty(mobileAd);
        }
      });
    }
  };
  var placeholdersInFeed = function placeholdersInFeed() {
    var leftovers = browser.querySelectorAll('.news-feed > div[class*="_row"] div[class*="_col"] > div[class][data-log-id], [class^="news-"] ~ div[class*="_row"] > div[class][data-log-id]');
    if (leftovers) {
      toConsumableArray(leftovers).forEach(function (leftover) {
        var leftoverParent = leftover === null || leftover === void 0 ? void 0 : leftover.parentNode;
        if (leftoverParent && !leftoverParent.querySelector('article.news-card')) {
          hideViaPositionProperty(leftoverParent);
        }
      });
    }
    var articleContent = browser.querySelector('.mg-grid__row > div[class*="_col"] > article.mg-story');
    var placeholderNearMainContent = articleContent === null || articleContent === void 0 ? void 0 : articleContent.nextElementSibling;
    if (placeholderNearMainContent && !placeholderNearMainContent.className.startsWith('news-feed')) {
      hideViaPositionProperty(placeholderNearMainContent);
    }
    var placeholderNearRightColumn = browser.querySelector('.news-navigation-menu__wrapper + div[class] div[class*="_col"]:last-child div.mg-grid__item > div[class][data-log-id]');
    var placeholderNearRightColumnParent = placeholderNearRightColumn === null || placeholderNearRightColumn === void 0 ? void 0 : placeholderNearRightColumn.parentNode;
    if (placeholderNearRightColumnParent) {
      hideViaPositionProperty(placeholderNearRightColumnParent);
    }
    var singleAd = browser.querySelector('.mg-grid__row > div.mg-grid__col > div[class*="banger"][data-log-id]');
    if (singleAd) {
      hideViaPositionProperty(singleAd);
    }
  };
  var yandexPopup = function yandexPopup() {
    var elementPopup = browser.querySelector('.news-app > div[class][data-log-id]');
    if (elementPopup && elementPopup.querySelector('iframe[src^="https://yandex-news.naydex.net/"]:not([class])')) {
      removeNode(elementPopup);
    }
  };
  observeDomChanges(function () {
    hideSidebarAds$1();
    hideRubricAds();
    hideGridAds();
    hideYandexDirect();
    mobileDirect();
    placeholdersInFeed();
    yandexPopup();
  });
}if (isMatchingHostnames('mail.yandex.ru', 'mail.yandex.kz', 'mail.yandex.by', 'mail.yandex.ua', 'mail.yandex.md')) {
  var removeHeaderAds = function removeHeaderAds() {
    var infolineBox = browser.document.querySelector('.ns-view-infoline-box');
    if (!infolineBox) {
      return;
    }
    var adsBox = infolineBox.nextElementSibling;
    if (adsBox && adsBox.nextElementSibling && adsBox.nextElementSibling.classList[0] === 'ns-view-right-box') {
      hideViaPositionProperty(adsBox);
    }
  };
  var removeMailAds = function removeMailAds() {
    toConsumableArray(browser.document.styleSheets).forEach(function (sheet) {
      if (!sheet.href || browser.location.hostname !== new URL(sheet.href).hostname) {
        return;
      }
      var rules = toConsumableArray(safeGetStylesheetRules(sheet));
      if (rules.length > 60) {
        return;
      }
      rules.forEach(function (rule) {
        if (rule.selectorText && /^\..[a-zA-Z0-9_]{5,}$/.test(rule.selectorText) && rule.style.display !== 'none') {
          rule.style.display = 'none';
        }
      });
    });
  };
  var removeSiderbarAds = function removeSiderbarAds() {
    var _adsIframe$parentNode;
    var adsIframe = document.querySelector('.mail-Layout-Aside iframe');
    if (!adsIframe) {
      return;
    }
    var adsContainer = (_adsIframe$parentNode = adsIframe.parentNode) === null || _adsIframe$parentNode === void 0 ? void 0 : _adsIframe$parentNode.parentNode;
    if (adsContainer && !adsContainer.classList[0].startsWith('ns-view-')) {
      hideViaPositionProperty(adsContainer);
    }
  };
  var leftSiderbarAds = function leftSiderbarAds() {
    var elementsLeftSidebar = browser.document.querySelectorAll('.mail-Layout-Aside .mail-Layout-Aside-Inner-Box > div[class^="ns-view-"]');
    if (elementsLeftSidebar) {
      toConsumableArray(elementsLeftSidebar).forEach(function (element) {
        if (element
        && !element.querySelector('a[href]')
        && element.querySelector('div[style*="width: 100%"]')) {
          removeNode(element);
        }
        if (element && element !== null && element !== void 0 && element.textContent.includes('Отключить рекламу')) {
          removeNode(element === null || element === void 0 ? void 0 : element.nextElementSibling);
        }
      });
    }
    var directPostSendWindow = browser.document.querySelector('.ComposeDoneDirect');
    if (directPostSendWindow) {
      hideViaPositionProperty(directPostSendWindow);
    }
  };
  observeDomChanges(function () {
    removeMailAds();
    removeHeaderAds();
    removeSiderbarAds();
    leftSiderbarAds();
  });
}if (isMatchingHostnames('afisha.yandex.ru', 'afisha.yandex.kz', 'afisha.yandex.by', 'afisha.yandex.ua', 'afisha.yandex.md')) {
  var isNoindex = function isNoindex(element) {
    if (!element) {
      return false;
    }
    return !!(element.previousSibling && element.nextSibling && element.previousSibling.textContent === 'noindex' && element.nextSibling.textContent === '/noindex');
  };
  var hideTopBanner = function hideTopBanner() {
    try {
      var topBanner = browser.document.querySelector('div[class*="grid_adaptive"] > div.i-background').nextElementSibling.firstElementChild;
      if (isNoindex(topBanner)) {
        hideViaPositionProperty(topBanner);
      }
    } catch (_unused) {}
  };
  var hideBannerAfterHeader = function hideBannerAfterHeader() {
    try {
      var container = browser.document.querySelector('header + .page-content').firstElementChild.firstElementChild;
      toConsumableArray(container.children).forEach(function (childItem) {
        if (isNoindex(childItem.firstElementChild)) {
          hideViaPositionProperty(childItem);
        }
      });
    } catch (_unused2) {}
  };
  var hideSidebarAds$2 = function hideSidebarAds() {
    try {
      var sidebarAds = browser.document.querySelector('aside > .sidebar');
      toConsumableArray(sidebarAds.children).forEach(function (siderbarItem) {
        if (isNoindex(siderbarItem.firstElementChild)) {
          hideViaPositionProperty(siderbarItem);
        }
      });
    } catch (_unused3) {}
  };
  var hideEventsAds = function hideEventsAds() {
    try {
      var eventAttributes = browser.document.querySelector('.event-attributes').parentNode;
      toConsumableArray(eventAttributes.children).forEach(function (item) {
        if (isNoindex(item)) {
          hideViaPositionProperty(item);
        }
      });
    } catch (_unused4) {}
  };
  var hideEventsBanner = function hideEventsBanner() {
    try {
      toConsumableArray(browser.document.querySelectorAll('.events-list__list')).forEach(function (eventList) {
        toConsumableArray(eventList.children).forEach(function (eventItem) {
          if (isNoindex(eventItem.firstElementChild)) {
            hideViaPositionProperty(eventItem);
          }
        });
      });
    } catch (_unused5) {}
  };
  var hideFooterAds = function hideFooterAds() {
    try {
      var footerAdsContainer = browser.document.querySelector('.viewed-events-loader').previousElementSibling;
      if (isNoindex(footerAdsContainer)) {
        hideViaPositionProperty(footerAdsContainer);
      }
    } catch (_unused6) {}
  };
  var hideFooterBanner = function hideFooterBanner() {
    try {
      var footerBanner = browser.document.querySelector('[class$="__foot-wrapper"] > .grid__inner').firstElementChild;
      if (isNoindex(footerBanner)) {
        hideViaPositionProperty(footerBanner);
      }
    } catch (_unused7) {}
  };
  var footerBannerMobile = function footerBannerMobile() {
    if (navigator.userAgent.match('Mobile')) {
      try {
        var _browser$document$que;
        var footerBanner = (_browser$document$que = browser.document.querySelector('.page-content + div[class]')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.firstElementChild;
        if (isNoindex(footerBanner)) {
          hideViaPositionProperty(footerBanner);
        }
        var suspectItems = browser.querySelectorAll('span[data-component] > div[class^="Item-"]');
        toConsumableArray(suspectItems).forEach(function (suspectItem) {
          if (suspectItem.querySelector('div[data-banner-id]')) {
            hideViaPositionProperty(suspectItem);
          }
        });
      } catch (_unused8) {}
    }
  };
  var hideAnotherAds = function hideAnotherAds() {
    var anotherTopBanner = browser.querySelector('div[data-bem*="widget-promo-"] > div.grid__inner > div[class]');
    if (isNoindex(anotherTopBanner)) {
      hideViaPositionProperty(anotherTopBanner);
    }
    var anotherFooterBanner = browser.querySelector('div[class*="event-content-react"][data-bem*="props"] + div[class][id]');
    if (isNoindex(anotherFooterBanner)) {
      hideViaPositionProperty(anotherFooterBanner);
    }
  };
  observeDomChanges(function () {
    hideTopBanner();
    hideBannerAfterHeader();
    hideSidebarAds$2();
    hideEventsAds();
    hideEventsBanner();
    hideFooterAds();
    hideFooterBanner();
    footerBannerMobile();
    hideAnotherAds();
  });
}if (isMatchingHostnames('tv.yandex.ru', 'tv.yandex.kz', 'tv.yandex.by', 'tv.yandex.ua', 'tv.yandex.md')) {
  var hideSimilarAds = function hideSimilarAds(adsBlock) {
    var _adsBlock$firstElemen;
    var adsClassNames = adsBlock === null || adsBlock === void 0 ? void 0 : (_adsBlock$firstElemen = adsBlock.firstElementChild) === null || _adsBlock$firstElemen === void 0 ? void 0 : _adsBlock$firstElemen.classList;
    if (!adsClassNames) {
      return;
    }
    toConsumableArray(adsClassNames).forEach(function (className) {
      if (className.endsWith('__wrapper')) {
        var adsElements = browser.document.getElementsByClassName(className);
        toConsumableArray(adsElements).forEach(function (ads) {
          hideViaPositionProperty(ads);
        });
      }
    });
  };
  var hideFakeContent = function hideFakeContent(selector) {
    var contentBlocks = browser.document.querySelectorAll(selector);
    if (!contentBlocks || contentBlocks.length !== 2) {
      return;
    }
    var adsBlock = contentBlocks[1];
    if (!adsBlock.querySelector('.content__header')) {
      hideViaPositionProperty(adsBlock);
      hideSimilarAds(adsBlock);
    }
  };
  var hideHeaderBanner = function hideHeaderBanner() {
    var _adsContainer$firstEl;
    var header = browser.document.querySelector('header');
    var adsContainer = header === null || header === void 0 ? void 0 : header.previousElementSibling;
    if (adsContainer !== null && adsContainer !== void 0 && (_adsContainer$firstEl = adsContainer.firstElementChild) !== null && _adsContainer$firstEl !== void 0 && _adsContainer$firstEl.className.endsWith('__wrapper')) {
      hideViaPositionProperty(adsContainer);
    }
  };
  var hidePageBanner = function hidePageBanner() {
    var _ads$style;
    var contentHeader = browser.document.querySelector('.content__header');
    var ads = contentHeader === null || contentHeader === void 0 ? void 0 : contentHeader.previousElementSibling;
    if (ads !== null && ads !== void 0 && (_ads$style = ads.style) !== null && _ads$style !== void 0 && _ads$style.backgroundImage && ads !== null && ads !== void 0 && ads.querySelector('a[target="_blank"]')) {
      hideViaPositionProperty(ads);
    }
  };
  var hideGridAds$1 = function hideGridAds() {
    try {
      var grid = browser.document.querySelectorAll('[class^="grid__"]');
      var areas = ['adv / adv / adv / adv', 'wide / wide / wide / wide'];
      toConsumableArray(grid).forEach(function (elem) {
        if (areas.includes(getComputedStyle(elem).gridArea)) {
          hideViaPositionProperty(elem);
          hideSimilarAds(elem);
        }
      });
    } catch (_unused) {}
  };
  observeDomChanges(function () {
    hideGridAds$1();
    hideHeaderBanner();
    hidePageBanner();
    if (browser.window.innerWidth > 1000) {
      hideFakeContent('main > [class^="content__"]');
      hideFakeContent('main > div > [class^="content__"]');
    }
  });
}var removeMailAdsOverride = function removeMailAdsOverride() {
  if (typeof unsafeWindow === 'undefined') {
    return;
  }
  var magic = generateRandomString();
  Object.defineProperty(unsafeWindow.Object.prototype, 'componentWillMount', {
    get: function get() {
      var v = this[magic];
      if (typeof v !== 'function' || v.toString().indexOf('getDerivedStateFromProps') >= 0) {
        return v;
      }
      return function () {
        this.items = [];
      };
    },
    set: function set(v) {
      this[magic] = v;
    }
  });
};
var hideLeftSidebarAds = function hideLeftSidebarAds() {
  var n = 3;
  toConsumableArray(browser.document.styleSheets).forEach(function (sheet) {
    toConsumableArray(safeGetStylesheetRules(sheet)).forEach(function (rule) {
      if (rule.selectorText && rule.selectorText.includes(', .b-layout__col_1_2')) {
        try {
          var leftSidebar = toConsumableArray(browser.document.querySelectorAll(rule.selectorText));
          var ads = leftSidebar[leftSidebar.length - 1].children;
          for (var i = ads.length - n; i < ads.length; i += 1) {
            hideViaDisplayProperty(ads[i]);
          }
        } catch (_unused) {}
      }
    });
  });
};
var hideGridAds$2 = function hideGridAds() {
  var adsItems = browser.document.querySelectorAll('span.pl_cs');
  if (!adsItems) {
    return;
  }
  toConsumableArray(adsItems).forEach(function (ads) {
    var adsContainer = ads.parentNode.parentNode.parentNode.parentNode.parentNode;
    if (adsContainer && ads.innerText === 'Реклама' && adsContainer.id.startsWith('_pcard')) {
      hideViaDisplayProperty(adsContainer);
    }
  });
};
var hideAdsOldInterface = function hideAdsOldInterface() {
  var adsLeftColumn = browser.querySelector('#b-nav_fileSearch + div');
  if (adsLeftColumn) {
    hideViaPositionProperty(adsLeftColumn);
  }
  var adTopLetters = browser.querySelector('#adman-line');
  var adTopLettersParent = adTopLetters === null || adTopLetters === void 0 ? void 0 : adTopLetters.parentNode;
  if (adTopLettersParent) {
    hideViaPositionProperty(adTopLettersParent);
  }
};
var rightSidebardAds = function rightSidebardAds() {
  var advertColumn = browser.document.querySelector('.advert-column');
  if (!advertColumn) {
    var elements = browser.document.querySelectorAll('.portal-menu + div[class] > div[class]');
    if (elements) {
      toConsumableArray(elements).forEach(function (element) {
        if (element && element !== null && element !== void 0 && element.textContent.includes('Реклама') && (element === null || element === void 0 ? void 0 : element.firstElementChild) !== element.querySelector('div[style]') && !element.querySelector('.sidebar-folders')) {
          hideViaPositionProperty(element);
        }
      });
    }
  }
};
var adAboveLettersFeed = function adAboveLettersFeed() {
  var adLetter = browser.document.querySelector('.letter-list-item-adv');
  if (adLetter) {
    hideViaPositionProperty(adLetter);
  }
  if (adLetter && adLetter.style.minWidth) {
    var newAdLetterFeed = browser.document.querySelectorAll('div[class] > div[class$="-letter"] ~ div[class]');
    toConsumableArray(newAdLetterFeed).forEach(function (newAdLetter) {
      if (newAdLetter && !newAdLetter.querySelector('.js-letter-list-item')) {
        hideViaPositionProperty(newAdLetter);
      }
    });
  }
};
var hideAtom = function hideAtom() {
  var usefulElements = browser.document.querySelectorAll('.tabs ~ div[class]');
  if (usefulElements) {
    toConsumableArray(usefulElements).forEach(function (element) {
      if (element && element.querySelector('a[href^="https://r.mail.ru/redir/"]')) {
        hideViaPositionProperty(element);
      }
    });
  }
};
var hideAdAbovePulse = function hideAdAbovePulse() {
  var suspectedAds = browser.document.querySelectorAll('.tabs-content ~ div[class]');
  if (suspectedAds) {
    toConsumableArray(suspectedAds).forEach(function (suspectedAd) {
      if (suspectedAd && !suspectedAd.querySelector('.tabs-content__item')) {
        hideViaPositionProperty(suspectedAd);
      }
    });
  }
};
var hideAdRightColumn = function hideAdRightColumn() {
  var rightColumnDiv = browser.querySelector('div[class^="layout__row"] > div[class^="layout__col"]:last-child');
  if (rightColumnDiv && (rightColumnDiv === null || rightColumnDiv === void 0 ? void 0 : rightColumnDiv.innerText.indexOf('Реклама')) > 0) {
    removeNode(rightColumnDiv);
  }
};
var isOldInterface = function isOldInterface() {
  return browser.location.pathname.indexOf('/messages/') === 0;
};
if (isMatchingHostnames('e.mail.ru')) {
  if (isOldInterface()) {
    removeMailAdsOverride();
  }
  observeDomChanges(function () {
    adAboveLettersFeed();
    rightSidebardAds();
    hideCssRulesBySelectorText(', .layout__column_right');
    hideCssRulesBySelectorText('.layer-sent-page__banner');
    if (isOldInterface()) {
      hideAdsOldInterface();
      hideLeftSidebarAds();
      hideCssRulesBySelectorText(', .b-datalist__head__item_rb');
    }
  });
}
if (isMatchingHostnames('octavius.mail.ru')) {
  observeDomChanges(function () {
    adAboveLettersFeed();
    rightSidebardAds();
    hideCssRulesBySelectorText(', .layout__column_right');
    hideCssRulesBySelectorText('.layer-sent-page__banner');
  });
}
if (isMatchingHostnames('mail.ru')) {
  observeDomChanges(function () {
    hideCssRulesBySelectorText('.rectangle-banner');
    hideGridAds$2();
  });
}
if (isMatchingHostnames('mail.ru') && browser.location.pathname === '/') {
  observeDomChanges(function () {
    hideAtom();
    hideAdAbovePulse();
  });
}
if (isMatchingHostnames('otvet.mail.ru')) {
  observeDomChanges(function () {
    hideAdRightColumn();
  });
}var isAdsStyle = function isAdsStyle(rules) {
  if (rules.length <= 10) {
    var result = true;
    toConsumableArray(rules).forEach(function (rule) {
      if (rule.style && (!rule.style.backgroundImage || rule.style.backgroundImage.endsWith('.png")') || rule.style.backgroundImage.endsWith('.svg")'))) {
        result = false;
      }
    });
    return result;
  }
  return false;
};
var hideAdsByBackgroundImage = function hideAdsByBackgroundImage() {
  var pulseLenta = browser.querySelector('.pulse-lenta');
  var styles = browser.document.querySelectorAll('style');
  toConsumableArray(styles).forEach(function (style) {
    var rules = safeGetStylesheetRules(style.sheet);
    if (isAdsStyle(rules)) {
      toConsumableArray(rules).forEach(function (rule) {
        var _adsImage$parentNode, _adsImage$parentNode$;
        var adsImage = browser.querySelector(rule.selectorText);
        if (pulseLenta && pulseLenta.contains(adsImage)) {
          return;
        }
        var adsBlock = adsImage === null || adsImage === void 0 ? void 0 : (_adsImage$parentNode = adsImage.parentNode) === null || _adsImage$parentNode === void 0 ? void 0 : (_adsImage$parentNode$ = _adsImage$parentNode.parentNode) === null || _adsImage$parentNode$ === void 0 ? void 0 : _adsImage$parentNode$.parentNode;
        if (!adsBlock) {
          return;
        }
        hideViaDisplayProperty(adsBlock);
      });
    }
  });
};
var hideSmallAdsNearArticle = function hideSmallAdsNearArticle() {
  if (navigator.userAgent.match('Mobile')) {
    var smallAds = browser.querySelectorAll('.wrapper_with-article-swipe-navigation > div[class]:not([style]), .wrapper_with-article-swipe-navigation > span');
    if (smallAds) {
      toConsumableArray(smallAds).forEach(function (smallAd) {
        if (smallAd
        && smallAd.__smokedElement === true) {
          hideViaPositionProperty(smallAd);
        }
      });
    }
  }
};
if (isMatchingHostnames('news.mail.ru')) {
  observeDomChanges(function () {
    hideCssRulesBySelectorText(/, \.p-directhack|\.cols_experiment-1|\.js-smoky-single/);
    hideAdsByBackgroundImage();
  });
}
if (isMatchingHostnames('mail.ru')) {
  observeDomChanges(function () {
    hideCssRulesBySelectorText(/\.spring_side|\.p-directhack|\.rb-direct-mimic_index|\.deti-slot_box|\.health-slot_box|\.spring|\.rb-direct-wrapper|\.rb_body|\.rb-direct-side|\.news-item__link|\.notify/);
  });
}
if (isMatchingHostnames('auto.mail.ru')) {
  observeDomChanges(function () {
    hideCssRulesBySelectorText(/\.rb_main-240x400|\.trg-banners|\.rb_hide_by_parallax/);
  });
}
if (isMatchingHostnames('sportmail.ru')) {
  observeDomChanges(function () {
    hideSmallAdsNearArticle();
    hideCssRulesBySelectorText(/\.cols_experiment-1|\.p-spring/);
    hideAdsByBackgroundImage();
  });
}
if (isMatchingHostnames('horo.mail.ru')) {
  observeDomChanges(function () {
    hideCssRulesBySelectorText(/\.incut_full|\.cols__column_sidebar/);
  });
}
if (isMatchingHostnames('hi-tech.mail.ru')) {
  observeDomChanges(function () {
    hideCssRulesBySelectorText(/\.sticky-springs__item|\.cols__column_asd|\.viewbox__side/);
    hideAdsByBackgroundImage();
  });
}
if (isMatchingHostnames('deti.mail.ru')) {
  observeDomChanges(function () {
    hideAdsByBackgroundImage();
  });
}
if (isMatchingHostnames('lady.mail.ru')) {
  observeDomChanges(function () {
    hideCssRulesBySelectorText('.cols_experiment-1');
  });
}if (isMatchingHostnames('music.yandex.ru', 'music.yandex.kz', 'music.yandex.by', 'music.yandex.ua', 'music.yandex.md')) {
  var removeHeaderAds$1 = function removeHeaderAds() {
    var _browser$document$que;
    var headerAdsBlock = (_browser$document$que = browser.document.querySelector('.adfox-brick')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.previousElementSibling;
    if (headerAdsBlock && headerAdsBlock.querySelector('.d-overhead__close')) {
      hideViaPositionProperty(headerAdsBlock);
    }
  };
  observeDomChanges(function () {
    removeHeaderAds$1();
  });
}if (isMatchingHostnames('ok.ru')) {
  var mimicBannerSelectors = ['#RightColumnBannerInner', '#hook_Block_ViewportHeightAwareBanner'];
  var isMimicAdStyle = function isMimicAdStyle(selectorText) {
    if (mimicBannerSelectors.some(function (mimicStyle) {
      return selectorText.includes(mimicStyle);
    })) {
      return true;
    }
    return false;
  };
  var removeOkAds = function removeOkAds() {
    toConsumableArray(browser.document.styleSheets).forEach(function (sheet) {
      toConsumableArray(safeGetStylesheetRules(sheet)).forEach(function (rule) {
        if (rule.selectorText && isMimicAdStyle(rule.selectorText) && rule.style.display !== 'none') {
          rule.style.display = 'none';
        }
      });
    });
  };
  var removeOkFeedAds = function removeOkFeedAds() {
    var feedItems = document.querySelectorAll('.feed-list > .feed-w > [data-feed-id]');
    feedItems.forEach(function (item) {
      if (item.style.display === 'none') {
        return;
      }
      var feedTopItems = item.querySelectorAll('.feed_top .feed_ava+div > div[class]');
      feedTopItems.forEach(function (topItem) {
        if (topItem.innerText === 'Реклама' || topItem.innerText === 'Ad') {
          item.style.display = 'none';
        }
      });
      var adMarker = item.querySelector('.feed_top .feed_count > div');
      if (!adMarker) {
        return;
      }
      if (adMarker.innerText === 'Реклама' || adMarker.innerText === 'Ad') {
        item.style.display = 'none';
      }
    });
  };
  observeDomChanges(function () {
    removeOkAds();
    removeOkFeedAds();
  });
}function isInsideCircumventionScript() {
  if (!document.currentScript || !document.currentScript.innerText) {
    return false;
  }
  var scriptText = document.currentScript.innerText;
  if (scriptText.length > 100000 && scriptText.indexOf('window.Adf') > 0 && scriptText.indexOf('checkAdPlace') > 0) {
    return true;
  }
  return false;
}
var hasSimilarAttributes = function hasSimilarAttributes(children) {
  if (children.length === 1) {
    return false;
  }
  for (var i = 1; i < children.length; i += 1) {
    var _children, _children$attributes$, _children$i, _children$i$attribute;
    if (((_children = children[i - 1]) === null || _children === void 0 ? void 0 : (_children$attributes$ = _children.attributes[0]) === null || _children$attributes$ === void 0 ? void 0 : _children$attributes$.value) !== ((_children$i = children[i]) === null || _children$i === void 0 ? void 0 : (_children$i$attribute = _children$i.attributes[0]) === null || _children$i$attribute === void 0 ? void 0 : _children$i$attribute.value)) {
      return false;
    }
  }
  return true;
};
var hideYandexDirectByLink = function hideYandexDirectByLink() {
  var adsImg = browser.document.querySelectorAll('a[target="_blank"][style^="background-image: url(\'//"]');
  toConsumableArray(adsImg).forEach(function (img) {
    var _img$parentNode, _img$parentNode2, _img$parentNode2$pare;
    var adsBlockType1 = img === null || img === void 0 ? void 0 : (_img$parentNode = img.parentNode) === null || _img$parentNode === void 0 ? void 0 : _img$parentNode.parentNode;
    var adsBlockType2 = img === null || img === void 0 ? void 0 : (_img$parentNode2 = img.parentNode) === null || _img$parentNode2 === void 0 ? void 0 : (_img$parentNode2$pare = _img$parentNode2.parentNode) === null || _img$parentNode2$pare === void 0 ? void 0 : _img$parentNode2$pare.parentNode;
    if (hasSimilarAttributes(adsBlockType1 === null || adsBlockType1 === void 0 ? void 0 : adsBlockType1.children)) {
      hideViaDisplayProperty(adsBlockType1);
    }
    if (hasSimilarAttributes(adsBlockType2 === null || adsBlockType2 === void 0 ? void 0 : adsBlockType2.children)) {
      hideViaDisplayProperty(adsBlockType2);
    }
  });
};
var hideYandexDirectByStyle = function hideYandexDirectByStyle() {
  var styleSheets = browser.document.getElementsByTagName('style');
  toConsumableArray(styleSheets).forEach(function (styleSheet) {
    var rules = toConsumableArray(safeGetStylesheetRules(styleSheet.sheet));
    var firstRule = rules[0];
    if (rules.length > 50 || !firstRule) {
      return;
    }
    if (firstRule.selectorText && /[a-zA-Z0-9]{2,8}\[[a-zA-Z0-9]{2,8}\*="[a-zA-Z0-9]{2,10}"]/.test(firstRule.selectorText)) {
      hideViaPositionProperty(firstRule);
    }
  });
};
var placeholders = function placeholders() {
  var leftovers = browser.document.querySelectorAll('div[data-ad-marker]');
  var leftoversNearFeedArticle = browser.document.querySelectorAll('#root div > article[class] ~ div[class]');
  if (leftovers) {
    leftovers.forEach(function (leftover) {
      if (leftover) {
        hideViaPositionProperty(leftover);
      }
    });
  }
  if (leftoversNearFeedArticle) {
    leftoversNearFeedArticle.forEach(function (leftoverNearFeedArticle) {
      if (leftoverNearFeedArticle && leftoverNearFeedArticle.querySelector('div[id^="adfox-"]')) {
        hideViaPositionProperty(leftoverNearFeedArticle);
      }
    });
  }
};
var removeAdScript = function removeAdScript() {
  var scripts = browser.document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i += 1) {
    var script = scripts[i];
    if (script && script.innerText.indexOf('getYaPlaceIds') > 0) {
      removeNode(script);
    }
  }
};
if (isMatchingHostnames('rambler.ru', 'championat.com', 'gazeta.ru', 'lenta.ru', 'quto.ru', 'rns.online', 'passion.ru')) {
  var realUA = navigator.userAgent;
  var getUserAgent = function getUserAgent() {
    if (isInsideCircumventionScript()) {
      return 'MSIE ';
    }
    return realUA;
  };
  Object.defineProperty(browser.window.navigator, 'userAgent', {
    get: getUserAgent
  });
  var realPromise = browser.window.Promise;
  Object.defineProperty(browser.window, 'Promise', {
    get: function get() {
      if (isInsideCircumventionScript()) {
        throw new TypeError('Failed to fetch');
      }
      return realPromise;
    },
    set: function set(value) {
      realPromise = value;
    }
  });
  observeDomChanges(function () {
    hideYandexDirectByLink();
    hideYandexDirectByStyle();
    placeholders();
    removeAdScript();
  });
}if (isMatchingHostnames('drive2.ru', 'drive2.com')) {
  var hideAdsByStylesheet$1 = function hideAdsByStylesheet() {
    var adsSheet = browser.querySelector('.mb-style-tag');
    if (!adsSheet || !adsSheet.sheet || adsSheet.sheet.cssRules.length !== 1) {
      return;
    }
    adsSheet.sheet.cssRules[0].style.display = 'none';
  };
  var hideGridAds$3 = function hideGridAds() {
    if (browser.location.pathname.startsWith('/cars/')) {
      var girdFirstElements = browser.querySelectorAll('.o-grid > .c-car-card-sa:first-child');
      girdFirstElements.forEach(function (gridElement) {
        var _gridElement$parentNo;
        var gridElements = gridElement === null || gridElement === void 0 ? void 0 : (_gridElement$parentNo = gridElement.parentNode) === null || _gridElement$parentNo === void 0 ? void 0 : _gridElement$parentNo.children;
        if (!gridElements) {
          return;
        }
        toConsumableArray(gridElements).forEach(function (element) {
          if (element.className !== gridElement.className) {
            element.style.visibility = 'hidden';
          }
        });
      });
    }
  };
  var hideMarketAds = function hideMarketAds() {
    var _marketFirstElement$p;
    var marketFirstElement = browser.querySelector('.js-market-offers > .offer-card');
    var marketElements = marketFirstElement === null || marketFirstElement === void 0 ? void 0 : (_marketFirstElement$p = marketFirstElement.parentNode) === null || _marketFirstElement$p === void 0 ? void 0 : _marketFirstElement$p.children;
    if (!marketElements) {
      return;
    }
    toConsumableArray(marketElements).forEach(function (element) {
      if (element.className !== marketFirstElement.className) {
        hideViaDisplayProperty(element);
      }
    });
  };
  observeDomChanges(function () {
    hideAdsByStylesheet$1();
    hideGridAds$3();
    hideMarketAds();
  });
}if (isMatchingHostnames('eda.ru')) {
  var areEqual = function areEqual() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    for (var i = 1; i < args.length; i += 1) {
      if (args[i] === null || args[i] !== args[i - 1]) {
        return false;
      }
    }
    return true;
  };
  var hideTopBanner$1 = function hideTopBanner() {
    try {
      var body = browser.document.querySelector('body');
      var bodyChildren = toConsumableArray(body.children);
      var pageWrapper = browser.document.querySelector('header').parentNode;
      var pageWrapperIndex = bodyChildren.indexOf(pageWrapper);
      if (pageWrapperIndex === -1) {
        return;
      }
      var elementsBeforePageWrapper = bodyChildren.slice(0, pageWrapperIndex);
      var lastScriptIndex;
      elementsBeforePageWrapper.forEach(function (element, index) {
        if (element.tagName === 'SCRIPT') {
          lastScriptIndex = index;
        }
      });
      if (lastScriptIndex === 'undefined') {
        return;
      }
      for (var i = lastScriptIndex + 1; i < pageWrapperIndex; i += 1) {
        hideViaDisplayProperty(elementsBeforePageWrapper[i]);
      }
    } catch (_unused) {}
  };
  var hideFooterAds$1 = function hideFooterAds() {
    try {
      var footerAds = browser.document.querySelector('#superfooter').previousSibling;
      if (footerAds.children.length === 3 && areEqual(footerAds.children[0].attributes[0].textContent, footerAds.children[1].attributes[0].textContent, footerAds.children[2].attributes[0].textContent)) {
        hideViaDisplayProperty(footerAds);
      }
    } catch (_unused2) {}
  };
  observeDomChanges(function () {
    hideTopBanner$1();
    hideFooterAds$1();
  });
}var hideHeaderBanner$1 = function hideHeaderBanner() {
  var header = browser.document.querySelector('header');
  if (!header) {
    return;
  }
  var adsContainer = header.previousElementSibling;
  if (!adsContainer) {
    return;
  }
  var ignoredNodeTypes = ['DIV', 'SCRIPT', 'STYLE'];
  if (ignoredNodeTypes.find(function (nodeType) {
    return adsContainer.nodeName !== nodeType;
  })) {
    hideViaDisplayProperty(adsContainer);
  }
};
var hideSidebarAds$3 = function hideSidebarAds() {
  var layoutSidebar = browser.document.querySelector('.LayoutSidebar');
  if (!layoutSidebar) {
    return;
  }
  toConsumableArray(layoutSidebar.children).forEach(function (child) {
    if (child.className !== 'LayoutSidebar__content') {
      hideViaPositionProperty(child.firstElementChild);
    }
  });
};
var hideFilterBanner = function hideFilterBanner() {
  var priceRange = browser.document.querySelector('#priceRange');
  if (!priceRange) {
    return;
  }
  var filterBanner = priceRange.nextElementSibling;
  if (filterBanner && !filterBanner.className) {
    hideViaPositionProperty(filterBanner);
  }
};
var hideMiniBanner = function hideMiniBanner() {
  var _miniBannerLink$paren, _miniBannerLink$paren2;
  var miniBannerLink = browser.document.querySelector('a[target$="_blank"][href^="https://an.yandex.ru"]');
  if (!miniBannerLink) {
    return;
  }
  var miniBanner = miniBannerLink === null || miniBannerLink === void 0 ? void 0 : (_miniBannerLink$paren = miniBannerLink.parentNode) === null || _miniBannerLink$paren === void 0 ? void 0 : (_miniBannerLink$paren2 = _miniBannerLink$paren.parentNode) === null || _miniBannerLink$paren2 === void 0 ? void 0 : _miniBannerLink$paren2.parentNode;
  if (miniBanner && getComputedStyle(miniBanner).width === '240px') {
    hideViaPositionProperty(miniBanner);
  }
};
var hideYandexDirectByRemoveScript = function hideYandexDirectByRemoveScript() {
  var adScript = browser.document.getElementsByTagName('script');
  for (var i = 0; i < adScript.length; i += 1) {
    var element = adScript[i];
    if (element && element.innerText.indexOf('onError') > 0 && element.innerText.indexOf('direct') > 0) {
      removeNode(element);
    }
  }
};
if (isMatchingHostnames('media.auto.ru')) {
  observeDomChanges(function () {
    hideHeaderBanner$1();
  });
}
if (isMatchingHostnames('auto.ru')) {
  observeDomChanges(function () {
    hideFilterBanner();
    hideMiniBanner();
    hideHeaderBanner$1();
    hideSidebarAds$3();
    hideYandexDirectByRemoveScript();
  });
}if (isMatchingHostnames('wp.pl')) {
  var hideAdsByStylesheet$2 = function hideAdsByStylesheet() {
    var _browser$querySelecto, _browser$querySelecto2;
    var adsSheetRules = (_browser$querySelecto = browser.querySelector('style[data-id=wpcss]')) === null || _browser$querySelecto === void 0 ? void 0 : (_browser$querySelecto2 = _browser$querySelecto.sheet) === null || _browser$querySelecto2 === void 0 ? void 0 : _browser$querySelecto2.cssRules;
    if (!adsSheetRules) {
      return;
    }
    toConsumableArray(adsSheetRules).forEach(function (rule) {
      var _rule$style, _rule$style2;
      if ((rule === null || rule === void 0 ? void 0 : (_rule$style = rule.style) === null || _rule$style === void 0 ? void 0 : _rule$style.width) === '320px' && (rule === null || rule === void 0 ? void 0 : (_rule$style2 = rule.style) === null || _rule$style2 === void 0 ? void 0 : _rule$style2.height) === '40px') {
        hideViaDisplayProperty(rule);
      }
    });
  };
  var hidePolecaneAds = function hidePolecaneAds() {
    browser.querySelectorAll('span').forEach(function (element) {
      if ((element === null || element === void 0 ? void 0 : element.textContent) === 'REKLAMA') {
        hideViaDisplayProperty(element === null || element === void 0 ? void 0 : element.parentNode);
      }
    });
  };
  observeDomChanges(function () {
    hidePolecaneAds();
    hideAdsByStylesheet$2();
  });
}var hideSidebarAds$4 = function hideSidebarAds() {
  iterateCSSRules(function (rule) {
    if (rule.cssText.includes('{ content: url("data:image/jpeg;base64')) {
      var _adsImage$parentNode, _adsImage$parentNode$, _adsImage$parentNode$2, _adsImage$parentNode$3;
      var adsImage = browser.querySelector(rule.selectorText);
      var adsBlock = adsImage === null || adsImage === void 0 ? void 0 : (_adsImage$parentNode = adsImage.parentNode) === null || _adsImage$parentNode === void 0 ? void 0 : (_adsImage$parentNode$ = _adsImage$parentNode.parentNode) === null || _adsImage$parentNode$ === void 0 ? void 0 : (_adsImage$parentNode$2 = _adsImage$parentNode$.parentNode) === null || _adsImage$parentNode$2 === void 0 ? void 0 : (_adsImage$parentNode$3 = _adsImage$parentNode$2.parentNode) === null || _adsImage$parentNode$3 === void 0 ? void 0 : _adsImage$parentNode$3.parentNode;
      if (!adsBlock || adsBlock.children.length < 3) {
        return;
      }
      hideViaDisplayProperty(adsBlock);
    }
  });
};
if (isMatchingHostnames('minigames.mail.ru')) {
  observeDomChanges(function () {
    hideSidebarAds$4();
  });
}var hideSidebarAds$5 = function hideSidebarAds() {
  var spanElements = browser.querySelectorAll('span');
  toConsumableArray(spanElements).forEach(function (span) {
    if (span.innerText === 'PropellerAds') {
      var _span$parentNode, _span$parentNode$pare, _span$parentNode$pare2;
      var adsBlock = span === null || span === void 0 ? void 0 : (_span$parentNode = span.parentNode) === null || _span$parentNode === void 0 ? void 0 : (_span$parentNode$pare = _span$parentNode.parentNode) === null || _span$parentNode$pare === void 0 ? void 0 : (_span$parentNode$pare2 = _span$parentNode$pare.parentNode) === null || _span$parentNode$pare2 === void 0 ? void 0 : _span$parentNode$pare2.parentNode;
      hideViaPositionProperty(adsBlock);
    }
  });
};
if (isMatchingHostnames('vidstream.online')) {
  observeDomChanges(function () {
    hideSidebarAds$5();
  });
}var hideDirectAds = function hideDirectAds() {
  var elementsWithAd = browser.querySelectorAll('header + div > div[class$="-direct"] > div[class], header + div > div[class]');
  toConsumableArray(elementsWithAd).forEach(function (elementWithAd) {
    var _elementWithAd$classL;
    if ((elementWithAd === null || elementWithAd === void 0 ? void 0 : (_elementWithAd$classL = elementWithAd.classList) === null || _elementWithAd$classL === void 0 ? void 0 : _elementWithAd$classL.length) >= 3
    && elementWithAd.querySelector('div[style*="width: 100%"]') && !elementWithAd.querySelector('.js-doc-page') && !elementWithAd.querySelector('input[type="number"]')) {
      hideViaPositionProperty(elementWithAd);
    }
  });
  var elementsWithAdBottom = browser.querySelectorAll('.js-doc-html > div[class]');
  toConsumableArray(elementsWithAdBottom).forEach(function (elementWithAdBottom) {
    var _elementWithAdBottom$;
    if ((elementWithAdBottom === null || elementWithAdBottom === void 0 ? void 0 : (_elementWithAdBottom$ = elementWithAdBottom.classList) === null || _elementWithAdBottom$ === void 0 ? void 0 : _elementWithAdBottom$.length) >= 3 && !(elementWithAdBottom !== null && elementWithAdBottom !== void 0 && elementWithAdBottom.className.startsWith('js-doc-page'))) {
      hideViaPositionProperty(elementWithAdBottom);
    }
  });
};
if (isMatchingHostnames('docviewer.yandex.ru', 'docviewer.yandex.kz', 'docviewer.yandex.by', 'docviewer.yandex.ua', 'docviewer.yandex.md', 'docviewer.yandex.com.tr')) {
  observeDomChanges(function () {
    hideDirectAds();
  });
}var hideLiveDirectByStyle = function hideLiveDirectByStyle() {
  var styleSheets = browser.document.getElementsByTagName('style');
  toConsumableArray(styleSheets).forEach(function (styleSheet) {
    var rules = toConsumableArray(safeGetStylesheetRules(styleSheet.sheet));
    var firstStyleRule = rules[0];
    if (rules.length > 50 || !firstStyleRule) {
      return;
    }
    if (firstStyleRule.selectorText && /\s*"[.a-z0-9]+"/.test(firstStyleRule.selectorText)) {
      hideViaPositionProperty(firstStyleRule);
    }
  });
};
var leftovers = function leftovers() {
  var remainBlocks = browser.querySelectorAll('.cat-widget__card-wrap');
  toConsumableArray(remainBlocks).forEach(function (remainBlock) {
    var leftover = remainBlock.firstElementChild;
    if (!leftover) {
      return;
    }
    if (leftover && /ngIf:\sdirective\./.test(leftover.innerHTML)) {
      hideViaPositionProperty(remainBlock);
    }
  });
};
if (isMatchingHostnames('livejournal.com')) {
  observeDomChanges(function () {
    hideLiveDirectByStyle();
    leftovers();
  });
}
if (isMatchingHostnames('varlamov.ru', 'lena-miro.ru', 'olegmakarenko.ru', 'periskop.su', 'levik.blog', 'vadimrazumov.ru')) {
  observeDomChanges(function () {
    hideLiveDirectByStyle();
  });
}var hideOtzovikAds = function hideOtzovikAds() {
  var nodeElements = browser.querySelectorAll('div[id]');
  toConsumableArray(nodeElements).forEach(function (nodeElement) {
    var _nodeElement$parentNo, _nodeElement$parentNo2, _nodeElement$parentNo3, _nodeElement$previous, _nodeElement$previous2;
    var adElementTextContent = nodeElement === null || nodeElement === void 0 ? void 0 : (_nodeElement$parentNo = nodeElement.parentNode) === null || _nodeElement$parentNo === void 0 ? void 0 : (_nodeElement$parentNo2 = _nodeElement$parentNo.previousSibling) === null || _nodeElement$parentNo2 === void 0 ? void 0 : (_nodeElement$parentNo3 = _nodeElement$parentNo2.previousSibling) === null || _nodeElement$parentNo3 === void 0 ? void 0 : _nodeElement$parentNo3.textContent;
    var adElementTextContentWithoutParent = nodeElement === null || nodeElement === void 0 ? void 0 : (_nodeElement$previous = nodeElement.previousSibling) === null || _nodeElement$previous === void 0 ? void 0 : (_nodeElement$previous2 = _nodeElement$previous.previousSibling) === null || _nodeElement$previous2 === void 0 ? void 0 : _nodeElement$previous2.textContent;
    var regexAd = /Yandex\.|\.RTB|OTZOAD/;
    if (regexAd.test(adElementTextContent) || regexAd.test(adElementTextContentWithoutParent)) {
      hideViaPositionProperty(nodeElement);
    }
  });
};
if (isMatchingHostnames('otzovik.com')) {
  observeDomChanges(function () {
    hideOtzovikAds();
  });
}var dropContentWindow = function dropContentWindow(iframe) {
  var contentWindowDescriptor = Object.getOwnPropertyDescriptor(iframe.__proto__, 'contentWindow');
  if (!contentWindowDescriptor) {
    return;
  }
  var getContentWindow = Function.prototype.call.bind(contentWindowDescriptor.get);
  var _document = document,
      currentScript = _document.currentScript;
  contentWindowDescriptor.get = function () {
    if (currentScript && currentScript.innerHTML.includes('adzone')) {
      var _contentWindow = null;
      return _contentWindow;
    }
    var contentWindow = getContentWindow(iframe);
    return contentWindow;
  };
  Object.defineProperty(iframe.__proto__, 'contentWindow', contentWindowDescriptor);
};
var redefineCreateElement = function redefineCreateElement(targetWindow) {
  var baseCreateElement = targetWindow.document.createElement;
  targetWindow.document.createElement = function (elemType) {
    var newElem = baseCreateElement.call(this, elemType);
    dropContentWindow(newElem);
    return newElem;
  };
};
if (isMatchingHostnames('sinoptik.ua', 'censor.net')) {
  redefineCreateElement(window);
}var TEST_PAGE = '/test.html';
var NEW_ISSUE_PAGE = '/new_issue.html';
var ADGUARD_HOSTNAMES = ['adguard.com'
];
var testExtra = function testExtra() {
  var testElement = browser.document.querySelector('.extra-test');
  hideViaDisplayProperty(testElement);
};
if (isMatchingHostnames.apply(void 0, ADGUARD_HOSTNAMES)) {
  if (browser.location.pathname.endsWith(TEST_PAGE) || browser.location.pathname.endsWith(NEW_ISSUE_PAGE)) {
    observeDomChanges(function () {
      testExtra();
    });
  }
}var changeLinks = function changeLinks() {
  var buttons = document.querySelectorAll('.panel-footer > form[action] > button[link]');
  var forms = document.querySelectorAll('.panel-footer > form[action]');
  if (buttons.length === forms.length) {
    for (var a = 0; a < forms.length; a += 1) {
      var buttonsAttribute = buttons[a].getAttribute('link');
      forms[a].setAttribute('action', buttonsAttribute);
      forms[a].setAttribute('target', '_blank');
    }
  }
};
if (isMatchingHostnames('multiup.org')) {
  observeDomChanges(function () {
    changeLinks();
  });
}var hideLentaAds = function hideLentaAds() {
  var feedTitles = browser.querySelectorAll('#lentaFeed > tr > td.newshead');
  for (var i = 0; i < feedTitles.length; i += 1) {
    var feedTitle = feedTitles[i];
    var adTopTitle = feedTitle === null || feedTitle === void 0 ? void 0 : feedTitle.parentNode;
    var adContent = adTopTitle === null || adTopTitle === void 0 ? void 0 : adTopTitle.nextElementSibling;
    var adBottomTitle = adContent === null || adContent === void 0 ? void 0 : adContent.nextElementSibling;
    if (feedTitle.querySelector('.rating-short-value') === null) {
      hideViaPositionProperty(adTopTitle);
      hideViaPositionProperty(adContent);
      hideViaPositionProperty(adBottomTitle);
    }
  }
};
if (isMatchingHostnames('yaplakal.com', 'yap.ru')) {
  observeDomChanges(function () {
    hideLentaAds();
  });
}if (isMatchingHostnames('pravda.com.ua', 'epravda.com.ua', 'glianec.com', 'ostro.org', 'nashamama.com', 'bilshe.com', 'zdorovia.com.ua', 'i.factor.ua', 'gismeteo.ua', '1777.ru', 'cn.ru', 'finance.i.ua', 'glavcom.ua', 'hvylya.net', 'kp.ua', 'love.i.ua', 'newsone.ua', 'peers.tv', 'radio.i.ua', 'real-vin.com', 'viks.bz', 'vsetv.com', 'gismeteo.ua', 'tv.ua', 'isport.ua', 'eurointegration.com.ua', 'u-news.com.ua', 'strana.ua', '4mama.ua', 'bigmir.net', 'dengi.ua', 'enovosty.com', 'facenews.ua', 'football24.ua', 'gorod.dp.ua', 'inforesist.org', 'kolobok.ua', 'liga.net', 'nnovosti.info', 'smak.ua', 'tochka.net', 'ukr.net', 'nv.ua', 'meteo.ua', 'besplatka.ua', 'lifedon.com.ua')) {
  disableScripts(/ShadowRoot|AdnetAttachScript|zmctrack/);
}if (isMatchingHostnames('sheee.co.il', 'walla.co.il')) {
  disableScripts(/function[\s\S]*?static[\s\S]*?switch/);
}