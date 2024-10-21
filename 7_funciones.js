// funciones declarativas
function sumaElementos(elementos) {
    let total = 0;
    for (let elemento of elementos) {
        total += elemento;
    }

    return total;
}

let numeros = [1,2,3,4,5];
let suma = sumaElementos(numeros);
console.log(suma);

// funciones anónimas
const sumaElementos = function(elementos) {
    let total = 0;
    for (let elemento of elementos) {
        total += elemento;
    }

    return total;
}

let numeros = [1,2,3,4,5];
let suma = sumaElementos(numeros);
console.log(suma);

// arrow functions 
const sumaElementos = elementos => {
    let total = 0;
    for (let elemento of elementos) {
        total += elemento;
    }

    return total;
};

let numeros = [1,2,3,4,5];
let suma = sumaElementos(numeros);
console.log(suma);

// funciones callback
const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;
const ejecutaOperacion = (operacion, num1, num2) => operacion(num1, num2);

console.log("suma: ", ejecutaOperacion(suma, 4, 2));
console.log("resta: ", ejecutaOperacion(resta, 4, 2));
console.log("multiplicación: ", ejecutaOperacion(multiplicacion, 4, 2));
console.log("división: ", ejecutaOperacion(division, 4, 2));