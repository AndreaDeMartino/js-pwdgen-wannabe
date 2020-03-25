// Check Funzionamento import script
console.log('Ciao umano, mi hai importato correttamente!!');

// Chiedere all’utente il suo nome e poi memorizzarlo
var userName = prompt("Quale è il tuo nome?");
console.log(userName);

// Chiedere poi il suo cognome e memorizzarlo
var userSurname = prompt("Quale è il tuo cognome?");
console.log(userSurname);

// Chiedere poi il suo colore preferito e memorizzarlo
var userColor = prompt ("Quale è il tuo colore preferito?");
console.log(userColor);
// Infine scrivere nella pagina le informazioni ottenuti dall’utente, nel formato: nomecognomecolorepreferito20

document.getElementById('userAnsware').innerHTML = (userName + userSurname + userColor);
