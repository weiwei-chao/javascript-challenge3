function add() {
  let one = document.querySelector("#one").value
  let two = document.querySelector("#two").value
  num1 = parseInt(one)
  num2 = parseInt(two)
  var x = num1 + num2
  document.getElementById("print").innerHTML =x
}

function minus() {
  let one = document.querySelector("#one").value
  let two = document.querySelector("#two").value
  num1 = parseInt(one)
  num2 = parseInt(two)
  var x = num1 - num2
  document.getElementById("print").innerHTML =x
}

function multiply() {
  let one = document.querySelector("#one").value
  let two = document.querySelector("#two").value
  num1 = parseInt(one)
  num2 = parseInt(two)
  var x = num1 * num2
  document.getElementById("print").innerHTML =x
}

function divide() {
  let one = document.querySelector("#one").value
  let two = document.querySelector("#two").value
  num1 = parseInt(one)
  num2 = parseInt(two)
  var x = parseInt(num1 / num2)
  var y = num1 % num2
  document.getElementById("print").innerHTML = x + "remainder" + y
}
