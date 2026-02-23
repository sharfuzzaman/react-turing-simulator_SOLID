
import { ProgramConfig } from '../machine/types';

export const loadTmprogJson = (content: string): ProgramConfig => {
    const tmProgram = JSON.parse(content);
    console.log("tmProgram", tmProgram);
    return {
        headStartPosition: parseInt(tmProgram["head-start-position"], 10),
        tape: String(tmProgram.tape),
        rules: tmProgram.rules.map((r: any) => ({
            state: r.state,
            read: r.read,
            write: r.write,
            move: r.move as 'L' | 'R',
            nextState: r["next-state"]
        }))
    };
};
