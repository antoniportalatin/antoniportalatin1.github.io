const setup = () => {
}
const maakMetSpaties = (inputText) => {
    return inputText.split('').join(' ');
};
function toonInConsole() {
    let inputText = document.getElementById("userInput").value;
    let resultaat = maakMetSpaties(inputText);
    console.log(resultaat);
}
window.addEventListener("load", setup);