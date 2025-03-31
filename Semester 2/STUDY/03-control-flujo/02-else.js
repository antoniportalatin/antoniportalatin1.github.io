// Para que cuando no se ejecuté mi if suceda algo, necesito un Else
let edad = 19;

// Las condiciones se leen de arriba abajo, se ejecuta la primera que se cumpla.
if(edad > 17){
    console.log("Usuario mayor de edad.");
} else if( edad > 13 ){ // Esta es la forma de poner más condiciones sin salirme de mi if-statemnt.
    console.log("Usuario necesita estar acompañado de sus padres.");
} else {
    console.log("Usuario menoor de edad.");
}