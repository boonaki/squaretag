//grab start, add listener to start and remove display on click
let start = document.querySelector(".start")
start.addEventListener("click", startGame)

//creates delay for timeout
let delay = 280;

//creates new array obj
const arrOfBoxes = new ArrofBoxes()

const playAgain = document.querySelector('#playAgain')
playAgain.addEventListener("click", resetGame)

let clickerCount = document.querySelector('#clickCount')

let count = 0


function startGame(){ //starts game
    start.classList.add('hidden')
    let theGame = document.querySelector('.game')
    theGame.classList.toggle('hidden')
    theGame.addEventListener("click", countClicks)
    findNewSec()
}

function countClicks(){
    count += 1
    clickerCount.innerHTML = count
}

function resetGame(){ //resets game
    start.classList.remove('hidden')
}

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
    winningAnimation();
}

function winningAnimation(){

}