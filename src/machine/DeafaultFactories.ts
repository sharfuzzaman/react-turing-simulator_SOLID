// head/factories/DefaultHeadFactory.ts
import { IHead } from '../machine/head/interfaces/IHead';
import { Head } from '../machine/Head'; // ONLY this file knows about concrete Head!

// Simple factory interface
interface IHeadFactory {
    createHead(startPosition: number): IHead;
}

export class DefaultHeadFactory implements IHeadFactory {
    createHead(startPosition: number): IHead {
        return new Head(startPosition);
    }
}