console.log('Running day 1');

import fs, { promises as fsPromises } from 'fs';

const input = readInput();

async function readInput() {
    try
    {
        const data = await fsPromises
            .readFile('./src/day1/input.txt')
            .catch((err: any) => console.error('failed to read day 1 input file', err));
        console.log(data);
    }
    catch (error){
        console.log(error);
    }
}