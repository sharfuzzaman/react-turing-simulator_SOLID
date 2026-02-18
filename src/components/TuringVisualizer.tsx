import { FC } from 'react';
import TapeView from './TapeView';
import '../styles/tapeView.css';
interface Props {
    tape: string;
    headPosition: number;
}

const TuringVisualizer: FC<Props> = ({ tape, headPosition }) => {
    return (
        <div className="turing-tape-visualizer">
            <h3>Tape Visualization</h3>
            <TapeView tape={tape} headPosition={headPosition} />
        </div>
    );
};

export default TuringVisualizer;
