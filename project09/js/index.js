//Minha solucao
// function play() {
//   const pause = document.querySelector('.pause')
//   const play = document.querySelector('.play')
//   play.classList.add('hide')
//   pause.classList.remove('hide')
// }

// function pause() {
//   const pause = document.querySelector('.pause')
//   const play = document.querySelector('.play')
//   pause.classList.add('hide')
//   play.classList.remove('hide')
// }

import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import { 
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  displayMinutes,
  displaySeconds
 } from "./elements.js"

//solucao Mayk


let minutes = Number(displayMinutes.textContent)

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff
})

const timer = Timer ({
  displayMinutes,
  displaySeconds,
  resetControls: controls.reset, 
  minutes     
})

const sound = Sounds()

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countDown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.pause() 
  sound.pressButton()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSoundOn.addEventListener('click', function () {
  controls.soundOn()
  sound.bgAudio.play()
})

buttonSoundOff.addEventListener('click', function () {
  controls.soundOff()
  sound.bgAudio.pause()
})

buttonSet.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }
 
  
  timer.updateDisplay(newMinutes, 0)
  timer.minutesUpdate(newMinutes)
})
