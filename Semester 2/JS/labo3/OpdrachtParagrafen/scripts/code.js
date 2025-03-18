const setup = () => {
}
// Selecteer alle elemente met class "belangrijk"
let belangrijkElementen =document.querySelectorAll('.belangrijk');

// Voeg de class "opvallend" toe aan elk gevonden element
belangrijkElementen.forEach(element => {
    element.className += " opvallend"; // Voeg de nieuwe class toe zonder overschrijven
});
window.addEventListener("load", setup);