const setup = () => {
}
function vraagGemeenten() {
    let gemeenten = [];
    let invoer;

    while (true) {
        invoer = prompt("Gemeente:");
        if (invoer === null || invoer.toLowerCase() === "stop") break;
        if (invoer.trim() !== "") gemeenten.push(invoer.trim());
    }

    gemeenten.sort();
    toonGemeenten(gemeenten);
}

function toonGemeenten(lijst) {
    let select = document.getElementById("gemeenten");
    select.innerHTML = "";
    lijst.forEach(gemeente => {
        let optie = document.createElement("option");
        optie.textContent = gemeente;
        select.appendChild(optie);
    });
}
window.addEventListener("load", setup);