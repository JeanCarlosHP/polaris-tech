import { Star } from './Star.js'
import { Verification } from './Verification.js'

const Main = {
  start() {
    Star.createStar()
    Star.checkOrientationAndResize()
    Verification.checkUserPass()
  }
}

export { Main }
