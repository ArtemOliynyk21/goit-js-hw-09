!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body");e.setAttribute("disabled","disabled"),t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),t.hasAttribute("disabled")&&e.removeAttribute("disabled");r=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)}));var r=null;e.addEventListener("click",(function(){e.setAttribute("disabled","disabled"),t.removeAttribute("disabled"),clearInterval(r)}))}();
//# sourceMappingURL=01-color-switcher.2265708f.js.map
