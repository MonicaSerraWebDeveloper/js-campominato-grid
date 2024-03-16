// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.


const gridGame = document.querySelector('.grid');
const gridGameMedium = document.querySelector('.grid-medium');
const gridGameHard = document.querySelector('.grid-hard');

const playStartTheGame = document.querySelector('.btn');

playStartTheGame.addEventListener('click', function () {
    const mySelect = document.querySelector('#livello').value;
    console.log(mySelect);
    if (mySelect === 'easy') { 
        gridGame.style.display = 'flex'
        gridGameHard.style.display = 'none'
        gridGameMedium.style.display = 'none'

        for (let i = 1; i <= 100; i++) {
    
            let squareGenerated = squareGenerator(i, mySelect)
          
            gridGame.append(squareGenerated);
        
            squareGenerated.addEventListener('click', function() {
                this.classList.toggle('square-blue')
                console.log(i);
            })
        } 
    } else if (mySelect === 'medium') {
        gridGameMedium.style.display = 'flex'
        gridGame.style.display = 'none'
        gridGameHard.style.display = 'none'

        for (let i = 1; i <= 81; i++) {
    
            let squareGenerated = squareGenerator(i, mySelect)
          
            gridGameMedium.append(squareGenerated);
        
            squareGenerated.addEventListener('click', function() {
                this.classList.toggle('square-blue')
                console.log(i);
            })
        } 
    } else if (mySelect === 'hard') {
        gridGameHard.style.display = 'flex'
        gridGameMedium.style.display = 'none'
        gridGame.style.display = 'none'

        for (let i = 1; i <= 49; i++) {
    
            let squareGenerated = squareGenerator(i, mySelect)
          
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
function squareGenerator(number, option) {
    let squareDiv = document.createElement('div');
    if (option === 'easy') {
        squareDiv.classList.add('square');
        squareDiv.classList.remove('square-medium');
        squareDiv.classList.remove('square-hard');
    } else if (option === 'medium') {
        squareDiv.classList.remove('square');
        squareDiv.classList.add('square-medium');
        squareDiv.classList.remove('square-hard');
    }else if (option === 'hard') {
        squareDiv.classList.remove('square');
        squareDiv.classList.remove('square-medium');
        squareDiv.classList.add('square-hard');
    }
    squareDiv.innerHTML += `<span>${number}</span>`
    return squareDiv
}


// Funzione per generare un numero diverso di celle in base alla difficoltà di livello selezionata
// numberCells -> un numero 
// return: ritorna il numero di celle in base alla difficolta scelta nell'input select
function difficultyLevel (input) {
    let numberCells;
    if (input === 'easy') {
        numberCells = 100;
    } else if (input === 'medium') {
        numberCells = 81;
    } else if (input === 'hard') {
        numberCells = 49;
    }
    return numberCells
}


// Click sul pulsante "play" per far comparire la griglia con un display: block
// Creare gli square con numeri da 1 a 100
// Aggiungere gli square con i numeri dentro la griglia
// Al click dell'utente dentro la cella questi colorano di azzurro il bg
// Al click dell'utente viene stampato in console anche il numero corrispondente