export interface ITapeReader {
    readAt(pos: number): string;
    getTape(): string;
}