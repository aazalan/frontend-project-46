import _ from 'lodash';

export const stringifyObject = (input, counter = 0) => {
    const tab = '    ';
    const stringFormatInput = Object.keys(input)
        .reduce((acc, key) => {
            if (_.isObject(input[key])) {
                acc.push( '\n', tab.repeat(counter), `  ${key}: `, `${ stringifyObject({...input[key]}, counter+=1) }`);
                counter -= 1;
            }
            else {
                const str = '\n'+ tab.repeat(counter) + `  ${key}: ${input[key]}`;
                acc.push(str);
            }
            return acc;
        }, [])
        .join('');
    return ['{', `${stringFormatInput}`, '\n', tab.repeat(counter), '}'].join('');
}
