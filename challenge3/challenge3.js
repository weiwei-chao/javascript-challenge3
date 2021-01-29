var scoreH = 0
var scoreG = 0
var period = 0
var x = 0
var y = 0

function home(){
  scoreH = scoreH +1
  document.getElementById("scoreH").innerHTML = scoreH
}

function guest(){
  scoreG = scoreG +1
  document.getElementById("scoreG").innerHTML = scoreG
}

function periodFunction(){
  if(period < 3){
    period = period +1
    document.getElementById("pe").innerHTML = period
  }
}

function homeMinus(){
  scoreH = scoreH - 1
  if(scoreH >= 0){
    document.getElementById("scoreH").innerHTML = scoreH
  }else{
    scoreH = 0
  }
}

function guestMinus(){
  scoreG = scoreG - 1
  if(scoreG >= 0){
    document.getElementById("scoreG").innerHTML = scoreG
  }else{
    scoreG = 0
  }
}

function pFunction(){
  if(period > 1){
    period = period - 1
    document.getElementById("pe").innerHTML = period
  }
}

function clear1(){
  x=0
  document.querySelector(".p").innerHTML = " "
  document.getElementById("p1-1").innerHTML = " "
  document.getElementById("p1-2").innerHTML = " "
  document.getElementById("p1-3").innerHTML = " "
  document.getElementById("p1-4").innerHTML = " "
}

function clear2(){
  y=0
  document.getElementById("p2").innerHTML = " "
  document.getElementById("p2-1").innerHTML = " "
  document.getElementById("p2-2").innerHTML = " "
  document.getElementById("p2-3").innerHTML = " "
  document.getElementById("p2-4").innerHTML = " "
}

function reset(){
  period = 1
  scoreG = 0
  scoreH = 0
  document.getElementById("pe").innerHTML = period
  document.getElementById("scoreG").innerHTML = scoreG
  document.getElementById("scoreH").innerHTML = scoreH
  clear1()
  clear2()
}



function penalty1(){
  x++
  let penalty1 = prompt("Write down the name.")
  if(x==1){
    document.getElementById("p1").innerHTML = penalty1
  }else if(x==2){
    document.getElementById("p1-1").innerHTML = penalty1
  }else if(x==3){
    document.getElementById("p1-2").innerHTML = penalty1
  }else if(x==4){
    document.getElementById("p1-3").innerHTML = penalty1
  }else if(x==5){
    document.getElementById("p1-4").innerHTML = penalty1
  }
}

function penalty2(){
  y++
  let penalty2 = prompt("Write down the name.")
  if(y==1){
    document.getElementById("p2").innerHTML = penalty2
  }else if(y==2){
    document.getElementById("p2-1").innerHTML = penalty2
  }else if(y==3){
    document.getElementById("p2-2").innerHTML = penalty2
  }else if(y==4){
    document.getElementById("p2-3").innerHTML = penalty2
  }else if(y==5){
    document.getElementById("p2-4").innerHTML = penalty2
  }
}
