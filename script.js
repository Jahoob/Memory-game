const cardArray = [
    {
        name: "fries",
        img: "img/fries.png"
    },
    {
        name: "cheeseburger",
        img: "img/cheeseburger.png"
    },
    {
        name: "ice-cream",
        img: "img/ice-cream.png"
    },
    {
        name: "pizza",
        img: "img/pizza.png"
    },
    {
        name: "milkshake",
        img: "img/milkshake.png"
    },
    {
        name: "hotdog",
        img: "img/hotdog.png"
    },
    {
        name: "fries",
        img: "img/fries.png"
    },
    {
        name: "cheeseburger",
        img: "img/cheeseburger.png"
    },
    {
        name: "ice-cream",
        img: "img/ice-cream.png"
    },
    {
        name: "pizza",
        img: "img/pizza.png"
    },
    {
        name: "milkshake",
        img: "img/milkshake.png"
    },
    {
        name: "hotdog",
        img: "img/hotdog.png"
    },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardChosen = [];
let cardChosenIds = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "img/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard)
        grid.appendChild(card);
    }
}

function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length === 2) {
        setTimeout(() => {
            const cards = document.querySelectorAll("img")
            const optionOneId = cardChosenIds[0];
            const optionTwoId = cardChosenIds[1];

            if (optionOneId === optionTwoId) {
                alert("You have clicked the same image");
                cards[optionOneId].setAttribute("src", "img/blank.png");
                cards[optionTwoId].setAttribute("src", "img/blank.png");
            } else if (cardChosen[0] === cardChosen[1]) {
                alert("You have found a match!");
                cards[optionOneId].setAttribute("src", "img/white.png");
                cards[optionTwoId].setAttribute("src", "img/white.png");
                cards[optionOneId].removeEventListener("click", flipCard);
                cards[optionTwoId].removeEventListener("click", flipCard);
                cardsWon.push(cardChosen);
            } else {
                cards[optionOneId].setAttribute("src", "img/blank.png");
                cards[optionTwoId].setAttribute("src", "img/blank.png");
                alert("Sorry, try again!")
            }
            cardChosen = [];
            cardChosenIds = [];
            resultDisplay.textContent = cardsWon.length;
            if (cardsWon.length === cardArray.length / 2) {
                resultDisplay.textContent = "Congratulations, You have won!"
            }

            console.log(cardChosen);
            console.log(cardsWon);
        }, 500);
    }
}

createBoard();

console.log(cardArray);