/* El orden en el cual se ejecutaran las operadores, ya sean matematicos, logicos,... tienen su propio orden de
ejecución por ende si necesito especificar el orden en el que se ejecutarán, debo agregar () alrededor de la operación
 que quiero que se ejecute primero.*/
let resultado = 8/2*(2+2);
console.log(resultado); // resultado: 16
let resultado2 = 8/(2*(2+2));
console.log(resultado2); // resultado: 1