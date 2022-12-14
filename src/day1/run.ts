console.log('Running day 1');

import fs, { promises as fsPromises } from 'fs';

const readLines = (filePath: string) : string[] => {
    const data = fs.readFileSync(filePath, 'utf8').toString().split('\n');
    return data;
}

type Elf = {
    calories: number[],
    total: number
}

const calculate = (accumulator: Elf[], currentValue: string) : Elf[]  => {
    if(currentValue === ''){
        accumulator.push({calories: [], total: 0});
        return accumulator;
    }
    accumulator[accumulator.length-1].calories.push(parseInt(currentValue));
    accumulator[accumulator.length-1].total += parseInt(currentValue)
    return accumulator;
}

const lines = readLines('./src/day1/input.txt')
console.log(`lines ${lines.length}`);

const totalCaloriesPerElf = lines.reduce(calculate, [{calories: [], total: 0}]);

const maxTotalCalories = Math.max(...totalCaloriesPerElf.map(elf => elf.total));

console.log(`Answer Day 1 (part 1): ${maxTotalCalories}`)

const elfCaloriesDescending = totalCaloriesPerElf.sort((a, b) => b.total - a.total)

const totalCaloriesOfTop3Elfs = elfCaloriesDescending.slice(0, 3)
                    .map(elf => elf.total)
                    .reduce((acc, cur) => acc + cur, 0); 

console.log(`Answer Day 1 (part 2): ${totalCaloriesOfTop3Elfs}`)