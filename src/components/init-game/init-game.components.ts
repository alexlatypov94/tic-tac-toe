import { field, ceil, newGame, title } from "./index"

export class InitGame {
    public init() {
        document.body.insertAdjacentHTML("beforeend", title)
        document.body.insertAdjacentHTML("beforeend", field)
        document.body.insertAdjacentHTML("beforeend", newGame)
        this.initCiel()
    }

    public initCiel() {
        const gameField: any = document.querySelector('.init-game-field')
        for (let i: number = 0; i < 9; i += 1) {
            gameField.insertAdjacentHTML("beforeend", ceil(i))
        }
        
    }
}