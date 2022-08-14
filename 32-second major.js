/*
 * Crea una función que imprima los 30 próximos años bisiestos
 * siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

const list = [1, 2, 3, 125, 5, 6500, 700000, 8, 9, 70, 900];
let major = 0;
let index = 0;

for (let i = 0; i < list.length; i++) {
  if (list[i] > major) {
    major = list[i];
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i] < major && list[i] > index) {
      index = list[i];
    }
  }
}

console.log(`El segundo mayor es ${index}`);