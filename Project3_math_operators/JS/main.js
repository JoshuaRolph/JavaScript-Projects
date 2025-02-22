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

function Subtraction() {
    document.getElementById("demo").innerHTML = "Answer is 7";
  }

  function Multiplication() {
    document.getElementById("math").innerHTML = "Answer is 48";
  }

  function Addition() {
    document.getElementById("plus").innerHTML = "Answer is 50";
  }

  function Division() {
    document.getElementById("divide").innerHTML = "Answer is 6";
  }

  function PlusMinus() {
    document.getElementById("plusminus").innerHTML = "Answer is 8";
  }

  function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
  }

  function negation_Operator() {
    var x = 10;
    document.getElementById("unary").innerHTML = -x;
  }

  var X = 5;
  X++;
  document.write(X) ;

window.alert(Math.random() * 50);