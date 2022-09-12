import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { getDifferenceRecursively } from './recursive.js';
import { stringifyObject } from './formatters/stringify.js';
import { makePlainFormatObject } from './formatters/plain.js';
import { makeJsonFormatObject } from './formatters/json.js';

const makeObjectFromFile = (pathToFile) => {
    const currentDir = process.cwd();
    const fullPath = path.resolve(currentDir, pathToFile);
    const extension = path.extname(pathToFile);
    switch(extension) {
        case '.json':
            return JSON.parse(readFileSync(fullPath));
        case '.yml':
            return yaml.load(readFileSync(fullPath, 'utf8'));
    }
}

export const  getDifference = (path1, path2, typeFormat) => {
    const object1 = makeObjectFromFile(path1);
    const object2 = makeObjectFromFile(path2);
    const inputFormat = typeFormat.format;
    const difference = getDifferenceRecursively(object1, object2, inputFormat);
    switch(inputFormat) {
        case 'stringify':
            return stringifyObject(difference);
        case 'plain':
            return makePlainFormatObject(difference);
        case 'json':
            return makeJsonFormatObject(difference);
        case undefined:
            return stringifyObject(difference);
    }
}

//console.log(getDifference('__fixtures__/file1.tree.json', '__fixtures__/file2.tree.json', {format: 'stringify'}));