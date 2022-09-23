import _ from 'lodash';

export const makePlainFormatObject = (input) => {
    const plainFormatInput = Object.keys(input)
        .reduce((acc, key) => {
            if (_.isObject(input[key])) {
               acc.push( makePlainFormatObject(input[key]));
            }
            else if (input[key].length > 0) {
                acc.push(input[key]);
            }
            return acc;
        }, [])
            .join('\n');
        return [plainFormatInput].join('\n');
}