const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer"); // Obtener el botón
    btnKopieer.addEventListener("click", kopieer); // Asignar evento al botón
};

const kopieer = () => {
    let txtInput = document.getElementById("txtInput"); // Obtener el input
    let txtOutput = document.getElementById("txtOutput"); // Obtener el <p>
    txtOutput.innerHTML = txtInput.value; // Mostrar el texto en el <p>
};

window.addEventListener("load", setup);
