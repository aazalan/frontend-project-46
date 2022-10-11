import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { getDifferenceRecursively } from './inner_structure/recursive.js';
import { stringifyObject } from './formatters/stringify.js';
import { makePlainFormatObject } from './formatters/plain.js';
import { makeJsonFormatObject } from './formatters/json.js';

const makeObjectFromFile = (pathToFile) => {
  const currentDir = process.cwd();
  const fullPath = path.resolve(currentDir, pathToFile);
  const extension = path.extname(pathToFile);
  switch (extension) {
    case '.json':
      return JSON.parse(readFileSync(fullPath));
    case '.yml':
      return yaml.load(readFileSync(fullPath, 'utf8'));
  }
};

const getDifference = (path1, path2, typeFormat = 'stylish') => {
  const object1 = makeObjectFromFile(path1);
  const object2 = makeObjectFromFile(path2);
  const difference = getDifferenceRecursively(object1, object2, typeFormat);
  switch (typeFormat) {
    case 'stylish':
      return stringifyObject(difference);
    case 'plain':
      return makePlainFormatObject(difference);
    case 'json':
      return makeJsonFormatObject(difference);
  }
};

export default getDifference;

// console.log(getDifference('__fixtures__/file1.tree.json', '__fixtures__/file2.tree.json',  'stylish'))
