class LeapYear {
    isLeapYear(num) {
      if (num % 400 === 0) {
        return true;
      } else if (num % 100 === 0) {
        return false;
      } else if (num % 4 === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  const leap = new LeapYear();
  console.log(leap.isLeapYear(1800));
  

  module.exports = LeapYear;