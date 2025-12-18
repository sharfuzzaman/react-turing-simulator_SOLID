export type Move = 'L' | 'R';

export interface Rule {
    state: string;
    read: string;
    write: string;
    move: Move;
    nextState: string;
}

export interface ProgramConfig {
    headStartPosition: number;
    tape: string;
    rules: Rule[];
}
