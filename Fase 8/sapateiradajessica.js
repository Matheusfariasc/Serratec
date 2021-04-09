const prompt = require ("prompt-sync")();
console.log ("<h2> Sapateira da Jéssica");


var sapato = [];

sapato[0]= " Sapato Marrom ";
sapato[1]= " Quichute ";
sapato[2]= " Sapatilha ";
sapato[3]= " Sapatênis ";
sapato[4]= " Sandália ";
sapato[5]= " Tênis Azul";
sapato[6]= " Bota marrom";
sapato[7]= " Sapato preto";

let gaveta = prompt( "Qual gaveta você quer ver?");
gaveta = number(gaveta);

encontrado = sapato[gaveta];
console.log( " Na gaveta" + gaveta + "temos um" + encontrado);


