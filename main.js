const body = document.body

let numberOfStar = 30
for (let i = 0; i < numberOfStar; i++) {
  const starImage = document.createElement('img')
  starImage.id = 'star'
  starImage.src = 'img/star.svg'
  body.appendChild(starImage)
}

changeStarPosition()

function changeStarPosition() {
  const viewWidth = window.screen.width
  const viewHeight = window.screen.height

  const stars = document.querySelectorAll('img#star')

  for (const star of stars) {
    const topRandom = Math.random() * (viewHeight - 10) - 10
    const leftRandom = Math.random() * (viewWidth - 10) - 10

    star.style.top = `${topRandom}px`
    star.style.left = `${leftRandom}px`
  }

  setTimeout(changeStarPosition, 6000)
}
