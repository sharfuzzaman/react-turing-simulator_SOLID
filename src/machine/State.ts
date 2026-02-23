export class State {
    private currentState: string;

    constructor(initialState: string) {
        this.currentState = initialState;
    }

    getCurrent(): string {
        return this.currentState;
    }

    transitionTo(nextState: string) {
        this.currentState = nextState;
    }
}
