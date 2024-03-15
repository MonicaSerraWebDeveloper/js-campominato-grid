
const gridGame = document.querySelector('.grid');
const playStartTheGame = document.querySelector('.btn');

const mySelect = document.querySelector('.select').value;
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


function squareGenerator(number) {
    let squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    squareDiv.innerHTML += `<span>${number}</span>`
    return squareDiv
}

