import _ from 'lodash';

export const checkTypeOfValue = (key) => {
    if (_.isObject(key)) {
        return '[complex value]';
    }
    if (_.isString(key)) {
        return `'${key}'`;
    }
    return `${key}`;
}
