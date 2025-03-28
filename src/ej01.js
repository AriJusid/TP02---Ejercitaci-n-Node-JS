let textoEntrada01 = "Ari";
let textoEntrada02 = "Lu";
let textoSalida = "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); 
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);
function concatInvert (textoEntrada01, textoEntrada02)
{
    let returnValue = '';
    concatValue= textoEntrada01.concat(textoEntrada02)
    for(var i=concatValue.length; i>0; i--){
        returnValue += concatValue[i-1]
    }
    return returnValue;
}