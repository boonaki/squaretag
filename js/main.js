//grab start, add listener to start and remove display on click
let start = document.querySelector(".start")
start.addEventListener("click", startGame)

//creates delay for timeout
let delay = 230;

//creates new array obj
const arrOfBoxes = new ArrofBoxes()

//creates playAgain constant for ease of access
const playAgain = document.querySelector('#playAgain')
playAgain.addEventListener("click", resetGame)

//declares count variables
let clickerCount = document.querySelector('#clickCount')
let count = 0

//variables declared related to winning
let gameWon = false
// let winCount =  0
// let winElement = document.querySelector('#winCount')


function ArrofBoxes(){ //object for boxes
    const boxes = document.querySelectorAll('.box')
    this.arr = Array.from(boxes)
    this.makeArray = function(){
        return this.arr;
    }
    this.grabBox = function(){
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}

function startGame(){ //starts game
    start.classList.add('hidden')
    let theGame = document.querySelector('.game')
    theGame.classList.toggle('hidden')
    theGame.addEventListener("click", countClicks)
    findNewSec()
}

function countClicks(){ //will count clicks until game won
    if(!gameWon){
        count += 1
        clickerCount.innerHTML = count
    }
}

// function countWins(){
//     winCount += 1
//     winElement.innerHTML = winCount
// }

function resetGame(){ //resets game
    start.classList.remove('hidden')
    document.querySelector('.game').classList.toggle('hidden')
    arrOfBoxes.arr.forEach((element) => {
        element.classList.remove('visibility')
        element.classList.add('visibility')
    })
    count = 0
    clickerCount.innerHTML = count
}


function findNewSec(){ //finds random section to be tagged
    let randSec = arrOfBoxes.grabBox()
    //make random section clickable and reset on click
    randSec.classList.toggle('visibility')
    randSec.addEventListener('click', green)
    
    setTimeout(function(){
         randSec.addEventListener('mouseenter', reset)
    }, delay);
}

function reset(mouseenter){ //resets on hover
    if(mouseenter.target.classList.contains('greenBack')){
        return 0;
    }else{
        mouseenter.target.classList.toggle('visibility')//toggle off
        findNewSec()
    }
}

function green(click){ //winning function
    click.target.classList.add('greenBack')
    click.target.classList.remove('visibility')
    gameWon = true
    winningAnimation()
}

function winningAnimation(){
    alert('you won!')
}