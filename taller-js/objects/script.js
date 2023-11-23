let text = document.querySelector("#text");


let car = {
    brand: "Ferrari",
    color: "yellow",
    year: 2023,
    doors: 2,
    utilities: {
        seat: "leather",
        conexion: "bluetooth",
        insurance: true
    }
}
console.log(car);

let carBrand = () => {
    return car.brand;
}
console.log(carBrand());

let carDoor = () => {
    return car.doors;
}
console.log(carDoor());

let carUtilities = () => {
    return car.utilities.seat;
}
console.log(carUtilities());

text.textContent = `I have a ${carBrand()} with ${carDoor()} doors and ${carUtilities()} seats. Follows the complete carachteristics of my car: ${JSON.stringify(car, null, 2)}`;