(()=>{"use strict";var e={339:(e,t,n)=>{e.exports=n.p+"7f3d48f77f9de907ca98.jpg"},569:(e,t,n)=>{e.exports=n.p+"56e72242413fa0ba8d6d.jpg"},555:(e,t,n)=>{e.exports=n.p+"ca99adaaab152efaba65.jpg"},431:(e,t,n)=>{e.exports=n.p+"d418e917e195c50fbe67.jpg"},700:(e,t,n)=>{e.exports=n.p+"f7db7a344c7a0ebf7887.jpg"},38:(e,t,n)=>{e.exports=n.p+"39ca47ee61f8d796423d.jpg"},229:(e,t,n)=>{e.exports=n.p+"a48dc728b45774ad7f4e.jpg"},195:(e,t,n)=>{e.exports=n.p+"bba0d6d4fa425e11d5eb.jpg"},100:(e,t,n)=>{e.exports=n.p+"3dff4738a0ec73fa33b1.jpg"},430:(e,t,n)=>{e.exports=n.p+"4d7a91951b559aeaa110.jpg"},880:(e,t,n)=>{e.exports=n.p+"1e93dcc5971859da321a.jpg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var m=t[o]={exports:{}};return e[o](m,m.exports,n),m.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{function e(e,t,n,o,a){const m=document.createElement(n);m.innerHTML=t,null!=o&&m.setAttribute("id",o),null!=a&&m.classList.add(a),document.getElementById(e).insertAdjacentElement("beforeend",m)}function t(e,t,n,o){const a=document.createElement("img");a.src=t,null!=n&&a.setAttribute("id",n),null!=o&&a.classList.add(o),document.getElementById(e).appendChild(a)}const o=[n(880),n(430),n(100)],a=[n(339),n(569),n(555),n(431),n(700),n(38),n(229),n(195)];function m(e){const t=document.createElement("li"),n=document.createElement("a");return n.innerText=e,n.href=`/${e.toLowerCase()}`,t.setAttribute("id","navItem"+e),t.setAttribute("class","nav-item"),t.appendChild(n),{navItemLi:t}}e("content",null,"header","site-header"),e("site-header",null,"nav","site-navbar"),e("site-navbar",null,"ul","site-nav-wrapper"),function(e,t,n,o,a){const m=document.createElement("span");m.innerHTML="Site Name",m.setAttribute("id",o),document.getElementById("site-nav-wrapper").insertAdjacentElement("beforebegin",m)}(0,0,0,"site-name"),function(){const e=["Home","Menu","About","Contact"];for(let t of e)document.getElementById("site-nav-wrapper").insertAdjacentElement("beforeend",m(t).navItemLi)}(),document.getElementById("site-header"),function(e,t,n,o,a){const m=document.createElement("div");m.innerHTML=null,m.setAttribute("id",o),document.getElementById("site-header").insertAdjacentElement("afterend",m)}(0,0,0,"home-main"),e("home-main",null,"div","home-hero"),e("home-hero","Sehr leckeres Essen","h1","hero-title"),e("home-hero","There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.","p","hero-text"),function(e,t,n,o,a){const m=document.createElement("button");m.innerHTML="Book Now",m.setAttribute("type","button"),m.setAttribute("id",o),m.classList.add(a),document.getElementById("hero-text").insertAdjacentElement("afterend",m)}(0,0,0,"book-now-btn","btn-primary"),e("home-main",null,"div","home-about-section-wrapper"),e("home-about-section-wrapper",null,"div","home-about-section"),e("home-about-section",null,"div","home-about-left"),t("home-about-left",o[0],null,"home-about-image"),t("home-about-left",o[1],null,"home-about-image"),t("home-about-left",o[2],null,"home-about-image"),e("home-about-section",null,"div","home-about-right"),e("home-about-right","About Us","h2",null,"section-title"),e("home-about-right",null,"span",null,"hr-left"),e("home-about-right","Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is one of the most wholesome foods that man can eat. In fact,","p",null,"section-paragraph"),e("home-about-right","Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is","p",null,"section-paragraph"),e("home-about-right","Learn More","button",null,"btn-primary"),e("home-main",null,"div","home-menu-section-wrapper"),e("home-menu-section-wrapper",null,"div","home-menu-section"),e("home-menu-section",null,"div","home-menu-header"),e("home-menu-header","Our Menu","h2",null,"section-title"),e("home-menu-header","Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human","p",null,"section-paragraph"),e("home-menu-header",null,"hr"),e("home-menu-section",null,"div","home-menu-items-section");for(let n=0;n<8;n++)e("home-menu-items-section",null,"div","home-menu-item-wrapper"+n,"home-menu-item-wrapper"),t("home-menu-item-wrapper"+n,a[n],null,"home-menu-image"),e("home-menu-item-wrapper"+n,null,"div","home-menu-item-meta"+n,"home-menu-item-meta"),e("home-menu-item-meta"+n,null,"div","home-menu-item-title-price"+n,"home-menu-item-title-price"),e("home-menu-item-title-price"+n,"Pizza Margherita","span",null,"home-menu-item-title"),e("home-menu-item-title-price"+n,"€10","span",null,"home-menu-item-price"),e("home-menu-item-meta"+n,"Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque","p",null,"home-menu-item-description"),e("home-menu-item-meta"+n,"Jetzt Bestellen","button",null,"home-menu-item-order-btn");e("home-menu-section","See More","button",null,"btn-primary"),e("home-main",null,"div","home-whyus-section-wrapper"),e("home-whyus-section-wrapper",null,"div","home-whyus-section"),document.querySelector("#home-main"),e("content","","div","mdIci","kerem"),e("mdIci","Merhaba Dunya","h2","merhabeDunya","none"),e("content","Hello you all!","p",null,"kerem"),e("content","Katya","h1")})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd3AtcGl6emVyaWEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93cC1waXp6ZXJpYS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93cC1waXp6ZXJpYS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly93cC1waXp6ZXJpYS8uL3NyYy9pbWFnZVVybHMuanMiLCJ3ZWJwYWNrOi8vd3AtcGl6emVyaWEvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd3AtcGl6emVyaWEvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly93cC1waXp6ZXJpYS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImZ1bmN0aW9uIGluc2VydEl0ZW0ocGFyZW50SWQsIGlubmVySFRNTCwgZWxlbWVudCwgaWQsIGtsYXNzZSkge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgaXRlbS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIGlkICE9IG51bGwgPyBpdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCkgOiBudWxsO1xuICBrbGFzc2UgIT0gbnVsbCA/IGl0ZW0uY2xhc3NMaXN0LmFkZChrbGFzc2UpIDogbnVsbDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgaXRlbSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VJbWFnZShwYXJlbnRJZCwgc3JjLCBpZCwga2xhc3NlKSB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3JjID0gc3JjO1xuICBpZCAhPSBudWxsID8gaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCkgOiB1bmRlZmluZWQ7XG4gIGtsYXNzZSAhPSBudWxsID8gaW1nLmNsYXNzTGlzdC5hZGQoa2xhc3NlKSA6IHVuZGVmaW5lZDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpLmFwcGVuZENoaWxkKGltZyk7XG59XG5cbmZ1bmN0aW9uIGFkZEFmdGVyKGl0ZW1CZWZvcmVJZCwgaW5uZXJIVE1MLCBlbGVtZW50LCBpZCwga2xhc3NlKSB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBpdGVtLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgaWQgIT0gbnVsbCA/IGl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGlkKSA6IG51bGw7XG4gIGtsYXNzZSAhPSBudWxsID8gaXRlbS5jbGFzc0xpc3QuYWRkKGtsYXNzZSkgOiBudWxsO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtQmVmb3JlSWQpLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBpdGVtKTtcbn1cblxuZnVuY3Rpb24gYWRkQmVmb3JlQmVnaW4oaXRlbUFmdGVySWQsIGlubmVySFRNTCwgZWxlbWVudCwgaWQsIGtsYXNzZSkge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgaXRlbS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIGlkICE9IG51bGwgPyBpdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCkgOiBudWxsO1xuICBrbGFzc2UgIT0gbnVsbCA/IGl0ZW0uY2xhc3NMaXN0LmFkZChrbGFzc2UpIDogbnVsbDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbUFmdGVySWQpLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBpdGVtKTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ1dHRvbihpdGVtQmVmb3JlSWQsIGlubmVySFRNTCwgZWxlbWVudCwgaWQsIGtsYXNzZSkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBidXR0b24uaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBpZCAhPSBudWxsID8gYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCkgOiBudWxsO1xuICBrbGFzc2UgIT0gbnVsbCA/IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGtsYXNzZSkgOiBudWxsO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtQmVmb3JlSWQpLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBidXR0b24pO1xufVxuXG5leHBvcnQgeyBpbnNlcnRJdGVtLCBtYWtlSW1hZ2UsIGFkZEFmdGVyLCBtYWtlQnV0dG9uLCBhZGRCZWZvcmVCZWdpbiB9O1xuIiwiaW1wb3J0IGhvbWVBYm91dEltZzEgZnJvbSAnLi9pbWcvcGV4ZWxzLWRhcmlhLXNoZXZ0c292YS0xMjYwOTY4LmpwZyc7XG5pbXBvcnQgaG9tZUFib3V0SW1nMiBmcm9tICcuL2ltZy9wZXhlbHMtY2hyaXN0aW5hLXZvaW5vdmEtNzM2ODAzMi5qcGcnO1xuaW1wb3J0IGhvbWVBYm91dEltZzMgZnJvbSAnLi9pbWcvcGV4ZWxzLWJyZXR0LWpvcmRhbi04MjU2NjEuanBnJztcblxuaW1wb3J0IGhvbWVNZW51SXRlbUltZzEgZnJvbSAnLi9pbWcvaG9tZU1lbnVJdGVtMS5qcGcnO1xuaW1wb3J0IGhvbWVNZW51SXRlbUltZzIgZnJvbSAnLi9pbWcvaG9tZU1lbnVJdGVtMi5qcGcnO1xuaW1wb3J0IGhvbWVNZW51SXRlbUltZzMgZnJvbSAnLi9pbWcvaG9tZU1lbnVJdGVtMy5qcGcnO1xuaW1wb3J0IGhvbWVNZW51SXRlbUltZzQgZnJvbSAnLi9pbWcvaG9tZU1lbnVJdGVtNC5qcGcnO1xuaW1wb3J0IGhvbWVNZW51SXRlbUltZzUgZnJvbSAnLi9pbWcvaG9tZU1lbnVJdGVtNS5qcGcnO1xuaW1wb3J0IGhvbWVNZW51SXRlbUltZzYgZnJvbSAnLi9pbWcvaG9tZU1lbnVJdGVtNi5qcGcnO1xuaW1wb3J0IGhvbWVNZW51SXRlbUltZzcgZnJvbSAnLi9pbWcvaG9tZU1lbnVJdGVtNy5qcGcnO1xuaW1wb3J0IGhvbWVNZW51SXRlbUltZzggZnJvbSAnLi9pbWcvaG9tZU1lbnVJdGVtOC5qcGcnO1xuXG5leHBvcnQgY29uc3QgaGVhZGVySW1hZ2VzID0gW2hvbWVBYm91dEltZzEsIGhvbWVBYm91dEltZzIsIGhvbWVBYm91dEltZzNdO1xuZXhwb3J0IGNvbnN0IGhvbWVNZW51SXRlbUltZ3MgPSBbXG4gIGhvbWVNZW51SXRlbUltZzEsXG4gIGhvbWVNZW51SXRlbUltZzIsXG4gIGhvbWVNZW51SXRlbUltZzMsXG4gIGhvbWVNZW51SXRlbUltZzQsXG4gIGhvbWVNZW51SXRlbUltZzUsXG4gIGhvbWVNZW51SXRlbUltZzYsXG4gIGhvbWVNZW51SXRlbUltZzcsXG4gIGhvbWVNZW51SXRlbUltZzgsXG5dO1xuIiwiaW1wb3J0IHsgYWRkQWZ0ZXIsIGFkZEJlZm9yZUJlZ2luLCBpbnNlcnRJdGVtIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICcuLi9jc3MvY29tcG9uZW50cy9oZWFkZXIuc2Nzcyc7XG5cbi8vIEluaXRpYWxpemUgSGVhZGVyXG5pbnNlcnRJdGVtKCdjb250ZW50JywgbnVsbCwgJ2hlYWRlcicsICdzaXRlLWhlYWRlcicpO1xuXG5pbnNlcnRJdGVtKCdzaXRlLWhlYWRlcicsIG51bGwsICduYXYnLCAnc2l0ZS1uYXZiYXInKTtcblxuaW5zZXJ0SXRlbSgnc2l0ZS1uYXZiYXInLCBudWxsLCAndWwnLCAnc2l0ZS1uYXYtd3JhcHBlcicpO1xuXG4vLyBJbml0aWFsaXplIHNpdGUgbmFtZVxuYWRkQmVmb3JlQmVnaW4oJ3NpdGUtbmF2LXdyYXBwZXInLCAnU2l0ZSBOYW1lJywgJ3NwYW4nLCAnc2l0ZS1uYW1lJyk7XG5cbi8vIENyZWF0ZSBOYXYgaXRlbXNcbmZ1bmN0aW9uIG1ha2VOYXZMaW5rKG5hbWUpIHtcbiAgY29uc3QgbmF2SXRlbUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmF2SXRlbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5hdkl0ZW1MaW5rLmlubmVyVGV4dCA9IG5hbWU7XG4gIG5hdkl0ZW1MaW5rLmhyZWYgPSBgLyR7bmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gIG5hdkl0ZW1MaS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdkl0ZW0nICsgbmFtZSk7XG4gIG5hdkl0ZW1MaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XG4gIG5hdkl0ZW1MaS5hcHBlbmRDaGlsZChuYXZJdGVtTGluayk7XG4gIHJldHVybiB7IG5hdkl0ZW1MaSB9O1xufVxuXG4vLyBDcmVhdGUgbmF2IGl0ZW1zIGR5bmFtaWNhbGx5XG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBwYWdlcyA9IFsnSG9tZScsICdNZW51JywgJ0Fib3V0JywgJ0NvbnRhY3QnXTtcbiAgZm9yIChsZXQgcGFnZSBvZiBwYWdlcykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLW5hdi13cmFwcGVyJykuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBtYWtlTmF2TGluayhwYWdlKS5uYXZJdGVtTGkpO1xuICB9XG59KSgpO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtaGVhZGVyJyk7XG4vLyBleHBvcnQgY29uc3Qgc2l0ZU5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzc2l0ZS1uYXZiYXInKTtcbi8vIGV4cG9ydCBjb25zdCBzaXRlTmF2V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLW5hdi13cmFwcGVyJyk7XG4vLyBleHBvcnQgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtaGVhZGVyJyk7XG4iLCJpbXBvcnQgeyBhZGRBZnRlciwgaW5zZXJ0SXRlbSwgbWFrZUJ1dHRvbiwgbWFrZUltYWdlIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaGVhZGVySW1hZ2VzLCBob21lTWVudUl0ZW1JbWdzIH0gZnJvbSAnLi4vaW1hZ2VVcmxzJztcbmltcG9ydCAnLi4vY3NzL3BhZ2VzL2hvbWUuc2Nzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcblxuYWRkQWZ0ZXIoJ3NpdGUtaGVhZGVyJywgbnVsbCwgJ2RpdicsICdob21lLW1haW4nKTtcblxuLy8gQ3JlYXRlIEhlcm8gaW4gaG9tZSBwYWdlXG5pbnNlcnRJdGVtKCdob21lLW1haW4nLCBudWxsLCAnZGl2JywgJ2hvbWUtaGVybycpO1xuaW5zZXJ0SXRlbSgnaG9tZS1oZXJvJywgJ1NlaHIgbGVja2VyZXMgRXNzZW4nLCAnaDEnLCAnaGVyby10aXRsZScpO1xuaW5zZXJ0SXRlbShcbiAgJ2hvbWUtaGVybycsXG4gICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLCBieSBpbmplY3RlZCBodW1vdXIuIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ci4nLFxuICAncCcsXG4gICdoZXJvLXRleHQnXG4pO1xubWFrZUJ1dHRvbignaGVyby10ZXh0JywgJ0Jvb2sgTm93JywgJ2J1dHRvbicsICdib29rLW5vdy1idG4nLCAnYnRuLXByaW1hcnknKTtcblxuLy8gQ3JlYXRlIEFib3V0IHNlY3Rpb24gb24gaG9tZSBwYWdlXG5pbnNlcnRJdGVtKCdob21lLW1haW4nLCBudWxsLCAnZGl2JywgJ2hvbWUtYWJvdXQtc2VjdGlvbi13cmFwcGVyJyk7XG5pbnNlcnRJdGVtKCdob21lLWFib3V0LXNlY3Rpb24td3JhcHBlcicsIG51bGwsICdkaXYnLCAnaG9tZS1hYm91dC1zZWN0aW9uJyk7XG5pbnNlcnRJdGVtKCdob21lLWFib3V0LXNlY3Rpb24nLCBudWxsLCAnZGl2JywgJ2hvbWUtYWJvdXQtbGVmdCcpO1xubWFrZUltYWdlKCdob21lLWFib3V0LWxlZnQnLCBoZWFkZXJJbWFnZXNbMF0sIG51bGwsICdob21lLWFib3V0LWltYWdlJyk7XG5tYWtlSW1hZ2UoJ2hvbWUtYWJvdXQtbGVmdCcsIGhlYWRlckltYWdlc1sxXSwgbnVsbCwgJ2hvbWUtYWJvdXQtaW1hZ2UnKTtcbm1ha2VJbWFnZSgnaG9tZS1hYm91dC1sZWZ0JywgaGVhZGVySW1hZ2VzWzJdLCBudWxsLCAnaG9tZS1hYm91dC1pbWFnZScpO1xuaW5zZXJ0SXRlbSgnaG9tZS1hYm91dC1zZWN0aW9uJywgbnVsbCwgJ2RpdicsICdob21lLWFib3V0LXJpZ2h0Jyk7XG5pbnNlcnRJdGVtKCdob21lLWFib3V0LXJpZ2h0JywgJ0Fib3V0IFVzJywgJ2gyJywgbnVsbCwgJ3NlY3Rpb24tdGl0bGUnKTtcbmluc2VydEl0ZW0oJ2hvbWUtYWJvdXQtcmlnaHQnLCBudWxsLCAnc3BhbicsIG51bGwsICdoci1sZWZ0Jyk7XG5pbnNlcnRJdGVtKFxuICAnaG9tZS1hYm91dC1yaWdodCcsXG4gICdGaXNoIGlzIG9uZSBvZiB0aGUgbW9zdCB3aG9sZXNvbWUgZm9vZHMgdGhhdCBtYW4gY2FuIGVhdC4gSW4gZmFjdCwgcGVvcGxlIGhhdmUgYmVlbiBlYXRpbmcgZmlzaCB0aHJvdWdob3V0IGh1bWFuIGhpc3RvcnkuIFRoZXNlIGRheXMsIG1hbnkgY29va3MgeWVhcm4gRmlzaCBpcyBvbmUgb2YgdGhlIG1vc3Qgd2hvbGVzb21lIGZvb2RzIHRoYXQgbWFuIGNhbiBlYXQuIEluIGZhY3QsJyxcbiAgJ3AnLFxuICBudWxsLFxuICAnc2VjdGlvbi1wYXJhZ3JhcGgnXG4pO1xuaW5zZXJ0SXRlbShcbiAgJ2hvbWUtYWJvdXQtcmlnaHQnLFxuICAnRmlzaCBpcyBvbmUgb2YgdGhlIG1vc3Qgd2hvbGVzb21lIGZvb2RzIHRoYXQgbWFuIGNhbiBlYXQuIEluIGZhY3QsIHBlb3BsZSBoYXZlIGJlZW4gZWF0aW5nIGZpc2ggdGhyb3VnaG91dCBodW1hbiBoaXN0b3J5LiBUaGVzZSBkYXlzLCBtYW55IGNvb2tzIHllYXJuIEZpc2ggaXMnLFxuICAncCcsXG4gIG51bGwsXG4gICdzZWN0aW9uLXBhcmFncmFwaCdcbik7XG5pbnNlcnRJdGVtKCdob21lLWFib3V0LXJpZ2h0JywgJ0xlYXJuIE1vcmUnLCAnYnV0dG9uJywgbnVsbCwgJ2J0bi1wcmltYXJ5Jyk7XG5cbi8vIENyZWF0ZSBtZW51IHNlY3Rpb24gaW4gaG9tZVxuaW5zZXJ0SXRlbSgnaG9tZS1tYWluJywgbnVsbCwgJ2RpdicsICdob21lLW1lbnUtc2VjdGlvbi13cmFwcGVyJyk7XG5pbnNlcnRJdGVtKCdob21lLW1lbnUtc2VjdGlvbi13cmFwcGVyJywgbnVsbCwgJ2RpdicsICdob21lLW1lbnUtc2VjdGlvbicpO1xuaW5zZXJ0SXRlbSgnaG9tZS1tZW51LXNlY3Rpb24nLCBudWxsLCAnZGl2JywgJ2hvbWUtbWVudS1oZWFkZXInKTtcbmluc2VydEl0ZW0oJ2hvbWUtbWVudS1oZWFkZXInLCAnT3VyIE1lbnUnLCAnaDInLCBudWxsLCAnc2VjdGlvbi10aXRsZScpO1xuaW5zZXJ0SXRlbShcbiAgJ2hvbWUtbWVudS1oZWFkZXInLFxuICAnRmlzaCBpcyBvbmUgb2YgdGhlIG1vc3Qgd2hvbGVzb21lIGZvb2RzIHRoYXQgbWFuIGNhbiBlYXQuIEluIGZhY3QsIHBlb3BsZSBoYXZlIGJlZW4gZWF0aW5nIGZpc2ggdGhyb3VnaG91dCBodW1hbicsXG4gICdwJyxcbiAgbnVsbCxcbiAgJ3NlY3Rpb24tcGFyYWdyYXBoJ1xuKTtcbmluc2VydEl0ZW0oJ2hvbWUtbWVudS1oZWFkZXInLCBudWxsLCAnaHInKTtcbmluc2VydEl0ZW0oJ2hvbWUtbWVudS1zZWN0aW9uJywgbnVsbCwgJ2RpdicsICdob21lLW1lbnUtaXRlbXMtc2VjdGlvbicpO1xuY29uc3QgbWVudUl0ZW1JbWFnZVVybHMgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gIGluc2VydEl0ZW0oJ2hvbWUtbWVudS1pdGVtcy1zZWN0aW9uJywgbnVsbCwgJ2RpdicsICdob21lLW1lbnUtaXRlbS13cmFwcGVyJyArIGksICdob21lLW1lbnUtaXRlbS13cmFwcGVyJyk7XG4gIG1ha2VJbWFnZSgnaG9tZS1tZW51LWl0ZW0td3JhcHBlcicgKyBpLCBob21lTWVudUl0ZW1JbWdzW2ldLCBudWxsLCAnaG9tZS1tZW51LWltYWdlJyk7XG4gIC8vIEhvbWUgTWVudSBJdGVtIE1ldGEgU2VjdGlvblxuICBpbnNlcnRJdGVtKCdob21lLW1lbnUtaXRlbS13cmFwcGVyJyArIGksIG51bGwsICdkaXYnLCAnaG9tZS1tZW51LWl0ZW0tbWV0YScgKyBpLCAnaG9tZS1tZW51LWl0ZW0tbWV0YScpO1xuICBpbnNlcnRJdGVtKCdob21lLW1lbnUtaXRlbS1tZXRhJyArIGksIG51bGwsICdkaXYnLCAnaG9tZS1tZW51LWl0ZW0tdGl0bGUtcHJpY2UnICsgaSwgJ2hvbWUtbWVudS1pdGVtLXRpdGxlLXByaWNlJyk7XG4gIGluc2VydEl0ZW0oJ2hvbWUtbWVudS1pdGVtLXRpdGxlLXByaWNlJyArIGksICdQaXp6YSBNYXJnaGVyaXRhJywgJ3NwYW4nLCBudWxsLCAnaG9tZS1tZW51LWl0ZW0tdGl0bGUnKTtcbiAgaW5zZXJ0SXRlbSgnaG9tZS1tZW51LWl0ZW0tdGl0bGUtcHJpY2UnICsgaSwgJ+KCrDEwJywgJ3NwYW4nLCBudWxsLCAnaG9tZS1tZW51LWl0ZW0tcHJpY2UnKTtcbiAgaW5zZXJ0SXRlbShcbiAgICAnaG9tZS1tZW51LWl0ZW0tbWV0YScgKyBpLFxuICAgICdBZW5lYW4gY29tbW9kbyBsaWd1bGEgZWdldCBkb2xvciBhZW5lYW4gbWFzc2EuIEN1bSBzb2NpaXMgbmF0b3F1ZScsXG4gICAgJ3AnLFxuICAgIG51bGwsXG4gICAgJ2hvbWUtbWVudS1pdGVtLWRlc2NyaXB0aW9uJ1xuICApO1xuICBpbnNlcnRJdGVtKCdob21lLW1lbnUtaXRlbS1tZXRhJyArIGksICdKZXR6dCBCZXN0ZWxsZW4nLCAnYnV0dG9uJywgbnVsbCwgJ2hvbWUtbWVudS1pdGVtLW9yZGVyLWJ0bicpO1xufVxuLy8gTWVudSBJdGVucyBMaXN0IEFmdGVyXG5pbnNlcnRJdGVtKCdob21lLW1lbnUtc2VjdGlvbicsICdTZWUgTW9yZScsICdidXR0b24nLCBudWxsLCAnYnRuLXByaW1hcnknKTtcblxuaW5zZXJ0SXRlbSgnaG9tZS1tYWluJywgbnVsbCwgJ2RpdicsICdob21lLXdoeXVzLXNlY3Rpb24td3JhcHBlcicpO1xuaW5zZXJ0SXRlbSgnaG9tZS13aHl1cy1zZWN0aW9uLXdyYXBwZXInLCBudWxsLCAnZGl2JywgJ2hvbWUtd2h5dXMtc2VjdGlvbicpO1xuXG5leHBvcnQgY29uc3QgaG9tZU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1tYWluJyk7XG4iLCJpbXBvcnQgeyBob21lTWFpbiB9IGZyb20gJy4vcGFnZXMvaG9tZSc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgaW5zZXJ0SXRlbSwgbWFrZUltYWdlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgJy4vY3NzL21haW4uc2Nzcyc7XG5cbi8vPyBEeW5hbWljYWxseSBJbXBvcnRpbmdcbi8vIGNvbnN0IGR5bkZvb3RlciA9ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL2Zvb3RlcicpO1xuLy8gY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ1dHRvbicpO1xuLy8gbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgZHluRm9vdGVyKClcbi8vICAgICAudGhlbigoeyBkZWZhdWx0OiBmb290ZXIgfSkgPT4gY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpKVxuLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnQnKTtcbi8vIH0pO1xuXG5pbnNlcnRJdGVtKCdjb250ZW50JywgJycsICdkaXYnLCAnbWRJY2knLCAna2VyZW0nKTtcbmluc2VydEl0ZW0oJ21kSWNpJywgJ01lcmhhYmEgRHVueWEnLCAnaDInLCAnbWVyaGFiZUR1bnlhJywgJ25vbmUnKTtcbmluc2VydEl0ZW0oJ2NvbnRlbnQnLCAnSGVsbG8geW91IGFsbCEnLCAncCcsIG51bGwsICdrZXJlbScpO1xuaW5zZXJ0SXRlbSgnY29udGVudCcsICdLYXR5YScsICdoMScpO1xuIl0sIm5hbWVzIjpbIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImluc2VydEl0ZW0iLCJwYXJlbnRJZCIsImlubmVySFRNTCIsImVsZW1lbnQiLCJpZCIsImtsYXNzZSIsIml0ZW0iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJtYWtlSW1hZ2UiLCJpbWciLCJhcHBlbmRDaGlsZCIsImhlYWRlckltYWdlcyIsImhvbWVNZW51SXRlbUltZ3MiLCJtYWtlTmF2TGluayIsIm5hbWUiLCJuYXZJdGVtTGkiLCJuYXZJdGVtTGluayIsImlubmVyVGV4dCIsImhyZWYiLCJ0b0xvd2VyQ2FzZSIsIml0ZW1BZnRlcklkIiwiYWRkQmVmb3JlQmVnaW4iLCJwYWdlcyIsInBhZ2UiLCJpdGVtQmVmb3JlSWQiLCJhZGRBZnRlciIsImJ1dHRvbiIsIm1ha2VCdXR0b24iLCJpIiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=