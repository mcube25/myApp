'use strict';
var sequence = [];
var playerTurn = false;
var soundURLs = [
  "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", 
  "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", 
  "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3", 
  "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
];
var sounds = [];
var playerIndex = 0;
var buttons = [];
var gameOver = false;
var strict = false;
var normBlinkLen = 700;
var fastBlinkLen = 300;
var normBlinkInt = 50;
var points = 1;
for (let i in soundURLs){
  sounds[i] = new Audio(soundURLs[i]);
}

var newGame = function(){
  sequence = [];
  playerTurn = false;
  playerIndex = 0;
  points = 0;
  updateCount(++points);
};

var chooseNext = function(){
  sequence.push(Math.floor(Math.random() * 3 + 0.5));
};

var playSequence = function(seq = [], blinkLen = normBlinkLen, spacing = normBlinkInt){ 
  playerTurn = false;
  for (let i in seq){
    let on = setTimeout(function(){
      sounds[seq[i]].play();
      buttons[seq[i]].classList.add("on");
      let off = setTimeout(function(){
        buttons[seq[i]].classList.remove("on");
      }, blinkLen - spacing);
    }, blinkLen * i);
  }
  var p = setTimeout(function(){
    playerTurn = true;
  }, blinkLen * seq.length)
};

var checkCorrect = function(btn) {
  if (btn === sequence[playerIndex]){
    playerIndex ++;
    playSequence([btn], fastBlinkLen);
    if (playerIndex === sequence.length){
      updateCount(++points);
      if (points <= 20){
        var j = setTimeout(function(){
          playerIndex = 0;
          playerTurn = false;
          playSequence([2, 3, 1, 0], fastBlinkLen);
          var t = setTimeout(function(){
            chooseNext();
            playSequence(sequence, normBlinkLen);
          }, fastBlinkLen * 6);
        }, normBlinkLen);
      }else {
        var j = setTimeout(function(){
          playerIndex = 0;
          playerTurn = false;
          updateCount(":]");
          for (let k = 0; k < 3; k ++){
            let n = setTimeout(function(){
              playSequence([2, 3, 1, 0], fastBlinkLen);
            }, (fastBlinkLen + 100) * 4 * k);
          }
          var c = setTimeout(function(){
            newGame();
            chooseNext();
            playSequence(sequence, normBlinkLen);
          }, (fastBlinkLen + 100) * 4 * 3);
        }, 1000);
      }
    }
  }else{
    updateCount("!!");
    var strictNow = strict;
    var t = setTimeout(function(){
      if (strictNow){
        newGame();
        chooseNext();
        playSequence(sequence, normBlinkLen);
      }else {
        playerIndex = 0;
        playerTurn = false;
        updateCount(points);
        playSequence(sequence, normBlinkLen);
      }
    }, normBlinkLen * 2);
  }
};

var updateCount = function(msg){
  var count = document.getElementById("count");
  count.innerHTML = "";
  if (typeof msg === "number"){
    if (msg < 10){
      count.innerHTML += "0";
    }
  }
  count.innerHTML += String(msg);
};

document.addEventListener("DOMContentLoaded", function(){
  let btns = document.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i ++){
    btns[i].onclick = function(){
      if (playerTurn && !gameOver){
        checkCorrect(i);
      }
    };
    buttons[i] = btns[i];
  }
  document.getElementById("start").onclick = function(){
    newGame();
    chooseNext();
    playSequence(sequence, normBlinkLen);
  };
  document.getElementById("strict").onclick = function(){
    strict = !strict;
    document.getElementById("strict-ind").classList.toggle("on", strict);
  };
});