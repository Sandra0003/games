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
        document.querySelector("#playertext").innerHTML = "Player : " +button.name
        
    })
})


let hands = ["ROCK","PAPER","SCISSORS"]

function computerChoice(){
    setTimeout(() =>{
    random = Math.floor(Math.random()*3)
    cmpt = hands[random]
    cmptxt.innerHTML +=  cmpt
    },3000)
    
}
computerChoice()



