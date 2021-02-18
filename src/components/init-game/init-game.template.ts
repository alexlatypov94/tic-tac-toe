import "./init-game.scss"

export const title: string = `
    <h1 class = "init-game-title">Tic Tac Toe</h1>
`

export const field: string = `
    <div class = "init-game-field"></div>
`

export function ceil(number: number): string {
    return `<div class = "init-game-ceil" data-ceil-number = "${number}"></div>`
} 

export const newGame: string = `
    <button class = "init-game-btn" type = "button">New Game</button>
`