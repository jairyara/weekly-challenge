/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const triangle = (base, height) => {
    let area = (base * height) / 2;
    console.log(`Area triangle is ${area}`);
    return area;
}

const square = (side) => {
    let area = Math.pow(side, 4);
    console.log(`Area square is ${area}`);
    return area;
}

const rectangle = (base, height) => {
    let area = base * height;
    console.log(`Area rectangle is ${area}`);
    return area;
}

const polygon = (polygon) => {
    return polygon;
}

polygon(triangle(4,5));
polygon(square(5));
polygon(rectangle(5, 4));

