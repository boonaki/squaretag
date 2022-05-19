//grab viewport height and width
//if heightb < width (large screen and landscape)
    //divide width by 10
    //divide height by 5
    //spawn boxes
//if height > width (mobile and horizontal)
    //divide width by 5
    //divide height by 10
    //spawn boxes

//spawn boxes object (preload, make asynchronous?)
//multiply height by width to get totalnumber of boxes
//create element for each box 
//put elements into array
//give each the class of visibility: hidden and its styling box
//give each element an event listener of click that adds a click to counter/wins the game AND eventlistener mouseenter that finds a new section
//make function to return this.array
//make function to find random section and toggle visibility
    //set


//give starting screen an event listener
    //on click, run start game function

//start game function
//hide starting screen
//make game visible
//find a random section from object

//
















// //grab start, add listener to start and remove display on click
// let start = document.querySelector(".start")
// start.addEventListener("click", startGame)

// //creates delay for timeout
// let delay = 240;

// //creates new array obj
// const arrOfBoxes = new ArrofBoxes()

// //creates playAgain constant for ease of access
// const playAgain = document.querySelector('#playAgain')
// playAgain.addEventListener("click", resetGame)

// //declares count variables
// let clickerCount = document.querySelector('#clickCount')
// let count = 0

// //variables declared related to winning
// let gameWon = false

// //TODO: add high score?
// //TODO: create winning animation


// function ArrofBoxes(){ //object for boxes
//     const boxes = document.querySelectorAll('.box')
//     this.arr = Array.from(boxes)
//     this.makeArray = function(){
//         return this.arr;
//     }
//     this.grabBox = function(){
//         return this.arr[Math.floor(Math.random() * this.arr.length)];
//     }
// }

// function startGame(){ //starts game
//     start.classList.add('hidden')
//     playAgain.classList.toggle('hidden')
//     let theGame = document.querySelector('.game')
//     theGame.classList.toggle('hidden')
//     theGame.addEventListener("click", countClicks)
//     findNewSec()
// }

// function countClicks(){ //will count clicks until game won
//     if(!gameWon){
//         count += 1
//         clickerCount.innerHTML = count
//     }
// }

// function resetGame(){ //resets game
//     start.classList.remove('hidden')
//     document.querySelector('.game').classList.toggle('hidden')
//     arrOfBoxes.arr.forEach((element) => {
//         element.classList.remove('visibility')
//         element.classList.add('visibility')
//     })
//     playAgain.classList.toggle('hidden')
//     count = 0
//     clickerCount.innerHTML = count
//     gameWon = false
// }


// function findNewSec(){ //finds random section to be tagged
//     let randSec = arrOfBoxes.grabBox()
//     //make random section clickable and reset on click
//     randSec.classList.toggle('visibility')
//     randSec.addEventListener('click', green)
    
//     setTimeout(function(){
//          randSec.addEventListener('mouseenter', reset)
//     }, delay);
// }

// function reset(mouseenter){ //resets on hover
//     if(mouseenter.target.classList.contains('greenBack')){
//         return 0;
//     }else{
//         mouseenter.target.classList.toggle('visibility')//toggle off
//         findNewSec()
//     }
// }

// function green(click){ //winning function
//     click.target.classList.add('greenBack')
//     click.target.classList.remove('visibility')
//     gameWon = true
//     winningAnimation()
// }
//  //TODO: create winning animation
// function winningAnimation(){
//     alert('you won!')
// }