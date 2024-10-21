// Cambio dinámico de tipo

let variable1 = 1.2
console.log(variable1);
console.log(typeof(variable1))

variable1 = "ahora cambie de valor" 
console.log(variable1);
console.log(typeof(variable1))

// Parseo o Cambio Explícito del tipo

let variable1 = 1;
let variable2 = "2";
console.log(variable1 + variable2);
console.log(variable1 + parseInt(variable2));
console.log(variable1.toString() + variable2);