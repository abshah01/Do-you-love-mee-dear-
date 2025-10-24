const questionContainer = document.getElementById("questionContainer");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");
const gifResult = document.getElementById("gifResult");

// Function to make "No" button run away when hovered or clicked
function moveNoButton() {
  const maxX = questionContainer.offsetWidth - noBtn.offsetWidth;
  const maxY = questionContainer.offsetHeight - noBtn.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton); // just in case someone’s fast 😄

// When Yes button is clicked
yesBtn.addEventListener("click", () => {
  heartLoader.style.display = "block";
  setTimeout(() => {
    heartLoader.style.display = "none";
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000);
});
