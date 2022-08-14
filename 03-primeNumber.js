/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

let start= 1;
let end= 100;

const primeNumber = (min, max) => {
    for (let i = min; i <=max; i++  ){
        if (isPrimeNumber(i)) console.log(i)
    }
}


const isPrimeNumber = (number) => {
    if (number < 2) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


primeNumber(start, end);