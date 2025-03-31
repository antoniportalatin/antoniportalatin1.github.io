// AND, OR, NOT

// AND -> &&
// Las dos condiciones deben cumplirse para que sea true.

/*console.log(true && true);
console.log(false && true);*/
let mayor = false;
let suscrito = true;
console.log('operador AND', mayor && suscrito);

// OR -> ||
// Si uno de las dos condiciones se cumple, será true.
console.log('operador OR', mayor || suscrito);

// NOT -> !
// Invierte el valor de la condición.
console.log('operador NOT', !mayor);

//ej.
let catalogoInfantil = !mayor;