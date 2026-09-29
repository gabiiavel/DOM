const caixas = document.querySelectorAll("body > div");

const botaoPrincipal = document.querySelector(".botoes button:first-child");
const botaoSecundario = document.querySelector(".botoes button:last-child");


caixas.forEach(function(caixa) {
caixa.addEventListener("click", function() {
caixa.style.border = "2px solid green";
});
});


botaoSecundario.addEventListener("click", function() {
caixas.forEach(function(caixa) {
caixa.style.border = "none";
});
});


botaoPrincipal.addEventListener("click", function() {
caixas.forEach(function(caixa) {
caixa.style.border = "2px solid blue";
});
});