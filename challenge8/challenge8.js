var mySong = new Audio("nobrainer.mp3")

function play1(){
  mySong.play()
}

function pause1(){
  mySong.pause()
}

function button1(){
  document.querySelector("h3").innerHTML = "Boy or Girl?"
  document.querySelector("h2").innerHTML = ""
  document.querySelector("#button2").style.display = "block"
  document.querySelector("#button1").innerHTML = "BOY";
  document.querySelector("body").style.backgroundImage = "url('girlboy.png')"
  document.querySelector("#button1").onclick = one;
  document.querySelector("#button2").onclick = one1;
}

function one(){
  document.querySelector("h3").innerHTML = "You wake up in the morning and pick up ur phone. Oh My God! It's 7:40 already! Should you go to school?"
  document.querySelector("#picture").style.display = "block";
  document.querySelector("#button1").innerHTML = "YES";
  document.querySelector("#button2").innerHTML = "NO";
  document.querySelector("body").style.backgroundImage = "url('https://cdn.nohat.cc/thumb/f/720/46fce430bf68438eac81.jpg')"
  document.querySelector("#button1").onclick = two;
  document.querySelector("#button2").onclick = two1;
}

function one1(){
  document.querySelector("h3").innerHTML = "You wake up in the morning and pick up ur phone. Oh My God! It's 7:40 already! Should you go to school?"
  document.querySelector("#picture").style.display = "block";
  document.querySelector("#button1").innerHTML = "YES";
  document.querySelector("#button2").innerHTML = "NO";
  document.querySelector("body").style.backgroundImage = "url('https://cdn.nohat.cc/thumb/f/720/46fce430bf68438eac81.jpg')"
  document.querySelector("#button1").onclick = two2;
  document.querySelector("#button2").onclick = two3;
}

function two(){
  document.querySelector("h3").innerHTML = "You don't have that much time now, its 7:55. Should you buy Yonghe Soy Milk(breakfast) before you go to school?"
  document.querySelector("#button1").innerHTML = "YES";
  document.querySelector("#button2").innerHTML = "NO";
  document.querySelector("body").style.backgroundImage = "url('3.jpg')"
  document.querySelector("#button1").onclick = three;
  document.querySelector("#button2").onclick = three1;
  document.querySelector("#picture").src= "51.jpeg";
}

function two1(){
  document.querySelector("h3").innerHTML = "You decide to sleep till 12:00. However, you still have homework to do. Should you sleep to 12 or do homework?"
  document.querySelector("#button1").innerHTML = "SLEEP";
  document.querySelector("#button2").innerHTML = "HW";
  document.querySelector("body").style.backgroundImage = "url('4.jpg')"
  document.querySelector("#button1").onclick = three2;
  document.querySelector("#button2").onclick = three3;
  document.querySelector("#picture").src= "52.jpg";
}

function two2(){
  document.querySelector("h3").innerHTML = "You don't have that much time now, its 7:55. Should you buy Yonghe Soy Milk(breakfast) before you go to school?"
  document.querySelector("#button1").innerHTML = "YES";
  document.querySelector("#button2").innerHTML = "NO";
  document.querySelector("body").style.backgroundImage = "url('3.jpg')"
  document.querySelector("#button1").onclick = three4;
  document.querySelector("#button2").onclick = three5;
  document.querySelector("#picture").src= "51.jpeg";
}

function two3(){
  document.querySelector("#picture").src= "52.jpg";
  document.querySelector("h3").innerHTML = "You decide to sleep till 12:00. However, you still have homework to do. Should you sleep to 12 or do homework?"
  document.querySelector("#button1").innerHTML = "SLEEP";
  document.querySelector("#button2").innerHTML = "HW";
  document.querySelector("body").style.backgroundImage = "url('4.jpg')"
  document.querySelector("#button1").onclick = three6;
  document.querySelector("#button2").onclick = three7;
}

function three(){
  document.querySelector("h3").innerHTML = "It's 8:00 already! You can't come in to school now. Pick a place to stay before 3:00."
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "LOUISA";
  document.querySelector("#button2").innerHTML = "HOME";
  document.querySelector("body").style.backgroundImage = "url('5.jpg')"
  document.querySelector("#button1").onclick = four;
  document.querySelector("#button2").onclick = four1;
  document.querySelector("#button3").onclick = four2;
  document.querySelector("#picture").style.display = "none"
}

