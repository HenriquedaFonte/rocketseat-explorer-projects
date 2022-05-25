export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff
  
}) {

  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function soundOn(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
  }

  function soundOff(){
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function getMinutes(){
    let newMinutes = prompt('Quantos minutos?') || 0
    if (!newMinutes) {
      return false
    }
   
    return newMinutes
  }


  return {
    reset,
    play,
    pause,
    getMinutes,
    soundOn,
    soundOff
  }
}


