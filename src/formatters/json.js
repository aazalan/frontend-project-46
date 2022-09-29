import _ from 'lodash';

export const makeJsonFormatObject = (input, counter = 0) => {
  const tab = '    ';
  const jsonFormatInput = Object.keys(input)
    .reduce((acc, key) => {
      if (_.isObject(input[key])) {
        acc.push('\n', tab.repeat(counter), `  "${key}": `, `${makeJsonFormatObject({ ...input[key] }, counter += 1)},`);
        counter -= 1;
      } else {
        const formatedValue = formatByType(input[key]);
        const str = `\n${tab.repeat(counter)}  "${key}": ${formatedValue},`;
        acc.push(str);
      }
      return acc;
    }, [])
    .join('')
    .slice(0, -1);
  return ['{', `${jsonFormatInput}`, '\n', tab.repeat(counter), '}'].join('');
};

const formatByType = (value) => {
  if (_.isBoolean(value) || _.isNumber(value) || _.isNull(value)) {
    return value;
  }
  return `"${value}"`;
};
