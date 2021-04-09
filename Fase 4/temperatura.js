const prompt = require ("prompt-sync")();

// entrada
const celsius = prompt(" Digite os graus Celsius : ");

//processamento
let fahr = celsius * 1.8 + 32;

// saída
console.log(" Fahrenheit: ", fahr);
// outra leitura no mesmo programa 

const c2 = prompt (" Digite outro valor :");
fahr= c2 * 1.8 + 32;
console.log( " outro fahr: ", fahr);
//-----------------------------------
const c3 = prompt (" Mais um valor ai irmão:");
fahr= c3 * 1.8 + 32;
console.log( " Mais outro fahr: ", fahr);

//--------------------------



