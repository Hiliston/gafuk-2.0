!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(z){var h,P,a,n,l,i,g,H,U,S,m,c,s,d,u,f,p,v,x,_,w,b,C,y,B,T,k,M,F,r,O,I,D,E,q,W,R,A,L,j,Y,X,N,V,Q,G,J,K,Z,$,o,ee,te,oe,ae,ne,ie,e,t,re;e="function"==typeof define&&define.amd,t="undefined"!=typeof module&&module.exports,re="https:"==document.location.protocol?"https:":"http:",e||(t?require("jquery-mousewheel")(z):z.event.special.mousewheel||z("head").append(decodeURI("%3Cscript src="+re+"//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),h="mCustomScrollbar",P="mCS",a=".mCustomScrollbar",n={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},l=0,i={},g=window.attachEvent&&!window.addEventListener?1:0,H=!1,S=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],m={init:function(r){r=z.extend(!0,{},n,r);var e=c.call(this);if(r.live){var t=r.liveSelector||this.selector||a,o=z(t);if("off"===r.live)return void d(t);i[t]=setTimeout(function(){o.mCustomScrollbar(r),"once"===r.live&&o.length&&d(t)},500)}else d(t);return r.setWidth=r.set_width?r.set_width:r.setWidth,r.setHeight=r.set_height?r.set_height:r.setHeight,r.axis=r.horizontalScroll?"x":u(r.axis),r.scrollInertia=0<r.scrollInertia&&r.scrollInertia<17?17:r.scrollInertia,"object"!=typeof r.mouseWheel&&1==r.mouseWheel&&(r.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),r.mouseWheel.scrollAmount=r.mouseWheelPixels?r.mouseWheelPixels:r.mouseWheel.scrollAmount,r.mouseWheel.normalizeDelta=r.advanced.normalizeMouseWheelDelta?r.advanced.normalizeMouseWheelDelta:r.mouseWheel.normalizeDelta,r.scrollButtons.scrollType=f(r.scrollButtons.scrollType),s(r),z(e).each(function(){var e=z(this);if(!e.data(P)){e.data(P,{idx:++l,opt:r,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:e.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var t=e.data(P),o=t.opt,a=e.data("mcs-axis"),n=e.data("mcs-scrollbar-position"),i=e.data("mcs-theme");a&&(o.axis=a),n&&(o.scrollbarPosition=n),i&&(o.theme=i,s(o)),p.call(this),t&&o.callbacks.onCreate&&"function"==typeof o.callbacks.onCreate&&o.callbacks.onCreate.call(this),z("#mCSB_"+t.idx+"_container img:not(."+S[2]+")").addClass(S[2]),m.update.call(null,e)}})},update:function(e,l){var t=e||c.call(this);return z(t).each(function(){var e=z(this);if(e.data(P)){var t=e.data(P),o=t.opt,a=z("#mCSB_"+t.idx+"_container"),n=z("#mCSB_"+t.idx),i=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")];if(!a.length)return;t.tweenRunning&&J(e),l&&t&&o.callbacks.onBeforeUpdate&&"function"==typeof o.callbacks.onBeforeUpdate&&o.callbacks.onBeforeUpdate.call(this),e.hasClass(S[3])&&e.removeClass(S[3]),e.hasClass(S[4])&&e.removeClass(S[4]),n.css("max-height","none"),n.height()!==e.height()&&n.css("max-height",e.height()),x.call(this),"y"===o.axis||o.advanced.autoExpandHorizontalScroll||a.css("width",v(a)),t.overflowed=y.call(this),M.call(this),o.autoDraggerLength&&w.call(this),b.call(this),T.call(this);var r=[Math.abs(a[0].offsetTop),Math.abs(a[0].offsetLeft)];"x"!==o.axis&&(t.overflowed[0]?i[0].height()>i[0].parent().height()?B.call(this):(K(e,r[0].toString(),{dir:"y",dur:0,overwrite:"none"}),t.contentReset.y=null):(B.call(this),"y"===o.axis?k.call(this):"yx"===o.axis&&t.overflowed[1]&&K(e,r[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==o.axis&&(t.overflowed[1]?i[1].width()>i[1].parent().width()?B.call(this):(K(e,r[1].toString(),{dir:"x",dur:0,overwrite:"none"}),t.contentReset.x=null):(B.call(this),"x"===o.axis?k.call(this):"yx"===o.axis&&t.overflowed[0]&&K(e,r[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),l&&t&&(2===l&&o.callbacks.onImageLoad&&"function"==typeof o.callbacks.onImageLoad?o.callbacks.onImageLoad.call(this):3===l&&o.callbacks.onSelectorChange&&"function"==typeof o.callbacks.onSelectorChange?o.callbacks.onSelectorChange.call(this):o.callbacks.onUpdate&&"function"==typeof o.callbacks.onUpdate&&o.callbacks.onUpdate.call(this)),G.call(this)}})},scrollTo:function(l,s){if(void 0!==l&&null!=l){var e=c.call(this);return z(e).each(function(){var e=z(this);if(e.data(P)){var t=e.data(P),o=t.opt,a={trigger:"external",scrollInertia:o.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=z.extend(!0,{},a,s),i=V.call(this,l),r=0<n.scrollInertia&&n.scrollInertia<17?17:n.scrollInertia;i[0]=Q.call(this,i[0],"y"),i[1]=Q.call(this,i[1],"x"),n.moveDragger&&(i[0]*=t.scrollRatio.y,i[1]*=t.scrollRatio.x),n.dur=ie()?0:r,setTimeout(function(){null!==i[0]&&void 0!==i[0]&&"x"!==o.axis&&t.overflowed[0]&&(n.dir="y",n.overwrite="all",K(e,i[0].toString(),n)),null!==i[1]&&void 0!==i[1]&&"y"!==o.axis&&t.overflowed[1]&&(n.dir="x",n.overwrite="none",K(e,i[1].toString(),n))},n.timeout)}})}},stop:function(){var e=c.call(this);return z(e).each(function(){var e=z(this);e.data(P)&&J(e)})},disable:function(t){var e=c.call(this);return z(e).each(function(){var e=z(this);if(e.data(P)){e.data(P);G.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),e.addClass(S[3])}})},destroy:function(){var r=c.call(this);return z(r).each(function(){var e=z(this);if(e.data(P)){var t=e.data(P),o=t.opt,a=z("#mCSB_"+t.idx),n=z("#mCSB_"+t.idx+"_container"),i=z(".mCSB_"+t.idx+"_scrollbar");o.live&&d(o.liveSelector||z(r).selector),G.call(this,"remove"),k.call(this),B.call(this),e.removeData(P),ee(this,"mcs"),i.remove(),n.find("img."+S[2]).removeClass(S[2]),a.replaceWith(n.contents()),e.removeClass(h+" _"+P+"_"+t.idx+" "+S[6]+" "+S[7]+" "+S[5]+" "+S[3]).addClass(S[4])}})}},c=function(){return"object"!=typeof z(this)||z(this).length<1?a:this},s=function(e){e.autoDraggerLength=!(-1<z.inArray(e.theme,["rounded","rounded-dark","rounded-dots","rounded-dots-dark"]))&&e.autoDraggerLength,e.autoExpandScrollbar=!(-1<z.inArray(e.theme,["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"]))&&e.autoExpandScrollbar,e.scrollButtons.enable=!(-1<z.inArray(e.theme,["minimal","minimal-dark"]))&&e.scrollButtons.enable,e.autoHideScrollbar=-1<z.inArray(e.theme,["minimal","minimal-dark"])||e.autoHideScrollbar,e.scrollbarPosition=-1<z.inArray(e.theme,["minimal","minimal-dark"])?"outside":e.scrollbarPosition},d=function(e){i[e]&&(clearTimeout(i[e]),ee(i,e))},u=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},f=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},p=function(){var e=z(this),t=e.data(P),o=t.opt,a=o.autoExpandScrollbar?" "+S[1]+"_expand":"",n=["<div id='mCSB_"+t.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+t.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+a+"'><div class='"+S[12]+"'><div id='mCSB_"+t.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+t.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+t.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+a+"'><div class='"+S[12]+"'><div id='mCSB_"+t.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],i="yx"===o.axis?"mCSB_vertical_horizontal":"x"===o.axis?"mCSB_horizontal":"mCSB_vertical",r="yx"===o.axis?n[0]+n[1]:"x"===o.axis?n[1]:n[0],l="yx"===o.axis?"<div id='mCSB_"+t.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",s=o.autoHideScrollbar?" "+S[6]:"",c="x"!==o.axis&&"rtl"===t.langDir?" "+S[7]:"";o.setWidth&&e.css("width",o.setWidth),o.setHeight&&e.css("height",o.setHeight),o.setLeft="y"!==o.axis&&"rtl"===t.langDir?"989999px":o.setLeft,e.addClass(h+" _"+P+"_"+t.idx+s+c).wrapInner("<div id='mCSB_"+t.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+i+"'><div id='mCSB_"+t.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir='"+t.langDir+"' /></div>");var d=z("#mCSB_"+t.idx),u=z("#mCSB_"+t.idx+"_container");"y"===o.axis||o.advanced.autoExpandHorizontalScroll||u.css("width",v(u)),"outside"===o.scrollbarPosition?("static"===e.css("position")&&e.css("position","relative"),e.css("overflow","visible"),d.addClass("mCSB_outside").after(r)):(d.addClass("mCSB_inside").append(r),u.wrap(l)),_.call(this);var f=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")];f[0].css("min-height",f[0].height()),f[1].css("min-width",f[1].width())},v=function(e){var t=[e[0].scrollWidth,Math.max.apply(Math,e.children().map(function(){return z(this).outerWidth(!0)}).get())],o=e.parent().width();return o<t[0]?t[0]:o<t[1]?t[1]:"100%"},x=function(){var e=z(this).data(P),t=e.opt,o=z("#mCSB_"+e.idx+"_container");if(t.advanced.autoExpandHorizontalScroll&&"y"!==t.axis){o.css({width:"auto","min-width":0,"overflow-x":"scroll"});var a=Math.ceil(o[0].scrollWidth);3===t.advanced.autoExpandHorizontalScroll||2!==t.advanced.autoExpandHorizontalScroll&&a>o.parent().width()?o.css({width:a,"min-width":"100%","overflow-x":"inherit"}):o.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(o[0].getBoundingClientRect().right+.4)-Math.floor(o[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},_=function(){var e=z(this).data(P),t=e.opt,o=z(".mCSB_"+e.idx+"_scrollbar:first"),a=ae(t.scrollButtons.tabindex)?"tabindex='"+t.scrollButtons.tabindex+"'":"",n=["<a href='#' class='"+S[13]+"' "+a+" />","<a href='#' class='"+S[14]+"' "+a+" />","<a href='#' class='"+S[15]+"' "+a+" />","<a href='#' class='"+S[16]+"' "+a+" />"],i=["x"===t.axis?n[2]:n[0],"x"===t.axis?n[3]:n[1],n[2],n[3]];t.scrollButtons.enable&&o.prepend(i[0]).append(i[1]).next(".mCSB_scrollTools").prepend(i[2]).append(i[3])},w=function(){var e=z(this).data(P),t=z("#mCSB_"+e.idx),o=z("#mCSB_"+e.idx+"_container"),a=[z("#mCSB_"+e.idx+"_dragger_vertical"),z("#mCSB_"+e.idx+"_dragger_horizontal")],n=[t.height()/o.outerHeight(!1),t.width()/o.outerWidth(!1)],i=[parseInt(a[0].css("min-height")),Math.round(n[0]*a[0].parent().height()),parseInt(a[1].css("min-width")),Math.round(n[1]*a[1].parent().width())],r=g&&i[1]<i[0]?i[0]:i[1],l=g&&i[3]<i[2]?i[2]:i[3];a[0].css({height:r,"max-height":a[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":i[0]+"px"}),a[1].css({width:l,"max-width":a[1].parent().width()-10})},b=function(){var e=z(this).data(P),t=z("#mCSB_"+e.idx),o=z("#mCSB_"+e.idx+"_container"),a=[z("#mCSB_"+e.idx+"_dragger_vertical"),z("#mCSB_"+e.idx+"_dragger_horizontal")],n=[o.outerHeight(!1)-t.height(),o.outerWidth(!1)-t.width()],i=[n[0]/(a[0].parent().height()-a[0].height()),n[1]/(a[1].parent().width()-a[1].width())];e.scrollRatio={y:i[0],x:i[1]}},C=function(e,t,o){var a=o?S[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(S[0]+" "+a),n.toggleClass(S[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(S[0]),n.removeClass(S[1])):(e.addClass(S[0]),n.addClass(S[1])))},y=function(){var e=z(this).data(P),t=z("#mCSB_"+e.idx),o=z("#mCSB_"+e.idx+"_container"),a=null==e.overflowed?o.height():o.outerHeight(!1),n=null==e.overflowed?o.width():o.outerWidth(!1),i=o[0].scrollHeight,r=o[0].scrollWidth;return a<i&&(a=i),n<r&&(n=r),[a>t.height(),n>t.width()]},B=function(){var e=z(this),t=e.data(P),o=t.opt,a=z("#mCSB_"+t.idx),n=z("#mCSB_"+t.idx+"_container"),i=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")];if(J(e),("x"!==o.axis&&!t.overflowed[0]||"y"===o.axis&&t.overflowed[0])&&(i[0].add(n).css("top",0),K(e,"_resetY")),"y"!==o.axis&&!t.overflowed[1]||"x"===o.axis&&t.overflowed[1]){var r=dx=0;"rtl"===t.langDir&&(r=a.width()-n.outerWidth(!1),dx=Math.abs(r/t.scrollRatio.x)),n.css("left",r),i[1].css("left",dx),K(e,"_resetX")}},T=function(){var t=z(this),e=t.data(P),o=e.opt;if(!e.bindEvents){if(r.call(this),o.contentTouchScroll&&O.call(this),I.call(this),o.mouseWheel.enable){var a;!function e(){a=setTimeout(function(){z.event.special.mousewheel?(clearTimeout(a),D.call(t[0])):e()},100)}()}A.call(this),j.call(this),o.advanced.autoScrollOnFocus&&L.call(this),o.scrollButtons.enable&&Y.call(this),o.keyboard.enable&&X.call(this),e.bindEvents=!0}},k=function(){var e=z(this),t=e.data(P),o=t.opt,a=P+"_"+t.idx,n=".mCSB_"+t.idx+"_scrollbar",i=z("#mCSB_"+t.idx+",#mCSB_"+t.idx+"_container,#mCSB_"+t.idx+"_container_wrapper,"+n+" ."+S[12]+",#mCSB_"+t.idx+"_dragger_vertical,#mCSB_"+t.idx+"_dragger_horizontal,"+n+">a"),r=z("#mCSB_"+t.idx+"_container");o.advanced.releaseDraggableSelectors&&i.add(z(o.advanced.releaseDraggableSelectors)),o.advanced.extraDraggableSelectors&&i.add(z(o.advanced.extraDraggableSelectors)),t.bindEvents&&(z(document).add(z(!q()||top.document)).unbind("."+a),i.each(function(){z(this).unbind("."+a)}),clearTimeout(e[0]._focusTimeout),ee(e[0],"_focusTimeout"),clearTimeout(t.sequential.step),ee(t.sequential,"step"),clearTimeout(r[0].onCompleteTimeout),ee(r[0],"onCompleteTimeout"),t.bindEvents=!1)},M=function(e){var t=z(this),o=t.data(P),a=o.opt,n=z("#mCSB_"+o.idx+"_container_wrapper"),i=n.length?n:z("#mCSB_"+o.idx+"_container"),r=[z("#mCSB_"+o.idx+"_scrollbar_vertical"),z("#mCSB_"+o.idx+"_scrollbar_horizontal")],l=[r[0].find(".mCSB_dragger"),r[1].find(".mCSB_dragger")];"x"!==a.axis&&(o.overflowed[0]&&!e?(r[0].add(l[0]).add(r[0].children("a")).css("display","block"),i.removeClass(S[8]+" "+S[10])):(a.alwaysShowScrollbar?(2!==a.alwaysShowScrollbar&&l[0].css("display","none"),i.removeClass(S[10])):(r[0].css("display","none"),i.addClass(S[10])),i.addClass(S[8]))),"y"!==a.axis&&(o.overflowed[1]&&!e?(r[1].add(l[1]).add(r[1].children("a")).css("display","block"),i.removeClass(S[9]+" "+S[11])):(a.alwaysShowScrollbar?(2!==a.alwaysShowScrollbar&&l[1].css("display","none"),i.removeClass(S[11])):(r[1].css("display","none"),i.addClass(S[11])),i.addClass(S[9]))),o.overflowed[0]||o.overflowed[1]?t.removeClass(S[5]):t.addClass(S[5])},F=function(e){var t=e.type,o=e.target.ownerDocument!==document&&null!==frameElement?[z(frameElement).offset().top,z(frameElement).offset().left]:null,a=q()&&e.target.ownerDocument!==top.document&&null!==frameElement?[z(e.view.frameElement).offset().top,z(e.view.frameElement).offset().left]:[0,0];switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return o?[e.originalEvent.pageY-o[0]+a[0],e.originalEvent.pageX-o[1]+a[1],!1]:[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],i=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return e.target.ownerDocument!==document?[n.screenY,n.screenX,1<i]:[n.pageY,n.pageX,1<i];default:return o?[e.pageY-o[0]+a[0],e.pageX-o[1]+a[1],!1]:[e.pageY,e.pageX,!1]}},r=function(){var r,l,s,c=z(this),d=c.data(P),u=d.opt,e=P+"_"+d.idx,f=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],h=z("#mCSB_"+d.idx+"_container"),t=z("#"+f[0]+",#"+f[1]),o=u.advanced.releaseDraggableSelectors?t.add(z(u.advanced.releaseDraggableSelectors)):t,a=u.advanced.extraDraggableSelectors?z(!q()||top.document).add(z(u.advanced.extraDraggableSelectors)):z(!q()||top.document);function n(e,t,o,a){if(h[0].idleTimer=u.scrollInertia<233?250:0,r.attr("id")===f[1])var n="x",i=(r[0].offsetLeft-t+a)*d.scrollRatio.x;else n="y",i=(r[0].offsetTop-e+o)*d.scrollRatio.y;K(c,i.toString(),{dir:n,drag:!0})}t.bind("contextmenu."+e,function(e){e.preventDefault()}).bind("mousedown."+e+" touchstart."+e+" pointerdown."+e+" MSPointerDown."+e,function(e){if(e.stopImmediatePropagation(),e.preventDefault(),te(e)){H=!0,g&&(document.onselectstart=function(){return!1}),W.call(h,!1),J(c);var t=(r=z(this)).offset(),o=F(e)[0]-t.top,a=F(e)[1]-t.left,n=r.height()+t.top,i=r.width()+t.left;o<n&&0<o&&a<i&&0<a&&(l=o,s=a),C(r,"active",u.autoExpandScrollbar)}}).bind("touchmove."+e,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=r.offset(),o=F(e)[0]-t.top,a=F(e)[1]-t.left;n(l,s,o,a)}),z(document).add(a).bind("mousemove."+e+" pointermove."+e+" MSPointerMove."+e,function(e){if(r){var t=r.offset(),o=F(e)[0]-t.top,a=F(e)[1]-t.left;if(l===o&&s===a)return;n(l,s,o,a)}}).add(o).bind("mouseup."+e+" touchend."+e+" pointerup."+e+" MSPointerUp."+e,function(e){r&&(C(r,"active",u.autoExpandScrollbar),r=null),H=!1,g&&(document.onselectstart=null),W.call(h,!0)})},O=function(){var d,c,u,f,h,m,p,g,v,x,_,w,S,b,C=z(this),y=C.data(P),B=y.opt,e=P+"_"+y.idx,T=z("#mCSB_"+y.idx),k=z("#mCSB_"+y.idx+"_container"),M=[z("#mCSB_"+y.idx+"_dragger_vertical"),z("#mCSB_"+y.idx+"_dragger_horizontal")],O=[],I=[],D=0,E="yx"===B.axis?"none":"all",W=[],t=k.find("iframe"),o=["touchstart."+e+" pointerdown."+e+" MSPointerDown."+e,"touchmove."+e+" pointermove."+e+" MSPointerMove."+e,"touchend."+e+" pointerup."+e+" MSPointerUp."+e],R=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;function a(e){if(!oe(e)||H||F(e)[2])U=0;else{b=S=0,d=U=1,C.removeClass("mCS_touch_action");var t=k.offset();c=F(e)[0]-t.top,u=F(e)[1]-t.left,W=[F(e)[0],F(e)[1]]}}function n(e){if(oe(e)&&!H&&!F(e)[2]&&(B.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!b||S)&&d)){p=$();var t=T.offset(),o=F(e)[0]-t.top,a=F(e)[1]-t.left,n="mcsLinearOut";if(O.push(o),I.push(a),W[2]=Math.abs(F(e)[0]-W[0]),W[3]=Math.abs(F(e)[1]-W[1]),y.overflowed[0])var i=M[0].parent().height()-M[0].height(),r=0<c-o&&o-c>-i*y.scrollRatio.y&&(2*W[3]<W[2]||"yx"===B.axis);if(y.overflowed[1])var l=M[1].parent().width()-M[1].width(),s=0<u-a&&a-u>-l*y.scrollRatio.x&&(2*W[2]<W[3]||"yx"===B.axis);r||s?(R||e.preventDefault(),S=1):(b=1,C.addClass("mCS_touch_action")),R&&e.preventDefault(),_="yx"===B.axis?[c-o,u-a]:"x"===B.axis?[null,u-a]:[c-o,null],k[0].idleTimer=250,y.overflowed[0]&&L(_[0],D,n,"y","all",!0),y.overflowed[1]&&L(_[1],D,n,"x",E,!0)}}function i(e){if(!oe(e)||H||F(e)[2])U=0;else{U=1,e.stopImmediatePropagation(),J(C),m=$();var t=T.offset();f=F(e)[0]-t.top,h=F(e)[1]-t.left,O=[],I=[]}}function r(e){if(oe(e)&&!H&&!F(e)[2]){d=0,e.stopImmediatePropagation(),b=S=0,g=$();var t=T.offset(),o=F(e)[0]-t.top,a=F(e)[1]-t.left;if(!(30<g-p)){var n="mcsEaseOut",i=(x=1e3/(g-m))<2.5,r=i?[O[O.length-2],I[I.length-2]]:[0,0];v=i?[o-r[0],a-r[1]]:[o-f,a-h];var l=[Math.abs(v[0]),Math.abs(v[1])];x=i?[Math.abs(v[0]/4),Math.abs(v[1]/4)]:[x,x];var s=[Math.abs(k[0].offsetTop)-v[0]*A(l[0]/x[0],x[0]),Math.abs(k[0].offsetLeft)-v[1]*A(l[1]/x[1],x[1])];_="yx"===B.axis?[s[0],s[1]]:"x"===B.axis?[null,s[1]]:[s[0],null],w=[4*l[0]+B.scrollInertia,4*l[1]+B.scrollInertia];var c=parseInt(B.contentTouchScroll)||0;_[0]=c<l[0]?_[0]:0,_[1]=c<l[1]?_[1]:0,y.overflowed[0]&&L(_[0],w[0],n,"y",E,!1),y.overflowed[1]&&L(_[1],w[1],n,"x",E,!1)}}}function A(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return 90<e?4<t?o[0]:o[3]:60<e?3<t?o[3]:o[2]:30<e?8<t?o[1]:6<t?o[0]:4<t?t:o[2]:8<t?t:o[3]}function L(e,t,o,a,n,i){e&&K(C,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}k.bind(o[0],function(e){a(e)}).bind(o[1],function(e){n(e)}),T.bind(o[0],function(e){i(e)}).bind(o[2],function(e){r(e)}),t.length&&t.each(function(){z(this).bind("load",function(){q(this)&&z(this.contentDocument||this.contentWindow.document).bind(o[0],function(e){a(e),i(e)}).bind(o[1],function(e){n(e)}).bind(o[2],function(e){r(e)})})})},I=function(){var n,a=z(this),i=a.data(P),r=i.opt,l=i.sequential,e=P+"_"+i.idx,s=z("#mCSB_"+i.idx+"_container"),c=s.parent();function d(e,t,o){l.type=o&&n?"stepped":"stepless",l.scrollAmount=10,N(a,e,t,"mcsLinearOut",o?60:null)}s.bind("mousedown."+e,function(e){U||n||(n=1,H=!0)}).add(document).bind("mousemove."+e,function(e){if(!U&&n&&(window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&document.selection.createRange().text)){var t=s.offset(),o=F(e)[0]-t.top+s[0].offsetTop,a=F(e)[1]-t.left+s[0].offsetLeft;0<o&&o<c.height()&&0<a&&a<c.width()?l.step&&d("off",null,"stepped"):("x"!==r.axis&&i.overflowed[0]&&(o<0?d("on",38):o>c.height()&&d("on",40)),"y"!==r.axis&&i.overflowed[1]&&(a<0?d("on",37):a>c.width()&&d("on",39)))}}).bind("mouseup."+e+" dragend."+e,function(e){U||(n&&(n=0,d("off",null)),H=!1)})},D=function(){if(z(this).data(P)){var u=z(this),f=u.data(P),h=f.opt,e=P+"_"+f.idx,m=z("#mCSB_"+f.idx),p=[z("#mCSB_"+f.idx+"_dragger_vertical"),z("#mCSB_"+f.idx+"_dragger_horizontal")],t=z("#mCSB_"+f.idx+"_container").find("iframe");t.length&&t.each(function(){z(this).bind("load",function(){q(this)&&z(this.contentDocument||this.contentWindow.document).bind("mousewheel."+e,function(e,t){o(e,t)})})}),m.bind("mousewheel."+e,function(e,t){o(e,t)})}function o(e,t){if(J(u),!R(u,e.target)){var o="auto"!==h.mouseWheel.deltaFactor?parseInt(h.mouseWheel.deltaFactor):g&&e.deltaFactor<100?100:e.deltaFactor||100,a=h.scrollInertia;if("x"===h.axis||"x"===h.mouseWheel.axis)var n="x",i=[Math.round(o*f.scrollRatio.x),parseInt(h.mouseWheel.scrollAmount)],r="auto"!==h.mouseWheel.scrollAmount?i[1]:i[0]>=m.width()?.9*m.width():i[0],l=Math.abs(z("#mCSB_"+f.idx+"_container")[0].offsetLeft),s=p[1][0].offsetLeft,c=p[1].parent().width()-p[1].width(),d="y"===h.mouseWheel.axis?e.deltaY||t:e.deltaX;else n="y",i=[Math.round(o*f.scrollRatio.y),parseInt(h.mouseWheel.scrollAmount)],r="auto"!==h.mouseWheel.scrollAmount?i[1]:i[0]>=m.height()?.9*m.height():i[0],l=Math.abs(z("#mCSB_"+f.idx+"_container")[0].offsetTop),s=p[0][0].offsetTop,c=p[0].parent().height()-p[0].height(),d=e.deltaY||t;"y"===n&&!f.overflowed[0]||"x"===n&&!f.overflowed[1]||((h.mouseWheel.invert||e.webkitDirectionInvertedFromDevice)&&(d=-d),h.mouseWheel.normalizeDelta&&(d=d<0?-1:1),(0<d&&0!==s||d<0&&s!==c||h.mouseWheel.preventDefault)&&(e.stopImmediatePropagation(),e.preventDefault()),e.deltaFactor<5&&!h.mouseWheel.normalizeDelta&&(r=e.deltaFactor,a=17),K(u,(l-d*r).toString(),{dir:n,dur:a}))}}},E=new Object,q=function(e){var t=!1,o=!1,a=null;if(void 0===e?o="#empty":void 0!==z(e).attr("id")&&(o=z(e).attr("id")),!1!==o&&void 0!==E[o])return E[o];if(e){try{a=(e.contentDocument||e.contentWindow.document).body.innerHTML}catch(e){}t=null!==a}else{try{a=top.document.body.innerHTML}catch(e){}t=null!==a}return!1!==o&&(E[o]=t),t},W=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},R=function(e,t){var o=t.nodeName.toLowerCase(),a=e.data(P).opt.mouseWheel.disableOver;return-1<z.inArray(o,a)&&!(-1<z.inArray(o,["select","textarea"])&&!z(t).is(":focus"))},A=function(){var r,l=z(this),s=l.data(P),e=P+"_"+s.idx,c=z("#mCSB_"+s.idx+"_container"),d=c.parent();z(".mCSB_"+s.idx+"_scrollbar ."+S[12]).bind("mousedown."+e+" touchstart."+e+" pointerdown."+e+" MSPointerDown."+e,function(e){H=!0,z(e.target).hasClass("mCSB_dragger")||(r=1)}).bind("touchend."+e+" pointerup."+e+" MSPointerUp."+e,function(e){H=!1}).bind("click."+e,function(e){if(r&&(r=0,z(e.target).hasClass(S[12])||z(e.target).hasClass("mCSB_draggerRail"))){J(l);var t=z(this),o=t.find(".mCSB_dragger");if(0<t.parent(".mCSB_scrollTools_horizontal").length){if(!s.overflowed[1])return;var a="x",n=e.pageX>o.offset().left?-1:1,i=Math.abs(c[0].offsetLeft)-n*(.9*d.width())}else{if(!s.overflowed[0])return;a="y",n=e.pageY>o.offset().top?-1:1,i=Math.abs(c[0].offsetTop)-n*(.9*d.height())}K(l,i.toString(),{dir:a,scrollEasing:"mcsEaseInOut"})}})},L=function(){var i=z(this),e=i.data(P),r=e.opt,t=P+"_"+e.idx,l=z("#mCSB_"+e.idx+"_container"),s=l.parent();l.bind("focusin."+t,function(e){var n=z(document.activeElement),t=l.find(".mCustomScrollBox").length;n.is(r.advanced.autoScrollOnFocus)&&(J(i),clearTimeout(i[0]._focusTimeout),i[0]._focusTimer=t?17*t:0,i[0]._focusTimeout=setTimeout(function(){var e=[ne(n)[0],ne(n)[1]],t=[l[0].offsetTop,l[0].offsetLeft],o=[0<=t[0]+e[0]&&t[0]+e[0]<s.height()-n.outerHeight(!1),0<=t[1]+e[1]&&t[0]+e[1]<s.width()-n.outerWidth(!1)],a="yx"!==r.axis||o[0]||o[1]?"all":"none";"x"===r.axis||o[0]||K(i,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:a,dur:0}),"y"===r.axis||o[1]||K(i,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:a,dur:0})},i[0]._focusTimer))})},j=function(){var t=z(this).data(P),e=P+"_"+t.idx,o=z("#mCSB_"+t.idx+"_container").parent();o.bind("scroll."+e,function(e){0===o.scrollTop()&&0===o.scrollLeft()||z(".mCSB_"+t.idx+"_scrollbar").css("visibility","hidden")})},Y=function(){var a=z(this),n=a.data(P),i=n.opt,r=n.sequential,e=P+"_"+n.idx,t=".mCSB_"+n.idx+"_scrollbar";z(t+">a").bind("contextmenu."+e,function(e){e.preventDefault()}).bind("mousedown."+e+" touchstart."+e+" pointerdown."+e+" MSPointerDown."+e+" mouseup."+e+" touchend."+e+" pointerup."+e+" MSPointerUp."+e+" mouseout."+e+" pointerout."+e+" MSPointerOut."+e+" click."+e,function(e){if(e.preventDefault(),te(e)){var t=z(this).attr("class");switch(r.type=i.scrollButtons.scrollType,e.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===r.type)return;H=!0,n.tweenRunning=!1,o("on",t);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===r.type)return;H=!1,r.dir&&o("off",t);break;case"click":if("stepped"!==r.type||n.tweenRunning)return;o("on",t)}}function o(e,t){r.scrollAmount=i.scrollButtons.scrollAmount,N(a,e,t)}})},X=function(){var l=z(this),s=l.data(P),c=s.opt,d=s.sequential,e=P+"_"+s.idx,t=z("#mCSB_"+s.idx),u=z("#mCSB_"+s.idx+"_container"),f=u.parent(),h="input,textarea,select,datalist,keygen,[contenteditable='true']",o=u.find("iframe"),a=["blur."+e+" keydown."+e+" keyup."+e];function n(e){switch(e.type){case"blur":s.tweenRunning&&d.dir&&r("off",null);break;case"keydown":case"keyup":var t=e.keyCode?e.keyCode:e.which,o="on";if("x"!==c.axis&&(38===t||40===t)||"y"!==c.axis&&(37===t||39===t)){if((38===t||40===t)&&!s.overflowed[0]||(37===t||39===t)&&!s.overflowed[1])return;"keyup"===e.type&&(o="off"),z(document.activeElement).is(h)||(e.preventDefault(),e.stopImmediatePropagation(),r(o,t))}else if(33===t||34===t){if((s.overflowed[0]||s.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type){J(l);var a=34===t?-1:1;if("x"===c.axis||"yx"===c.axis&&s.overflowed[1]&&!s.overflowed[0])var n="x",i=Math.abs(u[0].offsetLeft)-a*(.9*f.width());else n="y",i=Math.abs(u[0].offsetTop)-a*(.9*f.height());K(l,i.toString(),{dir:n,scrollEasing:"mcsEaseInOut"})}}else if((35===t||36===t)&&!z(document.activeElement).is(h)&&((s.overflowed[0]||s.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type)){if("x"===c.axis||"yx"===c.axis&&s.overflowed[1]&&!s.overflowed[0])n="x",i=35===t?Math.abs(f.width()-u.outerWidth(!1)):0;else n="y",i=35===t?Math.abs(f.height()-u.outerHeight(!1)):0;K(l,i.toString(),{dir:n,scrollEasing:"mcsEaseInOut"})}}function r(e,t){d.type=c.keyboard.scrollType,d.scrollAmount=c.keyboard.scrollAmount,"stepped"===d.type&&s.tweenRunning||N(l,e,t)}}o.length&&o.each(function(){z(this).bind("load",function(){q(this)&&z(this.contentDocument||this.contentWindow.document).bind(a[0],function(e){n(e)})})}),t.attr("tabindex","0").bind(a[0],function(e){n(e)})},N=function(u,e,t,f,h){var m=u.data(P),p=m.opt,g=m.sequential,v=z("#mCSB_"+m.idx+"_container"),o="stepped"===g.type,x=p.scrollInertia<26?26:p.scrollInertia,_=p.scrollInertia<1?17:p.scrollInertia;switch(e){case"on":if(g.dir=[t===S[16]||t===S[15]||39===t||37===t?"x":"y",t===S[13]||t===S[15]||38===t||37===t?-1:1],J(u),ae(t)&&"stepped"===g.type)return;w(o);break;case"off":clearTimeout(g.step),ee(g,"step"),J(u),(o||m.tweenRunning&&g.dir)&&w(!0)}function w(e){p.snapAmount&&(g.scrollAmount=p.snapAmount instanceof Array?"x"===g.dir[0]?p.snapAmount[1]:p.snapAmount[0]:p.snapAmount);var t="stepped"!==g.type,o=h||(e?t?x/1.5:_:1e3/60),a=e?t?7.5:40:2.5,n=[Math.abs(v[0].offsetTop),Math.abs(v[0].offsetLeft)],i=[10<m.scrollRatio.y?10:m.scrollRatio.y,10<m.scrollRatio.x?10:m.scrollRatio.x],r="x"===g.dir[0]?n[1]+g.dir[1]*(i[1]*a):n[0]+g.dir[1]*(i[0]*a),l="x"===g.dir[0]?n[1]+g.dir[1]*parseInt(g.scrollAmount):n[0]+g.dir[1]*parseInt(g.scrollAmount),s="auto"!==g.scrollAmount?l:r,c=f||(e?t?"mcsLinearOut":"mcsEaseInOut":"mcsLinear"),d=!!e;e&&o<17&&(s="x"===g.dir[0]?n[1]:n[0]),K(u,s.toString(),{dir:g.dir[0],scrollEasing:c,dur:o,onComplete:d}),e?g.dir=!1:(clearTimeout(g.step),g.step=setTimeout(function(){w()},o))}},V=function(e){var t=z(this).data(P).opt,o=[];return"function"==typeof e&&(e=e()),e instanceof Array?o=1<e.length?[e[0],e[1]]:"x"===t.axis?[null,e[0]]:[e[0],null]:(o[0]=e.y?e.y:e.x||"x"===t.axis?null:e,o[1]=e.x?e.x:e.y||"y"===t.axis?null:e),"function"==typeof o[0]&&(o[0]=o[0]()),"function"==typeof o[1]&&(o[1]=o[1]()),o},Q=function(e,t){if(null!=e&&void 0!==e){var o=z(this),a=o.data(P),n=a.opt,i=z("#mCSB_"+a.idx+"_container"),r=i.parent(),l=typeof e,s="x"===(t=t||("x"===n.axis?"x":"y"))?i.outerWidth(!1)-r.width():i.outerHeight(!1)-r.height(),c="x"===t?i[0].offsetLeft:i[0].offsetTop,d="x"===t?"left":"top";switch(l){case"function":return e();case"object":if(!(f=e.jquery?e:z(e)).length)return;return"x"===t?ne(f)[1]:ne(f)[0];case"string":case"number":if(ae(e))return Math.abs(e);if(-1!==e.indexOf("%"))return Math.abs(s*parseInt(e)/100);if(-1!==e.indexOf("-="))return Math.abs(c-parseInt(e.split("-=")[1]));if(-1!==e.indexOf("+=")){var u=c+parseInt(e.split("+=")[1]);return 0<=u?0:Math.abs(u)}if(-1!==e.indexOf("px")&&ae(e.split("px")[0]))return Math.abs(e.split("px")[0]);if("top"===e||"left"===e)return 0;if("bottom"===e)return Math.abs(r.height()-i.outerHeight(!1));if("right"===e)return Math.abs(r.width()-i.outerWidth(!1));if("first"!==e&&"last"!==e)return z(e).length?"x"===t?ne(z(e))[1]:ne(z(e))[0]:(i.css(d,e),void m.update.call(null,o[0]));var f=i.find(":"+e);return"x"===t?ne(f)[1]:ne(f)[0]}}},G=function(e){var t=z(this),o=t.data(P),a=o.opt,n=z("#mCSB_"+o.idx+"_container");if(e)return clearTimeout(n[0].autoUpdate),void ee(n[0],"autoUpdate");function i(e){if(z(e).hasClass(S[2]))l();else{var t,o,a=new Image;a.onload=(t=a,o=function(){this.onload=null,z(e).addClass(S[2]),l(2)},function(){return o.apply(t,arguments)}),a.src=e.src}}function r(){!0===a.advanced.updateOnSelectorChange&&(a.advanced.updateOnSelectorChange="*");var e=0,t=n.find(a.advanced.updateOnSelectorChange);return a.advanced.updateOnSelectorChange&&0<t.length&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function l(e){clearTimeout(n[0].autoUpdate),m.update.call(null,t[0],e)}!function e(){clearTimeout(n[0].autoUpdate);if(0===t.parents("html").length)return void(t=null);n[0].autoUpdate=setTimeout(function(){return a.advanced.updateOnSelectorChange&&(o.poll.change.n=r(),o.poll.change.n!==o.poll.change.o)?(o.poll.change.o=o.poll.change.n,void l(3)):a.advanced.updateOnContentResize&&(o.poll.size.n=t[0].scrollHeight+t[0].scrollWidth+n[0].offsetHeight+t[0].offsetHeight+t[0].offsetWidth,o.poll.size.n!==o.poll.size.o)?(o.poll.size.o=o.poll.size.n,void l(1)):!a.advanced.updateOnImageLoad||"auto"===a.advanced.updateOnImageLoad&&"y"===a.axis||(o.poll.img.n=n.find("img").length,o.poll.img.n===o.poll.img.o)?void((a.advanced.updateOnSelectorChange||a.advanced.updateOnContentResize||a.advanced.updateOnImageLoad)&&e()):(o.poll.img.o=o.poll.img.n,void n.find("img").each(function(){i(this)}))},a.advanced.autoUpdateTimeout)}()},J=function(e){var t=e.data(P);z("#mCSB_"+t.idx+"_container,#mCSB_"+t.idx+"_container_wrapper,#mCSB_"+t.idx+"_dragger_vertical,#mCSB_"+t.idx+"_dragger_horizontal").each(function(){o.call(this)})},K=function(n,e,i){var t=n.data(P),o=t.opt,a={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:o.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},r=[(i=z.extend(a,i)).dur,i.drag?0:i.dur],l=z("#mCSB_"+t.idx),s=z("#mCSB_"+t.idx+"_container"),c=s.parent(),d=o.callbacks.onTotalScrollOffset?V.call(n,o.callbacks.onTotalScrollOffset):[0,0],u=o.callbacks.onTotalScrollBackOffset?V.call(n,o.callbacks.onTotalScrollBackOffset):[0,0];if(t.trigger=i.trigger,0===c.scrollTop()&&0===c.scrollLeft()||(z(".mCSB_"+t.idx+"_scrollbar").css("visibility","visible"),c.scrollTop(0).scrollLeft(0)),"_resetY"!==e||t.contentReset.y||(S("onOverflowYNone")&&o.callbacks.onOverflowYNone.call(n[0]),t.contentReset.y=1),"_resetX"!==e||t.contentReset.x||(S("onOverflowXNone")&&o.callbacks.onOverflowXNone.call(n[0]),t.contentReset.x=1),"_resetY"!==e&&"_resetX"!==e){if(!t.contentReset.y&&n[0].mcs||!t.overflowed[0]||(S("onOverflowY")&&o.callbacks.onOverflowY.call(n[0]),t.contentReset.x=null),!t.contentReset.x&&n[0].mcs||!t.overflowed[1]||(S("onOverflowX")&&o.callbacks.onOverflowX.call(n[0]),t.contentReset.x=null),o.snapAmount)e=function(e,t,o){return Math.round(e/t)*t-o}(e,o.snapAmount instanceof Array?"x"===i.dir?o.snapAmount[1]:o.snapAmount[0]:o.snapAmount,o.snapOffset);switch(i.dir){case"x":var f=z("#mCSB_"+t.idx+"_dragger_horizontal"),h="left",m=s[0].offsetLeft,p=[l.width()-s.outerWidth(!1),f.parent().width()-f.width()],g=[e,0===e?0:e/t.scrollRatio.x],v=d[1],x=u[1],_=0<v?v/t.scrollRatio.x:0,w=0<x?x/t.scrollRatio.x:0;break;case"y":f=z("#mCSB_"+t.idx+"_dragger_vertical"),h="top",m=s[0].offsetTop,p=[l.height()-s.outerHeight(!1),f.parent().height()-f.height()],g=[e,0===e?0:e/t.scrollRatio.y],v=d[0],x=u[0],_=0<v?v/t.scrollRatio.y:0,w=0<x?x/t.scrollRatio.y:0}g[1]<0||0===g[0]&&0===g[1]?g=[0,0]:g[1]>=p[1]?g=[p[0],p[1]]:g[0]=-g[0],n[0].mcs||(b(),S("onInit")&&o.callbacks.onInit.call(n[0])),clearTimeout(s[0].onCompleteTimeout),Z(f[0],h,Math.round(g[1]),r[1],i.scrollEasing),!t.tweenRunning&&(0===m&&0<=g[0]||m===p[0]&&g[0]<=p[0])||Z(s[0],h,Math.round(g[0]),r[0],i.scrollEasing,i.overwrite,{onStart:function(){i.callbacks&&i.onStart&&!t.tweenRunning&&(S("onScrollStart")&&(b(),o.callbacks.onScrollStart.call(n[0])),t.tweenRunning=!0,C(f),t.cbOffsets=[o.callbacks.alwaysTriggerOffsets||m>=p[0]+v,o.callbacks.alwaysTriggerOffsets||m<=-x])},onUpdate:function(){i.callbacks&&i.onUpdate&&S("whileScrolling")&&(b(),o.callbacks.whileScrolling.call(n[0]))},onComplete:function(){if(i.callbacks&&i.onComplete){"yx"===o.axis&&clearTimeout(s[0].onCompleteTimeout);var e=s[0].idleTimer||0;s[0].onCompleteTimeout=setTimeout(function(){S("onScroll")&&(b(),o.callbacks.onScroll.call(n[0])),S("onTotalScroll")&&g[1]>=p[1]-_&&t.cbOffsets[0]&&(b(),o.callbacks.onTotalScroll.call(n[0])),S("onTotalScrollBack")&&g[1]<=w&&t.cbOffsets[1]&&(b(),o.callbacks.onTotalScrollBack.call(n[0])),t.tweenRunning=!1,s[0].idleTimer=0,C(f,"hide")},e)}}})}function S(e){return t&&o.callbacks[e]&&"function"==typeof o.callbacks[e]}function b(){var e=[s[0].offsetTop,s[0].offsetLeft],t=[f[0].offsetTop,f[0].offsetLeft],o=[s.outerHeight(!1),s.outerWidth(!1)],a=[l.height(),l.width()];n[0].mcs={content:s,top:e[0],left:e[1],draggerTop:t[0],draggerLeft:t[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(o[0])-a[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(o[1])-a[1])),direction:i.dir}}},Z=function(e,t,o,a,n,i,r){e._mTween||(e._mTween={top:{},left:{}});var l,s,c=(r=r||{}).onStart||function(){},d=r.onUpdate||function(){},u=r.onComplete||function(){},f=$(),h=0,m=e.offsetTop,p=e.style,g=e._mTween[t];"left"===t&&(m=e.offsetLeft);var v=o-m;function x(){g.stop||(h||c.call(),h=$()-f,_(),h>=g.time&&(g.time=h>g.time?h+l-(h-g.time):h+l-1,g.time<h+1&&(g.time=h+1)),g.time<a?g.id=s(x):u.call())}function _(){0<a?(g.currVal=function(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return(e/=a/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t;case"easeInOutStrong":return(e/=a/2)<1?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(2-Math.pow(2,-10*e))+t);case"easeInOut":case"mcsEaseInOut":return(e/=a/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t;case"easeOutSmooth":return e/=a,-o*(--e*e*e*e-1)+t;case"easeOutStrong":return o*(1-Math.pow(2,-10*e/a))+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}(g.time,m,v,a,n),p[t]=Math.round(g.currVal)+"px"):p[t]=o+"px",d.call()}g.stop=0,"none"!==i&&function(){if(null==g.id)return;window.requestAnimationFrame?window.cancelAnimationFrame(g.id):clearTimeout(g.id);g.id=null}(),l=1e3/60,g.time=h+l,s=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return _(),setTimeout(e,.01)},g.id=s(x)},$=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},o=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},ee=function(t,o){try{delete t[o]}catch(e){t[o]=null}},te=function(e){return!(e.which&&1!==e.which)},oe=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},ae=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ne=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ie=function(){var e=function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}();return!!e&&document[e]},z.fn[h]=function(e){return m[e]?m[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void z.error("Method "+e+" does not exist"):m.init.apply(this,arguments)},z[h]=function(e){return m[e]?m[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void z.error("Method "+e+" does not exist"):m.init.apply(this,arguments)},z[h].defaults=n,window[h]=!0,z(window).bind("load",function(){z(a)[h](),z.extend(z.expr[":"],{mcsInView:z.expr[":"].mcsInView||function(e){var t,o,a=z(e),n=a.parents(".mCSB_container");if(n.length)return t=n.parent(),0<=(o=[n[0].offsetTop,n[0].offsetLeft])[0]+ne(a)[0]&&o[0]+ne(a)[0]<t.height()-a.outerHeight(!1)&&0<=o[1]+ne(a)[1]&&o[1]+ne(a)[1]<t.width()-a.outerWidth(!1)},mcsInSight:z.expr[":"].mcsInSight||function(e,t,o){var a,n,i,r,l=z(e),s=l.parents(".mCSB_container"),c="exact"===o[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(s.length)return a=[l.outerHeight(!1),l.outerWidth(!1)],i=[s[0].offsetTop+ne(l)[0],s[0].offsetLeft+ne(l)[1]],n=[s.parent()[0].offsetHeight,s.parent()[0].offsetWidth],i[0]-n[0]*(r=[a[0]<n[0]?c[0]:c[1],a[1]<n[1]?c[0]:c[1]])[0][0]<0&&0<=i[0]+a[0]-n[0]*r[0][1]&&i[1]-n[1]*r[1][0]<0&&0<=i[1]+a[1]-n[1]*r[1][1]},mcsOverflow:z.expr[":"].mcsOverflow||function(e){var t=z(e).data(P);if(t)return t.overflowed[0]||t.overflowed[1]}})})});