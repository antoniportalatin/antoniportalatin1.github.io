const setup = () => {
    //selecting node
    let p = document.getElementById('para');
    //get node name and node type
    console.log(p.nodeName, p.nodeType);    // p,1  (CONSOLE)

    console.log(p.firstChild.nodeName, p.firstChild.nodeType);     // #text, 3 (CONSOLE)

    console.log(p.firstElementChild, p.firstElementChild.nodeType);     // <span>child</span>, 1 (CONSOLE)

    console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType);      // p, 1 (CONSOLE)

}
window.addEventListener("load", setup);