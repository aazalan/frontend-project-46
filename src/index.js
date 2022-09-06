import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { getDifferenceRecursively } from './recursive.js';
import { stringifyObject } from './formatter.js';

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

export const  getDifference = (path1, path2, ) => {
    const object1 = makeObjectFromFile(path1);
    const object2 = makeObjectFromFile(path2);
    const difference = getDifferenceRecursively(object1, object2);
    return stringifyObject(difference);
}

//console.log(getDifference('__fixtures__/file1.tree.json', '__fixtures__/file2.tree.json'));