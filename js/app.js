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
const hangmanImage = id('hangman-image');
const letterBtn = document.querySelectorAll('#letters button');

startBtn.addEventListener('click', startGame);

function id(str) {
  return document.getElementById(str);
}

function startGame(event) {
  id('result').innerHTML = ``;
  hangmanImage.src = `images/img0.png`;
  startBtn.disabled = true;
  wrongAttempts = 0;
  rightAttempts = 0;

  const paragraph = id('secret-word');
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

for (let i = 0; i < letterBtn.length; i++) {
  letterBtn[i].addEventListener('click', clickLetter);
}

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
  }

  if (wrongAttempts == 7) {
    id('result').innerHTML = `Perdiste, la palabra era ${wordUpper}.`;
    gameOver();
  } else if (rightAttempts == wordUpper.length) {
    id('result').innerHTML = 'GANASTE!!';
    gameOver();
  }

  console.log('La letra ' + letter + ' en la palabra ' + wordUpper + ', ¿existe?: ' + correctLetter);
}

function gameOver() {
  for (let i = 0; i < letterBtn.length; i++) {
    letterBtn[i].disabled = true;
  }

  startBtn.disabled = false;
}

gameOver();
