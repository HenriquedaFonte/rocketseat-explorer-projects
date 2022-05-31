const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseTime = document.querySelector('.addTime')
const buttonDecreaseTime = document.querySelector('.removeTime')
const buttonForrest = document.querySelector('.forrest')
const buttonRain = document.querySelector('.rain')
const buttonCafeteria = document.querySelector('.cafeteria')
const buttonFireplace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const backgroundImage = document.querySelector('#page')

const initialMinutes = minutesDisplay.textContent

export {
  buttonCafeteria,
  backgroundImage,
  buttonDecreaseTime,
  buttonFireplace,
  buttonForrest,
  buttonIncreaseTime,
  buttonPause,
  buttonPlay,
  buttonRain,
  buttonStop,
  initialMinutes,
  minutesDisplay,
  secondsDisplay,
}