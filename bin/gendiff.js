#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import getDifference from '../src/index.js';

const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, type) => {
    const { format } = type;
    console.log(getDifference(filepath1, filepath2, format));
  })
  .parse();
