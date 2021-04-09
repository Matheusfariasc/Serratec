// No programa Semana vamos escrever por extenso os nomes dos dias da semana

const ler = require ("prompt-sync")();

var dia = [];
dia[0]=" Segunda- Feira";
dia[1]=" Terça - Feira" ;
dia[2]=" Quarta - Feira"; 
dia[3]=" Quinta- Feira"; 
dia[4]=" Sexta- Feira"; 
dia[5]=" Sábado " ;
dia[6]=" Domingo"; 

console.log(" Que dia é hoje?", dia [5]);

/*
Forma clássica em js
var semana = new array(7);
*/

//JS,moderna: uso do literal []
var semana =["Domingo", "Segunda", "Terça"];
console.log("Hoje é ",semana[2]);





