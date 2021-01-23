import { ceilItem } from "./index"

export class PlayMode {
    isEnabled: boolean = false;
    isZero: boolean = false;
    classZero: string = "zero"
    classCrest: string = "crest"

    public init() {
        this.addEventListener()
    }

    private addEventListener() {
        const bodyIE: any = document.querySelector("body");
        bodyIE.addEventListener("click", (event: any) => {
            this.onCeilClick(event)
            this.isZero = !this.isZero
        })
    }

    private onCeilClick(event: any) {
        if (event.target.closest(".zero") || event.target.closest(".crest")) {
            return
        }

        if (event.target.closest(".init-game-ceil")) {
            const dataNumber: number = Number(event.target.getAttribute("data-ceil-number"))
            
            event.target.insertAdjacentHTML("beforeend", ceilItem(this.isZero))
            !this.isZero
                ? event.target.classList.add("crest")
                : event.target.classList.add("zero")
        }
    }
}