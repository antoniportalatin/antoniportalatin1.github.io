// Short-circuit

// FALSO
// - false
// - 0
// - ''                 } FALSY
// - null
// - undefined
// - NaN
let nombre = "Pepe";
let username = nombre || "Anonimo";
console.log(username);

function fn1() {
    console.log("soy función 1");
    return true;
}
function fn2() {
    console.log("soy función 2");
    return true;
}

let x = fn1() && fn2();