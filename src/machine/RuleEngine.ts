import { Rule } from './types';

export class RuleEngine {
    constructor(private rules: Rule[]) {}

    findRule(state: string, readSymbol: string): Rule | null {
        return this.rules.find(r => r.state === state && r.read === readSymbol) || null;
    }
}
