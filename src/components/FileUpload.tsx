import { useState, FC, ChangeEvent } from 'react';
import { loadTuringMachineProgram } from '../loaders/fileLoader';
import { ProgramConfig } from '../machine/types';

interface FileUploadProps {
    onConfigLoaded: (config: ProgramConfig) => void;
}

const FileUpload: FC<FileUploadProps> = ({ onConfigLoaded }) => {
    const [error, setError] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            // loadTuringMachineProgram reads file.text() and returns parsed program
            const config = await loadTuringMachineProgram(file);
            
            setFileName(file.name);
            onConfigLoaded(config);
            setError(null);
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : String(err);
            setError(`Error parsing file: ${errorMsg}`);
            setFileName(null);
        }
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <label htmlFor="file-input" style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Upload .txt or .json Turing Machine Program:
            </label>
            <input
                id="file-input"
                type="file"
                accept=".txt,.json,.tmprog"
                onChange={handleFileUpload}
                style={{ padding: '8px' }}
            />
            {fileName && (
                <p style={{ color: 'green', marginTop: '10px' }}>
                    ✓ Loaded: {fileName}
                </p>
            )}
            {error && (
                <p style={{ color: 'red', marginTop: '10px', fontWeight: 'bold' }}>
                    ✗ {error}
                </p>
            )}
        </div>
    );
};

export default FileUpload;