const e=document.querySelector(".form");function o(e,o){return new Promise(((t,l)=>{Math.random()>.3?setTimeout((()=>{t({position:e,delay:o})}),o):setTimeout((()=>{l({position:e,delay:o})}),o)}))}e.addEventListener("submit",(t=>{t.preventDefault();const l=parseFloat(e.delay.value),a=parseFloat(e.delay.value),n=parseFloat(e.amount.value);for(let e=1;e<=n;e+=1)o(e,l+(e-1)*a).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.fc03a353.js.map
