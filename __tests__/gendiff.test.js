import { getDifference } from "../src";
import { readFileSync } from 'fs';


const outputPlain = readFileSync('__fixtures__/correct_output', 'utf8');
const outputTree = readFileSync('__fixtures__/correct_output_tree', 'utf8');

test('gendiff for .json', () => {
    const path1 = '__fixtures__/file1.json';
    const path2 = '__fixtures__/file2.json';
    expect(getDifference(path1, path2)).toEqual(outputPlain);
});

test('gendiff for .yml', () => {
    const path1 = '__fixtures__/file1.yml';
    const path2 = '__fixtures__/file2.yml';
    expect(getDifference(path1, path2)).toEqual(outputPlain);
}); 

test('gendiff for tree .json', () => {
    const path1 = '__fixtures__/file1.tree.json';
    const path2 = '__fixtures__/file2.tree.json';
    expect(getDifference(path1, path2)).toEqual(outputTree);
});