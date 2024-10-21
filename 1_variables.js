//(const, let y var [ámbito de las variables])
// const
const variable1 = 1;
variable1 = 2;

// var
var variable1 = "afuera";

if (true) {
    var variable1 = "adentro";
    console.log(variable1);
}

console.log(variable1);
  
// let
let variable1 = "afuera";

if (true) {
    let variable1 = "adentro";
    console.log(variable1);
}

console.log(variable1);