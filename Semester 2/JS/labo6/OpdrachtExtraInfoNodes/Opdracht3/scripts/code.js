const setup = () => {
    //button maken
    let button = document.getElementById("myButton");
    button.addEventListener("click", () => {
    // nieuw <p> maken
    let newP = document.createElement("p");
    //text van <p>
    newP.textContent = "This is a new paragraph inside the DIV.";
    //
    document.getElementById("myDIV").appendChild(newP);
    });
};
window.addEventListener("load", setup);