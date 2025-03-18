const setup = () => {
}
document.addEventListener("DOMContentLoaded", function() {
    const sldRed = document.getElementById("sldRed");
    const sldGreen = document.getElementById("sldGreen");
    const sldBlue = document.getElementById("sldBlue");

    const lblRed = document.getElementById("lblRed");
    const lblGreen = document.getElementById("lblGreen");
    const lblBlue = document.getElementById("lblBlue");

    const swatch = document.getElementById("swatch");

    function updateColor() {
        const red = sldRed.value;
        const green = sldGreen.value;
        const blue = sldBlue.value;

        lblRed.textContent = red;
        lblGreen.textContent = green;
        lblBlue.textContent = blue;

        swatch.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    sldRed.addEventListener("input", updateColor);
    sldGreen.addEventListener("input", updateColor);
    sldBlue.addEventListener("input", updateColor);

    updateColor(); // Aplicar el color inicial
});


window.addEventListener("load", setup);