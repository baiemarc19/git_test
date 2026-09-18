const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '0';
let operator = null;
let previousInput = null;

function updateDisplay() {
  display.textContent = currentInput;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    
    if (value === 'C') {
      currentInput = '0';
      operator = null;
      previousInput = null;
    } else if (value === '=') {
      if (operator && previousInput !== null) {
        currentInput = String(eval(`${previousInput} ${operator} ${currentInput}`));
        operator = null;
        previousInput = null;
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput !== '0') {
        previousInput = currentInput;
        currentInput = '0';
        operator = value;
      }
    } else if (value === '.') {
      if (!currentInput.includes('.')) {
        currentInput += value;
      }
    } else {
      if (currentInput === '0') {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }
    
    updateDisplay();
  });
});