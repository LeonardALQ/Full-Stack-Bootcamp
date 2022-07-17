let delay = 300
let isGameOver = false
let correctOrder = []
let i = 0
$(document).one('keydown', nextLevel)

function animateButton(button) {
  let btnClass = '#' + button
  $(btnClass).addClass('pressed')
  setTimeout(function () {
    $(btnClass).removeClass('pressed')
  }, delay)
}

function playButton(button) {
  let audio
  switch (button) {
    case 'blue':
      audio = new Audio('sounds/blue.mp3')
      break
    case 'green':
      audio = new Audio('sounds/green.mp3')
      break
    case 'red':
      audio = new Audio('sounds/red.mp3')
      break
    case 'yellow':
      audio = new Audio('sounds/yellow.mp3')
      break
  }
  audio.play()
  animateButton(button)
}

function getRandomButton() {
  let buttons = ['blue', 'green', 'red', 'yellow']
  let random = Math.floor(Math.random() * 4)
  return buttons[random]
}

function nextLevel() {
  let title = 'Level ' + (correctOrder.length + 1)
  $('#level-title').text(title)
  setTimeout(function () {
    let nextButton = getRandomButton()
    correctOrder.push(nextButton)
    setTimeout(playButton, 300, nextButton);
  }, delay)
}

function gameOver() {
  $('#level-title').text('Game Over, Press Any Key to Restart')
  $('body').addClass('game-over')
  setTimeout(function () {
    $('body').removeClass('game-over')
  }, 100)
  let gameOverAudio = new Audio('sounds/wrong.mp3')
  gameOverAudio.play()
  isGameOver = true
}

$(document).on('keydown', function () {
  if (isGameOver) {
    correctOrder = []
    i = 0
    isGameOver = false
    nextLevel()
  }
})

$('.btn').on('click', function () {
  let btnPressed = this.getAttribute('id')
  if (btnPressed != correctOrder[i]) {
    gameOver()
  } else {
    i++
    playButton(btnPressed)
  }
  if (i >= correctOrder.length) {
    i = 0
    nextLevel()
  }
})
