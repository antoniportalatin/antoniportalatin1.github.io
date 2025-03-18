const setup = () => {
}
function replaceDeWithHet(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "de") {
            words[i] = "het";
        }
        console.log(words.slice(0, i + 1).join(" "));
    }
    return words.join(" ");
}

function processText() {
    let text = document.getElementById("inputText").innerText;
    let result = replaceDeWithHet(text);
    document.getElementById("outputText").innerText = "Eindresultaat: " + result;
}
window.addEventListener("load", setup);