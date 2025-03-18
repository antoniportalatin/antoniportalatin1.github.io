let setup = () => {
        let familie = ["familielid1", "familielid2", "familielid3", "familielid4", "familielid5"];

        console.log(familie.length);
        for (let i = 0; i < familie.length; i=i+2) {
                console.log("familielid" + familie[i]);
        }
        voegNaamToe(familie);

        console.log(familie.join(" - "))
}

const voegNaamToe = (leden) =>{
        let naam = prompt("voeg een naam toe");
        leden.push(naam);
        for (let i = 0; i < leden.length; i++) {
                console.log("familielid " + leden[i]);
        }
}

window.addEventListener("load", setup);