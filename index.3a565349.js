!function(){var e="https://api.thecatapi.com",n="live_iulvjT2NlzQxxslKtjCAzNiaaQE0TLiojEvcNfMPKILukQeblGUQKEPZdDoDToqu",t=function(t){var o=new URLSearchParams({breed_ids:t,api_key:n});return fetch("".concat(e,"/v1/images/search?").concat(o)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))},o={select:document.querySelector(".breed-select"),container:document.querySelector(".cat-info")};fetch("".concat(e,"/v1/breeds?").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){console.log(e);var n=e.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("");o.select.insertAdjacentHTML("beforeend",n)})).catch((function(e){return console.log(e)}));o.select.addEventListener("change",(function(e){var n=o.select.value;t(n).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=index.3a565349.js.map
