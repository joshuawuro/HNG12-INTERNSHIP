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
