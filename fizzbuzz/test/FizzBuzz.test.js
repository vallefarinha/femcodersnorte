//Imports
const {expect} = require("@jest/globals");
const FizzBuzz = require("../FizzBuzz");
const fizz = new FizzBuzz();

describe('Tests que validan los múltiplos de 3 y 5', () => {

    test('Test devuelve Fizz cuando divisible por 3', () => {
/* 
GHERKIN TEST
GIVEN/ARRANGE: a number
WHEN/ACT: when divisible by 3
THEN/ASSERT: return Fizz
*/

//ARRANGE: prepare the scenario
const number = 3;
const resultExpected = "Fizz";

//ACT: execute the scenario
const result = fizz.validar_primos_3_5(number);

//ASSERT: prove the scenario
expect(result).toBe(resultExpected);

})

test('Test devuelve Buzz cuando divisible por 5', () => {
    const number = 5;
    const resultExpected = "Buzz";
    
    const result = fizz.validar_primos_3_5(number);
    
    expect(result).toBe(resultExpected);
    
    })

    test('Test devuelve Fizz cuando divisible por 3 y 5', () => {
        const number = 15;
        const resultExpected = "FizzBuzz";
        
        const result = fizz.validar_primos_3_5(number);
        
        expect(result).toBe(resultExpected);
        
        })

        test('Si no, devuelve el mismo número', () => {
            const number = 1;
            const resultExpected = 1;

            const result = fizz.validar_primos_3_5(number);

            expect(result).toBe(resultExpected);
        })

})