/* Los parametros se escriben dentro de los parentesis de las funciones y sirven para dar datos a una función y
hacerla más flexible. */
function suma(a){
    return a + 2;
}

// Aquí decimos que a = 5 y automáticamente se ejecuta la suma con el valor de 5 en a.
let resultado= suma(5);
console.log(resultado);

// Mi función puede tener más de un parametro
function sumas(a, b){
    return a + b;
}
let resultado2= sumas(5,7);
console.log(resultado2);