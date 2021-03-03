// ==UserScript==
// @name          Manganelo Auto Dark Mode
// @description	  Auto Dark theme for Manganelo user interface.
// @author        Macqael
// @homepage      https://github.com/Macqael/AdGuard-Home-Filters
// @include       https://manganelo.com/*
// @run-at        document-end
// @version       1.202103031
// ==/UserScript==
(()=>{const css = [
    "@media (prefers-color-scheme: dark) {",
    "body { background: #5a5454; }",
    ".container-header-top .box-user-options .mode-changer { background-position-y: -58px; }",
    ".container-header .logo, .container-header .container-header-top, .panel-newest .panel-newest-content, .panel-category .pn-category-row, .container-footer-content, #SearchResult ul, .stickytooltip, .panel-fb-comment, .panel-content-homepage, .panel-story-info, .panel-story-chapter-list, .panel-search-story, .panel-bookmark .bookmark-item, .panel-history .history-item, .panel-not-found, .panel-nonlogin-bookmark .nonlogin-bookmark-item, .panel-nonlogin-history .nonlogin-history-item, .panel-nonlogin-full .nonlogin-full-item { background: #3e3e3e; }",
    ".container-header-top .box-search .search-story, .panel-content-homepage .content-homepage-item .item-title a, .panel-content-homepage .content-homepage-item .item-chapter a, .panel-content-homepage .content-homepage-more, .panel-topview-item a, .panel-category .pn-category-row a, .container-footer-content .pn-hot-link a, .pn-contacts p, #owl-slider .slide-caption h3 a, #owl-slider .slide-caption a, #SearchResult ul li .item_name, #SearchResult ul li .item_chapter, #tooltip h3, #tooltip .tooltip_main .tooltip_detail_left p, #tooltip .tooltip_summary,.panel-breadcrumb, .panel-breadcrumb *, .panel-breadcrumb a, .panel-story-info .story-info-right h1, .variations-tableInfo .table-value, .panel-story-info-description, .panel-story-info .story-info-right a, .story-info-right-extent .stre-value, .story-info-right-extent #rate_row_cmd, .story-info-right-extent p, .panel-story-chapter-list .chapter-name, .panel-search-story .search-story-item .item-title, .panel-search-story .search-story-item .item-chapter, .panel-bookmark .bookmark-item .item-right a, .panel-history .history-item .item-right a, .panel-not-found, .panel-nonlogin-bookmark .nonlogin-bookmark-story, .panel-nonlogin-bookmark .nonlogin-bookmark-chap, .panel-nonlogin-history .nonlogin-history-story, .panel-nonlogin-history .nonlogin-history-chap, .panel-nonlogin-full .nonlogin-full-item .item-right a, .panel-nonlogin-full .nonlogin-full-item { color: #d0d0d0; }",
    ".container-header .header-menu { background: #2a524a; }",
    ".container-silder, .panel-topview, .panel-newest, .panel-category, .container-footer, .panel-nonlogin-bookmark, .panel-nonlogin-history { border-color: #2b2b2b; }",
    ".container-silder .silder-title, .panel-topview .panel-topview-title, .panel-newest .panel-newest-title, .panel-category .pn-category-story-title, #SearchResult div#search-footer, .panel-nonlogin-bookmark .nonlogin-bookmark-title, .panel-nonlogin-bookmark .nonlogin-bookmark-more, .panel-nonlogin-history .nonlogin-history-title, .panel-nonlogin-history .nonlogin-history-more { background-color: #2b2b2b; color: #d0d0d0; }",
    ".panel-content-homepage .content-homepage-title { border-color: #bdbdbd; }",
    ".panel-content-homepage .content-homepage-item .item-author, #SearchResult ul li .item_author, .variations-tableInfo .table-label, .story-info-right-extent .stre-label, .panel-story-chapter-list .chapter-view, .panel-story-chapter-list .chapter-time, #tooltip .tooltip_main .tooltip_detail_left p label, .panel-search-story .search-story-item .item-author, .panel-search-story .search-story-item .item-time, .panel-search-story .search-story-item .item-time, .panel-bookmark .bookmark-item .item-right span, .panel-history .history-item .item-right span, .panel-nonlogin-full .nonlogin-full-item .item-right .item-title { color: #bdbdbd; }",
    ".panel-content-homepage .content-homepage-more, .panel-newest .panel-newest-more { background: #2b2b2b; }",
    ".container-header-top .box-user-options .user-name { background: #3e776b; }",
    ".panel-topview-item, .panel-breadcrumb { background-color: #3e3e3e!important; border-bottom: 1px solid #bdbdbd; }",
    ".panel-topview-item:last-of-type { border-bottom: none; }",
    "#panel-description-linear i { background: url('https://manganelo.com/themes/hm/images/linear_gradient_dark.png); height: 15px; }",
    ".panel-story-info-description h3, #panel-story-info-description-show-more, #panel-story-info-description-show-less, .panel-story-chapter-list .row-title-chapter { color: #d65959; }",
    ".panel-story-info-description, #panel-description-linear::after, .panel-story-chapter-list .row-title-chapter { border-color:#d65959; }",
    ".panel-content-homepage .content-homepage-item .item-chapter a:visited, .panel-story-chapter-list .chapter-name:visited, .panel-search-story .search-story-item .item-chapter:visited { color: #319710; }",
    ".container-header-top .box-user-options .user-login, .container-header-top .box-user-options .user-register { background-color: #2a524a; }",
    ".color-red { color: #d65959!important; }",
    "@media (max-width: 800px) { .container-header .header-menu a { background: #3e3e3e; color: #d0d0d0; }",
    "}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	const node = document.createElement("style");
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		document.documentElement.appendChild(node);
	}
}})();