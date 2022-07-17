let drums = document.querySelectorAll(".drum");
let animationDelay = 300;
let audio;
for (let i = 0; i < drums.length; i++) { 
  drums[i].addEventListener("click", drumClicked);
}

document.addEventListener("keydown", drumPressed);
function drumClicked() { 
  playDrum(this.textContent);
}

function drumPressed() { 
  playDrum(event.key);
}

function playDrum(key) { 
  switch(key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
  } 
  buttonAnimation(key);
  audio.play();
}

function buttonAnimation(key){ 
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function() { 
    document.querySelector("." + key).classList.remove("pressed")
  }, animationDelay);
}
