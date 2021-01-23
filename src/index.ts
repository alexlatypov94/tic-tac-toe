import "./assets/css/style.scss";
import { InitGame, PlayMode } from "./components/index"

const gameField = new InitGame()
const play = new PlayMode()
gameField.init()

play.init()