// Mail
// - crea una lista contenente almeno 3 indirizzi email
// - chiedi all’utente la sua email,
// - controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
// - stampa un messaggio appropriato sull’esito del controllo.

const mailList = ['dario.di.cuia@gmail.com', 'boolean@outlook.com', 'array.js@virgilio.it'];

// mailList[0]
// mailList[1]
// mailList[2]

console.log(mailList);
console.log('numero di array', mailList.length)

const email = parseInt ( prompt('Inserisci la tua email') );
console.log(email);

if( (email < 0) || (email < mailList.length) ){
    console.log("L'email inserita è valida");
} else{
    console.log("l'email inserita non è valida");
}