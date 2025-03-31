const setup = () => {
    let playField = document.getElementById("playField");

    // Crear la imagen
    let img = document.createElement("img");
    img.id = "target";
    playField.appendChild(img);

    let scoreDisplay = document.getElementById("score");
    let imageCount = 5;
    let moveDelay = 1250;
    let score = 0;
    let gameInterval;

    const getRandomPosition = () => {
        let x = Math.floor(Math.random() * (600 - 48));
        let y = Math.floor(Math.random() * (800 - 48)); // Corregido el límite de altura
        return { x, y };
    };

    const changeImage = () => {
        let randomIndex = Math.floor(Math.random() * imageCount);
        img.src = "images/" + randomIndex + ".png";

        let pos = getRandomPosition();
        img.style.left = pos.x + "px";
        img.style.top = pos.y + "px";

        img.onclick = () => {
            if (randomIndex === 0) {
                alert("Boom! Game Over.");
                clearInterval(gameInterval);
            } else {
                score++;
                scoreDisplay.textContent = score;
            }
        };
    };

    window.startGame = () => {
        score = 0;
        scoreDisplay.textContent = 0;
        clearInterval(gameInterval);
        gameInterval = setInterval(changeImage, moveDelay);
        changeImage();
    };
};

window.addEventListener("load", setup);
