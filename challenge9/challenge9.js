var p1 = new Audio("c-3.ogg")
var p2 = new Audio("d-3.ogg")
var p3 = new Audio("f-3.ogg")
var p4 = new Audio("g-3.ogg")
var p5 = new Audio("a-3.ogg")
var p6 = new Audio("c-4.ogg")
var p7 = new Audio("d-4.ogg")
var p8 = new Audio("f-4.ogg")
var p9 = new Audio("g-4.ogg")
var p10 = new Audio("a-4.ogg")
var p11 = new Audio("c3.ogg")
var p12 = new Audio("d3.ogg")
var p13 = new Audio("e3.ogg")
var p14 = new Audio("f3.ogg")
var p15 = new Audio("g3.ogg")
var p16 = new Audio("a3.ogg")
var p17 = new Audio("b3.ogg")
var p18 = new Audio("c4.ogg")
var p19 = new Audio("d4.ogg")
var p20 = new Audio("e4.ogg")
var p21 = new Audio("f4.ogg")
var p22 = new Audio("g4.ogg")
var p23 = new Audio("a4.ogg")
var p24 = new Audio("b4.ogg")
var pSong = new Audio("pPlay.mp3")
var gSong = new Audio("gPlay.mp3")

var g1 = new Audio("g1.m4a")
var g2 = new Audio("g2.m4a")
var g3 = new Audio("g3.m4a")
var g4 = new Audio("g4.m4a")
var g5 = new Audio("g5.m4a")
var g6 = new Audio("g6.m4a")


function pPlay(){
  pSong.play()
}

function gPlay(){
  gSong.play()
}


function stop(){
  gSong.pause()
  pSong.pause()
  dSong.pause()
}

document.addEventListener("keydown", piano);


var one = document.querySelector('#g1');
one.addEventListener('mousemove', function(event) {
  g1.play();
});

var two = document.querySelector('#g2');
two.addEventListener('mousemove', function (event) {
  g2.play();
});

three = document.querySelector('#g3');
three.addEventListener('mousemove', function (event) {
  g3.play();
});

four = document.querySelector('#g4');
four.addEventListener('mousemove', function (event) {
  g4.play();
});

five = document.querySelector('#g5');
five.addEventListener('mousemove', function (event) {
  g5.play();
});

six = document.querySelector('#g6');
six.addEventListener('mousemove', function (event) {
  g6.play();
});

function piano(event){
  if(event.keyCode === 32){
    pSong.pause();
    gSong.pause();
    dSong.pause();
  }
  if(event.keyCode === 81){
    p1.play();
    document.getElementById("p1").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p1").style.backgroundColor= "black";
    },200);
  }
  if(event.keyCode === 87){
    p2.play();
    document.getElementById("p2").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p2").style.backgroundColor= "black";
    },200);
  }
  if(event.keyCode === 69){
    p3.play();
    document.getElementById("p3").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p3").style.backgroundColor= "black";
    },200);
  }
  if(event.keyCode === 82){
    p4.play();
    document.getElementById("p4").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p4").style.backgroundColor= "black";
    },200);
  }
  if(event.keyCode === 84){
    p5.play();
    document.getElementById("p5").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p5").style.backgroundColor= "black";
    },200);
  }
  if(event.keyCode === 89){
    p6.play();
    document.getElementById("p6").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p6").style.backgroundColor= "black";
    },200);
  }
  if(event.keyCode === 85){
    p7.play();
    document.getElementById("p7").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p7").style.backgroundColor= "black";
    },200);
  }
  if(event.keyCode === 73){
    p8.play();
    document.getElementById("p8").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p8").style.backgroundColor= "black";
    },200);
  }
  if(event.keyCode === 79){
    p9.play();
    document.getElementById("p9").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p9").style.backgroundColor= "black";
    },200);
  }
  if(event.keyCode === 80){
    p10.play();
    document.getElementById("p10").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p10").style.backgroundColor= "black";
    },200);
  }
  if(event.keyCode === 65){
    p11.play();
    document.getElementById("p11").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p11").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 83){
    p12.play();
    document.getElementById("p12").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p12").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 68){
    p13.play();
    document.getElementById("p13").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p13").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 70){
    p14.play();
    document.getElementById("p14").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p14").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 71){
    p15.play();
    document.getElementById("p15").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p15").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 72){
    p16.play();
    document.getElementById("p16").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p16").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 74){
    p17.play();
    document.getElementById("p17").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p17").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 75){
    p18.play();
    document.getElementById("p18").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p18").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 76){
    p19.play();
    document.getElementById("p19").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p19").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 186){
    p20.play();
    document.getElementById("p20").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p20").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 222){
    p21.play();
    document.getElementById("p21").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p21").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 188){
    p22.play();
    document.getElementById("p22").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p22").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 190){
    p23.play();
    document.getElementById("p23").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p23").style.backgroundColor= "white";
    },200);
  }
  if(event.keyCode === 191){
    p24.play();
    document.getElementById("p24").style.backgroundColor= "gray";
    setTimeout(function(){
      document.getElementById("p24").style.backgroundColor= "white";
    },200);
  }
}


