let nameInput = document.querySelector("#name");
let answer = document.querySelector("#answer");
let year = document.querySelector("#year");
let firstNumber = document.querySelector("#num1");
let secondNumber = document.querySelector("#num2");



function isEven(){
  let yearInput = year.value;
  return yearInput % 2 == 0 ? "even" : "odd";
}
console.log(isEven);


let sum = (num1, num2) => {
  let number1 = parseInt(firstNumber.value);
  let number2 = parseInt(secondNumber.value);
  return number1+number2;
}

console.log(sum);


function hello(event) {
  // Evita o envio padrão do formulário
  event.preventDefault();  
  let valueInput = nameInput.value;
  let yearInput = year.value;
  let age = 2023 - yearInput;

  answer.textContent = `Hello, ${valueInput}! Welcome :) You've born in an ${isEven()} year and you now are ${age} years old. The result of the operation you asked is ${sum()}`;
}