var d1 = new Audio("d1.mp3")
var d2 = new Audio("d2.mp3")
var d3 = new Audio("d3.mp3")
var d4 = new Audio("d4.mp3")
var d5 = new Audio("d5.mp3")
var d6 = new Audio("d6.mp3")
var d7 = new Audio("d7.mp3")
var dSong = new Audio("dPlay.mp3")

function dPlay(){
    dSong.play()
}

function stop(){
    dSong.pause()
}

// document.addEventListener("click", drum);

var one = document.querySelector("#d1");
one.addEventListener('click', function (event) {
    d1.play();
});

var two = document.querySelector("#d2");
two.addEventListener('click', function (event) {
    d2.play();
});

var three = document.querySelector("#d3");
three.addEventListener('click', function (event) {
    d3.play();
});

var four = document.querySelector("#d4");
four.addEventListener('click', function (event) {
    d4.play();
});

var five = document.querySelector("#d5");
five.addEventListener('click', function (event) {
    d5.play();
});

var six = document.querySelector("#d6");
six.addEventListener('click', function (event) {
    d6.play();
});

var seven = document.querySelector("#d7");
seven.addEventListener('click', function (event) {
    d7.play();
});

document.addEventListener("keydown", drum);

function drum(event){
    if(event.keyCode === 65){
      d1.load();
      d1.play();
    }
    if(event.keyCode === 76){
        d2.load();
        d2.play();
    }
    if(event.keyCode === 90){
        d3.load();
        d3.play();
    }
    if(event.keyCode === 70){
        d4.load();
        d4.play();
    }
    if(event.keyCode === 72){
        d5.load();
        d5.play();
    }
    if(event.keyCode === 67){
        d6.load();
        d6.play();
    }
    if(event.keyCode === 78){
        d7.load();
        d7.play();
    }
}