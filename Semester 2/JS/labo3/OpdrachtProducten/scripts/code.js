const setup = () => {
}
function herbereken() {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwTarieven = document.getElementsByClassName("btw");
    let subtotals = document.getElementsByClassName("subtotaal");
    let totaalElement = document.getElementById("totaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].innerText.replace(" Eur", ""));
        let aantal = parseInt(aantallen[i].value);
        let btw = parseFloat(btwTarieven[i].innerText.replace("%", "")) / 100;

        let subtotaal = (prijs * aantal) * (1 + btw);
        subtotals[i].innerText = subtotaal.toFixed(2) + " Eur";

        totaal += subtotaal;
    }

    totaalElement.innerText = totaal.toFixed(2) + " Eur";
}

window.addEventListener("load", setup);