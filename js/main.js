//grab start, add listener to start and remove display on click
let start = document.querySelector(".start")
start.addEventListener("click", startGame)

//creates delay for timeout
let delay = 220;

//creates playAgain constant for ease of access
const playAgain = document.querySelector('#playAgain')
playAgain.addEventListener("click", resetGame)

//declares count variables
let clickerCount = document.querySelector('#clickCount')
let count = 0

//variables declared related to winning
let gameWon = false

//TODO: add high score?
//TODO: create winning animation

//creates new array obj
const arrOfBoxes = new ArrofBoxes()

function ArrofBoxes(){ //object for boxes
    const boxes = document.querySelectorAll('.box')
    this.arr = Array.from(boxes)
    this.makeArray = function(){
        return this.arr;
    }
    this.grabBox = function(){
        let randSec = this.arr[Math.floor(Math.random() * this.arr.length)];
        randSec.classList.toggle('visibility')
        randSec.addEventListener('click', green)
        setTimeout(function(){
            randSec.addEventListener('mouseenter', reset)
       }, delay);
    }
}

function startGame(){ //starts game
    start.classList.add('hidden')
    document.querySelector('#clickContainer').classList.remove('visibility')
    let theGame = document.querySelector('.game')
    theGame.classList.toggle('hidden')
    theGame.addEventListener("click", countClicks)
    arrOfBoxes.grabBox()
}

function countClicks(){ //will count clicks until game won
    if(!gameWon){
        count += 1
        clickerCount.innerHTML = count
    }
}

function resetGame(){ //resets game
    start.classList.remove('hidden')
    document.querySelector('.game').classList.toggle('hidden')
    arrOfBoxes.arr.forEach((element) => {
        element.classList.remove('visibility')
        element.classList.add('visibility')
    })
    playAgain.classList.add('visibility')
    document.querySelector('#clickContainer').classList.add('visibility')
    count = 0
    clickerCount.innerHTML = count
    gameWon = false
}

function reset(mouseenter){ //resets on hover
    if(mouseenter.target.classList.contains('greenBack')){
        return 0;
    }else{
        mouseenter.target.classList.toggle('visibility')//toggle off
        arrOfBoxes.grabBox()
    }
}

function green(click){ //winning function
    click.target.classList.add('greenBack')
    click.target.classList.remove('visibility')
    playAgain.classList.remove('visibility')
    gameWon = true
    winningAnimation()
}
 //TODO: create winning animation
function winningAnimation(){
    alert('you won!')
}