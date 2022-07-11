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

// pickRandomWord();
// function pickRandomWord() {
//   let word = words[Math.floor(Math.random() * words.length)];
//   console.log(word);

//   let secretWord = word;
//   return secretWord;
// }

let word = words[Math.floor(Math.random() * words.length)];
console.log(word);

const wordWithUnderlines = word.replace(/./g, '_ ');

alert(word + ' - ' + wordWithUnderlines);

const start = document.querySelector('#start');
console.log(start);
start.addEventListener('click', (e) => {
  console.log(e.target);
});
