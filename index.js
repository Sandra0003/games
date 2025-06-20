const playertxt= document.getElementById("playertext")
const cmptxt= document.getElementById("computerTxt")
const resulttxt= document.getElementById("resultxt")
const choicebt=document.querySelectorAll("button")

let player
let computer
let result
let cmpt
let random

choicebt.forEach(button =>{
    button.addEventListener("click",function(){
        player = button.textContent
        computerChoice()
        playertxt.textContent=`Player : ${player}`
        cmptxt.textContent=`Computer : ${computer}`
        resulttxt.textContent = checkWinner()
        
    })
})



function computerChoice(){
  
    random = Math.floor(Math.random()*3 + 1) 
   switch(random){
    case 1:
        computer = "ROCK"
        break;
    case 2:
        computer = "PAPER"
        break;
    case 3:
        computer = "SCISSORS"
   }
 
    
}

function checkWinner(){

    if(player == computer){
        return "Draw!"
    }
    else if(computer == "ROCK"){
        return(player == "PAPER") ? "you win" : "you fail"
    }
    else if(computer == "SCISSORS"){
        return(player == "ROCK") ? "you win" : "you fail"
    }
    else if(computer == "PAPER"){
        return(player == "SCISSORS") ? "you win" : "you fail"
    }
}


