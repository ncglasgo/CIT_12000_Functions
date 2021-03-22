var wrap = document.body.querySelector(".wrapper");

var x = document.body.querySelector(".fire");
var y = document.body.querySelector(".ice");
var z = document.body.querySelector(".poison");
x.addEventListener("click", Function);
y.addEventListener("click", SecondFunction);
z.addEventListener("click", ThirdFunction);
var damage1 = 0;
var totaldamage= 0;

function Function() {
   damage1 = 3-1;
    add(damage1);
} 

function SecondFunction() {
   damage1 = 1+1;
   add(damage1);
}

function ThirdFunction() {
  damage1 = 4;
  add(damage1);
}

function add(damage1){
  totaldamage= totaldamage + damage1;
  wrap.innerHTML = "Dragon Damage: " + totaldamage;
  if(totaldamage>=10){
  wrap.innerHTML="You have won! The Dragon has been slain!"
  }
}