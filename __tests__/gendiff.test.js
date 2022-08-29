import { getDifference } from "../src";
import { readFileSync } from 'fs';


const output = readFileSync('__fixtures__/correct_output', 'utf8');

test('gendiff for .json', () => {
    const path1 = '__fixtures__/file1.json';
    const path2 = '__fixtures__/file2.json';
    expect(getDifference(path1, path2)).toEqual(output);
});

test('gendiff for .yml', () => {
    const path1 = '__fixtures__/file1.yml';
    const path2 = '__fixtures__/file2.yml';
    expect(getDifference(path1, path2)).toEqual(output);
}); 