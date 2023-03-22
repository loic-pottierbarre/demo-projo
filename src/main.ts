import "./style.css"

// @ts-ignore
import blueLight from "/projector-light_blue.png"
// @ts-ignore
import purpleLight from "/projector-light_purple.png"
// @ts-ignore
import whiteLight from "/projector-light_white.png"
// @ts-ignore
import yellowLight from "/projector-light_yellow.png"

enum LightColor {
    WHITE = whiteLight,
    BLUE = blueLight,
    YELLOW = yellowLight,
    PURPLE = purpleLight

}

const colorList = [LightColor.WHITE, LightColor.BLUE, LightColor.YELLOW, LightColor.PURPLE]
let currentColor = 0
let timeout = 300
let interval: ReturnType<typeof setInterval> | null = null


const changeLightColor = (color: LightColor) => {
    const light = document.querySelector<HTMLImageElement>(".ray__img")
    if (light) {
        light.src = color as unknown as string
    }
}

const startInterval = () => {
    interval = setInterval(() => {
        changeLightColor(colorList[currentColor])
        currentColor = (currentColor + 1) % colorList.length
    }, timeout)
}

const stopInterval = () => {
    if (interval) {
        clearInterval(interval)
        interval = null
    }
}

const buttonViolet = document.querySelector<HTMLButtonElement>(".btn-violet")
const buttonBlue = document.querySelector<HTMLButtonElement>(".btn-blue")
const buttonYellow = document.querySelector<HTMLButtonElement>(".btn-yellow")
const buttonWhite = document.querySelector<HTMLButtonElement>(".btn-white")
const buttonAll = document.querySelector<HTMLButtonElement>(".btn-all")

buttonViolet?.addEventListener("click", () => {
    stopInterval()
    changeLightColor(LightColor.PURPLE)
})

buttonBlue?.addEventListener("click", () => {
    stopInterval()
    changeLightColor(LightColor.BLUE)
})

buttonYellow?.addEventListener("click", () => {
    stopInterval()
    changeLightColor(LightColor.YELLOW)
})

buttonWhite?.addEventListener("click", () => {
    stopInterval()
    changeLightColor(LightColor.WHITE)
})

buttonAll?.addEventListener("click", () => {
    startInterval()
})