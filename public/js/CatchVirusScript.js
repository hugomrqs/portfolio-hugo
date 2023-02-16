const screens = document.querySelectorAll('.screen');
const choose_virus_btns = document.querySelectorAll('.choose-virus-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_virus = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_virus_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_virus = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createvirus, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createvirus() {
    const virus = document.createElement('div')
    virus.classList.add('virus')
    const { x, y } = getRandomLocation()
    virus.style.top = `${y}px`
    virus.style.left = `${x}px`
    virus.innerHTML = `<img src="${selected_virus.src}" alt="${selected_virus.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    virus.addEventListener('click', catchvirus)

    game_container.appendChild(virus)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchvirus() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addviruss()
}

function addviruss() {
    setTimeout(createvirus, 1000)
    setTimeout(createvirus, 1500)
}

function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}