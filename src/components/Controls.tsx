import {useState} from 'react';
import '../styles/controls.css';

interface Props {
    onLoadFile: (file: File) => void;
    onStart: () => void;
    isRunning: boolean;
}

const Controls: React.FC<Props> = ({ onLoadFile, onStart, isRunning }) => {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onLoadFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <div className="controls-container">
            <label className="file-upload">
                <span>Select Program File</span>
                <span>{fileName}</span>
                <input
                    type="file"
                    accept=".tmprog.txt,.tmprog.json"
                    onChange={handleFileChange}
                />
            </label>

            <button
                className="start-button"
                onClick={onStart}
                disabled={isRunning}
            >
                {isRunning ? 'Running...' : 'Start Execution'}
            </button>
        </div>
    );
};

export default Controls;
