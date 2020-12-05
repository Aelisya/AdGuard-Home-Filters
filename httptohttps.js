(function (w) {
    'use strict';
    var secureProtocol = 'https';
    if ( !w.location.protocol.startsWith(secureProtocol) ) {
        w.location.href = w.location.href.replace(/^[^:]+/, secureProtocol);
    }
})(window);
