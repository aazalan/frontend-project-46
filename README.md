### Gendiff
CLI tool detect difference between two files. Works with JSON and YAML format. Can show difference in 3 formats: stylish(default), plain, JSON.

Installation: 
```
make install
```
Using:
```
gendiff filepath1.json filepath2.json
```

For plain format output result:
```
gendiff --format plain filepath1.json filepath2.json
```

For JSON format output result:
```
gendiff --format json filepath1.json filepath2.json
```
#### There you can see how it works:
[![asciicast](https://asciinema.org/a/527351.svg)](https://asciinema.org/a/527351)

#### Maintainability and test coverage
[![Maintainability](https://api.codeclimate.com/v1/badges/e96a6fa3f6f1c360d0d1/maintainability)](https://codeclimate.com/github/aazalan/frontend-project-46/maintainability)
[![Test coverage](https://api.codeclimate.com/v1/badges/e96a6fa3f6f1c360d0d1/test_coverage)](https://codeclimate.com/github/aazalan/frontend-project-46/test_coverage)

#### Hexlet tests and linter status:
[![Actions Status](https://github.com/aazalan/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/aazalan/frontend-project-46/actions)