function three1(){
  document.querySelector("h3").innerHTML = "You get to school at 7:59! The first class is math calss, should you sleep in Mr. Ting's class?"
  document.querySelector("#button1").innerHTML = "YES";
  document.querySelector("#button2").innerHTML = "NO";
  document.querySelector("body").style.backgroundImage = "url('6.jpg')"
  document.querySelector("#button1").onclick = four3;
  document.querySelector("#button2").onclick = four4;
  document.querySelector("#picture").style.display = "none"
}

function three2(){
  document.querySelector("h3").innerHTML = "You decide to sleep. However, your girlfriend keeps calling you for unknown reason. Should you pick it up?"
  document.querySelector("#button1").innerHTML = "PICK UP";
  document.querySelector("#button2").innerHTML = "IGNORE";
  document.querySelector("body").style.backgroundImage = "url('7.jpg')"
  document.querySelector("#button1").onclick = four5;
  document.querySelector("#button2").onclick = four6;
}

function three3(){
  document.querySelector("h3").innerHTML = "You decide to do homework. However, your crush suddenly asks you if you can go to prom with her. What should you respond?"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "YEAH OKAY";
  document.querySelector("#button2").innerHTML = "NO I'M NOT READY LOL";
  document.querySelector("#button3").innerHTML = "HAPPY LATE APRIL FOOLS DAY";
  document.querySelector("body").style.backgroundImage = "url('8.jpg')"
  document.querySelector("#button1").onclick = four7;
  document.querySelector("#button2").onclick = four8;
  document.querySelector("#button3").onclick = four9;
  document.querySelector("#picture").src = "33.jpeg"
}

function three4(){
  document.querySelector("h3").innerHTML = "It's 8:00 already! You can't come in to school now. Pick a place to stay before 3:00."
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "LOUISA";
  document.querySelector("#button2").innerHTML = "PAMELA'S OFFICE";
  document.querySelector("body").style.backgroundImage = "url('5.jpg')"
  document.querySelector("#button1").onclick = four;
  document.querySelector("#button2").onclick = four11;
  document.querySelector("#button3").onclick = four2;
  document.querySelector("#picture").style.display = "none"
}

function three5(){
  document.querySelector("#picture").src = "53.jpeg"
  document.querySelector("h3").innerHTML = "You get to school at 7:59! The first class is math calss, should you sleep in Mr. Ting's class?"
  document.querySelector("#button1").innerHTML = "YES";
  document.querySelector("#button2").innerHTML = "NO";
  document.querySelector("body").style.backgroundImage = "url('6.jpg')"
  document.querySelector("#button1").onclick = four13;
  document.querySelector("#button2").onclick = four14;
  document.querySelector("#picture").style.display = "none"
}

function three6(){
  document.querySelector("h3").innerHTML = "You decide to sleep. However, your boyfriend keeps calling you for unknown reason. Should you pick it up?"
  document.querySelector("#button1").innerHTML = "PICK UP";
  document.querySelector("#button2").innerHTML = "IGNORE";
  document.querySelector("body").style.backgroundImage = "url('7.jpg')"
  document.querySelector("#button1").onclick = four15;
  document.querySelector("#button2").onclick = four16;
}

function three7(){
  document.querySelector("#picture").src = "33.jpeg"
  document.querySelector("h3").innerHTML = "You decide to do homework. However, your crush suddenly asks you if you can go to prom with him. What should you respond?"
  document.querySelector("#button1").innerHTML = "YEAH OKAY";
  document.querySelector("#button2").innerHTML = "NO I'M NOT READY LOL";
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button3").innerHTML = "HAPPY LATE APRIL FOOLS DAY";
  document.querySelector("body").style.backgroundImage = "url('8.jpg')"
  document.querySelector("#button1").onclick = four17;
  document.querySelector("#button2").onclick = four8;
  document.querySelector("#button3").onclick = four9;
}

