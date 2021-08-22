// get all keys
const keys = document.querySelectorAll('.key')

// play notes
const playNote = event => {
  let audioKeyCode = getKeyCode(event)

  // type or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  // if key exist
  const cantFoundAndKey = !key
  if (cantFoundAndKey) {
    return
  }

  // play audio
  addPlayingClass(key)
  playAudio(audioKeyCode)
}

function getKeyCode(event) {
  // keyCode
  let keyCode

  const isKeyboard = event.type === 'keydown'
  if (isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0
  audio.play()
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function removePlayingClass(event) {
  event.target.classList.remove('playing')
}

function registerEvents() {
  // click with mouse
  keys.forEach(key => {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayingClass)
  })

  // keyboard type
  window.addEventListener('keydown', playNote)
}

window.addEventListener('load', registerEvents)
