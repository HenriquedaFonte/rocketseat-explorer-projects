
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
  minutesDisplay,
  buttonLight,
  buttonDark,
  clickButtonForrest,
  clickButtonCafeteria,
  clickButtonFireplace,
  clickButtonRain,
  volumeCafeteria,
  volumeFireplace,
  volumeForrest,
  volumeRain
  
} from "./elements.js"

export default function Event({controls, timer, sound}){

  clickButtonForrest.addEventListener('click', function () {    
    controls.activeForrest()
    sound.resetAudio()
    if (buttonForrest.classList.contains('active')) {
      sound.setVolume()
      sound.forrestAudioPlay();
    }  
  })
  
  clickButtonRain.addEventListener('click', function () {
    controls.activeRain()
    sound.resetAudio()
       if (buttonRain.classList.contains('active')) {
        sound.setVolume()
        sound.rainAudioPlay();      
    } 
  })
  
  clickButtonCafeteria.addEventListener('click', function () {     
    controls.activeCafeteria()
    sound.resetAudio()
    if (buttonCafeteria.classList.contains('active')) {
      sound.setVolume()
      sound.cafeteriaAudioPlay();
    }   
  })
  
  clickButtonFireplace.addEventListener('click', function () {
    controls.activeFireplace()
    sound.resetAudio()
    if (buttonFireplace.classList.contains('active')) {
      sound.setVolume()
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

  volumeCafeteria.addEventListener('mousemove', function(){    
    sound.audioCafeteria.volume = this.value;
  })

  volumeRain.addEventListener('mousemove', function(){    
    sound.audioRain.volume = this.value;
  })

  volumeForrest.addEventListener('mousemove', function(){    
    sound.audioForrest.volume = this.value;
  })

  volumeFireplace.addEventListener('mousemove', function(){    
    sound.audioFireplace.volume = this.value;
  })

  buttonDark.addEventListener('click', function(){
    controls.setDark()
  })

  buttonLight.addEventListener('click', function(){
    controls.setLight()
  })
}
