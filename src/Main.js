import { Star } from './Star.js'

const Main = {
  start() {
    Star.createStar()
    Star.checkOrientationAndResize()
  }
}

export { Main }
