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

function generateColorOptions() {
  const options = [targetColor];
  while (options.length < 6) {
    const color = getRandomColor();
    if (!options.includes(color)) options.push(color);
  }
  shuffleArray(options);
  return options;
}

function renderColorOptions() {
  colorOptions.innerHTML = "";
  const options = generateColorOptions();
  options.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.addEventListener("click", () => handleGuess(color));
    colorOptions.appendChild(button);
  });
}

function handleGuess(selectedColor) {
  if (selectedColor === targetColor) {
    correctGuesses++;
    score++;
    showPopup(`Correct!`, "#33FF57", false); // Show "Correct!" popup without retry button
    if (correctGuesses === totalRounds) {
      setTimeout(() => {
        showPopup(`Congratulations! You won!`, "#33FF57", true); // Show win message with retry button
        correctGuesses = 0;
        score = 0;
      }, 1000);
    } else {
      setTimeout(() => {
        targetColor = getRandomColor();
        colorBox.style.backgroundColor = targetColor;
        renderColorOptions();
      }, 1000); // Wait 1 second before showing the next round
    }
  } else {
    showPopup(`Wrong! Try again.`, "#FF5733", true); // Show "Try again" popup with retry button
    score = 0;
    correctGuesses = 0;
  }
  scoreDisplay.textContent = `Score: ${score}`;
}
