/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

const fizzBuzz = (limit) => {
    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0) {
            console.log(`${i}- fizz`);
        }
        if (i % 5 === 0) {
            console.log(`${i}- buzz`);
        }

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i}- fizzbuzz`);
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(100);