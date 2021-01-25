import "./play-mode.scss"

const cross: string = `
    <svg class = "cross">
        <line class = "first" x1 = "10" y1 = "10" x2 = "80" y2= "80" stroke = "red" stroke-width = "10" stroke-linecap="round" />
        <line class = "second" x1 = "80" y1 = "10" x2 = "10" y2= "80" stroke = "red" stroke-width = "10" stroke-linecap="round" />
    </svg>
`

const circle: string = `
    <svg class = "circle">
        <circle r="40" cx="47" cy="47" stroke="blue" stroke-width = "10" fill="none" stroke-linecap="round"/>
    </svg>
`

export function ceilItem(isZero: boolean) {

    return !isZero ? cross
                   : circle
}

export function winner(winName: string) {
    return winName !== "Draw" ? `<h1 class = "winner">${winName} is WIN</h1>` : `<h1 class = "winner">${winName}</h1>`
}


