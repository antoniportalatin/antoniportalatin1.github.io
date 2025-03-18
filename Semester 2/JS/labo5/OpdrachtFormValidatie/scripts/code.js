const setup = () => {
}
function valideerForm() {
    let geldig = true;

    function toonFout(id, bericht) {
        document.getElementById(id).innerText = bericht;
        document.getElementById(id.replace('error-', '')).classList.add('input-error');
        geldig = false;
    }

    function verwijderFout(id) {
        document.getElementById(id).innerText = '';
        document.getElementById(id.replace('error-', '')).classList.remove('input-error');
        document.getElementById(id.replace('error-', '')).classList.add('input-valid');
    }

    let voornaam = document.getElementById("voornaam").value.trim();
    if (voornaam.length > 30) toonFout("error-voornaam", "Max. 30 karakters");
    else verwijderFout("error-voornaam");

    let familienaam = document.getElementById("familienaam").value.trim();
    if (familienaam === "") toonFout("error-familienaam", "Verplicht veld");
    else if (familienaam.length > 50) toonFout("error-familienaam", "Max. 50 karakters");
    else verwijderFout("error-familienaam");

    let geboortedatum = document.getElementById("geboortedatum").value;
    let datumRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!datumRegex.test(geboortedatum)) toonFout("error-geboortedatum", "Formaat is niet jjjj-mm-dd");
    else verwijderFout("error-geboortedatum");

    let email = document.getElementById("email").value;
    let emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(email)) toonFout("error-email", "Geen geldig email adres");
    else verwijderFout("error-email");

    let aantalKinderen = document.getElementById("aantal-kinderen").value;
    if (aantalKinderen !== "" && (aantalKinderen < 0 || aantalKinderen > 98))
        toonFout("error-aantal-kinderen", "Is geen positief getal");
    else verwijderFout("error-aantal-kinderen");

    if (geldig) alert("Proficiat!");
}
window.addEventListener("load", setup);