function four(){
  document.querySelector("h3").innerHTML = "Oh no! You spill your coffee on someone's bag. When you look up... OMG! It's Ms. Katrina. She is really angry and wants to expel you from PAS. What should you do?"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button4").style.display = "block";
  document.querySelector("#button1").innerHTML = "BUY A NEW BAG FOR MS. KATRINA";
  document.querySelector("#button2").innerHTML = "AGREE AND TRANSFER TO TAS";
  document.querySelector("#button3").innerHTML = "TELL MS. KATRINA THAT YOU RLLY LOVE HER";
  document.querySelector("#button4").innerHTML = "SPILL THE REST OF THE COFFEE ON MS. KATRINA";
  document.querySelector("body").style.backgroundImage = "url('9.jpg')"
  document.querySelector("#button1").onclick = five;
  document.querySelector("#button2").onclick = five1;
  document.querySelector("#button3").onclick = five2;
  document.querySelector("#button4").onclick = five3;
  document.querySelector("#picture").style.display = "block"
  document.querySelector("#picture").src= "21.jpg";
}

var name = 'bob'

function four1(){
  name = prompt("Someone you admires...");
  document.querySelector("h3").innerHTML = "You decide to go home. Then, " + name +" suddenly asks you out tonight. What should you repond/do?"
  document.querySelector("#button1").innerHTML = "1. GO TO HAIR SALON 2. BUY A NEW SUIT";
  document.querySelector("#button2").innerHTML = "TELL HER YOU CAN'T GO TODAY BECAUSE YOUR STOMACH HURTS";
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button3").innerHTML = "AGREE, BUT BRING YOUR BROTHER WITH YOU";
  document.querySelector("body").style.backgroundImage = "url('10.jpg')"
  document.querySelector("#button1").onclick = five4;
  document.querySelector("#button2").onclick = five5;
  document.querySelector("#button3").onclick = five6;
}


function four2(){
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("#picture").src= "12.jpg";
  document.querySelector("h3").innerHTML = "You buy every single items in adidas and nike. You don't have any money in the bank now. Your mom is rlly angry so she kicks you out from her house. You are now a vagabond. "
  document.querySelector("h2").innerHTML = "YOU FAIL!!!"
  document.querySelector("body").style.backgroundImage = "url('11.jpg')"

}

function four3(){
  document.querySelector("h3").innerHTML = "Mr. Busher comes in and tells you to have a meeting with him afterschool. However, you also want to play basketball afterschool. "
  document.querySelector("#button1").innerHTML = "BASKETBALL";
  document.querySelector("#button2").innerHTML = "MR. BUSHER'S OFFICE";
  document.querySelector("body").style.backgroundImage = "url('13.jpg')"
  document.querySelector("#button1").onclick = five7;
  document.querySelector("#button2").onclick = five8;
}

function four4(){
  document.querySelector("h3").innerHTML = "You decide to be a good student. Unfortunately, Mr. Ting is really angry today. He asks everyone to do 100 math questions and hand it to him tmr. Do you want to ask your girlfriend for help?"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "YES PLEASE HELP ME";
  document.querySelector("#button2").innerHTML = "IT'S OKAY I DON'T WANT TO BE A COWARD";
  document.querySelector("#button3").innerHTML = "I DON'T HAVE A GIRLFRIEND (SAD)";
  document.querySelector("body").style.backgroundImage = "url('14.jpg')"
  document.querySelector("#button1").onclick = five9;
  document.querySelector("#button2").onclick = five10;
  document.querySelector("#button3").onclick = five11;
}

function four5(){
  document.querySelector("h3").innerHTML = "Your girlfriend is asking you out to Kenting for 3 days, only you and her. What should you respond?"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "OKAY.. WE'RE ADULTS :)";
  document.querySelector("#button2").innerHTML = "I'M AFRAID...";
  document.querySelector("#button3").innerHTML = "THIS IS A GREAT IDEA OMG I LOVE IT";
  document.querySelector("body").style.backgroundImage = "url('15.jpg')"
  document.querySelector("#button1").onclick = five12;
  document.querySelector("#button2").onclick = five11;
  document.querySelector("#button3").onclick = five12;
}

