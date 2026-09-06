const isEven = require('./isEven');

const [, , input = '10'] = process.argv;
const number = Number(input);

if (!Number.isInteger(number)) {
  console.error('Please provide an integer. Example: node module_demo.js 7');
  process.exitCode = 1;
} else {
  console.log(`${number} is ${isEven(number) ? 'even' : 'odd'}.`);
}
