// export class Head {
//     private position: number;

//     constructor(startPosition: number) {
//         this.position = startPosition;
//     }

//     moveLeft() {
//         this.position--;
//     }

//     moveRight() {
//         this.position++;
//     }

//     getPosition(): number {
//         return this.position;
//     }
// }

import { IHead } from './head/interfaces/IHead';

export class Head implements IHead { // Add implements
    private position: number;

    constructor(startPosition: number) {
        this.position = startPosition;
    }

    moveLeft() {
        this.position--;
    }

    moveRight() {
        this.position++;
    }

    getPosition(): number {
        return this.position;
    }
}