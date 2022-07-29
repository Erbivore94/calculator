const screen = document.querySelector('#screen');
let operandA;
let operandB;
let operator;

operandALocked = false; // This prevents the user from changing operandA after the first operation has been completed. At that point, operandA is the result of the previous operation.


getInput();

function getInput() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      let input = event.target.id;
      switch (input) {
        case 'add':
          if (operandA) operator = input;
          break;
        case 'subtract':
          if (operandA) operator = input;
          break;
        case 'multiply':
          if (operandA) operator = input;
          break;
        case 'divide':
          if (operandA) operator = input;
          break;
        case 'equals':
          if (operandA && operator && operandB) operate(operandA, operator, operandB);
          break;
        case 'clear':
          clear();
          break;
        case 'delete':
          del();
          break;
        default:
          display(input);
      }
    });
  });
}

function display(value) {
  if (!operator && !operandALocked) {
    if (screen.textContent.length < 11) {
      if (value !== '.') {
        screen.textContent += value;
      } else if (!screen.textContent.includes('.')) {
        screen.textContent += value;
      }
    operandA = screen.textContent;
    }
  } else if (operator) {
    screen.textContent = operandB;
    if (screen.textContent.length < 11) {
      if (value !== '.') {
        screen.textContent += value;
      } else if (!screen.textContent.includes('.')) {
        screen.textContent += value;
      }
    operandB = screen.textContent;
    }
  }
}

function operate(a, operator, b) {
  switch (operator) {
    case 'add':
      add(a, b);
      prepNextOperation();
      break;
    case 'subtract':
      subtract(a, b);
      prepNextOperation();
      break
    case 'multiply':
      multiply(a, b);
      prepNextOperation();
      break;
    case 'divide':
      divide(a, b);
      prepNextOperation();
      break;
    default:
      console.log("ERROR");
  }
}

function prepNextOperation() {
  operandA = screen.textContent;
  operandALocked = true;
  operator = null;
  operandB = null;
}

function add(a, b) {
  screen.textContent = a + b;
}

function subtract(a, b) {
  screen.textContent = a - b;
}

function multiply(a, b) {
  screen.textContent = a * b;
}

function divide(a, b) {
  if (b === 0) {
    screen.textContent = "ERROR";
    clear();
  }
  screen.textContent = a / b;
}

function clear() {
  operator = null;
  operandA = null;
  operandALocked = false;
  operandB = null;
  screen.textContent = null;
}

function del() {
  if (!operator) {
    screen.textContent = screen.textContent.slice(0, -1);
    operandA = screen.textContent;
  } else {
    screen.textContent = screen.textContent.slice(0, -1);
    operandB = screen.textContent;
  }
}