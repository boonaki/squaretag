//grab start, add listener to start and remove display on click
document.querySelector(".start").addEventListener("click", startgame)
let delay = 280;
function startgame(){
    document.querySelector(".start").classList.add('hidden')
    document.querySelector('.game').classList.toggle('hidden')
    findNewSec()
}
function findNewSec(){
    // grab the sections in div, put into array. 
    const boxes = document.querySelectorAll('.box')

    const boxBox = Array.from(boxes)
    //make random section clickable and reset on click
    let randSec = boxBox[Math.floor(Math.random() * boxBox.length)];
    randSec.classList.toggle('visibility')
    randSec.addEventListener('click', green)
    
    setTimeout(function(){
         randSec.addEventListener('mouseenter', reset)
    }, delay);
    
}

function reset(mouseenter){ //resets
    if(mouseenter.target.classList.contains('greenBack')){
        return 0;
    }else{
        mouseenter.target.classList.toggle('visibility')//toggle off
        findNewSec()
    }
}

function green(click){
    click.target.classList.add('greenBack')
    click.target.classList.remove('visibility')
    alert("you won")
}