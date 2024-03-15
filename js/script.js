// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.


const gridGame = document.querySelector('.grid');
console.log(gridGame);

for (let i = 1; i <= 100; i++) {
    
    let squareGenerated = squareGenerator(i)

    gridGame.append(squareGenerated);
}

// FUNCTIONS
// La funzione ha lo scopo di generare delle celle chiamate square con numeri all'interno da 1 a 100
// number -> è un numero 
// return: l'elemento div che abbiamo creato a cui abbiamo aggiunto la classe .square con all'interno uno span e dentro lo span l'argomento number
function squareGenerator(number) {
    let squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    squareDiv.innerHTML += `<span>${number}</span>`
    console.log(squareDiv);

    return squareDiv
}

// Click sul pulsante "play" per far comparire la griglia con un display: block
// Creare gli square con numeri da 1 a 100
// Aggiungere gli square con i numeri dentro la griglia
// Al click dell'utente dentro la cella questi colorano di azzurro il bg
// Al click dell'utente viene stampato in console anche il numero corrispondente