// toglogchiin eeljiig hadgalah huwsagch, 1dugeer toglogchiig 0, 2dugaar toglogchiig 1 gej temdgely
var activePlayer = 1;
//toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
//toglogchiin eeljindee tsugluulj baigaa onoog hadgalah
var roundScore = 0;
//shoonii ali talaaraa buusniig hadgalah huwisagch 1ees 6 huwshagchiig sanamsarguuger vvsgej ugnu
var dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").textContent = dice;

//togloom ehlehed beltgey
document.querySelector("#score-0").textContent = 0;

document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;

document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("шоо :" + dice);
