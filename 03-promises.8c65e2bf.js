!function(){var o=document.querySelector(".form");function e(o,e){return new Promise((function(n,t){Math.random()>.3?setTimeout((function(){n({position:o,delay:e})}),e):setTimeout((function(){t({position:o,delay:e})}),e)}))}o.addEventListener("submit",(function(n){n.preventDefault();for(var t=parseFloat(o.delay.value),a=parseFloat(o.delay.value),i=parseFloat(o.amount.value),c=1;c<=i;c+=1)e(c,t+(c-1)*a).then((function(o){var e=o.position,n=o.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(o){var e=o.position,n=o.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.8c65e2bf.js.map
