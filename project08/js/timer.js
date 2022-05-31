export default function timer({
  minutesDisplay,
  secondsDisplay,
  initialMinutes,
  timerTime
}){

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  
  function countDown() {
      timerTime = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      const isFinished = minutes == 0 && seconds == 0  
      
      if (isFinished){
        updateDisplay(initialMinutes, 0)
        reset()
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

  function pause() {
    clearTimeout(timerTime)
  }

  function reset() {
    updateDisplay(initialMinutes, 0)
    clearTimeout(timerTime)
  }

  return {
    countDown,
    updateDisplay,
    pause,
    reset
  }
}


