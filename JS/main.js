
// // - Devo andare a generare 5 numeri casuali. 
// //creo variabile bomb 
// let num = "";

// //creo un array di bombe
// let arrayNum = []

// for (let i = 0; arrayNum.length < 5; i++) {
//     num = Math.floor(Math.random() * 100) + 1;
//     //se il numero è già presente --> nun facciamo nulla
//     if (arrayNum.includes(num)) {
//     }
//     //altrimenti viene pushato nell'array
//     else {
//         console.log("Le bombe sono la numero:", num)
//         arrayNum.push(num)
//         console.log(arrayNum)
//     }
// }

// - Generate 5 numeri casuali.

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
            console.log("Le bombe sono la numero:", num)
            arrayNum.push(num)
            console.log(arrayNum)

        }
        document.getElementById("casuale").innerHTML = "Numeri casuali " + arrayNum;
    }
    return arrayNum
}

// - salvare i dati in una variabile.
let numCasuali = casuale() 