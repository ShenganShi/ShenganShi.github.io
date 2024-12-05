!function(){"use strict";window.kadence={initOutlineToggle:function(){document.body.addEventListener("keydown",(function(){document.body.classList.remove("hide-focus-outline")})),document.body.addEventListener("mousedown",(function(){document.body.classList.add("hide-focus-outline")}))},getOffset:function(e){if(e instanceof HTMLElement){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}return{top:null,left:null}},findParents:function(e,t){var o=[];return function e(n){var i=n.parentNode;i instanceof HTMLElement&&(i.matches(t)&&o.push(i),e(i))}(e),o},toggleAttribute:function(e,t,o,n){void 0===o&&(o=!0),void 0===n&&(n=!1),e.getAttribute(t)!==o?e.setAttribute(t,o):e.setAttribute(t,n)},initNavToggleSubmenus:function(){var e=document.querySelectorAll(".nav--toggle-sub");if(e.length)for(let t=0;t<e.length;t++)window.kadence.initEachNavToggleSubmenu(e[t]),window.kadence.initEachNavToggleSubmenuInside(e[t])},initEachNavToggleSubmenu:function(e){var t=e.querySelectorAll(".menu ul");if(t.length)for(let a=0;a<t.length;a++){var o=t[a].parentNode;if(o.querySelector(".dropdown-nav-toggle")){var n=o.querySelector(".nav-drop-title-wrap").firstChild.textContent.trim(),i=document.createElement("BUTTON");i.setAttribute("aria-label",n?kadenceConfig.screenReader.expandOf+" "+n:kadenceConfig.screenReader.expand),i.classList.add("dropdown-nav-special-toggle"),o.insertBefore(i,o.childNodes[1]),i.addEventListener("click",(function(e){e.preventDefault(),window.kadence.toggleSubMenu(e.target.closest("li"))})),o.addEventListener("mouseleave",(function(e){window.kadence.toggleSubMenu(e.target,!1)})),o.querySelector("a").addEventListener("focus",(function(e){var t=e.target.parentNode.parentNode.querySelectorAll("li.menu-item--toggled-on");for(let n=0;n<t.length;n++)o!==t[n]&&window.kadence.toggleSubMenu(t[n],!1)})),t[a].addEventListener("keydown",(function(e){var o="ul.toggle-show > li > a, ul.toggle-show > li > .dropdown-nav-special-toggle";9===e.keyCode&&(e.shiftKey?window.kadence.isfirstFocusableElement(t[a],document.activeElement,o)&&window.kadence.toggleSubMenu(t[a].parentNode,!1):window.kadence.islastFocusableElement(t[a],document.activeElement,o)&&window.kadence.toggleSubMenu(t[a].parentNode,!1)),27===e.keyCode&&window.kadence.toggleSubMenu(t[a].parentNode,!1)})),t[a].parentNode.classList.add("menu-item--has-toggle")}}},initEachNavToggleSubmenuInside:function(e){var t=e.querySelectorAll(".menu-item-has-children");if(t.length)for(let o=0;o<t.length;o++)t[o].addEventListener("mouseenter",(function(e){if(t[o].querySelector("ul.sub-menu")){var n=t[o].querySelector("ul.sub-menu");window.kadence.getOffset(n).left+n.offsetWidth<=window.innerWidth||n.classList.add("sub-menu-edge")}}))},toggleSubMenu:function(e,t){var o=e.querySelector(".dropdown-nav-special-toggle"),n=e.querySelector("ul");let i=e.classList.contains("menu-item--toggled-on");var a=e.querySelector(".nav-drop-title-wrap").firstChild.textContent.trim();if(void 0!==t&&"boolean"==typeof t&&(i=!t),o.setAttribute("aria-expanded",(!i).toString()),i){e.classList.remove("menu-item--toggled-on"),n.classList.remove("toggle-show"),o.setAttribute("aria-label",a?kadenceConfig.screenReader.expandOf+" "+a:kadenceConfig.screenReader.expand);var r=e.querySelectorAll(".menu-item--toggled-on");for(let e=0;e<r.length;e++)window.kadence.toggleSubMenu(r[e],!1)}else{var d=e.parentNode.querySelectorAll("li.menu-item--toggled-on");for(let e=0;e<d.length;e++)window.kadence.toggleSubMenu(d[e],!1);e.classList.add("menu-item--toggled-on"),n.classList.add("toggle-show"),o.setAttribute("aria-label",a?kadenceConfig.screenReader.collapseOf+" "+a:kadenceConfig.screenReader.collapse)}},isfirstFocusableElement:function(e,t,o){var n=e.querySelectorAll(o);return 0<n.length&&t===n[0]},islastFocusableElement:function(e,t,o){var n=e.querySelectorAll(o);return 0<n.length&&t===n[n.length-1]},toggleDrawer:function(e,t){t=void 0===t||t;var o=e,n=document.querySelector(o.dataset.toggleTarget);if(n){var i=window.innerWidth-document.documentElement.clientWidth,a=o.dataset.toggleDuration?o.dataset.toggleDuration:250;if(window.kadence.toggleAttribute(o,"aria-expanded","true","false"),n.classList.contains("show-drawer"))o.dataset.toggleBodyClass&&document.body.classList.remove(o.dataset.toggleBodyClass),n.classList.remove("active"),n.classList.remove("pop-animated"),document.body.classList.remove("kadence-scrollbar-fixer"),setTimeout((function(){n.classList.remove("show-drawer");var e=new Event("kadence-drawer-closed");if(window.dispatchEvent(e),o.dataset.setFocus&&t){var i=document.querySelector(o.dataset.setFocus);i&&(i.focus(),i.hasAttribute("aria-expanded")&&window.kadence.toggleAttribute(i,"aria-expanded","true","false"))}}),a);else if(n.classList.add("show-drawer"),o.dataset.toggleBodyClass&&(document.body.classList.toggle(o.dataset.toggleBodyClass),o.dataset.toggleBodyClass.includes("showing-popup-drawer-")&&(document.body.style.setProperty("--scrollbar-offset",i+"px"),document.body.classList.add("kadence-scrollbar-fixer"))),setTimeout((function(){n.classList.add("active");var e=new Event("kadence-drawer-opened");if(window.dispatchEvent(e),o.dataset.setFocus&&t){var i=document.querySelector(o.dataset.setFocus);if(i){i.hasAttribute("aria-expanded")&&window.kadence.toggleAttribute(i,"aria-expanded","true","false");var a=i.value;i.value="",i.focus(),i.value=a}}}),10),setTimeout((function(){n.classList.add("pop-animated")}),a),n.classList.contains("popup-drawer")){var r=n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),d=r[0],s=r[r.length-1];document.addEventListener("keydown",(function(e){("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===d&&(s.focus(),e.preventDefault()):document.activeElement===s&&(d.focus(),e.preventDefault()))}))}}},initToggleDrawer:function(){var e=document.querySelectorAll(".drawer-toggle");if(e.length){for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(o){o.preventDefault(),window.kadence.toggleDrawer(e[t])}));document.addEventListener("keyup",(function(e){27===e.keyCode&&document.querySelectorAll(".popup-drawer.show-drawer.active")&&(e.preventDefault(),document.querySelectorAll(".popup-drawer.show-drawer.active").forEach((function(e){window.kadence.toggleDrawer(document.querySelector('*[data-toggle-target="'+e.dataset.drawerTargetString+'"]'))})))})),document.addEventListener("click",(function(e){var t=e.target;t===(n=document.querySelector(".show-drawer.active .drawer-overlay"))&&window.kadence.toggleDrawer(document.querySelector('*[data-toggle-target="'+n.dataset.drawerTargetString+'"]'));var o=document.querySelector("#search-drawer.show-drawer.active .drawer-content"),n=document.querySelector("#search-drawer.show-drawer.active .drawer-overlay");t===o&&window.kadence.toggleDrawer(document.querySelector('*[data-toggle-target="'+n.dataset.drawerTargetString+'"]'))}))}},initMobileToggleSub:function(){document.querySelectorAll(".has-collapse-sub-nav").forEach((function(e){var t=e.querySelector(".current-menu-item");t&&window.kadence.findParents(t,"li").forEach((function(e){var t=e.querySelector(".drawer-sub-toggle");t&&window.kadence.toggleDrawer(t,!0)}))}));var e=document.querySelectorAll(".drawer-sub-toggle");if(e.length)for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(o){o.preventDefault(),window.kadence.toggleDrawer(e[t])}))},initMobileToggleAnchor:function(){var e=document.getElementById("mobile-drawer");if(e){var t=e.querySelectorAll("a:not(.kt-tab-title)");if(t.length)for(let o=0;o<t.length;o++)t[o].addEventListener("click",(function(t){window.kadence.toggleDrawer(e.querySelector(".menu-toggle-close"),!1)}))}},initTransHeaderPadding:function(){if(!document.body.classList.contains("no-header")&&document.body.classList.contains("transparent-header")&&document.body.classList.contains("mobile-transparent-header")){var e=document.querySelector(".entry-hero-container-inner"),t=document.querySelector("#masthead"),o=function(o){kadenceConfig.breakPoints.desktop<=window.innerWidth?document.body.classList.contains("transparent-header")?e.style.paddingTop=t.offsetHeight+"px":e.style.paddingTop=0:document.body.classList.contains("mobile-transparent-header")?e.style.paddingTop=t.offsetHeight+"px":e.style.paddingTop=0};e&&(window.addEventListener("resize",o,!1),window.addEventListener("scroll",o,!1),window.addEventListener("load",o,!1),o())}},initStickyHeader:function(){var e=document.querySelector("#main-header .kadence-sticky-header"),t=document.querySelector("#mobile-header .kadence-sticky-header"),o=document.getElementById("wrapper"),n=document.querySelectorAll(".kadence-pro-fixed-above"),i=document.querySelectorAll(".kadence-before-wrapper-item"),a="mobile",r=0,d=0;parseInt(kadenceConfig.breakPoints.desktop)<window.innerWidth?(a="desktop",e&&(e.style.position="static",d=window.kadence.getOffset(e).top,e.style.position=null)):t&&(t.style.position="static",d=window.kadence.getOffset(t).top,t.style.position=null);var s,l,c,u=function(s){var l,c=window.kadence.getOffset(o).top;if(document.body.classList.toString().includes("boom_bar-static-top")){var u=document.querySelector(".boom_bar");c=window.kadence.getOffset(o).top-u.offsetHeight}if(i.length){var f=0;for(let e=0;e<i.length;e++)f+=i[e].offsetHeight;c=window.kadence.getOffset(o).top-f}if(n.length){var g=0;for(let e=0;e<n.length;e++)g+=n[e].offsetHeight;c=window.kadence.getOffset(o).top+g}if(l=kadenceConfig.breakPoints.desktop<=window.innerWidth?e:t){kadenceConfig.breakPoints.desktop<=window.innerWidth?"mobile"===a?(d=window.kadence.getOffset(l).top,a="desktop"):s&&"updateActive"===s&&(l.style.top="auto",d=window.kadence.getOffset(l).top,a="desktop"):"desktop"===a?(d=window.kadence.getOffset(l).top,a="mobile"):s&&"updateActive"===s&&(l.style.top="auto",d=window.kadence.getOffset(l).top,a="mobile");var w=l.parentNode,h=l.getAttribute("data-shrink"),m=l.getAttribute("data-reveal-scroll-up"),p=parseInt(l.getAttribute("data-start-height"));if((!p||s&&void 0!==s.type&&"orientationchange"===s.type)&&(l.setAttribute("data-start-height",l.offsetHeight),p=l.offsetHeight,w.classList.contains("site-header-upper-inner-wrap")?(w.style.height=null,s&&void 0!==s.type&&"orientationchange"===s.type?l.classList.contains("item-is-fixed")?setTimeout((function(){w.style.height=Math.floor(w.offsetHeight+l.offsetHeight)+"px"}),21):setTimeout((function(){w.style.height=w.offsetHeight+"px"}),21):w.style.height=w.offsetHeight+"px"):w.classList.contains("site-header-inner-wrap")?(w.style.height=null,w.style.height=w.offsetHeight+"px"):w.style.height=l.offsetHeight+"px"),"true"===h){var v=l.getAttribute("data-shrink-height");if(v){if("true"===m)if(window.scrollY>r)var y=Math.floor(Math.floor(d)-Math.floor(c)+Math.floor(p));else y=Math.floor(d-c);else y=Math.floor(d-c);var b=l.querySelectorAll(".custom-logo"),k=l.querySelector(".site-main-header-inner-wrap"),L=parseInt(k.getAttribute("data-start-height"));if(L||(k.setAttribute("data-start-height",k.offsetHeight),L=k.offsetHeight),window.scrollY<=y){if(k.style.height=L+"px",k.style.minHeight=L+"px",k.style.maxHeight=L+"px",b)for(let e=0;e<b.length;e++){b[e].style.maxHeight="100%"}}else if(window.scrollY>y){var S=Math.max(v,L-(window.scrollY-(d-c)));if(k.style.height=S+"px",k.style.minHeight=S+"px",k.style.maxHeight=S+"px",b)for(let e=0;e<b.length;e++){b[e].style.maxHeight=S+"px"}}}}if("true"===m){var x=Math.floor(d-c),E=window.scrollY,A=l.offsetHeight,q=r-E,T=window.getComputedStyle(l).getPropertyValue("transform").match(/(-?[0-9\.]+)/g);if(T&&void 0!==T[5]&&T[5])var M=parseInt(T[5])+q;else M=0;var C=E>r;if(E<=x)l.style.transform="translateY(0px)";else if(C)l.classList.add("item-hidden-above"),l.style.transform="translateY("+(Math.abs(M)>A?-A:M)+"px)";else{x=Math.floor(d-c);l.style.transform="translateY("+(M>0?0:M)+"px)",l.classList.remove("item-hidden-above")}r=E}else x=Math.floor(d-c);window.scrollY==x?(l.style.top=c+"px",l.classList.add("item-is-fixed"),l.classList.add("item-at-start"),l.classList.remove("item-is-stuck"),w.classList.add("child-is-fixed"),document.body.classList.add("header-is-fixed")):window.scrollY>x?"true"===m?window.scrollY<A+60&&l.classList.contains("item-at-start")?(l.style.height=null,l.style.top=c+"px",l.classList.add("item-is-fixed"),l.classList.add("item-is-stuck"),w.classList.add("child-is-fixed"),document.body.classList.add("header-is-fixed")):(l.style.top=c+"px",l.classList.add("item-is-fixed"),l.classList.add("item-is-stuck"),l.classList.remove("item-at-start"),w.classList.add("child-is-fixed"),document.body.classList.add("header-is-fixed")):(l.style.top=c+"px",l.classList.add("item-is-fixed"),l.classList.remove("item-at-start"),l.classList.add("item-is-stuck"),w.classList.add("child-is-fixed"),document.body.classList.add("header-is-fixed")):l.classList.contains("item-is-fixed")&&(l.classList.remove("item-is-fixed"),l.classList.remove("item-at-start"),l.classList.remove("item-is-stuck"),l.style.height=null,l.style.top=null,w.classList.remove("child-is-fixed"),document.body.classList.remove("header-is-fixed"))}};if((e||t)&&(window.addEventListener("resize",u,!1),window.addEventListener("scroll",u,!1),window.addEventListener("load",u,!1),window.addEventListener("orientationchange",u),"complete"===document.readyState&&u("updateActive"),document.body.classList.contains("woocommerce-demo-store")&&document.body.classList.contains("kadence-store-notice-placement-above"))){s=document.querySelector(".woocommerce-store-notice"),l=e=>{u("updateActive")},c={root:document.documentElement},new IntersectionObserver(((e,t)=>{e.forEach((e=>{l(e.intersectionRatio>0)}))}),c).observe(s)}},getTopOffset:function(e="scroll"){if("load"===e)var t=document.querySelector("#main-header .kadence-sticky-header"),o=document.querySelector("#mobile-header .kadence-sticky-header");else t=document.querySelector('#main-header .kadence-sticky-header:not([data-reveal-scroll-up="true"])'),o=document.querySelector('#mobile-header .kadence-sticky-header:not([data-reveal-scroll-up="true"])');var n=0,i=0;if(kadenceConfig.breakPoints.desktop<=window.innerWidth){if(t)n="true"!==t.getAttribute("data-shrink")||t.classList.contains("site-header-inner-wrap")?Math.floor(t.offsetHeight):Math.floor(t.getAttribute("data-shrink-height"));else n=0;document.body.classList.contains("admin-bar")&&(i=32)}else{if(o)n="true"===o.getAttribute("data-shrink")?Math.floor(o.getAttribute("data-shrink-height")):Math.floor(o.offsetHeight);else n=0;document.body.classList.contains("admin-bar")&&(i=46)}return Math.floor(n+i+Math.floor(kadenceConfig.scrollOffset))},scrollToElement:function(e,t,o="scroll"){t=void 0===t||t;var n=window.kadence.getTopOffset(o),i=Math.floor(e.getBoundingClientRect().top)-n;window.scrollBy({top:i,left:0,behavior:"smooth"}),e.tabIndex="-1",e.focus({preventScroll:!0}),e.classList.contains("kt-title-item")&&e.firstElementChild.click(),t&&window.history.pushState("","","#"+e.id)},anchorScrollToCheck:function(e,t){if(t=void 0!==t?t:null,e.target.getAttribute("href"))var o=e.target;else{if(!(o=e.target.closest("a")))return;if(!o.getAttribute("href"))return}if(!o.parentNode||!o.parentNode.hasAttribute("role")||"tab"!==o.parentNode.getAttribute("role")){var n;n=t?t.getAttribute("href").substring(t.getAttribute("href").indexOf("#")):o.getAttribute("href").substring(o.getAttribute("href").indexOf("#"));var i=document.getElementById(n.replace("#",""));i&&(i?.classList?.contains("kt-accordion-pane")||(e.preventDefault(),window.kadence.scrollToElement(i)))}},initStickySidebarWidget:function(){if(document.body.classList.contains("has-sticky-sidebar-widget")){var e=window.kadence.getTopOffset(),t=document.querySelector("#secondary .sidebar-inner-wrap .widget:last-child");t&&(t.style.top=Math.floor(e+20)+"px",t.style.maxHeight="calc( 100vh - "+Math.floor(e+20)+"px )")}},initStickySidebar:function(){if(document.body.classList.contains("has-sticky-sidebar")){var e=window.kadence.getTopOffset(),t=document.querySelector("#secondary .sidebar-inner-wrap");t&&(t.style.top=Math.floor(e+20)+"px",t.style.maxHeight="calc( 100vh - "+Math.floor(e+20)+"px )")}},initAnchorScrollTo:function(){if(!document.body.classList.contains("no-anchor-scroll")){if(window.onhashchange=function(){""===window.location.hash&&(window.scrollTo({top:0,behavior:"smooth"}),document.activeElement.blur())},""!=window.location.hash){var e,t=location.hash.substring(1);if(!/^[A-z0-9_-]+$/.test(t))return;(e=document.getElementById(t))&&window.setTimeout((function(){window.kadence.scrollToElement(e,!1,"load")}),100)}var o=document.querySelectorAll("a[href*=\\#]:not([href=\\#]):not(.scroll-ignore):not([data-tab]):not([data-toggle])");o.length&&o.forEach((function(e){try{new URL(e.href).pathname===window.location.pathname&&e.addEventListener("click",(function(e){window.kadence.anchorScrollToCheck(e)}))}catch(t){console.log("ClassList: "+e.classList,"Invalid URL")}}))}},initScrollToTop:function(){var e=document.getElementById("kt-scroll-up");if(e){var t=function(){window.scrollY>100?e.classList.add("scroll-visible"):e.classList.remove("scroll-visible")};window.addEventListener("scroll",t),t(),e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),document.activeElement.blur()}))}var o=document.getElementById("kt-scroll-up-reader");o&&o.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),document.querySelector(".skip-link").focus()}))},init:function(){window.kadence.initNavToggleSubmenus(),window.kadence.initToggleDrawer(),window.kadence.initMobileToggleAnchor(),window.kadence.initMobileToggleSub(),window.kadence.initOutlineToggle(),window.kadence.initStickyHeader(),window.kadence.initStickySidebar(),window.kadence.initStickySidebarWidget(),window.kadence.initTransHeaderPadding(),window.kadence.initAnchorScrollTo(),window.kadence.initScrollToTop()}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",window.kadence.init):window.kadence.init()}();






(function(){"use strict";window.kadenceForm={error_item:1,clearForm(a){a.reset()},insertAfter(a,b){b.parentNode.insertBefore(a,b.nextSibling)},markError(a,b,c){let d="";if(c.classList.contains("kb-form-has-error")||c.classList.add("kb-form-has-error"),a.classList.add("has-error"),b){"required"===b?(d=a.getAttribute("data-required-message"),d&&""!==d&&void 0!==d||(d=a.getAttribute("data-label"),(!d||""===d||void 0===d)&&(d=kadence_blocks_form_params.item),d=d+" "+kadence_blocks_form_params[b])):"mismatch"===b?(d=a.getAttribute("data-mismatch-message"),d&&""!==d&&void 0!==d||(d=a.getAttribute("data-label"),(!d||""===d||void 0===d)&&(d=kadence_blocks_form_params.item),d=d+" "+kadence_blocks_form_params[b])):"validation"===b?(d=a.getAttribute("data-validation-message"),d&&""!==d&&void 0!==d||(d=a.getAttribute("data-label"),(!d||""===d||void 0===d)&&(d=kadence_blocks_form_params.item),d=d+" "+kadence_blocks_form_params[b])):void 0;const c=a.parentNode.querySelector(".kb-form-error-msg");c&&c.remove();const e=a.getAttribute("name")+"-error";a.setAttribute("aria-describedby",e),a.setAttribute("aria-invalid","true");const f=document.createElement("div");f.id=e,f.classList.add("kb-form-error-msg"),f.classList.add("kadence-blocks-form-warning"),f.setAttribute("role","alert"),f.innerHTML=window.kadenceForm.strip_tags(d,"<div><a><b><i><u><p><ol><ul>"),a.classList.contains("kb-checkbox-style")?a.parentNode.append(f):window.kadenceForm.insertAfter(f,a)}1===window.kadenceForm.error_item&&a.focus(),window.kadenceForm.error_item++},strip_tags(a,b){b=(((b||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");return a.replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi,"").replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,function(a,c){return-1<b.indexOf("<"+c.toLowerCase()+">")?a:""})},addErrorNotice(a){let b=a.getAttribute("data-error-message");b&&""!==b&&void 0!==b||(b=kadence_blocks_form_params.error_message);const c=document.createElement("div");c.classList.add("kadence-blocks-form-message"),c.classList.add("kadence-blocks-form-warning"),c.innerHTML=window.kadenceForm.strip_tags(b,"<div><a><b><i><u><p><ol><ul>"),window.kadenceForm.insertAfter(c,a)},isValidEmail(a){const b=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);return b.test(a)},isValidURL(a){return /^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.|http:\/\/|https:\/\/){1}([0-9A-Za-z]+.)/.test(a)},isValidTel(a){return /\/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$\/im/.test(a)},removeErrors(a){a.classList.contains("kb-form-has-error")&&a.classList.remove("kb-form-has-error");const b=a.querySelectorAll(".has-error");if(b.length)for(var c=0;c<b.length;c++){b[c].classList.remove("has-error"),b[c].removeAttribute("aria-describedby"),b[c].removeAttribute("aria-invalid");const a=b[c].parentNode.querySelector(".kb-form-error-msg");a&&a.remove()}const d=document.querySelectorAll(".kadence-blocks-form-message");if(d.length)for(var c=0;c<d.length;c++)d[c].remove();const e=a.querySelectorAll(".kb-form-errors");if(e.length)for(var c=0;c<e.length;c++)e[c].remove()},serialize(a){const b={};for(const[c,d]of a)void 0===b[c]?b[c]=d:(Array.isArray(b[c])||(b[c]=[b[c]]),b[c].push(d));return b},validateForm(a){let b=!1,c="";window.kadenceForm.removeErrors(a);const d=a.querySelectorAll("[data-required=\"yes\"]");if(d.length)for(let h=0;h<d.length;h++){var e=d[h].getAttribute("data-type"),f="";switch(e){case"textarea":case"text":f=d[h].value.trim(),""===f&&(b=!0,c="required",window.kadenceForm.markError(d[h],c,a));break;case"tel":f=d[h].value.trim(),""===f&&(b=!0,c="required",window.kadenceForm.markError(d[h],c,a));break;case"accept":!1==d[h].checked&&(b=!0,c="required",console.log("here"),window.kadenceForm.markError(d[h],c,a));break;case"select":f=d[h].value,d[h].multiple?(null===f||0===f.length)&&(b=!0,c="required",window.kadenceForm.markError(d[h],c,a)):(!f||"-1"===f)&&(b=!0,c="required",window.kadenceForm.markError(d[h],c,a));break;case"radio":var g=d[h].querySelector("input:checked");g||(b=!0,c="required",window.kadenceForm.markError(d[h],c,a));break;case"checkbox":var g=d[h].querySelector("input:checked");g||(b=!0,c="required",window.kadenceForm.markError(d[h],c,a));break;case"email":var f=d[h].value.trim();""===f?""===f&&(b=!0,c="required",window.kadenceForm.markError(d[h],c,a)):!window.kadenceForm.isValidEmail(f)&&(b=!0,c="validation",window.kadenceForm.markError(d[h],c,a));break;case"url":var f=d[h].value.trim();""===f?""===f&&(b=!0,c="required",window.kadenceForm.markError(d[h],c,a)):!window.kadenceForm.isValidURL(f)&&(b=!0,c="validation",window.kadenceForm.markError(d[h],c,a))}}if(b)return window.kadenceForm.addErrorNotice(a),!1;let h=new FormData(a);return h.set("_kb_form_verify",kadence_blocks_form_params.nonce),h=new URLSearchParams(h),h},createElementFromHTML(a){const b=document.createElement("div");return b.innerHTML=window.kadenceForm.strip_tags(a,"<div><a><b><i><u><p><ol><ul>"),b.firstChild},submit(a,b){a.preventDefault();const c=new Event("kb-form-start-submit");window.document.body.dispatchEvent(c);const d=b.querySelector(".kb-forms-submit"),e=window.kadenceForm.validateForm(b);if(e){const a=document.createElement("div");let c=!1;a.classList.add("kb-form-loading"),a.innerHTML="<div class=\"kb-form-loading-spin\"><div></div><div></div><div></div><div></div></div>",b.append(a),d.setAttribute("disabled","disabled"),d.classList.add("button-primary-disabled");const f=new XMLHttpRequest;f.open("POST",kadence_blocks_form_params.ajaxurl,!0),f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onload=function(){if(200<=this.status&&400>this.status){const a=JSON.parse(this.response);if(a.success){const d=new CustomEvent("kb-form-success",{detail:b.querySelector("input[name=\"_kb_form_id\"]")?b.querySelector("input[name=\"_kb_form_id\"]").value:""});window.document.body.dispatchEvent(d),a.redirect?(c=!0,window.location=a.redirect):(window.kadenceForm.insertAfter(window.kadenceForm.createElementFromHTML(a.html),b),b.querySelector(".g-recaptcha")&&grecaptcha.reset(),window.kadenceForm.clearForm(b))}else a.data&&(window.kadenceForm.insertAfter(window.kadenceForm.createElementFromHTML(a.data.html),b),a.data.required&&b.querySelector("[name=\""+a.data.required+"\"]")&&window.kadenceForm.markError(b.querySelector("[name=\""+a.data.required+"\"]"),"required",b))}b.querySelector(".g-recaptcha")&&grecaptcha.reset(),c||(d.removeAttribute("disabled"),d.classList.remove("button-primary-disabled")),b.querySelector(".kb-form-loading").remove()},f.onerror=function(){console.log("Connection error")},f.send(e.toString())}},checkParentClass(a,b){return!!a?.className&&(0<=a.className.split(" ").indexOf(b)?a.id:a.parentNode&&window.kadenceForm.checkParentClass(a.parentNode,b))},verifySource(a){const b=a.querySelector("input[name=\"_kb_form_post_id\"]");if(b&&(!b.value||"block-unknown"===b.value||"0"===b.value)){const c=window.kadenceForm.checkParentClass(a.parentNode,"widget_block");c&&(b.value=c)}},initForms(){const a=document.querySelectorAll("form.kb-form");if(a.length){const b=function(a){return function(b){window.kadenceForm.submit(b,a)}};for(let c=0;c<a.length;c++)window.kadenceForm.verifySource(a[c]),a[c].addEventListener("submit",b(a[c]))}},init(){return"undefined"!=typeof kadence_blocks_form_params&&void window.kadenceForm.initForms()}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",window.kadenceForm.init):window.kadenceForm.init()})();