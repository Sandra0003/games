let input=document.getElementById("input")
let result =document.getElementById("result")
let mylist=[]

// let ll=JSON.parse(localStorage.getItem("mylist"))
// if(ll){
//     mylist=ll
//     render(mylist)

// }
function render(mytodos){
    let list =""
    for(let i=0; i<mytodos.length; i++){
        list += `
        <li> 
        ${mytodos[i]} <li>`
    }
    result.innerHTML=list
}
function add(){
    mylist.push(input.value)
    console.log(mylist)
    localStorage.setItem("mylist",JSON.stringify(mylist))
    render(mylist)
    clear()
}


function clear(){
    input.value = ''
}
 
console.log(result.value)
