!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e,r=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),n=document.querySelector("body");o.setAttribute("disabled",""),r.addEventListener("click",(function(){r.setAttribute("disabled",""),o.removeAttribute("disabled",""),e=setInterval((function(){colorRandomized=t(),n.style.backgroundColor="".concat(t())}),1e3)})),o.addEventListener("click",(function(){clearInterval(e),r.removeAttribute("disabled",""),o.setAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.fdf1ea77.js.map
