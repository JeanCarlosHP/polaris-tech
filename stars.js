﻿const body = document.body

let supportsOrientationChange = 'orientationchange' in window,
  orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize'

window.addEventListener(
  orientationEvent,
  function () {
    const stars = document.querySelectorAll('#star')

    for (const star of stars) {
      setStarPosition(star)
    }
  },
  false
)

createStar()

async function createStar() {
  const isBigger = window.screen.height > 767
  const numberOfStars = isBigger ? 50 : 30

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div')
    star.id = 'star'

    setAnimationDuration(star)

    setStarPosition(star)

    body.appendChild(star)

    const sleepTime = Math.trunc(Math.random() * (2000 - 1000) + 1000)

    await sleep(sleepTime)
  }
}

function setAnimationDuration(star) {
  const duration = Math.trunc(Math.random() * (6 - 1) + 1)

  star.style.animationDuration = `${duration}s`
}

function setStarPosition(star) {
  const height = window.screen.height
  const width = window.screen.width

  const topPosition = Math.random() * (height - 5) + 5
  const leftPosition = Math.random() * (width - 5) + 5

  star.style.top = `${topPosition}px`
  star.style.left = `${leftPosition}px`
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
