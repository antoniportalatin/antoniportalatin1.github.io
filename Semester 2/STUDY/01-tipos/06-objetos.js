// Personaje de TV
let nombre= "Tanjiro";
let anime= "Kimetsu no Yaiba"
let edad= 16;

// Creación de objeto con {} y declaración de esta misma con llave + : y el valor.
let personaje= {
    nombre: "Tanjiro",
    anime: "Kimetsu no Yaiba",
    edad: 16,
};

console.log(personaje);

// Formas de acceder a información especifica del objeto, con '.' + la llave. Con [] y dentro la llave entre comillas.
console.log(personaje.nombre);
console.log(personaje["anime"]);

// Para modificar la información del objeto: Con el nombre del objeto + '.' podemos modificar.
personaje.edad = 14;
// Para modificar la información del objeto: Con el nombre del objeto + [] y dentro la llave entre comillas, podemos modificar.
personaje['edad']= 16;
// Con '.' se usa más, pero son las dos igual de buenas.

// Para eliminar algo de un objeto usamos la palabra reservada 'delete' + nombre de objeto + '.' + lo que queremos eliminar.
delete personaje.anime;
console.log(personaje);