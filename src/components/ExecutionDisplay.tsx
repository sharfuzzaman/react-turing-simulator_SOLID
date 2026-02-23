import { FC } from 'react';
import '../styles/executionDisplay.css';

interface Props {
    tape: string | null;
    headPosition: number;
    currentState: string;
}

const ExecutionDisplay: FC<Props> = ({ tape, headPosition, currentState }) => {
    return (
        <div className="execution-display">
            {tape ? (
                <div className="result-container">
                    <h3>Execution Complete</h3>

                    <div className="tape-display">
                        <strong>Final Tape:</strong>
                        <code>{tape}</code>
                    </div>

                    <div className="state-info">
                        <p><strong>Head Position:</strong> {headPosition}</p>
                        <p><strong>Current State:</strong> {currentState}</p>
                    </div>
                </div>
            ) : (
                <p style={{ opacity: 0.7 }}>No execution data yet.</p>
            )}
        </div>
    );
};

export default ExecutionDisplay;
