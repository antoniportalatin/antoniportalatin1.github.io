const setup = () => {
    let pElement = document.getElementById("txtOutput"); // Obtener el elemento <p>
    pElement.innerHTML = "Welkom!"; // Cambiar el contenido del párrafo
};

window.addEventListener("load", setup);
