import bpmnlintConfig from '../.bpmnlintrc';

import { Linter } from 'bpmnlint';

console.log('creating linter with config', bpmnlintConfig);

const linter = new Linter(bpmnlintConfig);

console.log('created linter', linter);