const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),backgroundColor:document.querySelector("body")};let n=null;function o(){const n=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.backgroundColor.style.backgroundColor=n}t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,n=setInterval(o,1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.21b12d02.js.map
