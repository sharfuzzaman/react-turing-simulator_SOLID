import { FC } from 'react';
import '../styles/tapeView.css';

interface Props {
    tape: string;
    headPosition: number;
}

const TapeView: FC<Props> = ({ tape, headPosition }) => {
    return (
        <div className="tape-view">
            {tape.split('').map((symbol, index) => (
                <div
                    key={index}
                    className={`tape-cell ${index === headPosition ? 'active' : ''}`}
                >
                    {symbol}
                </div>
            ))}
        </div>
    );
};

export default TapeView;
