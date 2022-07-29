const screen = document.querySelector('#screen');
let displayValue;

getInput();

function getInput() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      let input = event.target.id;
      switch (input) {
        case 'add':
          console.log('pending');
          break;
        case 'subtract':
          console.log('pending');
          break;
        case 'multiply':
          console.log('pending');
          break;
        case 'divide':
          console.log('pending');
          break;
        case 'equals':
          console.log('pending');
          break;
        case 'clear':
          clear();
          break;
        case 'delete':
          console.log('pending');
          break;
        default:
          display(input);
      }
    });
  });
}

function display(value) {
  if (screen.textContent.length < 11) {
    if (value !== '.') {
      screen.textContent += value;
    } else if (!screen.textContent.includes('.')) {
      screen.textContent += value;
    }
  displayValue = screen.textContent;
  }
}

function clear() {
  screen.textContent = '';
  displayValue = screen.textContent;
}

function operate(a, operator, b) {
  switch (operator) {
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
  return a / b;
}