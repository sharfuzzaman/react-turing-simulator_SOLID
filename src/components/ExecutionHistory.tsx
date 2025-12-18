import { FC } from 'react';
import TapeView from './TapeView';
import '../styles/executionHistory.css';

interface Props {
    history: string[];
}

const ExecutionHistory: FC<Props> = ({ history }) => {
    return (
        <div className="history-container">
            <h3 className="history-title">Execution History</h3>

            {history.length === 0 ? (
                <p className="history-empty">No execution steps recorded.</p>
            ) : (
                <div className="history-list">
                    {history.map((tape, idx) => (
                        <div key={idx} className="history-entry">
                            <div className="history-step-label">Step {idx + 1}</div>
                            <TapeView tape={tape} headPosition={-1} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExecutionHistory;
