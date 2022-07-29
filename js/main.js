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

function operate(a, operator, b) {
  switch (operator) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    default:
      console.log("ERROR");
  }
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