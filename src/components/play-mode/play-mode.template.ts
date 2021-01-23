import "./play-mode.scss"

export function ceilItem(isZero: boolean) {

    return !isZero ? `<img class = "play-mode-img" src = "./assets/img/crest.jpg">`
                   : `<img class = "play-mode-img" src = "./assets/img/zero.jpg">`
}