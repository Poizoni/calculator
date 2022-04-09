const btns = document.querySelector('.button');
const input = document.querySelector('#txtresult')
let btn = {
  zero: document.querySelector('#zero'),
  one: document.querySelector('#one'),
  two: document.querySelector('#two'),
  three: document.querySelector('#three'),
  four: document.querySelector('#four'),
  five: document.querySelector('#five'),
  six: document.querySelector('#six'),
  seven: document.querySelector('#seven'),
  eight: document.querySelector('#eight'),
  nine: document.querySelector('#nine'),
  add: document.querySelector('#add'),
  subtract: document.querySelector('#subtract'),
  multiply: document.querySelector('#multiply'),
  divide: document.querySelector('#divide'),
  dot: document.querySelector('#dot'),
  equal: document.querySelector('#equal'),
  clear: document.querySelector('#clear'),
}

let firstVal;
let secondVal;
let operator;

function storeNum(op) {
  firstVal = parseFloat(input.value);
  input.value = op;
  operator = op;
  return firstVal;
}

function storeSec() {
  secondVal = parseFloat(input.value);
  input.value = operate(firstVal, secondVal, operator);
}

function automaticResult() {
    if (firstVal && operator) {
        storeSec();
    }
}

const removeZero = () => (input.value === '0') ? input.value = '' : false;

const removeOp = () => (input.value === '+' || input.value === '/' || input.value === '*' || input.value === '-') ? input.value = '' : false;

function operate(x, y, operator) {
  if (operator === '+') {
    return add(x, y);
  } else if (operator === '-') {
    return subtract(x, y);
  } else if (operator === '*') {
    return multiply(x, y);
  } else if (operator === '/') {
    return divide(x, y);
  }
}

function click() {
  btn.zero.addEventListener('click', () => {
    removeZero();
    removeOp();
    input.value += 0;
    automaticResult();
  });
  btn.one.addEventListener('click', () => {
    removeZero();
    removeOp();
    input.value += 1;
    automaticResult();
  });
  btn.two.addEventListener('click', () => {
    removeZero();
    removeOp();
    input.value += 2;
    automaticResult();
  });
  btn.three.addEventListener('click', () => {
    removeZero();
    removeOp();
    input.value += 3;
    automaticResult();
  });
  btn.four.addEventListener('click', () => {
    removeZero();
    removeOp();
    input.value += 4;
    automaticResult();
  });
  btn.five.addEventListener('click', () => {
    removeZero();
    removeOp();
    input.value += 5;
    automaticResult();
  });
  btn.six.addEventListener('click', () => {
    removeZero();
    removeOp();
    input.value += 6;
    automaticResult();
  });
  btn.seven.addEventListener('click', () => {
    removeZero();
    removeOp();
    input.value += 7;
    automaticResult();
  });
  btn.eight.addEventListener('click', () => {
    removeZero();
    removeOp();
    input.value += 8;
    automaticResult();
  });
  btn.nine.addEventListener('click', () => {
    removeZero();
    removeOp();
    input.value += 9;
    automaticResult()
  });
  btn.divide.addEventListener('click', () => {
    storeNum('/');
  });
  btn.multiply.addEventListener('click', () => {
    storeNum('*');
  });
  btn.subtract.addEventListener('click', () => {
    storeNum('-');
  });
  btn.add.addEventListener('click', () => {
    storeNum('+');
    
  });
  btn.dot.addEventListener('click', () => {
if (!input.value.includes('.')) {
    input.value += '.';
    }
  });
  btn.clear.addEventListener('click', () => {
    firstVal = null;
    secondVal = null;
    input.value = null;
  });
  btn.equal.addEventListener('click', () => {
    storeSec();
  });
}

function add(x, y) {
	const num = x + y;
  const rounded = Math.round(num * 1000) / 1000;
  return rounded;
}

function subtract(x, y) {
  const num = x - y;
  const rounded = Math.round(num * 1000) / 1000;
  return rounded;
}

function multiply(x, y) {
  const num = x * y;
  const rounded = Math.round(num * 1000) / 1000;
  return rounded;
}

function divide(x, y) {
	if(x === 0 && y === 0) {
  	return 'no';
  }
  const num = x / y;
  const rounded = Math.round(num * 1000) / 1000;
  return rounded;
}

click();
