import { ProgramConfig, Rule } from '../machine/types';

export const loadTmprogTxt = async (file: File): Promise<ProgramConfig> => {
    const text = await file.text();
    const parsedData = parseTmprogTxt(text);
    return parsedData;
};

const parseTmprogTxt = (text: string): ProgramConfig => {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) throw new Error('Invalid .tmprog.txt: need head position and tape');

    const headStartPosition = parseInt(lines[0], 10);
    if (Number.isNaN(headStartPosition)) throw new Error('Invalid head start position');

    const tape = lines[1];
    console.log("tape", tape);
    const rules: Rule[] = lines.slice(2).map((line, idx) => {
        const parts = line.split(/\s+/);
        if (parts.length !== 5) throw new Error(`Invalid rule at line ${idx + 3}: expected 5 tokens`);
        const [state, read, write, move, nextState] = parts;
        if (move !== 'L' && move !== 'R') throw new Error(`Invalid move '${move}' at line ${idx + 3}`);
        return { state, read, write, move: move as 'L' | 'R', nextState };
    });

    return { headStartPosition, tape, rules };
};