const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    // dag van de week
    console.log((start.getDay()));

    // maand
    console.log((start.getMonth() + 1));

    // jaar
    console.log((start.getFullYear()))

    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2025, 0, 1);
    console.log(datum);

    let event = new Date();
    console.log("toString " + event.toString());

    //geen rekening houden met tijdzone
    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());



    //Hoeveel dagen ik leef
    let birth = new Date(2001, 2, 15);
    console.log(birth);

    console.log("aantal dagen: " + (event - birth)/(1000*60*60*24));
}

window.addEventListener("load", setup);