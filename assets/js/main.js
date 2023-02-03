let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

const inputPrint = document.querySelector('#print')
const buttonPrint = document.querySelector('#btn-print')
const inputPush = document.querySelector('#push')
const buttonPush = document.querySelector('#btn-push')

// Speichert das Value im Input als Variable, und gibt das äquivalente Index in der Konsole aus
function printElement() {
    let i = inputPrint.value
    console.log(words[i]);
}

// Speichert das Value im Input als Variable, und pusht es in unseren String
function pushElement() {
    let elem = inputPush.value
    words.push(elem)
    console.log(words);
}
buttonPrint.addEventListener('click', printElement)
buttonPush.addEventListener('click', pushElement)