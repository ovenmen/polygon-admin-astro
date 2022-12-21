import { makeAutoObservable } from "mobx";

class Timer {
    secondsPassed = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increaseTimer() {
        this.secondsPassed += 1;
    }

    decreaseTimer() {
        this.secondsPassed -= 1;
    }
}

export const timer = new Timer();
