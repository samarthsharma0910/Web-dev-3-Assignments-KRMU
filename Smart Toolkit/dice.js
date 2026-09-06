const crypto = require('crypto');

const [, , countInput = '1'] = process.argv;
const count = Number(countInput);

if (!Number.isInteger(count) || count < 1 || count > 100) {
  console.error('Enter a whole number of rolls from 1 to 100. Example: node dice.js 5');
  process.exitCode = 1;
} else {
  console.log(`Rolling ${count} dice...`);
  for (let roll = 1; roll <= count; roll += 1) {
    const diceValue = crypto.randomInt(1, 7);
    console.log(`Dice ${roll}: ${diceValue}`);
  }
}
