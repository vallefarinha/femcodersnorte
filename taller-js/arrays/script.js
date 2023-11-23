let title = document.querySelector("#title");
let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");
let text5 = document.querySelector("#text5");
let text6 = document.querySelector("#text6");
let text7 = document.querySelector("#text7");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

////////////////////////////////////////////////////////////

let count = () => {
    let result = "";
    for(i = 0; i < numbers.length; i++){
       result += numbers[i] + " ";     
    }
    return `${result}`;
}
console.log(count());  
title.textContent = `ARRAY: ${count()}`;

////////////////////////////////////////////////////////////

let insert = () => {
 numbers.push(11);
 return numbers;
}

text1.textContent = `Insert number in the array: ${insert()}` ;
console.log(numbers); //CORRIGIR

////////////////////////////////////////////////////////////

 let odd = (numbers) => {
    let odds = [];
    let evens = [];
        let newArray = numbers.filter(function (number) {
                if( number % 2 == 0) {
                    evens.push( number);
                } else {
                    odds.push(number);
                }
            return true
        } );
        return odds
}

text2.textContent = `Just odds: ${odd(numbers)}` ;
console.log(odd(numbers));

////////////////////////////////////////////////////////////

let biggestNum = () => {
    let max = Math.max(...numbers)
        return max;

}

text3.textContent = `This is the biggest number of the array: ${biggestNum()}` ;
console.log(biggestNum());

////////////////////////////////////////////////////////////
// let smallestNum = () => {
//     let min = Math.min(...numbers)
//         return min;
// }

let min = numbers.reduce(function (a, b) {
    return Math.min(a, b);
  });
text4.textContent = `This is the smallest number of the array: ${min}` ;
console.log(min);

////////////////////////////////////////////////////////////

let lowerCase = (str) => {
    return str.toLowerCase();
}
text5.textContent = `This function transforms all letters to lowercase: ${lowerCase('GERALDO')}` ;
console.log(lowerCase("GERALDO"));

////////////////////////////////////////////////////////////

let upperCase = (str) => {
    return str.toUpperCase();
}
text6.textContent = `This function transforms all letters to uppercase: ${upperCase('geraldo')}` ;
console.log(upperCase("geraldo"));

////////////////////////////////////////////////////////////
let capitalCase = (str) => {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

text7.textContent = `This function transforms all letters to uppercase: ${capitalCase('Here are the 15 most common English idioms and phrases that will enrich your English vocabulary and make you sound like a native speaker.')}` ;

console.log(capitalCase("Here are the 15 most common English idioms and phrases that will enrich your English vocabulary and make you sound like a native speaker."));