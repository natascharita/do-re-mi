// Global Constants
const clueHoldTime = 400;
const cluePauseTime = 300;
const nextClueWaitTime = 700;
const max = 0;
const min = 9;

// Global Variables
var pattern = [];
var currentMelody = 0;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

// Melodies
var doeADeer = [1, 2, 3, 1, 3, 1, 3];
var rayADrop = [2, 3, 4, 4, 3, 2, 4];
var meAName = [3, 4, 5, 3, 5, 3, 5];
var farALong = [4, 5, 6, 6, 5, 4, 6];
var sewANeedle = [5, 1, 2, 3, 4, 5, 6];
var laANote = [6, 2, 3, 4, 5, 1, 7];
var teaADrink = [7, 3, 4, 5, 6, 7, 8];
var backToDo = [8, 7, 6, 4, 7, 5, 8, 5, 3, 2];
var melodies = [doeADeer, rayADrop, meAName, farALong, sewANeedle,
               laANote, teaADrink, backToDo];


function startGame() {
  //initialize game variables
  changePattern();
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + "in" + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guessed:" + btn);
  if (!gamePlaying) {
    return;
  }
  // add game logic here

  if (pattern[guessCounter] == btn) {
    guessCounter++;

    if (guessCounter <= progress) {
      return;
    } else {
      guessCounter = 0;
      progress++;
      if (progress == pattern.length) {
        winGame();
      } else {
        playClueSequence();
      }
    }
  } else {
    loseGame();
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost. Try again!");
}

function winGame() {
  stopGame();
  alert("Game Over. You won! Try the next round.");
}

function changePattern() {
  pattern = [];
  var length = melodies[currentMelody].length;
  for (var i = 0; i < length; i ++) {
    pattern.push(melodies[currentMelody][i])
  }
  if (currentMelody < melodies.length - 1) {
    currentMelody = currentMelody + 1;
  } else {
    currentMelody = 0;
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.63,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392,
  6: 440,
  7: 493.88,
  8: 523.25
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// I was running into errors with playing the tones, and I added this snippet from google which fixed it
// https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
document.querySelector("button").addEventListener("click", function() {
  context.resume().then(() => {
    console.log("Playback resumed successfully");
  });
});
