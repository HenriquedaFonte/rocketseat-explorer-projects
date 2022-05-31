import Timer from "./timer.js";
import Controls from "./controls.js";
import Event from "./events.js";
import Sounds from "./sounds.js";
import {  
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
  secondsDisplay
} from "./elements.js";


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  initialMinutes
})

const controls = Controls({
  buttonCafeteria,
  backgroundImage,
  buttonDecreaseTime,
  buttonFireplace,
  buttonForrest,
  buttonIncreaseTime,
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonRain, 
})

const sound = Sounds()

Event({controls, timer, sound})








