const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseTime = document.querySelector('.addTime')
const buttonDecreaseTime = document.querySelector('.removeTime')
const clickButtonForrest = document.querySelector('.forrest')
const clickButtonRain = document.querySelector('.rain')
const clickButtonCafeteria = document.querySelector('.cafeteria')
const clickButtonFireplace = document.querySelector('.fireplace')
const buttonForrest = document.querySelector('#cardForrest')
const buttonRain = document.querySelector('#cardRain')
const buttonCafeteria = document.querySelector('#cardCafeteria')
const buttonFireplace = document.querySelector('#cardFireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const backgroundImage = document.querySelector('#page')
const darkMode = document.querySelector('.theme')
const buttonDark = document.querySelector('#darkTheme')
const buttonLight = document.querySelector('#lightTheme')
const volumeForrest = document.getElementById('volumeForrest');
const volumeRain = document.getElementById('volumeRain');
const volumeCafeteria = document.getElementById('volumeCafeteria');
const volumeFireplace = document.getElementById('volumeFireplace');
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
  buttonDark,
  buttonLight,
  darkMode,
  clickButtonForrest,
  clickButtonCafeteria,
  clickButtonFireplace,
  clickButtonRain,
  volumeCafeteria,
  volumeFireplace,
  volumeForrest,
  volumeRain  
}