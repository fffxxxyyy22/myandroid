const alphabetWords = {
  A: "Apple", B: "Ball", C: "Cat", D: "Dog", E: "Elephant", F: "Fish",
  G: "Goat", H: "Hat", I: "Ice Cream", J: "Jug", K: "Kite", L: "Lion",
  M: "Monkey", N: "Nest", O: "Orange", P: "Parrot", Q: "Queen", R: "Rabbit",
  S: "Sun", T: "Tiger", U: "Umbrella", V: "Violin", W: "Watch", X: "Xylophone",
  Y: "Yacht", Z: "Zebra"
};

const grid = document.getElementById("alphabetGrid");
const img = document.getElementById("letterImage");
const caption = document.getElementById("caption");

for (let code = 65; code <= 90; code++) {
  const letter = String.fromCharCode(code);
  const div = document.createElement("div");
  div.className = "box";
  div.id = `box-${letter}`;
  div.textContent = letter;
  div.onclick = () => handleLetter(letter);
  grid.appendChild(div);
}

function handleLetter(letter) {
  if (!alphabetWords[letter]) return;
  speak(letter);
  animate(letter);
  showImage(letter);
}

function speak(letter) {
  const word = alphabetWords[letter];
  const utter = new SpeechSynthesisUtterance(`${letter} for ${word}`);
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function animate(letter) {
  const box = document.getElementById(`box-${letter}`);
  box.classList.remove("zoom");
  void box.offsetWidth;
  box.classList.add("zoom");
}

function showImage(letter) {
  img.src = `images/${letter}.png`;
  img.alt = `${letter} for ${alphabetWords[letter]}`;
  img.style.display = "block";
  caption.textContent = `${letter} for ${alphabetWords[letter]}`;
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (alphabetWords[key]) {
    handleLetter(key);
  }
});