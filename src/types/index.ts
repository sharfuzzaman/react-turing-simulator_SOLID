export interface Transition {
    currentState: string;
    inputSymbol: string;
    outputSymbol: string;
    direction: 'L' | 'R';
    nextState: string;
}

export interface Tape {
    content: string[];
    headPosition: number;
}

export interface TuringMachineConfig {
    initialState: string;
    tape: Tape;
    transitions: Transition[];
}

export interface ExecutionResult {
    finalState: string;
    finalTape: Tape;
    steps: number;
}