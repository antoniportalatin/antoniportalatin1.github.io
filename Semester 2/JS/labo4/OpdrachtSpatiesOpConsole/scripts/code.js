const setup = () => {
}
function printWithSpaces() {
    let inputText = document.getElementById("userInput").value;
    let spacedText = inputText.split('').join(' ');
    console.log(spacedText);}
window.addEventListener("load", setup);