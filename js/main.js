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

const email = prompt('Inserisci la tua email') ;
console.log(email);

// if( (email < 0) || (email < mailList.length) ){
//     console.log("L'email inserita è valida");
// } else{
//     console.log("l'email inserita non è valida");
// }

for(let i = 0; i < mailList.length; i++){
    if(email == mailList[i]){
        console.log('email valida');
    } else if(email != mailList[i]){
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
    } else{
        console.log('Hai perso!'); 
    }
});