export interface Transition {
    currentState: string;
    inputSymbol: string;
    outputSymbol: string;
    direction: 'L' | 'R';
    nextState: string;
}

export interface TuringMachineProgram {
    headPosition: number;
    tapeContent: string[];
    transitions: Transition[];
}

export function parseTmprogJson(jsonData: string): TuringMachineProgram {
    const parsedData = JSON.parse(jsonData);
    
    return {
        headPosition: parsedData.headPosition,
        tapeContent: parsedData.tapeContent,
        transitions: parsedData.transitions.map((transition: any) => ({
            currentState: transition.currentState,
            inputSymbol: transition.inputSymbol,
            outputSymbol: transition.outputSymbol,
            direction: transition.direction,
            nextState: transition.nextState,
        })),
    };
}