class Transition {
    currentState: string;
    inputSymbol: string;
    outputSymbol: string;
    direction: 'L' | 'R';
    nextState: string;

    constructor(currentState: string, inputSymbol: string, outputSymbol: string, direction: 'L' | 'R', nextState: string) {
        this.currentState = currentState;
        this.inputSymbol = inputSymbol;
        this.outputSymbol = outputSymbol;
        this.direction = direction;
        this.nextState = nextState;
    }
}