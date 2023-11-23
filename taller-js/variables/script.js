let title = document.querySelector('#title');
let text = document.querySelector('#paragraph');


let name = "Chico"; //string
console.log(name);

let lastName = "Storm"; 
console.log(lastName);

let age = 4; //number
console.log(age);

const multiplyFactor = 7; //number
console.log(multiplyFactor);

let dog = true; //boolean
console.log(dog);

let fullName = name + lastName; // concat
console.log(fullName);

let humanAge = age * multiplyFactor; //multiply
console.log(humanAge);

let myAge = 35; //number
console.log(myAge);

let ourAge = myAge + age; //sum
console.log(ourAge);

let myDogAge = myAge / multiplyFactor; //division
console.log(myDogAge);

let ageDifference = myAge - humanAge; //sub
console.log(ageDifference);


text.textContent = `That's ${dog} that ${name + " " + lastName} is my dog. He is ${age} and I'm ${myAge}. In human age, ${name} would be ${humanAge} and in dog years I'd be ${myDogAge}. That said, our age difference is ${ageDifference} and together we have ${ourAge} human years old.`;

