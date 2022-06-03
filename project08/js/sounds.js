export default function Sounds() {
  const audioForrest = new Audio('./audio/Floresta.wav')
  const audioRain = new Audio('./audio/Chuva.wav')
  const audioCafeteria = new Audio('./audio/Cafeteria.wav')
  const audioFireplace = new Audio('./audio/Lareira.wav')

  function resetAudio() {
    audioCafeteria.pause()
    audioRain.pause()
    audioFireplace.pause()
    audioForrest.pause()
  }

  function forrestAudioPlay() {
    audioForrest.play()
  }
  function rainAudioPlay() {
    audioRain.play()
  }
  function cafeteriaAudioPlay() {
    audioCafeteria.play()
  }
  function fireplaceAudioPlay() {
    audioFireplace.play()
  }

  function setVolume() {
    audioCafeteria.volume = 0.5
    audioRain.volume = 0.5
    audioFireplace.volume = 0.5
    audioForrest.volume = 0.5
  }


  audioCafeteria.loop = true
  audioRain.loop = true
  audioFireplace.loop = true
  audioForrest.loop = true

  return {
    resetAudio,
    forrestAudioPlay,
    rainAudioPlay,
    cafeteriaAudioPlay,
    fireplaceAudioPlay,
    audioCafeteria,
    audioFireplace,
    audioForrest,
    audioRain,
    setVolume
  }
}
