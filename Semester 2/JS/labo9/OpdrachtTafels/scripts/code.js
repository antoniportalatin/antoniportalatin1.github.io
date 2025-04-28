const setup = () => {
    let goButton = document.getElementById("goButton");
    let numberInput = document.getElementById("numberInput");
    let tableCont = document.getElementById("tableCont");

    goButton.addEventListener("click", function() {
        //container leegmaken voor nieuwe resultaten

        //tableCont.innerHTML = '';

        //juiste nummer
        let number = parseInt(numberInput.value);
        if (isNaN(number)){
            alert("Voer een geldig nummer in.");
            return;
        }

        //hoofd div maken
        let tableDiv = document.createElement("div");
        tableDiv.classList.add("table"); //CSS

        //header aanmaken
        let now = new Date();
        let timeString = now.toLocaleTimeString();
        let header = document.createElement("div");
        header.classList.add("table-header");
        header.textContent = `Tafel van ${number} aangemaakt op: ${timeString}`;
        tableDiv.appendChild(header);


        //De tafel maken en weergeven
        for (let i = 1; i <= 10; i++) {
            let row = document.createElement("div");
            row.classList.add("table-row");

            if (i % 2 === 0) {
                row.classList.add("even"); // rij par -> grijs achtergrond
            }

            row.textContent = `${number} x ${i} = ${number * i}`;
            tableDiv.appendChild(row);

            tableCont.appendChild(tableDiv);
        }
    });
}

window.addEventListener("load", setup);