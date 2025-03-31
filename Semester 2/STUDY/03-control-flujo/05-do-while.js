// While loop normal
let i = 0;
/*while (i < 3){
    if(i % 2 === 0){
        console.log('Numeros pares', i);
    }
    i++;
}*/
// Do-while lo que hace es primero ejecutar el código y despúes evaluar la condición.
do {
        if(i % 2 === 0){
            console.log('Numeros pares', i);
        }
        i++;
} while (i < 3);