const setup = () => {
    console.log("✅ Juego iniciado...");

    const images = [
        'kaart1.png', 'kaart2.png', 'kaart3.png',
        'kaart4.png', 'kaart5.png', 'kaart6.png'
    ];

    let cards = [...images, ...images].sort(() => Math.random() - 0.5);
    let firstCard = null, secondCard = null, lockBoard = false;

    const board = document.getElementById('gameBoard');
    if (!board) {
        console.error("❌ Error: No se encontró el elemento #gameBoard");
        return;
    }

    function createBoard() {
        board.innerHTML = "";  // Limpia el tablero
        cards.forEach(img => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.dataset.image = img;
            card.style.backgroundImage = "url('images/achterkant.png')";
            card.addEventListener('click', flipCard);
            board.appendChild(card);
        });
        console.log("✅ Tablero creado con éxito.");
    }

    function flipCard() {
        if (lockBoard || this === firstCard || this.classList.contains('matched')) return;

        this.style.backgroundImage = `url('images/${this.dataset.image}')`;

        if (!firstCard) {
            firstCard = this;
        } else {
            secondCard = this;
            lockBoard = true;
            checkMatch();
        }
    }

    function checkMatch() {
        if (firstCard.dataset.image === secondCard.dataset.image) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            console.log(`✅ Match found: ${firstCard.dataset.image}`);
            resetBoard();
        } else {
            console.log(`❌ No : ${firstCard.dataset.image} vs ${secondCard.dataset.image}`);
            setTimeout(() => {
                firstCard.style.backgroundImage = "url('images/achterkant.png')";
                secondCard.style.backgroundImage = "url('images/achterkant.png')";
                resetBoard();
            }, 1000);
        }
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
        if (document.querySelectorAll('.matched').length === cards.length) {
            setTimeout(() => alert('You Win! 🎉'), 500);
        }
    }

    createBoard();
};

window.addEventListener("load", setup);
