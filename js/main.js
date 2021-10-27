// Mail
// - crea una lista contenente almeno 3 indirizzi email
// - chiedi all’utente la sua email,
// - controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
// - stampa un messaggio appropriato sull’esito del controllo.

const mailList = ['dario.di.cuia@gmail.com', 'boolean@outlook.com', 'array.js@virgilio.it'];

console.log(mailList);
console.log('numero di array', mailList.length)

const email = prompt('Inserisci la tua email').trim();
console.log(email);

let mailFound = false

for(let i = 0; i < mailList.length; i++){
    if(mailList[i] === email){
        mailFound = true
    }

    if(mailFound){
        console.log('email valida');
    } else{
        console.log('email non valida');
    }
}




//GIOCO DEI DADI
const btn = document.querySelector('.gen-btn')
const rand1 = document.querySelector('.gen-random1')
const rand2 = document.querySelector('.gen-random2')
const dadi = document.querySelector('.dadi')

btn.addEventListener('click', function(){
    const rand1 = Math.floor( Math.random()*6 ) + 1;
    console.log(rand1, 'giocatore');
    const rand2 = Math.floor( Math.random()*6 ) + 1;
    console.log(rand2, 'computer');

    if(rand1 > rand2){
        console.log('Hai vinto!');
    } else if(rand2 > rand1){
        console.log('Hai perso!'); 
    } else{
        console.log('I numeri sono pari');
    }
});