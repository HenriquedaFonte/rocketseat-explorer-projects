import Sound from "./sounds.js"


export default function Timer({
  displayMinutes,
  displaySeconds,
  resetControls,
  minutes,
  
}) {
  let timerTimeout

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    displayMinutes.textContent = String(newMinutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeout)
  }

  function countDown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateDisplay()
        Sound().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countDown()
    }, 1000)
  }

  function minutesUpdate(newMinutes) {
    minutes = newMinutes
  }

  function pause() {
    clearTimeout(timerTimeout)
  }

  return {
    countDown,
    reset,
    updateDisplay,
    minutesUpdate,
    pause
  }
}
