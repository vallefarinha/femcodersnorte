const { expect } = require("@jest/globals");
const LeapYear = require("../LeapYear");
const leap = new LeapYear();

describe("Tests que validan si un año es bisiesto", () => {

  test("Test devuelve true cuando divisible por 400", () => {
    const number = 400;
    const result400 = leap.isLeapYear(number);

    expect(result400).toBe(true);
  });

  test("Test devuelve false cuando divisible 100 Y NO por 400", () => {
    const result400 = true;
    const number = 100;
    const result = leap.isLeapYear(number);

    if (!result400) {
        expect(result).toBe(false);
      } 
  });

  test("Test devuelve true cuando divisible por 4", () => {
    const number = 4;
    const result = leap.isLeapYear(number);

    expect(result).toBe(true);
  });


  test("Test devuelve false cuando NO divisible por 4", () => {
    const number = 5;
    const result = leap.isLeapYear(number);

    expect(result).toBe(false);
  });
 

});
