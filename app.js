// toglogchiin eeljiig hadgalah huwsagch, 1dugeer toglogchiig 0, 2dugaar toglogchiig 1 gej temdgely
var activePlayer = 1;
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

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";

  diceDom.src = "dice-" + diceNumber + ".png";
});
