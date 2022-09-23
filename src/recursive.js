import _ from 'lodash';

export const getDifferenceRecursively = (object1, object2, format, pathToKey = []) => {
    const keys = _.uniq(Object.keys(object1).concat(Object.keys(object2)).sort());
    const difference = keys.reduce((acc, key) => {
        if (_.isObject(object1[key]) && _.isObject(object2[key])) {
            pathToKey.push(key);
            return { ...acc, [`  ${key}`]:{ ...getDifferenceRecursively(object1[key], object2[key], format, pathToKey)} };
        }
        if (_.isObject(object1[key]) && format !== 'plain') {
            pathToKey.push(key);
            if (Object.hasOwn(object2, key)) {
                return { ...acc, [`- ${key}`]:{ ...getDifferenceRecursively(object1[key], object1[key], format, pathToKey) },
                [`+ ${key}`]: object2[key] };
            }
            return { ...acc, [`- ${key}`]:{ ...getDifferenceRecursively(object1[key], object1[key], format, pathToKey)} };
        }
        if (_.isObject(object2[key]) && format !== 'plain') {
            pathToKey.push(key);
            if (Object.hasOwn(object1, key)) {
                return { ...acc, [`- ${key}`]:{ ...getDifferenceRecursively(object2[key], object2[key], format, pathToKey) },
                [`+ ${key}`]: object1[key] };
            }
            return { ...acc, [`+ ${key}`]:{ ...getDifferenceRecursively(object2[key], object2[key], format, pathToKey)} };
        }
        acc = format !== 'plain'? makeNewPropertyStringify(object1, object2, key, acc) : makeNewPropertyPlain(object1, object2, key, acc, pathToKey);
        return acc;
    }, {});
    pathToKey.pop();
    return { ...difference };
}

const makeNewPropertyStringify = (object1, object2, key, acc) => {
    if (Object.hasOwn(object2, key)) {
        if (Object.hasOwn(object1, key)) {
           if (object1[key] === object2[key]) {
               acc[`  ${key}`] = object1[key];
           }
           else if (object1[key] !== object2[key]) {
               acc[`- ${key}`] = object1[key];
               acc[`+ ${key}`] = object2[key];
           }
        }
        else { //(Object.hasOwn(object2, key) && !Object.hasOwn(object1, key))
           acc[`+ ${key}`] = object2[key];
       }          
   }
   if (!Object.hasOwn(object2, key) && Object.hasOwn(object1, key)){
       acc[`- ${key}`] = object1[key];
   }
   return acc;
}

const makeNewPropertyPlain = (object1, object2, key, acc, pathToKey) => {
    const stringPath = pathToKey.length > 0? `${pathToKey.join('.')}.`: '';
    const object1Key = _.isObject(object1[key])? `[complex value]`: (_.isBoolean(object1[key]) || object1[key] === null)? `${object1[key]}` : `'${object1[key]}'`;
    const object2Key = _.isObject(object2[key])? `[complex value]`: (_.isBoolean(object2[key]) || object2[key] === null)? `${object2[key]}` : `'${object2[key]}'`;
    if (Object.hasOwn(object2, key)) {
        if (Object.hasOwn(object1, key)) {
            if (object1[key] === object2[key]) {
                acc[key] = '';
            }
            else if (object1[key] !== object2[key]) {
                acc[key] = `Property '${stringPath}${key}' was updated. From ${object1Key} to ${object2Key}`;
            }
        }
        else { //(Object.hasOwn(object2, key) && !Object.hasOwn(object1, key))
            acc[key] = `Property '${stringPath}${key}' was added with value: ${object2Key}`;
        }          
    }
    if (!Object.hasOwn(object2, key) && Object.hasOwn(object1, key)){
        acc[key] = `Property '${stringPath}${key}' was removed`;
    }
    return acc;
}
