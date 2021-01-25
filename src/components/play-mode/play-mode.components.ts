import { ceilItem, winner } from "./index";
import { WIN_COMB } from "../index";

export class PlayMode {
    isEnabled: boolean = false;

    isZero: boolean = false;

    counter: number = 0;

    finishGame: boolean = false;

    winName: string = "";

    init() {
        this.addEventListener();
    }

    addEventListener() {
        const bodyIE: any = document.querySelector("body");
        bodyIE.addEventListener("click", (event: any) => {
            if (!this.isEnabled && !this.finishGame) {
                this.onCeilClick(event);
                this.isZero = !this.isZero;
            }
        });
    }

    onCeilClick(event: any) {
        if (event.target.closest(".zero") || event.target.closest(".crest")) {
            return;
        }

        if (event.target.closest(".init-game-ceil")) {
            const audio: any = new Audio();
            this.counter += 1;
            this.isEnabled = true;
            setTimeout(() => {
                this.isEnabled = false;
            }, 900);
            event.target.insertAdjacentHTML("beforeend", ceilItem(this.isZero));
            !this.isZero ? event.target.classList.add("cross") : event.target.classList.add("zero");
            !this.isZero ? (audio.src = "./assets/audio/cross.mp3") : (audio.src = "./assets/audio/zero.mp3");
            audio.play();
            this.isWin();
        }
    }

    isWin() {
        const ceil: any = document.querySelectorAll(".init-game-ceil");
        const field: any = document.querySelector(".init-game-field");
        if (this.counter === 9) {
            document.body.insertAdjacentHTML("beforeend", winner("Draw"));
            field.classList.add("field-hide");
            this.winName = "Draw";
            this.finishGame = true;
        }

        WIN_COMB.forEach((el: Array<number>, index: number, array: Array<any>) => {
            if (
                ceil[array[index][0]].classList.contains("cross") &&
                ceil[array[index][1]].classList.contains("cross") &&
                ceil[array[index][2]].classList.contains("cross")
            ) {
                setTimeout(() => {
                    ceil[array[index][0]].classList.add("finish");
                    ceil[array[index][1]].classList.add("finish");
                    ceil[array[index][2]].classList.add("finish");
                });
                document.body.insertAdjacentHTML("beforeend", winner("Cross"));
                field.classList.add("field-hide");
                this.winName = "Cross";
                this.finishGame = true;
            }

            if (
                ceil[array[index][0]].classList.contains("zero") &&
                ceil[array[index][1]].classList.contains("zero") &&
                ceil[array[index][2]].classList.contains("zero")
            ) {
                setTimeout(() => {
                    ceil[array[index][0]].classList.add("finish");
                    ceil[array[index][1]].classList.add("finish");
                    ceil[array[index][2]].classList.add("finish");
                });
                document.body.insertAdjacentHTML("beforeend", winner("Zero"));
                field.classList.add("field-hide");
                this.winName = "Zero";
                this.finishGame = true;
            }
        });
    }

    onDischarge() {
        this.isEnabled = false;
        this.isZero = false;
        this.counter = 0;
        this.finishGame = false;
        this.winName = "";
    }
}
