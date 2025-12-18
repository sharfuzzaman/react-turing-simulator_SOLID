import { ITapeReader } from './ITapeReader';
import { ITapeWriter } from './ITapeWriter';
import { ITapeInfo } from './ITapeInfo';

export interface ITape extends ITapeReader, ITapeWriter, ITapeInfo {
    // Additional tape-specific methods can go here
}