const setup = () => {
    let pElement = document.getElementById("txtOutput"); // Obtener el <p>
    let btnElement = document.getElementById("btnWelkom"); // Obtener el botón

    btnElement.addEventListener("click", () => {
        pElement.innerHTML = "Welkom!"; // Cambiar el texto al hacer clic
    });
};

window.addEventListener("load", setup);