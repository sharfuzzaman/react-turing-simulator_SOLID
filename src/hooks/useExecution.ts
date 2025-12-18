import { useState, useEffect, useCallback } from 'react';
import { ProgramConfig } from '../machine/types';
import { TuringMachine } from '../machine/TuringMachine';

const useExecution = (config: ProgramConfig | null) => {
    const [machine, setMachine] = useState<TuringMachine | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [output, setOutput] = useState<string | null>(null);
    const [history, setHistory] = useState<string[]>([]);
    const [headPosition, setHeadPosition] = useState(0);
    const [currentState, setCurrentState] = useState('0');

    useEffect(() => {
        if (config) {
            const tm = new TuringMachine(config);
            setMachine(tm);
            setOutput(tm.getTapeState());
            setHeadPosition(tm.getHeadPosition());
            setCurrentState(tm.getCurrentState());
            setHistory([]);
        } else {
            setMachine(null);
            setOutput(null);
            setHistory([]);
        }
    }, [config]);


    const startExecution = useCallback(() => {
        if (!machine) return;

        setIsRunning(true);

        machine.runAsync(() => {
            // This runs after every single step
            setOutput(machine.getTapeState());
            setHistory([...machine.getHistory()]);
            setHeadPosition(machine.getHeadPosition());
            setCurrentState(machine.getCurrentState());
        }, 5); // 10ms between steps → configurable speed
    }, [machine]);

    return { isRunning, output, startExecution, history, headPosition, currentState };
};

export default useExecution;
