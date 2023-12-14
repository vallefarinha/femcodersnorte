class FizzBuzz{
    validar_primos_3_5(num){
        let result;
        if  ((num % 3 === 0) && (num % 5 === 0)){
            result = "FizzBuzz";
        } else if (num % 5 === 0){
            result = "Buzz";
        } else if (num % 3 === 0){
            result = "Fizz";;
        } else {
            result = num;
        }
        return result;
    }
}

module.exports = FizzBuzz;


