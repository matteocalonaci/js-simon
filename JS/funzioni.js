// CREO FUNZIONE PER NUMERI CASUALI CHE NON SI RIPETONO
function casuale() {
    let num = "";
    let arrayNum = []
    for (let i = 0; arrayNum.length < 5; i++) {
        num = Math.floor(Math.random() * 100) + 1;
        //se il numero è già presente --> nun facciamo nulla
        if (arrayNum.includes(num)) {
        }
        //altrimenti viene pushato nell'array
        else {
            console.log("I numeri generati sono:", num)
            arrayNum.push(num)
            console.log(arrayNum)

        }
        document.getElementById("casuale").innerHTML = "Numeri casuali " + arrayNum;
    }
    setInterval(function () {
        //  parte il conto alla rovescia
        if (seconds != 0) {
            console.log(seconds)
            document.getElementById("seconds").innerText = seconds
            seconds--
        } else {
            // allo 0 i numeri sparisconoS
            document.getElementById("casuale").innerText = "Prova ad indovinare i numeri casuali"
            //clearInterval(hideNum)
        }




    }, treSec);

    return arrayNum
}


// CREO FUNZIONE PER PER CHIEDERE I NUM CASUALI TRAMITE PROMPT ALL'UTENTE

// FACCIO PARTIRE I PROMPT DOPO 10 SEC
let numUtente = setTimeout(function () {
    let numPrompt = 0;
    let arrayPrompt = []
    for (let i = 0; arrayPrompt.length < 5; i++) {
        numPrompt = prompt("quali erano i numeri?")
        //se il numero è già presente --> nun facciamo nulla
        if (arrayPrompt.includes(numPrompt)) {
            console.log("C'hai preso")
        }
        //altrimenti viene pushato nell'array
        else {
            arrayPrompt.push(numPrompt)
            console.log(arrayPrompt)

        }
        console.log("Me pare sianooo:", numPrompt)
        document.getElementById("casualeUtente").innerHTML = "Numeri utente " + arrayPrompt;


        console.log("i numeri scelti dall'utente sono:", arrayPrompt)
    }
    return arrayPrompt
}, 10000)







