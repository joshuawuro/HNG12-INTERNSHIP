const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelector(".color-options");
const scoreDisplay = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');
const popupCard = document.querySelector(".popup-card");
const popupMessage = document.querySelector(".popup-message");
const closePopup = document.querySelector(".close-popup");
const retryButton = document.querySelector(".retry-button");

let targetColor;
let score = 0;
let correctGuesses = 0;
const totalRounds = 10;

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5",
  "#FFC300",
  "#C70039",
  "#900C3F",
  "#581845",
  "#1A5276",
  "#1E8449",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
