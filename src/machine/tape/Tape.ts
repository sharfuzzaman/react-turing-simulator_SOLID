// // Tape.ts
// export interface ITape {
//     readAt(pos: number): string;
//     writeAt(pos: number, value: string): void;
//     getTape(): string;
//     getLength(): number;
// }

// // You could also keep the Tape class implementing this interface
// export class Tape implements ITape {
//     private data: string[];

//     constructor(initialData: string) {
//         this.data = initialData.split('');
//     }

//     readAt(pos: number): string {
//         return this.data[pos] || '';
//     }

//     writeAt(pos: number, value: string): void {
//         this.data[pos] = value;
//     }

//     getTape(): string {
//         return this.data.join('');
//     }

//     getLength(): number {
//         return this.data.length;
//     }
// }

import { ITape } from './interfaces/ITape';
import { ITapeReader } from './interfaces/ITapeReader';
import { ITapeWriter } from './interfaces/ITapeWriter';
import { ITapeInfo } from './interfaces/ITapeInfo';

export class Tape implements ITape {
    private data: string[];
    private blankSymbol: string = ' ';

    constructor(
        initialData: string = '',
        blankSymbol: string = ' '
    ) {
        this.data = initialData.split('');
        this.blankSymbol = blankSymbol;
    }

    // ITapeReader implementation
    readAt(pos: number): string {
        this.expandIfNeeded(pos);
        return this.data[pos] || this.blankSymbol;
    }

    getTape(): string {
        return this.data.join('');
    }

    // ITapeWriter implementation
    writeAt(pos: number, value: string): void {
        this.expandIfNeeded(pos);
        this.data[pos] = value;
    }

    // ITapeInfo implementation
    getLength(): number {
        return this.data.length;
    }

    getData(): string[] {
        return [...this.data]; // Return a copy for immutability
    }

    // Helper methods
    private expandIfNeeded(pos: number): void {
        if (pos >= this.data.length) {
            const blanksToAdd = pos - this.data.length + 1;
            this.data.push(...Array(blanksToAdd).fill(this.blankSymbol));
        }
    }

    // Additional utility methods
    getRange(start: number, end: number): string[] {
        const safeStart = Math.max(0, start);
        const safeEnd = Math.min(end, this.data.length);
        
        if (safeStart >= safeEnd) return [];
        
        return this.data.slice(safeStart, safeEnd);
    }

    toString(): string {
        return this.getTape();
    }

    clone(): Tape {
        const newTape = new Tape(this.getTape(), this.blankSymbol);
        return newTape;
    }
}