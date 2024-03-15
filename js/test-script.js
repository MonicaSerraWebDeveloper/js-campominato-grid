
const gridGame = document.querySelector('.grid');
const playStartTheGame = document.querySelector('.btn');

const mySelect = document.getElementById('livello').value;
console.log(mySelect);

playStartTheGame.addEventListener('click', function () {
    gridGame.style.display = 'flex'
    for (let i = 1; i <= 100; i++) {
        
        let squareGenerated = squareGenerator(i)
    
        gridGame.append(squareGenerated);

        squareGenerated.addEventListener('click', function() {
            this.classList.toggle('square-blue')
            console.log(i);
        })
    }
});

// FUNCTIONS
// La funzione ha lo scopo di generare delle celle chiamate square con numeri all'interno da 1 a 100
// number -> è un numero 
// return: l'elemento div che abbiamo creato a cui abbiamo aggiunto la classe .square con all'interno uno span e dentro lo span l'argomento number

function squareGenerator(number) {
    let squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    squareDiv.innerHTML += `<span>${number}</span>`
    return squareDiv
}


// Funzione per generare un numero diverso di celle in base alla difficoltà di livello selezionata
// numberCells -> un numero 
// return: ritorna il numero di celle in base alla difficolta scelta nell'input select
let howManyCells = difficultyLevel (mySelect)
console.log(howManyCells);

function difficultyLevel (input) {
    let numberCells;
    if (input === 'easy') {
        numberCells = 100;
    } else if (input === 'medium') {
        numberCells = 81;
    } else if (input === 'hard') {
        numberCells = 49;
    }
    console.log(numberCells);
}

