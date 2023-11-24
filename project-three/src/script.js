
    let resultContainer = document.querySelector("#result");
    let previousNumber = document.querySelector("#previous-number")

   let numbers=[]; 
   
    function printFirstNumber(event) {
        let buttonValue = event.target.textContent;
        resultContainer.value += buttonValue;
        let firstNumber = resultContainer.value;
        return firstNumber;

            // if (event.target.classList.contains('btn-operation')){
            // let operator = 
            // firstNumber = firstNumber.slice(0, -1);
        
            // //         numbers.push(content.charAt(content.length - 1));
            // }           
        }
      


    // function printSecondNumber() {
    //     if (event.target.classList.contains('btn-input')) {
    //         let buttonValue = event.target.textContent;
    //         resultContainer.textContent += buttonValue;
    //     }
    // }

    // function operationButton(){
    //     if (event.target.classList.contains('btn-operation')){
    //         let content = resultContainer.textContent;         
    //         numbers.push(content.slice(0,-1));
    //         numbers.push(content.charAt(content.length - 1));
    //         resultContainer.textContent = "";
    //         console.log(numbers);
    //         printFirstNumber();
      
    // }

    // }



  
    document.addEventListener('click', function (event) {      
        printFirstNumber(event);
      
        if (event.target.classList.contains('equal')){
            resultContainer.textContent = eval(printFirstNumber);

        }

        if (event.target.classList.contains('clearAll')){
            resultContainer.value = "";
        }

        if (event.target.classList.contains('delete')){
            resultContainer.value = resultContainer.value.slice(0, -3);

        }
   }
);

// function sum(){
//         let sum = 0
//         for(i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//         }
// }

