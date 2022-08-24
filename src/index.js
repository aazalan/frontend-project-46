import _ from 'lodash';
import { readFileSync } from 'fs';
import path from 'path';


const makeObjectFromFile = (pathToFile) => {
    const currentDir = process.cwd();
    const fullPath = path.resolve(currentDir, pathToFile);
    const file = JSON.parse(readFileSync(fullPath));
    return file;
}

export const  getDifference = (path1, path2) => {
    const sortedFile1 = makeObjectFromFile(path1);
    const sortedFile2 = makeObjectFromFile(path2);
    const keys = _.uniq(Object.keys(sortedFile1).concat(Object.keys(sortedFile2)).sort());
    const difference = keys.reduce((acc, key) => {
        if (Object.hasOwn(sortedFile2, key)) {
             if (Object.hasOwn(sortedFile1, key)) {
                if (sortedFile1[key] === sortedFile2[key]){
                    acc[`  ${key}`] = sortedFile1[key];
                }
                else if (sortedFile1[key] !== sortedFile2[key]){
                    acc[`- ${key}`] = sortedFile1[key];
                    acc[`+ ${key}`] = sortedFile2[key];
                }
             }
             else { //(Object.hasOwn(sortedFile2, key) && !Object.hasOwn(sortedFile1, key))
                acc[`+ ${key}`] = sortedFile2[key];
            }          
        }
        if (!Object.hasOwn(sortedFile2, key) && Object.hasOwn(sortedFile1, key)){
            acc[`- ${key}`] = sortedFile1[key];
        }
        return acc;
    }, {});

    return (difference);
}
