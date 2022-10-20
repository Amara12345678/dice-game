// toglogchiin eeljiig hadgalah huwsagch, 1dugeer toglogchiig 0, 2dugaar toglogchiig 1 gej temdgely
var activePlayer = 0;
//toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
//toglogchiin eeljindee tsugluulj baigaa onoog hadgalah
var roundScore = 0;
//shoonii ali talaaraa buusniig hadgalah huwisagch 1ees 6 huwshagchiig sanamsarguuger vvsgej ugnu
var diceNumber = Math.floor(Math.random() * 6) + 1;

// document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").textContent = dice;

//togloom ehlehed beltgey
document.getElementById("score-0").textContent = "0";

document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";

document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";
//shoog shideh event listner
document.querySelector(".btn-roll").addEventListener("click", function () {
  //1ees 6 dotor sanamsargui awna
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //shoonii zurgiig eventd gargaj irne
  diceDom.style.display = "block";
  //buusan sanamsargui toond hargalzah zurgiig webd gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";
  //buusan toon 1ees yalgaatai bol onoog nemegduulne
  if (diceNumber !== 1) {
    //1ees yalgaatai buulaa onoog nemne
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //toglogchiin onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    //1buusan tul eeljiig solino
    //herew idwehtei toglogch 0 baiwal toglogchiig 1 bolgo ugui bol 0 bolgo
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //shoog tur alga bolgoh
    diceDom.style.display = "none";
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
