// Global variables

let word;
let wrongAttempts = 0;
let rightAttempts = 0;
let words = [
  'MAMA',
  'PAPA',
  'ABUELA',
  'ABUELO',
  'GUILLE',
  'PABLIN',
  'IREN',
  'CHELO',
  'MARI',
  'ESTA',
  'CATA',
  'MANU',
  'BELTRANITO',
  'TERE',
  'TITO',
  'PRINCESA',
  'DINOSAURIO',
  'CUMPLEAÑOS',
  'MENDOZA',
  'ARGENTINA',
  'LOLA',
  'MARGUI',
  'LAASKA',
  'PERRO',
  'GATO',
  'JIRAFA',
  'ELEFANTE',
  'TRICERATOPS',
  'TIRANOSAURIO',
  'FROZEN',
  'BUHO',
  'HELADO',
  'ESCUELA',
  'AMIGOS',
  'ASADO',
  'MUSICA',
  'EMPANADAS',
  'RELOJ',
  'TELEFONO',
  'ZAPATILLAS',
  'PELOTA',
  'FUTBOL',
  'MESSI',
];

const startBtn = document.getElementById('start');
const newWordBtn = document.querySelector('.new-word');
const hangmanImage = id('hangman-image');
const letterBtn = document.querySelectorAll('#letters button');
let paragraph;

// Call to action when user clicks "Iniciar Juego", the game starts!
startBtn.addEventListener('click', startGame);
newWordBtn.addEventListener('click', giveUp);

// Function to look for an element by its Id
function id(str) {
  return document.getElementById(str);
}

// Function to start the game
function startGame(event) {
  startBtn.innerHTML = 'Iniciar juego';
  id('result').innerHTML = ``;
  hangmanImage.src = `images/img0.png`;
  startBtn.disabled = true;
  startBtn.style.backgroundColor = '#ad9da8';
  newWordBtn.innerHTML = 'Desistir';
  newWordBtn.style.backgroundColor = '#77719a';

  wrongAttempts = 0;
  rightAttempts = 0;

  paragraph = id('secret-word');
  paragraph.innerHTML = '';

  word = words[Math.floor(Math.random() * words.length)];
  console.log(word);

  const amountUnderlines = word.length;

  for (let i = 0; i < letterBtn.length; i++) {
    letterBtn[i].disabled = false;
  }

  for (let i = 0; i < amountUnderlines; i++) {
    const span = document.createElement('span');
    paragraph.appendChild(span);
  }
}

// Function to give up a game
function giveUp(event) {
  newWordBtn.innerHTML = 'Agregar nueva palabra';
  startBtn.disabled = false;
  startBtn.style.backgroundColor = '#9c6b8a';
  paragraph.innerHTML = '';
}

// Listening when the user clicks a letter
for (let i = 0; i < letterBtn.length; i++) {
  letterBtn[i].addEventListener('click', clickLetter);
}

// Call to action: fill the empty space if the letter is correct and update counter and image. Show a message at the end of the game
function clickLetter(event) {
  const spans = document.querySelectorAll('#secret-word span');
  const button = event.target;
  button.disabled = true;
  const letter = button.innerHTML.toUpperCase();
  const wordUpper = word.toUpperCase();

  let correctLetter = false;
  for (let i = 0; i < wordUpper.length; i++) {
    if (letter == wordUpper[i]) {
      spans[i].innerHTML = letter;
      rightAttempts++;
      correctLetter = true;
    }
  }

  if (correctLetter == false) {
    wrongAttempts++;
    const source = `images/img${wrongAttempts}.png`;

    hangmanImage.src = source;

    // Write the wrong letter under the secret word
    const wrongLetter = document.getElementById('wrong-letter');
    const spanWrongLetter = document.createElement('span');
    wrongLetter.appendChild(spanWrongLetter).innerHTML = letter;
  }

  if (wrongAttempts == 7) {
    id('result').innerHTML = `Perdiste 🥺 la palabra era ${wordUpper}.`;

    startBtn.innerHTML = 'Nuevo juego';
    startBtn.style.backgroundColor = '#9c6b8a';

    newWordBtn.innerHTML = 'Agregar nueva palabra';
    newWordBtn.style.backgroundColor = '#9ea8ba';
    gameOver();
  } else if (rightAttempts == wordUpper.length) {
    id('result').innerHTML = 'GANASTE!! 🥳';

    startBtn.innerHTML = 'Nuevo juego';
    startBtn.style.backgroundColor = '#9c6b8a';
    gameOver();
  }
}

// Function to enable/disable letters and Start button
function gameOver() {
  for (let i = 0; i < letterBtn.length; i++) {
    letterBtn[i].disabled = true;
  }

  startBtn.disabled = false;
}

gameOver();

// Function to add a word to the words array
// function addWord(str) {

//   if(str === )
// }
