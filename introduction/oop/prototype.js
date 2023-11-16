let vehicle = {
    "seats": 5,
    "wheels": 4,
    "doors": 2

}
let x = {};
let str = new String("hello")

let car = {
    model: "Lambo",
    color: "Peach Black",
    year: "2023",
    x,
    __proto__: vehicle
}


console.log(car["{}"])
console.log(car.color)
console.log(Object.keys(car))
// console.log(vehicle.__proto__)
// console.log(Object.getPrototypeOf(vehicle));