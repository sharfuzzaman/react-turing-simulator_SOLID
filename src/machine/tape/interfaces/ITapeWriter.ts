export interface ITapeWriter {
    writeAt(pos: number, value: string): void;
}