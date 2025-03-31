// While se usa para crear un bucle que se mantendrá mientras la condición sea verdadera.
let i = 0;
/* Como i es 0, es menor que 10, entonces se ejecuta el codigo debajo del while que imprime el valor de i y luego
aumenta el valor de i +1, asi cada iteración mientras i sea menor que 10 (la condición)*/

// Cuáles son los números pares?
while (i < 10){
    if(i % 2 === 0){ // Dentro del while creamos un if que controla si los restos del número i son igual a 0, si es
        // asi, es par.
        console.log('Numeros pares', i);
    }
    i++;
}

console.log('Fuera del while.');