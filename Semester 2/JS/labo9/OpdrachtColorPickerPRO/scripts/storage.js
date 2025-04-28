

const storeSliderValues = () => {
    document.cookie = "sliderRed=" + document.getElementById("sldRed").value;
    document.cookie = "sliderGreen=" + document.getElementById("sldGreen").value;
    document.cookie = "sliderBlue=" + document.getElementById("sldBlue").value;
};

const restoreSliderValues = () => {
    const cookies = document.cookie.split("; ");
    let values = {};
    for (let c of cookies) {
        let [key, value] = c.split("=");
        values[key] = value;
    }

    if (values.sliderRed) document.getElementById("sldRed").value = values.sliderRed;
    if (values.sliderGreen) document.getElementById("sldGreen").value = values.sliderGreen;
    if (values.sliderBlue) document.getElementById("sldBlue").value = values.sliderBlue;
};

const storeSwatches = () => {
    let swatchDivs = document.getElementById("swatchComponents").getElementsByClassName("swatch");
    let swatches = [];

    for (let s of swatchDivs) {
        let red = s.getAttribute("data-red");
        let green = s.getAttribute("data-green");
        let blue = s.getAttribute("data-blue");
        swatches.push({ red, green, blue });
    }

    document.cookie = "swatches=" + JSON.stringify(swatches);
};

const restoreSwatches = () => {
    const cookies = document.cookie.split("; ");
    let swatches = [];

    for (let c of cookies) {
        let [key, value] = c.split("=");
        if (key === "swatches") {
            swatches = JSON.parse(value);
            break;
        }
    }

    for (let s of swatches) {
        addSwatchComponent(s.red, s.green, s.blue);
    }
};
