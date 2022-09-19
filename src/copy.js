// export const getDifferenceRecursively = (object1, object2) => {
//     //console.log(object1, '\n\n', object2, '\n---\n')
//     const keys = _.uniq(Object.keys(object1).concat(Object.keys(object2)).sort());
//     const difference = keys.reduce((acc, key) => {
//         if (_.isObject(object1[key]) && _.isObject(object2[key])){
//             getDifferenceRecursively(object1[key], object2[key]);
//         }
//         else {
//             if (Object.hasOwn(object2, key)) {
//                 if (Object.hasOwn(object1, key)) {
//                    if (object1[key] === object2[key]){
//                        acc[`  ${key}`] = object1[key];
//                    }
//                    else if (object1[key] !== object2[key]){
//                        acc[`- ${key}`] = object1[key];
//                        acc[`+ ${key}`] = object2[key];
//                    }
//                 }
//                 else { //(Object.hasOwn(object2, key) && !Object.hasOwn(object1, key))
//                    acc[`+ ${key}`] = object2[key];
//                }          
//            }
//            if (!Object.hasOwn(object2, key) && Object.hasOwn(object1, key)){
//                acc[`- ${key}`] = object1[key];
//            }
//         }
//         return acc;
//     }, {});
//     console.log('DIFF:\n', difference, '\n\n');
//     return difference;
// }


// // //вариант наоборот
// // export const getDifferenceRecursively = (object1, object2) => {
// //     //console.log(object1, '\n\n', object2, '\n---\n')
// //     const keys = _.uniq(Object.keys(object1).concat(Object.keys(object2)).sort());
// //     const difference = keys.reduce((acc, key) => {
// //             if (!_.isObject(object1[key]) && !_.isObject(object2[key]))
// //             if (Object.hasOwn(object2, key)) {
// //                 if (Object.hasOwn(object1, key)) {
// //                    if (object1[key] === object2[key]){
// //                        acc[`  ${key}`] = object1[key];
// //                    }
// //                    else if (object1[key] !== object2[key]){
// //                        acc[`- ${key}`] = object1[key];
// //                        acc[`+ ${key}`] = object2[key];
// //                    }
// //                 }
// //                 else { //(Object.hasOwn(object2, key) && !Object.hasOwn(object1, key))
// //                    acc[`+ ${key}`] = object2[key];
// //                }          
// //            }
// //            if (!Object.hasOwn(object2, key) && Object.hasOwn(object1, key)){
// //                acc[`- ${key}`] = object1[key];
// //            }
        
// //         if (_.isObject(object1[key]) && _.isObject(object2[key])){
// //             getDifferenceRecursively(object1[key], object2[key]);
// //         }
// //         return acc;
// //     }, {});
// //     console.log('DIFF:\n', difference, '\n\n');
// //     return difference;
// // }

// // неплохой вариант, но не работает 
// // export const getDifferenceRecursively = (object1, object2, difference = {}) => {
// //     //console.log(object1, '\n\n', object2, '\n---\n')
// //     const keys = _.uniq(Object.keys(object1).concat(Object.keys(object2)).sort());

// //     difference = keys.reduce((acc, key) => {
// //         if (_.isObject(object1[key]) && _.isObject(object2[key])){
// //             return Object.assign(acc, getDifferenceRecursively(object1[key], object2[key], difference));
// //         }

// //         if (Object.hasOwn(object2, key)) {
// //             if (Object.hasOwn(object1, key)) {
// //                if (object1[key] === object2[key]){
// //                    acc[`  ${key}`] = object1[key];
// //                }
// //                else if (object1[key] !== object2[key]){
// //                    acc[`- ${key}`] = object1[key];
// //                    acc[`+ ${key}`] = object2[key];
// //                }
// //             }
// //             else { //(Object.hasOwn(object2, key) && !Object.hasOwn(object1, key))
// //                acc[`+ ${key}`] = object2[key];
// //            }          
// //        }
// //        if (!Object.hasOwn(object2, key) && Object.hasOwn(object1, key)){
// //            acc[`- ${key}`] = object1[key];
// //        }
            
// //         console.log('ACC:\n', acc, '\n\n');
// //         return acc;
// //     }, {});

// //     console.log('DIFF:\n', difference, '\n\n');
// //     return { ...difference };
// // }


// const makeArrayFromObject = (input) => {
//     const stringFormatInput = Object.keys(input)
//         .reduce((acc, key) => {
//             if (_.isObject(input[key])){
//                 acc.push(`${key}: `, stringifyObject({...input[key]}));
                
//             }

//             const str = `${key}: ${input[key]}`;
//             acc.push(str);
//             console.log('STR:', str, '\n\nACC:', acc)
//             return acc;
//         }, []);
//         console.log('inp: ', stringFormatInput)
//         return ['{',...stringFormatInput, '}'];
//         //return ['{', ...stringFormatInput, '}'];
// }



// export const stringifyObject = (input) => {
//     const objectToArray = makeArrayFromObject(input);
//     const objectToString = objectToArray.join('\n');
//     console.log(objectToString)
// }

const ob = {
    key: '12',
    key2: {key3: '12'},
    key4: '333'
}

console.log(typeof ob[key ]=== ob[key4])