// Creación de un AArray con [] y lo declaramos escribiendo dentro o simplemente dejandolo vacío.
let animales = ['chanchito', 'caballo'];
console.log(animales);

// Para acceder a un dato especifico del Array escribimos [] detrás de la variable y el indice del dato que queremos.
console.log(animales[1]);

// Para añadir datos al Array escribimos el nombre de la variable + [] y dentro el indice siguiente + = y el nuevo dato.
animales[2] = "perrito";
console.log(animales);

/* Si añadimos un animal en una posición aleatoria, se colocará pero al imprimir dirá la cantidad de posiciones que
que estan vacías.*/
animales[7]= "dragón";
console.log(animales);

// El tipo de un Array es Object
console.log(typeof  animales);

console.log(animales.length);