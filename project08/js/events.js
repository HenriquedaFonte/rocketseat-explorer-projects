
import { 
  buttonCafeteria,
  buttonDecreaseTime,
  buttonFireplace,
  buttonForrest,
  buttonIncreaseTime,
  buttonPause,
  buttonPlay,
  buttonRain,
  buttonStop,
  minutesDisplay
} from "./elements.js"

export default function Event({controls, timer, sound}){

  buttonForrest.addEventListener('click', function () {    
    controls.activeForrest()
    sound.resetAudio()
    if (buttonForrest.classList.contains('active')) {
      sound.forrestAudioPlay();
    }  
  })
  
  buttonRain.addEventListener('click', function () {
    controls.activeRain()
    sound.resetAudio()
       if (buttonRain.classList.contains('active')) {
      sound.rainAudioPlay();
    } 
  })
  
  buttonCafeteria.addEventListener('click', function () {
    controls.activeCafeteria()
    sound.resetAudio()
    if (buttonCafeteria.classList.contains('active')) {
      sound.cafeteriaAudioPlay();
    }   
  })
  
  buttonFireplace.addEventListener('click', function () {
    controls.activeFireplace()
    sound.resetAudio()
    if (buttonFireplace.classList.contains('active')) {
      sound.fireplaceAudioPlay();
    } 
   })
  
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countDown()
  })
  
  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.pause()    
  })
  
  buttonStop.addEventListener('click', function(){
    controls.stop()
    timer.reset()
  })
  
  buttonIncreaseTime.addEventListener('click', function(){
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
  })
  
  buttonDecreaseTime.addEventListener('click', function(){  
    if (minutesDisplay.textContent <= 4) {
      minutesDisplay.textContent = "00"
    } else {
      minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
    }
  })

}
