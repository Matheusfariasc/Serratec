
function guiche(numero, valor) {
    console.log(" Boleto numero: ", numero ," Pagamento recebido de R$: ",valor);
}

const ler= require("prompt-sync")();


// numero= boleto;
var boleto = ler( "digite no pinpad o nmr do boleto a pagar:");
guiche(boleto, 33.50);
var boleto = ler( "digite no pinpad o nmr do boleto a pagar:");
guiche(boleto, 109.76);




