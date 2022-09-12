import _ from 'lodash';

export const stringifyObject = (input, counter = 0) => {
    const tab = '    ';
    const arrayFormatInput = Object.keys(input)
        .reduce((acc, key) => {
            let addTab = '';
            if (!(key.startsWith('+')) && !(key.startsWith('-')) && !(key.startsWith(' '))) {
                addTab = '  ';
            }
            if (_.isObject(input[key])) {
                acc.push( '\n', tab.repeat(counter), addTab, `  ${key}: `, `${stringifyObject({...input[key]}, counter+=1)}`);
                counter -= 1;
            }
            else {
                const str = '\n'+ tab.repeat(counter) + addTab + `  ${key}: ${input[key]}`;
                acc.push(str);
            }
            return acc;
        }, [])
        .join('');
    return ['{', `${arrayFormatInput}`, '\n', tab.repeat(counter), '}'].join('');
}
