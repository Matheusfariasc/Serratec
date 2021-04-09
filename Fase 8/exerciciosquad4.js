/* 
Teste do monstro
 o teatro do monstro permite a entrada de até 5 pessoas;
 a peça só começa após atingir a lotação máxima;
 nesta peça e proibida a entrada de menores de 16 anos;
 o gerente quer saber quantos são os homens e quantos são as mulheres ante da peça começar;
 */

const PromptSync = require("prompt-sync");




 /*
A catraca do onibus quebrou e a empresa precisa dos dados da viagem.
 Os dados necessários para a empresa são quando a pessoa entra no onibus são as seguintes:

 . Quantas pessoas ja entraram no onibus até o momento;
 . Se a pessoa é pagante ou entra com gratuidade;
 . O total dos ganhos até o momento(considerando a passagem a R$4,40);
*/


const ler = require( "prompt-Sync");
var pessoa = [];
pessoa[0]= "Pagante";
pessoa[1]= "Não-Pagante";
pessoa[2]= "Não-Pagante";
pessoa[3]= "Pagante";
pessoa[4]= "Pagante";
pessoa[5]= "Não-Pagante";
pessoa[6]= "Pagante";


console.log = ler (" Quantos passageiros estão presentes no ônibus ?", pessoa );



