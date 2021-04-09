/*
Teste do monstro
o teatro do monstro permite a entrada de até 5 pessoas;
a peça só começa após atingir a lotação máxima;
nesta peça e proibida a entrada de menores de 16 anos;
o gerente quer saber quantos são os homens e quantos são as mulheres ante da peça começar;
*/

const ler = require("prompt-sync")();
var LIMITE = 5;
var total = 0;
var H = 0;
var M = 0;

while (total < LIMITE){
cliente = (ler("Antes de entrar no teatro, é homem ou mulher? [H] ou [M]"))
idade = Number(ler("Qual é a sua idade:"));
if (idade < 16){
console.log("Não é autorizado a entrada para menores de 16");}
else {

if(cliente == "H")
    H++
else
    M++
    total++
}
}

console.log("Acabaram os ingressos! Homens:", H, "e", "Mulheres:", M);