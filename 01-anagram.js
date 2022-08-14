/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let firstWord = 'mora';
let secondWord = 'Amor';

const isEqual = (arr1, arr2) => {
    return arr1.join() === arr2.join();
}

const isAnagram = (firstWord, secondWord) => {
    if (firstWord.toLowerCase() === secondWord.toLowerCase()) {
        return false;
    }

    let firstArray = firstWord.toLowerCase().split('').sort();
    let secondArray = secondWord.toLowerCase().split('').sort();

    return isEqual(firstArray, secondArray);
}

console.log(isAnagram(firstWord, secondWord));