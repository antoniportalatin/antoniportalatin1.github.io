document.addEventListener("DOMContentLoaded", function() {
    const sldRed = document.getElementById("sldRed");
    const sldGreen = document.getElementById("sldGreen");
    const sldBlue = document.getElementById("sldBlue");

    const lblRed = document.getElementById("lblRed");
    const lblGreen = document.getElementById("lblGreen");
    const lblBlue = document.getElementById("lblBlue");

    const swatch = document.getElementById("swatch");
    const btnToon = document.getElementById("btnToon");

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

    updateColor();

    btnToon.addEventListener("click", function() {
        const red = sldRed.value;
        const green = sldGreen.value;
        const blue = sldBlue.value;

        let newSwatch = document.createElement("div");
        newSwatch.classList.add("saveSwatch");
        newSwatch.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        // Botón de eliminar
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "X";

        // Evento para eliminar el swatch
        removeBtn.addEventListener("click", function() {
            newSwatch.remove(); // Ahora elimina correctamente el swatch
        });

        newSwatch.appendChild(removeBtn);

        let swatchContainer = document.querySelector(".saveSwatchContainer");

        if (!swatchContainer) {
            swatchContainer = document.createElement("div");
            swatchContainer.classList.add("saveSwatchContainer");
            document.body.appendChild(swatchContainer);
        }

        swatchContainer.appendChild(newSwatch);
    });
});
