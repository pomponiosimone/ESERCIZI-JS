/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log("Esercizio A valore somma 10+20:", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log("Esercizio B numero casuale:", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = { name: "Simone", surname: "Pomponio", age: 20 };
console.log("Esercizio C creazione oggetto", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
const EliminazioneAge = delete me.age;
console.log("Esercizio D eliminazione oggetto:", EliminazioneAge, me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
const skills = [];
me.skills = ["Visual Basic, Javascript, C++"];

console.log("Esercizio E aggiunta array dentro un oggetto:", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Java");
console.log("Eserccizio F aggiunta elemento array:", me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("Esercizio D eliminazione elemento array:", me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  const randomnumber = Math.floor(Math.random() * 6) + 1;
  return randomnumber;
};
console.log("Esercizio 1, numeri casuali da 1 a 6:", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (n, n2) {
  if (n > n2) return n;
  else return n2;
};
const risultato = whoIsBigger(10, 5);
console.log("Esercizio 2, maggiore di due numeri", risultato);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (stringa) {
  const array = [];
  array.push(stringa.split(" "));

  return array;
};
const result = splitMe("Ciao mi chiamo Francesco");
console.log("Esercizio 3 metodo split:", result);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (stringa, booleano) {
  if (booleano === true) return stringa.slice(1);
  else return stringa.slice(0, -1);
};
const delete1 = deleteOne("Università", false);
console.log("Esercizio 4, stringa e booleani:", delete1);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function (stringa) {
  return stringa.replace(/[0-9]?/g, "");
};
const stringaNoNumeri = onlyLetters("Ciao mi Chiamo Matteo ho 15 anni");
console.log("Esercizio 5, togliere numeri dalla stringa:", stringaNoNumeri);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.

/*/ const IsThisAnEmail = function (email) {
  if (email.includes("@") && email.includes(".")) return true;
  else return false;
};
const verificaEmail = IsThisAnEmail("simone@gmail.com");
console.log("Esercizio 6, è un email?:", verificaEmail);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsit = function () {
  const dataCorrente = new Date();
  const giornoSettimana = dataCorrente.getDay();
  let giornoSettimanaString = "";
  switch (giornoSettimana) {
    case 1:
      giornoSettimanaString = "lunedì";
      break;
    case 2:
      giornoSettimanaString = "martedì";
      break;
    case 3:
      giornoSettimanaString = "mercoledì";
      break;
    case 4:
      giornoSettimanaString = "giovedì";
      break;
    case 5:
      giornoSettimanaString = "venerdì";
      break;
    case 6:
      giornoSettimanaString = "sabato";
      break;
    case 0:
      giornoSettimanaString = "domenica";
      break;
  }
  return giornoSettimanaString;
};
console.log("Esercizio 7, giorno della settimana:", whatDayIsit());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }

*/

const rollTheDices = function (numero) {
  return dice(), dice();
};
console.log(rollTheDices(10)); /* non riuscito a completare

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (date) {
  return Math.floor(Date.parse(date) / 86400000);
};
console.log("Esercizio 9 giorni trascorsi:", howManyDays("2024-05-14"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function (giornoCompleanno, meseCompleanno) {
  const data = new Date();
  const giornoCorrente = data.getDate();
  const meseCorrente = data.getMonth() + 1;
  if (giornoCorrente === giornoCompleanno && meseCorrente === meseCompleanno)
    return true;
  else return false;
};

console.log(
  "Esercizio 10, oggi è il tuo compleanno ?",
  isTodayMyBirthday(16, 5)
);
