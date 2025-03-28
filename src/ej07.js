import { getCurrencyAbbreviation , getCountryByAbbreviation } from 'currency-map-country';
let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(code){
   return getCurrencyAbbreviation(getCountryByAbbreviation(code))

}