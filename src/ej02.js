import {PI, sumar, multiplicar, restar, dividir, array} from './modules/matematica.js'
let suma, resta, multi, divi, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
suma = sumar(numero1, numero2);
resta = restar(numero1, numero2)
multi = multiplicar (numero1, numero2)
divi = dividir(numero1, numero2)
console.log(`Sumar (${numero1} + ${numero2}) = ${suma}`);
console.log(`Restar (${numero1} - ${numero2}) = ${resta}`);
console.log(`Multiplicar (${numero1} x ${numero2}) = ${multi}`);
console.log(`Dividir (${numero1} / ${numero2}) = ${divi}`);
for(var i = 0; i < array.length; i++){
    console.log(array[i])
}