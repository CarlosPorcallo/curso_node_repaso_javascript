// Condicionales

let variable1 = 3;
let variable2 = 5;

if (variable1 > variable2) {
    console.log("Condición 1");
} else if (variable1 === variable2) {
    console.log("Condición 2");
} else {
    console.log("Condición 3");
}

let variable1 = "perro";

if (variable1 == "gato") {
    console.log("Tu animal es un gato");
} else if (variable1 == "pez") {
    console.log("Tu animal es un pez");
} else if (variable1 == "gorila") {
    console.log("Tu animal es un gorila");
} else if (variable1 == "perro") {
    console.log("Tu animal es un perro");
} else {
    console.log("No conozco a tu animal.");
}

// Switch
switch(variable1) {
    case 'gato':
        console.log("Tu animal es un gato");
        break;
    case 'pez':
        console.log("Tu animal es un pez");
        break;
    case 'gorila':
        console.log("Tu animal es un gorila");
        break;
    case 'perro':
        console.log("Tu animal es un perro");
        break;
    default:
        console.log("No conozco a tu animal");
        break;
}

// Iteraciones

// while
let lista = [
    {animal: "Perro", nombre: "Scooby"},
    {animal: "Gato", nombre: "Garfield"},
    {animal: "Pez", nombre: "Nemo"}
];

let longitud = lista.length;
let indice = 0;

while (indice < longitud) {
    console.log("Animal: " + lista[indice]["animal"] + ", Nombre: " +  lista[indice]["nombre"] );
    indice++;
}

// for
let lista = [
    {animal: "Perro", nombre: "Scooby"},
    {animal: "Gato", nombre: "Garfield"},
    {animal: "Pez", nombre: "Nemo"}
];

let longitud = lista.length;

for (let indice = 0; indice < longitud; indice++) {
    console.log("Animal: " + lista[indice]["animal"] + ", Nombre: " +  lista[indice]["nombre"] );
}

// for ... of (ES6)

let lista = [
    {animal: "Perro", nombre: "Scooby"},
    {animal: "Gato", nombre: "Garfield"},
    {animal: "Pez", nombre: "Nemo"}
];

for (let elemento of lista) {
    console.log(`Animal: ${elemento.animal}, Nombre: ${elemento.nombre}`);
}

// forEach

let lista = [
    {animal: "Perro", nombre: "Scooby"},
    {animal: "Gato", nombre: "Garfield"},
    {animal: "Pez", nombre: "Nemo"}
];

lista.forEach(function (elemento) {
    console.log(`Animal: ${elemento.animal}, Nombre: ${elemento.nombre}`);
});