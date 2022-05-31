export default function Controls ({
  buttonCafeteria,
  buttonFireplace,
  buttonForrest,
  buttonPause,
  buttonPlay,
  buttonRain,
  backgroundImage,
  minutesDisplay,
  
}){
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
    buttonForrest.classList.remove('active')
    buttonCafeteria.classList.toggle('active')
    buttonFireplace.classList.remove('active')
    buttonRain.classList.remove('active')
    backgroundImage.classList.toggle('clickedCafeteria')
    backgroundImage.classList.remove('clickedRain')
    backgroundImage.classList.remove('clickedForrest')
    backgroundImage.classList.remove('clickedFireplace')

  }

  return {
    play,
    pause,
    stop,
    activeCafeteria,
    activeFireplace,
    activeForrest,
    activeRain,
    minutesDisplay
  }

 }
