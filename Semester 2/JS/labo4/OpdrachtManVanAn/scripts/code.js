const setup = () => {
}
const tekst = "De man van An geeft geen hand aan ambetante verwanten";
const zoekwoord = "an";

function countOccurrences(method) {
    let count = 0;
    let positie = method === "indexOf" ? tekst.indexOf(zoekwoord) : tekst.lastIndexOf(zoekwoord);

    while (positie !== -1) {
        count++;
        positie = method === "indexOf"
            ? tekst.indexOf(zoekwoord, positie + 1)
            : tekst.lastIndexOf(zoekwoord, positie - 1);
    }

    return count;
}

// Mostrar en la página
document.getElementById("result-indexof").innerText = "Aantal keer 'an' met indexOf: " + countOccurrences("indexOf");
document.getElementById("result-lastindexof").innerText = "Aantal keer 'an' met lastIndexOf: " + countOccurrences("lastIndexOf");

window.addEventListener("load", setup);