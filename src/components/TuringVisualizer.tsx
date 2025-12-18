import { FC } from 'react';
import TapeView from './TapeView';

interface Props {
    tape: string;
    headPosition: number;
}

const TuringVisualizer: FC<Props> = ({ tape, headPosition }) => {
    return (
        <div>
            <h3>Tape Visualization</h3>
            <TapeView tape={tape} headPosition={headPosition} />
        </div>
    );
};

export default TuringVisualizer;
