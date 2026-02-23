import { useState } from 'react';
import Controls from './components/Controls';
import TuringVisualizer from './components/TuringVisualizer';
import ExecutionDisplay from './components/ExecutionDisplay';
import ExecutionHistory from './components/ExecutionHistory';
import useExecution from './hooks/useExecution';
import { loadTuringMachineProgram } from './loaders/fileLoader';
import { ProgramConfig } from './machine/types';
import { DefaultHeadFactory } from '../src/machine/DeafaultFactories';
import '/src/styles/global.css';
import { TuringMachine } from './machine/TuringMachine';
TuringMachine.setHeadFactory(new DefaultHeadFactory());

function App() {
    const [config, setConfig] = useState<ProgramConfig | null>(null);
    const { isRunning, output, startExecution, history, headPosition, currentState } = useExecution(config);

    const handleLoadFile = async (file: File) => {
        try {
            const parsedConfig = await loadTuringMachineProgram(file);
            console.log("Parsed Config:", parsedConfig);
            setConfig(parsedConfig);
        } catch (err) {
            alert(`Error loading file: ${err instanceof Error ? err.message : String(err)}`);
        }
    };

    return (
        <div className="app-container">
            <h1 className='turing-machine-simulator'>Turing Machine Simulator</h1>
            <Controls onLoadFile={handleLoadFile} onStart={startExecution} isRunning={isRunning} />
            {config && <TuringVisualizer tape={output || config.tape} headPosition={headPosition} />}
            <ExecutionDisplay tape={output} headPosition={headPosition} currentState={currentState} />
            {history.length > 0 && <ExecutionHistory history={history} />}
        </div>
    );
}

export default App;
