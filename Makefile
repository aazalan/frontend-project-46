install:
	npm ci

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npx jest --coverage

gendiff:
	gendiff __fixtures__/file1.tree.json __fixtures__/file2.tree.json

gendiff_pl:
	gendiff --format plain __fixtures__/file1.tree.json __fixtures__/file2.tree.json

gendiff_js:
	gendiff --format json __fixtures__/file1.tree.json __fixtures__/file2.tree.json