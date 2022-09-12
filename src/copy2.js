import _ from 'lodash';

export const getDifferencePlain = (object1, object2) => {
    const keys = _.uniq(Object.keys(object1).concat(Object.keys(object2)).sort());
    const difference = keys.reduce((acc, key) => {
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
    }, {});
    return difference;
}