function four6(){
  document.querySelector("h3").innerHTML = "Your girlfriend wants to break up with you. What should you do??"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "OK LET'S BREAK UP";
  document.querySelector("#button2").innerHTML = "OH BABY PLEASE NO";
  document.querySelector("#button3").innerHTML = "FIND ANOTHER PRETTY GIRL IMMEDIATELY";
  document.querySelector("body").style.backgroundImage = "url('16.jpg')"
  document.querySelector("#button1").onclick = five15;
  document.querySelector("#button2").onclick = five16;
  document.querySelector("#button3").onclick = five17;
}

function four7(){
  document.querySelector("h3").innerHTML = "You guys kiss and hug during prom. She asks you if you can be her boyfriend. However, you see many other pretty girls in prom. What should you say to the girl?"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "SORRY YOU'RE NOT MY DESTINY";
  document.querySelector("#button2").innerHTML = "GO AWAY";
  document.querySelector("#button3").innerHTML = "ACTUALLY... I LIKE YOUR BFF MORE";
  document.querySelector("body").style.backgroundImage = "url('17.png')"
  document.querySelector("#button1").onclick = five18;
  document.querySelector("#button2").onclick = five18;
  document.querySelector("#button3").onclick = five18;
  document.querySelector("#picture").style.display = "none";
}

function four8(){
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("h3").style.display = "none";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "SAD"
  document.querySelector("body").style.backgroundImage = "url('26.png')"
  document.querySelector("#picture").src= "25.png";
}

