import { getDifference } from "../src";

const path1 = '__fixtures__/file1.json';
const path2 = '__fixtures__/file2.json';
const output = {
  '- follow': false,
  '  host': 'hexlet.io',
  '- proxy': '123.234.53.22',
  '- timeout': 50,
  '+ timeout': 20,
  '+ verbose': true
}

test('gendiff', () => {
    expect(getDifference(path1, path2)).toEqual(output);
});