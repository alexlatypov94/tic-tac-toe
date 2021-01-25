import "./assets/css/style.scss";
import { InitGame, PlayMode } from "./components/index"

const gameField = new InitGame()
const play = new PlayMode()
gameField.init()
play.init()


const bodyIE: any = document.querySelector("body")
bodyIE.addEventListener("click", (event)=> {
    if(event.target.closest(".init-game-btn")){
        document.body.innerHTML = ""
        gameField.init()
        play.onDischarge()
    }
    
})