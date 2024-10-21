// Operadores Aritméticos
let variable1 = 2; // asignación
let variable2 = 3; // asignación 

console.log(variable2 + variable1); // suma
console.log(variable2 - variable1); // resta
console.log(variable2 * variable1); // multiplicación
console.log(variable2 / variable1); // división
console.log(variable2 % variable1); // módulo

// Operadores de Asignación
let variable1 = 2; // asignación
console.log(variable1);
console.log(variable1 += 1);
console.log(variable1 -= 1);
console.log(variable1 *= 2);
console.log(variable1 /= 2);

// Operadores de Incremento/decremento
let variable2 = 3; // incremento/decremento
console.log(1, variable2);
console.log(2, variable2++); 
console.log(3, variable2);
console.log(4, ++variable2);
console.log(5, variable2);
console.log(6, --variable2);
console.log(7, variable2);
console.log(8, variable2--);
console.log(9, variable2);

// Operadores de Comparación
let variable1 = 3;
let variable2 = 5;
console.log(variable1 > variable2); // false
console.log(variable1 < variable2); // true
console.log(variable1 >= variable2); // false
console.log(variable1 <= variable2); // true

let variable1 = 5;
let variable2 = '5';
console.log(variable1 == variable2); // true
console.log(variable1 === variable2); // false
console.log(variable1 != variable2); // false
console.log(variable1 !== variable2); // true

// Operadores Lógicos
// && AND (Multiplicación)
console.log(true && true); // 1 * 1 = 1;
console.log(true && false); // 1 * 0 = 0;

// || OR (Suma)
console.log(false || false); // 0 + 0 = 0;
console.log(true || false); // 1 + 0 = 1;

// ! NOT (Negación)
console.log(!false);
console.log(!true); 