import _ from 'lodash';
import { makeNewPropertyStringify, makeNewPropertyPlain } from './make_property.js';

export const getDifferenceRecursively = (object1, object2, format, pathToKey = []) => {
  const keys = _.uniq(Object.keys(object1).concat(Object.keys(object2)).sort());
  const difference = keys.reduce((acc, key) => {
    if (_.isObject(object1[key]) && _.isObject(object2[key])) {
      pathToKey.push(key);
      return { ...acc, [`  ${key}`]: { ...getDifferenceRecursively(object1[key], object2[key], format, pathToKey) } };
    }
    if (_.isObject(object1[key]) && format !== 'plain') {
      pathToKey.push(key);
      if (Object.hasOwn(object2, key)) {
        return {...acc, [`- ${key}`]: { ...getDifferenceRecursively(object1[key], object1[key], format, pathToKey) },
        [`+ ${key}`]: object2[key],
        };
      }
      return { ...acc, [`- ${key}`]: { ...getDifferenceRecursively(object1[key], object1[key], format, pathToKey) } };
    }
    if (_.isObject(object2[key]) && format !== 'plain') {
      pathToKey.push(key);
      if (Object.hasOwn(object1, key)) {
        return { ...acc, [`- ${key}`]: object1[key], [`+ ${key}`]: { ...getDifferenceRecursively(object2[key], object2[key], format, pathToKey) } };
      }
      return { ...acc, [`+ ${key}`]: { ...getDifferenceRecursively(object2[key], object2[key], format, pathToKey) } };
    }
    acc = format !== 'plain' ? makeNewPropertyStringify(object1, object2, key, acc) : makeNewPropertyPlain(object1, object2, key, acc, pathToKey);
    return acc;
  }, {});
  pathToKey.pop();
  return { ...difference };
};
