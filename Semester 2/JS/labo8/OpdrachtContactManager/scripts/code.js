const setup = () => {
    let personen = [];

    const bewaarBewerktePersoon = () => {
        console.log("Klik op de knop bewaar");

        valideer();

        let voornaam = document.getElementById("txtVoornaam").value.trim();
        let familienaam = document.getElementById("txtFamilienaam").value.trim();
        let geboorteDatum = document.getElementById("txtGeboorteDatum").value.trim();
        let email = document.getElementById("txtEmail").value.trim();
        let aantalKinderen = document.getElementById("txtAantalKinderen").value.trim();

        // Controleer of er geen fouten zijn voordat u opslaat
        if (document.querySelectorAll(".invalid").length > 0) {
            return;
        }

        let persoon = {
            voornaam: voornaam,
            familienaam: familienaam,
            geboorteDatum: geboorteDatum,
            email: email,
            aantalKinderen: aantalKinderen
        };

        personen.push(persoon);
        updatePersonenLijst();
    };

    const updatePersonenLijst = () => {
        let lstPersonen = document.getElementById("lstPersonen");
        lstPersonen.innerHTML = ""; // Lijst leegmaken

        personen.forEach((persoon, index) => {
            let option = document.createElement("option");
            option.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
            option.value = index;
            lstPersonen.appendChild(option);
        });
    };

    const bewerkNieuwePersoon = () => {
        console.log("Klik op de knop nieuw");
        document.getElementById("txtVoornaam").value = "";
        document.getElementById("txtFamilienaam").value = "";
        document.getElementById("txtGeboorteDatum").value = "";
        document.getElementById("txtEmail").value = "";
        document.getElementById("txtAantalKinderen").value = "";
        clearAllErrors();
    };

    // Functie om gegevens van geselecteerde persoon te tonen
    const laadGeselecteerdePersoon = () => {
        let lstPersonen = document.getElementById("lstPersonen");
        let selectedIndex = lstPersonen.value; // Geselecterde index

        if (selectedIndex !== "" && personen[selectedIndex]) {
            let persoon = personen[selectedIndex];
            document.getElementById("txtVoornaam").value = persoon.voornaam;
            document.getElementById("txtFamilienaam").value = persoon.familienaam;
            document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
            document.getElementById("txtEmail").value = persoon.email;
            document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
        }
    };

    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("lstPersonen").addEventListener("change", laadGeselecteerdePersoon);
};

window.addEventListener("load", setup);
