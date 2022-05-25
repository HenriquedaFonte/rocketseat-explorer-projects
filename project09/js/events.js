import { 
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff} from "./elements.js"

export default function events({controls, timer, sound}) {

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
    sound.bgAudio.pause()
  })
  
  buttonSoundOff.addEventListener('click', function () {
    controls.soundOff()
    sound.bgAudio.play()
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


}