const setup = () => {
    let element = document.createElement("p");
    element.setAttribute("class", "color");
    element.setAttribute("id", "txtPar");

    let textNode = document.createTextNode("Hello world!");
    element.append(textNode);
    document.querySelector("#MyDiv").appendChild(element);
}
window.addEventListener("load", setup);