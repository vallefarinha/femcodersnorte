
let button = document.getElementById("button-send");
let form = document.getElementById("form");
let unorderedList = document.getElementById("list");
let newSection = document.getElementById("new-section");
let table = document.getElementById("table");
let text = document.querySelectorAll(".input");
let list = document.getElementById("list-name");
let numberMany = document.getElementById("number");
let printObject = document.getElementById("objects");
let counter = 0;
let names = ["Ana", "Maria", "João", "Lúcia", "Carol", "Luiza", "Luciano", "Benedita", "Oscar", "Felipe", "Joaquim"];
let numbers = [20,21,22,23,24,25,26,27,28,29,30];
let objects = [
    {
        id: 1,
        name: "Chico",
        status: "Online",
        species: "Human",
        type: "Common",
        gender: "Male"
    },
    {
        id: 2,
        name: "Sophie",
        status: "Offline",
        species: "Elf",
        type: "Mage",
        gender: "Female"
    },
    {
        id: 3,
        name: "Max",
        status: "Online",
        species: "Dwarf",
        type: "Warrior",
        gender: "Male"
    },
    {
        id: 4,
        name: "Elena",
        status: "Offline",
        species: "Human",
        type: "Rogue",
        gender: "Female"
    },
    {
        id: 5,
        name: "Oliver",
        status: "Online",
        species: "Halfling",
        type: "Bard",
        gender: "Male"
    },
    {
        id: 6,
        name: "Aria",
        status: "Offline",
        species: "Elf",
        type: "Archer",
        gender: "Female"
    },
    {
        id: 7,
        name: "Liam",
        status: "Online",
        species: "Dwarf",
        type: "Paladin",
        gender: "Male"
    },
    {
        id: 8,
        name: "Isabella",
        status: "Online",
        species: "Human",
        type: "Sorcerer",
        gender: "Female"
    },
    {
        id: 9,
        name: "Lucas",
        status: "Offline",
        species: "Halfling",
        type: "Thief",
        gender: "Male"
    },
    {
        id: 10,
        name: "Emma",
        status: "Online",
        species: "Elf",
        type: "Druid",
        gender: "Female"
    }
]

 button.addEventListener('click', (event) => { 
    event.preventDefault()  
    counter++;
    let item = document.createElement("li");
    item.textContent = "The button was clicked " + counter + " times";
    unorderedList.appendChild(item);
    console.log(counter);
});

let clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.id = "clear";
form.appendChild(clearButton);

clear.addEventListener('click', (event)=> {
    event.preventDefault();
    unorderedList.textContent = " ";
    counter = 0;
    text.forEach(input => input.value = "");
});

//Crea los nodos necesarios para imprimir un formulario.
let formElement = document.createElement("form");

let labelName = document.createElement("label");
labelName.textContent = "Name"
let inputName = document.createElement("input");

let labelLastName = document.createElement("label");
labelLastName.textContent = "Last Name"
let inputLastName = document.createElement("input");

let labelAdress = document.createElement("label");
labelAdress.textContent = "Adress"
let inputAdress= document.createElement("input");

let buttonForm = document.createElement("button");
buttonForm.textContent = "send"
newSection.appendChild(formElement);
formElement.appendChild(labelName);
formElement.appendChild(inputName);
formElement.appendChild(labelLastName);
formElement.appendChild(inputLastName);
formElement.appendChild(labelAdress);
formElement.appendChild(inputAdress);
formElement.appendChild(buttonForm);
formElement.classList.add("new-form");



//Crea los nodos necesarios para imprimir una tabla.

let tableElement = document.createElement("table")
tableElement.textContent = "This is a table";
tableElement.classList.add("table-js");
let tableHead = document.createElement("thead");
let tableRow = document.createElement("tr");
let smallTableHead = document.createElement("th");
smallTableHead.textContent = "A table created with JS";
smallTableHead.colspan = 3;
let tableBody = document.createElement("tbody");
let bodyRow = document.createElement("tr")
let buttonTable = document.createElement("button");
buttonTable.textContent = "Make it disappear!"


table.appendChild(tableElement);
tableElement.appendChild(tableHead);
tableHead.appendChild(tableRow);
tableRow.appendChild(smallTableHead);
tableElement.appendChild(tableBody);
tableBody.appendChild(bodyRow);
table.appendChild(buttonTable);


// Ocultar y mostrar elementos HTML utilizando JavaScript.

buttonTable.addEventListener('click', (event)=> {
    event.preventDefault();
    tableElement.style.visibility = (tableElement.style.visibility === "visible") ? "hidden" : "visible";
})

// Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
function printNames(arg){
    for(let i = 0; i < arg.length; i++){
        let name = document.createElement("li");
        name.textContent = arg[i];
        list.appendChild(name);     
    }
    return name;
}
printNames(names);
//Crear una función que pinte en pantalla cuántos números tiene el array de números.
function howManyNumbers(arg){
    let numberQuantity = document.createElement("li");
    numberQuantity.textContent = arg.length;
    console.log(arg.lenght);
    numberMany.appendChild(numberQuantity);
    return numberQuantity;
}
howManyNumbers(numbers);

//Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.

function printTable(arg){
    for(let i = 0; i < arg.length; i++){
        let tableContent = document.createElement("td");
        tableContent.classList.add("content-table");
        tableContent.textContent = arg[i].id + " " + arg[i].name + " " + arg[i].status + " " + arg[i].species + " " + arg[i].type + " " + arg[i].gender ;
        bodyRow.appendChild(tableContent);
    }
    return tableContent;
}

printTable(objects);

