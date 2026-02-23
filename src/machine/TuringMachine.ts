
import { IHead } from './head/interfaces/IHead';
import { ITapeReader, ITapeWriter } from './tape';
import { Tape } from './tape';
import { State } from './State';
import { RuleEngine } from './RuleEngine';
import { ProgramConfig } from './types';

interface TuringTape extends ITapeReader, ITapeWriter {}

// Factory interface for true DIP
interface IHeadFactory {
    createHead(startPosition: number): IHead;
}

export class TuringMachine {
    private head: IHead;
    private tape: TuringTape;
    private state: State;
    private ruleEngine: RuleEngine;
    private history: string[] = [];

    // Static factory registry - NO import of Head class!
    private static headFactory: IHeadFactory | null = null;

    // Set factory from outside (in bootstrap)
    static setHeadFactory(factory: IHeadFactory): void {
        TuringMachine.headFactory = factory;
    }

    // Get or lazy-load factory
    private static getHeadFactory(): IHeadFactory {
    if (!TuringMachine.headFactory) {
        // Throw error or lazy-load
        throw new Error(
            'HeadFactory not initialized. ' +
            'Call TuringMachine.setHeadFactory() first or use bootstrap.'
        );
    }
    return TuringMachine.headFactory;
}

    // Constructor overloads for backward compatibility
    constructor(config: ProgramConfig);
    constructor(config: ProgramConfig, head: IHead);
    constructor(config: ProgramConfig, head?: IHead) {
        // True DIP: Use factory or injected head
        if (head) {
            this.head = head; // Use injected abstraction
        } else {
            // Get head from factory - NO knowledge of Head class!
            const factory = TuringMachine.getHeadFactory();
            this.head = factory.createHead(config.headStartPosition);
        }
        
        this.tape = new Tape(config.tape);
        this.state = new State('0');
        this.ruleEngine = new RuleEngine(config.rules);
    }

    // Rest of your existing methods remain EXACTLY the same...
    step(): boolean {
        const symbol = this.tape.readAt(this.head.getPosition());
        console.log(`symbol ${symbol}`);
        const rule = this.ruleEngine.findRule(this.state.getCurrent(), symbol);
        console.log("rule", rule);

        if (!rule) return false;

        // Apply rule
        this.tape.writeAt(this.head.getPosition(), rule.write);
        if (rule.move === 'L') this.head.moveLeft();
        else this.head.moveRight();
        this.state.transitionTo(rule.nextState);

        // Save snapshot
        this.history.push(this.getTapeState());
        return true;
    }

    async runAsync(onStep: () => void, delay = 2000) {
        const executeStep = () => {
            const applied = this.step();
            onStep(); // tell React to update UI

            if (applied) {
                setTimeout(executeStep, delay);
            }
        };

        executeStep();
    }

    getTapeState(): string {
        console.log(this.tape.getTape());
        return this.tape.getTape();
    }

    getHeadPosition(): number {
        return this.head.getPosition();
    }

    getCurrentState(): string {
        return this.state.getCurrent();
    }

    getHistory(): string[] {
        return this.history;
    }
}