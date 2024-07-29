//Creo una funzione che mi permetta di generare un array di 5 numeri con indice da 0 a 4 
function randomNumbers() {
    //creo una variabile numbers che è un array momentaneamente vuoto
    let numbers = [];
    // faccio un ciclo for per generare 5 numeri
    for (let i = 0; i < 5; i++) {
        // all'array numbers pusho un numero casuale-intero.
        // questo numero lo genero tramite le funzioni math floor(numero intero) e random(numero casuale)

        let number = parseInt(Math.floor(Math.random() * 100) + 1);
        //pusho il numero generato all'array numbers
        numbers.push(number);
        // faccio un controllo per non avere numeri uguali all'interno dell'array
        // uso la funzione includes per fare questo controllo
        if (numbers.includes(number)) {
            // se il numero generato è già presente nell'array numbers, non faccio nulla
        } else {
            //genero un nuovo numero e lo pusho in numbers
            numbers.push(number);
            console.log(numbers);
        };
    }
    //recupero l'elemento in pagina e stampo al suo interno i numeri generati casualmente
    //grazie all'onclick nell'input i numeri verranno stampati al click sul bottone
    document.getElementById("casual_numbers").innerHTML = `I numeri casuali sono: ${numbers}`
    // il valore della funzione è l'array adesso pieno

    let nSeconds = 4;
    // funzione per il conto alla rovescia
    setInterval(function () {
        // pero ogni "seconds" se nSeconds è diverso da 0 decrementa di 1
        if (nSeconds != 0) {
            nSeconds--;
            console.log(nSeconds)
        } else {
            // se nSeconds = a 0 allora nascondo i numeri in pagina
            document.getElementById("casual_numbers").innerHTML = ``;
            // sostituisco la stringa
            document.getElementById("casual_numbers").innerHTML = `Mettiti alla prova e scrivi i numeri`;
        }
    }, 1000)
    return numbers;
};


function promptUtente() {
    nPrompt = '';
    array_prompt = [];

    for (let i = 0; array_prompt.length < 5; i++) {
        // chiedo all'utente i numeri per g volte
        // faccio sì che il type of di prompt sia un numero intero
        let prompt_utente = parseInt(prompt("Inserisci il numero"));
        // stampo il type of in console
        console.log(typeof prompt_utente)
        // faccio i controlli
        // se il numero è gia stato inserito nell'array
        if (array_prompt.includes(prompt_utente)) {
            //errore 1 
            alert("ATTENZIONE!! IL NUMERO E' GIA' STATO INSERITO")

            // Uso la funzione isNaN per evitare che l'utente inserisca stringhe e non numeri
        } else if (isNaN(prompt_utente)) {
            // errore 2
            alert("ATTENZIONE!! IL NUMERO NON E' UN NUMERO")
        } else {
            // altrimenti pusho nell'array
            array_prompt.push(prompt_utente)
        }
    }
    return array_prompt
}

function onPage() {
    // Salvo la funzione randomNumber in una variabile
    let array_random = randomNumbers()
    console.log("array_random" + " " + array_random)
    // Variabile d'appoggio
    let array_prompt = ''
    // Uso un setTimeout e lo faccio partire dopo 8 secondi lasciando il tempo di nascondere i numeri casuali
    // Non uso setInterval continerebbe a chiedermi prompt all'infinito
    setTimeout(function () {
      array_prompt = promptUtente();
      console.log("array_prompt"+ " " + array_prompt)
       
    }, 8000)

    //Uso nuovamente un setTimeout che parta dopo 9 secondi dando il tempo all'utente di compilare array_utente e quindi far partire il controllo una volta che ho entrambi gli array
    setTimeout(function(){
        // la funzione every verifica se tutti gli elementi di un array sono presenti in un altro array.
        if(array_random.every((element, index) => element === array_prompt[index])){
            alert("HAI VINTO!")
        } else {
            alert ("HAI PERSO!")
        }
    },9000)
}



