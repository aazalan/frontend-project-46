import _ from 'lodash';

export const getDifferenceRecursively = (object1, object2) => {
    const keys = _.uniq(Object.keys(object1).concat(Object.keys(object2)).sort());
    const difference = keys.reduce((acc, key) => {
        if (_.isObject(object1[key]) && _.isObject(object2[key])){
            return { ...acc, [`  ${key}`]:{ ...getDifferenceRecursively(object1[key], object2[key])} };
        }
        acc = makeNewPropertyByKeys(object1, object2, key, acc);
        return acc;
    }, {})
    //console.log('DIFF:\n', difference, '\n\n');
    return { ...difference };
}

const makeNewPropertyByKeys = (object1, object2, key, acc) => {
    if (Object.hasOwn(object2, key)) {
        if (Object.hasOwn(object1, key)) {
           if (object1[key] === object2[key]){
               acc[`  ${key}`] = object1[key];
           }
           else if (object1[key] !== object2[key]){
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

