import { getDifference } from "../src";
import { readFileSync } from 'fs';

const outputPlain = readFileSync('__fixtures__/correct_output', 'utf8');
const outputTree = readFileSync('__fixtures__/correct_output_tree', 'utf8');
const outputList = readFileSync('__fixtures__/correct_output_plain', 'utf8');

describe('stringify format', () => {
    const formatType = { format: 'stringify'};
    test('gendiff for .json, stringify format', () => {
        const path1 = '__fixtures__/file1.json';
        const path2 = '__fixtures__/file2.json';
        expect(getDifference(path1, path2, formatType)).toEqual(outputPlain);
    });
    test('gendiff for .yml, stringify format', () => {
        const path1 = '__fixtures__/file1.yml';
        const path2 = '__fixtures__/file2.yml';
        expect(getDifference(path1, path2, formatType)).toEqual(outputPlain);
    }); 
    test('gendiff for tree .json, stringify format', () => {
        const path1 = '__fixtures__/file1.tree.json';
        const path2 = '__fixtures__/file2.tree.json';
        expect(getDifference(path1, path2, formatType)).toEqual(outputTree);
    });
});

test('gendiff for tree .json, plain format', () => {
    const path1 = '__fixtures__/file1.tree.json';
    const path2 = '__fixtures__/file2.tree.json';
    const formatType = { format: 'plain'};
    expect(getDifference(path1, path2, formatType)).toEqual(outputList);
});