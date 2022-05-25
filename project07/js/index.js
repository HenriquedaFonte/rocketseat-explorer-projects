
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import { 
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  displayMinutes,
  displaySeconds
 } from "./elements.js"


let minutes = Number(displayMinutes.textContent)

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff
})

const timer = Timer ({
  displayMinutes,
  displaySeconds,
  resetControls: controls.reset, 
  minutes     
})

const sound = Sounds()

Events({controls, timer, sound})


