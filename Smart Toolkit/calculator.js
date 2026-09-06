const [, , operation, firstInput, secondInput] = process.argv;

function showUsage(message) {
  if (message) console.error(`Error: ${message}`);
  console.log('Usage: node calculator.js <add|subtract|multiply|divide> <number1> <number2>');
  process.exitCode = 1;
}

if (!operation || firstInput === undefined || secondInput === undefined) {
  showUsage('Missing command-line arguments.');
} else {
  const firstNumber = Number(firstInput);
  const secondNumber = Number(secondInput);

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    showUsage('Both values must be valid numbers.');
  } else {
    let result;

    switch (operation.toLowerCase()) {
      case 'add':
        result = firstNumber + secondNumber;
        break;
      case 'subtract':
        result = firstNumber - secondNumber;
        break;
      case 'multiply':
        result = firstNumber * secondNumber;
        break;
      case 'divide':
        if (secondNumber === 0) {
          showUsage('Cannot divide by zero.');
        } else {
          result = firstNumber / secondNumber;
        }
        break;
      default:
        showUsage(`Unsupported operation "${operation}".`);
    }

    if (result !== undefined) {
      console.log(`Operation: ${operation}`);
      console.log(`Result: ${result}`);
    }
  }
}
