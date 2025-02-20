/*--Calculator--*/
window.onload = init


function init(){
    const button = document.getElementById("add")
    button.addEventListener("click", addTwoNumbers)
}

function addTwoNumbers(e){
    e.preventDefault()
    const one = document.getElementById("one")
    const two = document.getElementById("two")

    const totalSum =  Number(one.value) + Number(two.value)

    const result  = document.getElementById("result")
    result.value = totalSum
}


let a = 10; 
let b = 20; 

// Subtract directlty 
console.log(a - b); // -10 
console.log(b - a); // 10 

// Subtract by using another variable 
let c = b - a; 
console.log(c); // 10 

// Subtract without any variable 
console.log(10 - 20); //-10 
console.log(20 - 10); //10 
console.log(20 - 10 - 10); //0
