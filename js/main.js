const screen = document.querySelector('#screen');
let operandA;
let operandB;
let operator;

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
          if (operandA && operator && operandB) buildEquation();
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
  if (!operator) {
    if (screen.textContent.length < 11) {
      if (value !== '.') {
        screen.textContent += value;
      } else if (!screen.textContent.includes('.')) {
        screen.textContent += value;
      }
    operandA = screen.textContent;
    }
  } else {
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

function buildEquation(operandA, operator, operandB) {
  let operation = {
    operandA,
    operator,
    operandB,
  }
  operate(operation);
}

function operate(operation) {
  switch (operation.operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      console.log("ERROR");
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    screen.textContent = "ERROR";
    clear();
  }
  return a / b;
}

function clear() {
  operator = null;
  operandA = null;
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