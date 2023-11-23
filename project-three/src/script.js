
    let resultContainer = document.querySelector("#result");

   let numbers=[]; 
   
    function printFirstNumber() {
        if (event.target.classList.contains('btn-input')) {
            let buttonValue = event.target.textContent;
            resultContainer.textContent += buttonValue;
        }
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
        printFirstNumber();
      
        if (event.target.classList.contains('equal')){
            let content = resultContainer.textContent;
            resultContainer.textContent = eval(content);

        }
   }
);

// function sum(){
//         let sum = 0
//         for(i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//         }
// }
