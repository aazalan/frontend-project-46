#!/usr/bin/env node

import { Command } from "../node_modules/commander/esm.mjs";

const program = new Command;
// const diff = genDiff(filepath1, filepath2);
// console.log(diff);


program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>');
program.parse();