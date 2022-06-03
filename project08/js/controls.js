import { volumeCafeteria, volumeRain, volumeFireplace, volumeForrest } from "./elements.js"
export default function Controls({
  buttonCafeteria,
  buttonFireplace,
  buttonForrest,
  buttonPause,
  buttonPlay,
  buttonRain,
  backgroundImage,
  minutesDisplay,
  buttonDark,
  buttonLight,
  darkMode
 
  
}) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function stop() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }


  function activeFireplace() {
    volumeFireplace.value = 0.5
    buttonForrest.classList.remove('active')
    buttonCafeteria.classList.remove('active')
    buttonFireplace.classList.toggle('active')
    buttonRain.classList.remove('active')
    backgroundImage.classList.toggle('clickedFireplace')
    backgroundImage.classList.remove('clickedRain')
    backgroundImage.classList.remove('clickedForrest')
    backgroundImage.classList.remove('clickedCafeteria')
  }

  function activeForrest() {
    volumeForrest.value = 0.5
    buttonForrest.classList.toggle('active')
    buttonCafeteria.classList.remove('active')
    buttonFireplace.classList.remove('active')
    buttonRain.classList.remove('active')
    backgroundImage.classList.toggle('clickedForrest')
    backgroundImage.classList.remove('clickedRain')
    backgroundImage.classList.remove('clickedFireplace')
    backgroundImage.classList.remove('clickedCafeteria')
  }

  function activeRain() {
    volumeRain.value = 0.5
    buttonForrest.classList.remove('active')
    buttonCafeteria.classList.remove('active')
    buttonFireplace.classList.remove('active')
    buttonRain.classList.toggle('active')
    backgroundImage.classList.toggle('clickedRain')
    backgroundImage.classList.remove('clickedForrest')
    backgroundImage.classList.remove('clickedFireplace')
    backgroundImage.classList.remove('clickedCafeteria')
  }

  function activeCafeteria() {
    volumeCafeteria.value = 0.5
    buttonForrest.classList.remove('active')
    buttonCafeteria.classList.toggle('active')
    buttonFireplace.classList.remove('active')
    buttonRain.classList.remove('active')
    backgroundImage.classList.toggle('clickedCafeteria')
    backgroundImage.classList.remove('clickedRain')
    backgroundImage.classList.remove('clickedForrest')
    backgroundImage.classList.remove('clickedFireplace')
  }

  function setDark() {
    buttonDark.classList.add('hide')
    buttonLight.classList.remove('hide')
    darkMode.classList.toggle('dark')
  }

  function setLight() {
    buttonDark.classList.remove('hide')
    buttonLight.classList.add('hide')
    darkMode.classList.remove('dark')
  }


  return {
    play,
    pause,
    stop,
    activeCafeteria,
    activeFireplace,
    activeForrest,
    activeRain,
    minutesDisplay,
    setDark,
    setLight
  }
}
