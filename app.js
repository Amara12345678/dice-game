//toglomii global huwisagchid

//togloom duussan esehiig hadgalah tolwiin huwisagch
var isNewGame;
//idwehitei toglogch
var activePlayer;
//tsugluulsan onoo
var scores;
//tsugluulj bgaa onoo
var roundScore;
//shoo
var diceDom = document.querySelector(".dice");

//togloomiig ehluulne
initGame();
//togloomiig shineer ehleh function
function initGame() {
  //togloom ehhlee tolow
  isNewGame = true;
  // toglogchiin eeljiig hadgalah huwsagch, 1dugeer toglogchiig 0, 2dugaar toglogchiig 1 gej temdgely
  activePlayer = 0;
  //toglogchdiin tsugluulsan onoog hadgalah huwisagch
  scores = [0, 0];
  //toglogchiin eeljindee tsugluulj baigaa onoog hadgalah
  roundScore = 0;
  //shoonii ali talaaraa buusniig hadgalah huwisagch 1ees 6 huwshagchiig sanamsarguuger vvsgej ugnu
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // document.querySelector("#score-0").textContent = dice;

  // document.querySelector("#score-1").textContent = dice;

  //togloom ehlehed beltgey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //toglogchidiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player-1";
  document.getElementById("name-1").textContent = "Player-2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

//shoog shideh event listner
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
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
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна new game товчийг дарж шинээр эхлэнэ үү!");
  }
});

//hold towchiin event listner
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    //toglogchiin eeljiin onoog global onoond nemj ugnu
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //delgetsdeer toog uurchilnu
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    //ug toglogch hojson esehiig shsalgah onoo 100gaas ih
    if (scores[activePlayer] >= 100) {
      //togloomiig duusssan tolowt oruulna
      isNewGame = false;
      //yalagch texiig haruulna
      document.getElementById("name-" + activePlayer).textContent = "YOU WIN";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      //eeljiig solino
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна new game товчийг дарж шинээр эхлэнэ үү!");
  }
});

//ene function n eeljiig daraachiin toglogchruu shiljuuldeg
function switchToNextPlayer() {
  // DRY- don't repeat yourself
  //eeljiin onooog 0 bolgono
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
}

//shine togloom ehliuuleh towchnii event listner
//new game
document.querySelector(".btn-new").addEventListener("click", initGame);
