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
        case 'claer':
          console.log('pending');
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
  const screen = document.querySelector('#screen');
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