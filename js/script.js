// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.


const gridGame = document.querySelector('.grid');
const gridGameMedium = document.querySelector('.grid-medium');
const gridGameHard = document.querySelector('.grid-hard');


const mySelect = document.querySelector('.select');

let myOptions =  '';
mySelect.addEventListener('change', function() {
    myOptions = this.value
})

const playStartTheGame = document.querySelector('.btn');

playStartTheGame.addEventListener('click', function () {
    if (myOptions === 'easy') { 
        gridGame.style.display = 'flex'
        gridGameHard.style.display = 'none'
        gridGameMedium.style.display = 'none'

        for (let i = 1; i <= 100; i++) {
    
            let squareGenerated = squareGenerator(i)
          
            gridGame.append(squareGenerated);
        
            squareGenerated.addEventListener('click', function() {
                this.classList.toggle('square-blue')
                console.log(i);
            })
        } 
    } else if (myOptions === 'medium') {
        gridGameMedium.style.display = 'flex'
        gridGame.style.display = 'none'
        gridGameHard.style.display = 'none'

        for (let m = 1; m <= 81; m++) {
    
            let squareGenerated = squareGenerator(m)
          
            gridGameMedium.append(squareGenerated);
        
            squareGenerated.addEventListener('click', function() {
                this.classList.toggle('square-blue')
                console.log(i);
            })
        } 
    } else if (myOptions === 'hard') {
        gridGameHard.style.display = 'flex'
        gridGameMedium.style.display = 'none'
        gridGame.style.display = 'none'

        for (let i = 1; i <= 49; i++) {
    
            let squareGenerated = squareGenerator(i)
          
            gridGameHard.append(squareGenerated);
        
            squareGenerated.addEventListener('click', function() {
                this.classList.toggle('square-blue')
                console.log(i);
            })
        } 
    }
 
});



// FUNCTIONS
// La funzione ha lo scopo di generare delle celle chiamate square con numeri all'interno da 1 a 100
// number -> è un numero 
// return: l'elemento div che abbiamo creato a cui abbiamo aggiunto la classe .square con all'interno uno span e dentro lo span l'argomento number
function squareGenerator(number) {
    let squareDiv = document.createElement('div');
    squareDiv.classList.add('square-hard');
    squareDiv.innerHTML += `<span>${number}</span>`
    return squareDiv
}

// Click sul pulsante "play" per far comparire la griglia con un display: block
// Creare gli square con numeri da 1 a 100
// Aggiungere gli square con i numeri dentro la griglia
// Al click dell'utente dentro la cella questi colorano di azzurro il bg
// Al click dell'utente viene stampato in console anche il numero corrispondente