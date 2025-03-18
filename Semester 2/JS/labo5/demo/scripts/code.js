const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", change)
}
const change = () => {
    let photo = document.getElementById("imgPhoto");
    photo.src = "./images/astronaut.jpg";
    photo.alt = "astronaut";
    photo.className = "sizePhoto";
    document.getElementById("txtText").innerHTML = "School of Astronauts";
}
window.addEventListener("load", setup);