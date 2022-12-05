console.log('Running day 1');

import fs, { promises as fsPromises } from 'fs';

const readLines = (filePath: string) : string[] => {
    const data = fs.readFileSync(filePath, 'utf8').toString().split('\n');
    return data;
}

const lines = readLines('./src/day1/input.txt')
console.log(`lines ${lines.length}`);
