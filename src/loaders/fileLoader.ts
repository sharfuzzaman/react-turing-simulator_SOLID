import { loadTmprogTxt } from './tmprogTxtLoader';
import { loadTmprogJson } from './tmprogJsonLoader';

export const loadTuringMachineProgram = async (file: File): Promise<any> => {
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    // read file content as string
    const content = await file.text();
    // console.log(content)

    if (fileExtension === 'txt') {
        return await loadTmprogTxt(file);
    } else if (fileExtension === 'json') {
        return loadTmprogJson(content);
    } else {
        throw new Error('Unsupported file format. Please provide a .tmprog.txt or .tmprog.json file.');
    }
};