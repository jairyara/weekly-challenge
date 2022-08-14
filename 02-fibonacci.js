/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let limit = 50;

const fibonacci = (limit) => {
    let start = 0;
    let sequence = 1;
    let fib;

    for (let i = 0; i < limit; i++) {
        console.log(start)
        fib = start + sequence;
        start = sequence;
        sequence = fib
    }
}


fibonacci(limit);