
const gridGame = document.querySelector('.grid');
const playStartTheGame = document.querySelector('.btn');

playStartTheGame.addEventListener('click', function () {
    // richiamiamo il valore delle option nel select 
    const mySelect = document.querySelector('.select').value;
    console.log(mySelect);

    //invochiamo la funzione per definire quante celle genare in base al livello
    let howManyCells = difficultyLevel (mySelect)
    console.log(howManyCells);

    gridGame.style.display = 'flex'

    gridGame.innerHTML = '';
        for (let i = 1; i <= howManyCells; i++) {
        
            let squareGenerated = squareGenerator(i, mySelect)
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
function squareGenerator(number, inputDifficulty) {
    let squareDiv = document.createElement('div');
    let classCells;
    if (inputDifficulty === 'easy') {
        classCells = 'square';
    } else if (inputDifficulty === 'medium') {
        classCells = 'square-medium';
    } else if (inputDifficulty === 'hard') {
        classCells = 'square-hard';
    }
    squareDiv.classList.add(classCells);
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
