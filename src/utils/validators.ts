export const validateTapeContent = (tapeContent: string): boolean => {
    const validCharacters = /^[01]*$/; // Assuming tape content consists of binary digits
    return validCharacters.test(tapeContent);
};

export const validateTransitionRules = (rules: any[]): boolean => {
    return rules.every(rule => 
        rule.hasOwnProperty('currentState') &&
        rule.hasOwnProperty('inputSymbol') &&
        rule.hasOwnProperty('outputSymbol') &&
        rule.hasOwnProperty('direction') &&
        rule.hasOwnProperty('nextState')
    );
};

export const validateHeadPosition = (headPosition: number, tapeLength: number): boolean => {
    return headPosition >= 0 && headPosition < tapeLength;
};