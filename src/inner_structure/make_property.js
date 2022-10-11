import { checkTypeOfValue } from './check_type.js';

export const makeNewPropertyStringify = (object1, object2, key, acc) => {
    if (Object.hasOwn(object2, key)) {
      if (Object.hasOwn(object1, key)) {
        if (object1[key] === object2[key]) {
          acc[`  ${key}`] = object1[key];
        } else if (object1[key] !== object2[key]) {
          acc[`- ${key}`] = object1[key];
          acc[`+ ${key}`] = object2[key];
        }
      } else { // (Object.hasOwn(object2, key) && !Object.hasOwn(object1, key))
        acc[`+ ${key}`] = object2[key];
      }
    }
    if (!Object.hasOwn(object2, key) && Object.hasOwn(object1, key)) {
      acc[`- ${key}`] = object1[key];
    }
    return acc;
  };
  
  export const makeNewPropertyPlain = (object1, object2, key, acc, pathToKey) => {
    const stringPath = pathToKey.length > 0 ? `${pathToKey.join('.')}.` : '';
    const object1Key = checkTypeOfValue(object1[key]);
    const object2Key = checkTypeOfValue(object2[key]);
    if (Object.hasOwn(object2, key)) {
      if (Object.hasOwn(object1, key)) {
        if (object1[key] === object2[key]) {
          acc[key] = '';
        } else if (object1[key] !== object2[key]) {
          acc[key] = `Property '${stringPath}${key}' was updated. From ${object1Key} to ${object2Key}`;
        }
      } else { // (Object.hasOwn(object2, key) && !Object.hasOwn(object1, key))
        acc[key] = `Property '${stringPath}${key}' was added with value: ${object2Key}`;
      }
    }
    if (!Object.hasOwn(object2, key) && Object.hasOwn(object1, key)) {
      acc[key] = `Property '${stringPath}${key}' was removed`;
    }
    return acc;
  };