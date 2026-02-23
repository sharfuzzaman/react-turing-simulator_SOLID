export function parseTmprogTxt(content: string) {
    const lines = content.split('\n').filter(line => line.trim() !== '');
    const headPosition = parseInt(lines[0].trim(), 10);
    const tapeContent = lines[1].trim().split('');
    const transitions = lines.slice(2).map(line => {
        const [currentState, inputSymbol, outputSymbol, direction, nextState] = line.trim().split(' ');
        return {
            currentState,
            inputSymbol,
            outputSymbol,
            direction,
            nextState
        };
    });

    return {
        headPosition,
        tapeContent,
        transitions
    };
}