export default function Sounds() {
  const buttonPressAudioForrest = new Audio('./audio/Floresta.wav')
  const buttonPressAudioRain = new Audio('./audio/Chuva.wav')
  const buttonPressAudioCafeteria = new Audio('./audio/Cafeteria.wav')
  const buttonPressAudioFireplace = new Audio('./audio/Lareira.wav')

  function resetAudio() {
    buttonPressAudioCafeteria.pause()
    buttonPressAudioRain.pause()
    buttonPressAudioFireplace.pause()
    buttonPressAudioForrest.pause()
  }

  function forrestAudioPlay() {
    buttonPressAudioForrest.play()
  }
  function rainAudioPlay() {
    buttonPressAudioRain.play()
  }
  function cafeteriaAudioPlay() {
    buttonPressAudioCafeteria.play()
  }
  function fireplaceAudioPlay() {
    buttonPressAudioFireplace.play()
  }

  buttonPressAudioCafeteria.loop = true
  buttonPressAudioRain.loop = true
  buttonPressAudioFireplace.loop = true
  buttonPressAudioForrest.loop = true

  return {
    resetAudio,
    forrestAudioPlay,
    rainAudioPlay,
    cafeteriaAudioPlay,
    fireplaceAudioPlay
  }
}