function four9(){
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("h3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "LOL"
  document.querySelector("body").style.backgroundImage = "url('27.jpg')"
  document.querySelector("#picture").src= "2.jpg";
}
// GIRL//
function four11(){
  document.querySelector("h3").innerHTML = "Surprisingly, Ms. Pamela asks you if you want to eat dinner at her house tonight. How would you respond?"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "OK~SOUNDS LIKE A GREAT IDEA";
  document.querySelector("#button2").innerHTML = "LET ME INVITE EVERYONE FROM CLASS OF 2024";
  document.querySelector("#button3").innerHTML = "NO! OF COURSE NOT! SOUNDS AWKWARD";
  document.querySelector("body").style.backgroundImage = "url('18.jpg')"
  document.querySelector("#button1").onclick = five19;
  document.querySelector("#button2").onclick = five20;
  document.querySelector("#button3").onclick = five21;
}

function four13(){
  document.querySelector("h3").innerHTML = "Mr. Busher comes in and tells you to have a meeting with him afterschool. However, you also want to practice cheer afterschool. "
  document.querySelector("#button1").innerHTML = "CHEERLEADING";
  document.querySelector("#button2").innerHTML = "MR. BUSHER'S OFFICE";
  document.querySelector("body").style.backgroundImage = "url('13.jpg')"
  document.querySelector("#button1").onclick = five23;
  document.querySelector("#button2").onclick = five8;
}

function four14(){
  document.querySelector("h3").innerHTML = "You decide to be a good student. Unfortunately, Mr. Ting is really angry today. He asks everyone to do 100 math questions and hand it to him tmr. Do you want to ask your boyfriend for help?"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "YES PLEASE HELP ME";
  document.querySelector("#button2").innerHTML = "IT'S OKAY I DON'T WANT TO BE A COWARD";
  document.querySelector("#button3").innerHTML = "I DON'T HAVE A BOYFRIEND (SAD)";
  document.querySelector("body").style.backgroundImage = "url('14.jpg')"
  document.querySelector("#button1").onclick = five24;
  document.querySelector("#button2").onclick = five11;
  document.querySelector("#button2").onclick = five10;
}

function four15(){
  document.querySelector("h3").innerHTML = "Your boyfriend is asking you out to Kenting for 3 days, only you and him. What should you respond?"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "OKAY.. WE'RE ADULTS :)";
  document.querySelector("#button2").innerHTML = "I'M AFRAID...";
  document.querySelector("#button3").innerHTML = "THIS IS A GREAT IDEA OMG I LOVE IT";
  document.querySelector("body").style.backgroundImage = "url('15.jpg')"
  document.querySelector("#button1").onclick = five12;
  document.querySelector("#button2").onclick = five11;
  document.querySelector("#button3").onclick = five12;
}

function four16(){
  document.querySelector("h3").innerHTML = "Your boyfriend wants to break up with you. What should you do??"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "OK LET'S BREAK UP";
  document.querySelector("#button2").innerHTML = "OH BABY PLEASE NO";
  document.querySelector("#button3").innerHTML = "FIND ANOTHER HANDSOME GUY IMMEDIATELY";
  document.querySelector("body").style.backgroundImage = "url('16.jpg')"
  document.querySelector("#button1").onclick = five30;
  document.querySelector("#button2").onclick = five31;
  document.querySelector("#button3").onclick = five32;
}

function four17(){
  document.querySelector("h3").innerHTML = "You guys kiss and hug during prom. He asks you if you can be his girlfriend. However, you see many other handsome boys during prom. What should you say to the boy?"
  document.querySelector("#button3").style.display = "block";
  document.querySelector("#button1").innerHTML = "SORRY YOU'RE NOT MY DESTINY";
  document.querySelector("#button2").innerHTML = "GO AWAY";
  document.querySelector("#button3").innerHTML = "ACTUALLY... I LIKE YOUR BFF MORE";
  document.querySelector("body").style.backgroundImage = "url('17.png')"
  document.querySelector("#button1").onclick = five18;
  document.querySelector("#button2").onclick = five18;
  document.querySelector("#button3").onclick = five18;
  document.querySelector("#picture").style.display = "none";
}

function five(){
  document.querySelector("h3").innerHTML = "Ms. Katrina is feeling content abt the bag you give to her. Since then, she always give you a candy when she meets you."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#button4").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "Yeah!! GOOD DECISION"
  document.querySelector("body").style.backgroundImage = "url('19.jpg')"
  document.querySelector("#picture").src= "28.jpg";
}

function five1(){
  document.querySelector("h3").innerHTML = "TAS students treat you rlly bad. You get bullied and laughed by them. Therefore, your mom decide to let you transfer back to PAS, but you still need to go to psychologist for all the trauma before."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#button4").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "OPPS... SAD"
  document.querySelector("body").style.backgroundImage = "url('20.jpg')"
  document.querySelector("#picture").src= "29.png";
}
function five2(){
  document.querySelector("h3").innerHTML = "Ms. Katirna feels happy and forgives you. Just a few minutes later, you spill a cup of water on her skirt. Opps~"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#button4").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "LOL"
  document.querySelector("body").style.backgroundImage = "url('22.jpg')"
  document.querySelector("#picture").src= "30.jpeg";
}
function five3(){
  document.querySelector("h3").innerHTML = "Ms. Katrina takes a cup of milk and spill it on your computer. Since then, she never puts you on the list of groups for any school events."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#button4").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "LOL SAD"
  document.querySelector("body").style.backgroundImage = "url('21.jpg')"
  document.querySelector("#picture").src= "31.jpg";
}

function five4(){
  document.querySelector("h3").innerHTML = name + " also falls in love with you"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "none";
  document.querySelector("h2").innerHTML = "COOL :("
  document.querySelector("body").style.backgroundImage = "url('32.jpg')"
  document.querySelector("#picture").src= "33.jpeg";
}

function five5(){
  document.querySelector("h3").innerHTML = "Be brave next time!"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "SAD"
  document.querySelector("body").style.backgroundImage = "url('24.jpg')"
  document.querySelector("#picture").src= "23.jpg";
}

function five6(){
  document.querySelector("h3").innerHTML = "Such a bad decision! "+ crush +" doesn't care abt you anymore"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "LOL SAD"
  document.querySelector("body").style.backgroundImage = "url('16.jpg')"
  document.querySelector("#picture").src= "34.jpg";
}

function five7(){
  document.querySelector("h3").innerHTML = "That's right hehe"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "BASKETBALL IS THE BEST"
  document.querySelector("body").style.backgroundImage = "url('35.jpg')"
  document.querySelector("#picture").src= "36.jpg";
}

function five8(){
  document.querySelector("h3").innerHTML = "Mr. Busher is rlly angry. You forget to wear your mask, he becomes angrier. He takes away your phone for a day."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "HAIYA SAD"
  document.querySelector("body").style.backgroundImage = "url('13.jpg')"
  document.querySelector("#picture").src= "37.jpeg";
}

function five19(){
  document.querySelector("h3").innerHTML = "Woooooo"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('10.jpg')"
  document.querySelector("#picture").src= "38.jpg";
}

function five9(){
  document.querySelector("h3").innerHTML = "You get a F for this hw. Apparently, your girlfriend doesn't want to help you."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "LOL SAD"
  document.querySelector("body").style.backgroundImage = "url('14.jpg')"
  document.querySelector("#picture").src= "39.jpg";
}

function five24(){
  document.querySelector("h3").innerHTML = "You get a F for this hw. Apparently, your boyfriend doesn't want to help you."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "LOL SAD"
  document.querySelector("body").style.backgroundImage = "url('14.jpg')"
  document.querySelector("#picture").src= "39.jpg";
}

function five10(){
  document.querySelector("h3").innerHTML = "You get a F because you don't you how to do the hw. "
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "LOL SAD"
  document.querySelector("body").style.backgroundImage = "url('14.jpg')"
  document.querySelector("#picture").src= "39.jpg";
}

function five11(){
  document.querySelector("h3").innerHTML = "ULTIMATE LOSER!"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('22.jpg')"
  document.querySelector("#picture").src= "25.png";
}

function five12(){
  document.querySelector("h3").innerHTML = "Woooooo"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('10.jpg')"
  document.querySelector("#picture").src= "38.jpg";
}

function five13(){
  document.querySelector("h3").innerHTML = "No girlfriend anymore..."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('32.jpg')"
  document.querySelector("#picture").src= "40.jpeg";
}

function five14(){
  document.querySelector("h3").innerHTML = "You buy a chanel makeup set for your girlfriend. Your wallet is bleeding....."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('41.png')"
  document.querySelector("#picture").src= "42.jpg";
}

function five15(){
  document.querySelector("h3").innerHTML = "Then you try to chat with her BFF...."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('27.jpg')"
  document.querySelector("#picture").src= "43.png";
}

function five18(){
  document.querySelector("h3").innerHTML = "SLAP SLAP SLAP"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('32.jpg')"
  document.querySelector("#picture").src= "44.jpg";
}

function five19(){
  document.querySelector("h3").innerHTML = "Ms. Pamela cooks many differnt kinds of dish for you and her daughter... It's delicious though. "
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('46.jpg')"
  document.querySelector("#picture").src= "45.jpg";
}

function five20(){
  document.querySelector("h3").innerHTML = "Ms. Pamela is so shock she suddenly faints. Your fault..."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('47.jpg')"
  document.querySelector("#picture").src= "48.jpg";
}

function five21(){
  document.querySelector("h3").innerHTML = "Ms. Pamela cries"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('47.jpg')"
  document.querySelector("#picture").src= "25.png";
}

function five23(){
  document.querySelector("h3").innerHTML = "Mr. Busher yells at you at the 2nd floor when you are practicing. OPPS"
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("h2").style.display = "block";
  document.querySelector("h2").innerHTML = "LOL SAD"
  document.querySelector("body").style.backgroundImage = "url('49.jpg')"
  document.querySelector("#picture").src= "50.jpg";
}

function five30(){
  document.querySelector("h3").innerHTML = "No boyfriend anymore..."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('32.jpg')"
  document.querySelector("#picture").src= "25.jpg";
}

function five31(){
  document.querySelector("h3").innerHTML = "You buy many nike air force shoes for your boyfriend. Your wallet is bleeding....."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('8.jpg')"
  document.querySelector("#picture").src= "12.jpg";
}

function five32(){
  document.querySelector("h3").innerHTML = "Then you try to chat with her BFF...."
  document.querySelector("#button1").style.display = "none";
  document.querySelector("#button2").style.display = "none";
  document.querySelector("#button3").style.display = "none";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("body").style.backgroundImage = "url('38.jpg')"
  document.querySelector("#picture").src= "43.png";
}
