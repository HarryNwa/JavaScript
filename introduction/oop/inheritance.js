const Native = require("./constructorFunction")

function  Wimp(firstName, lastName, _scvID , cohort, _age) {
    
    Native.call(this, firstName, lastName, _scvID, cohort);
    let age = _age;

    this.setAge = (newAge) => {
        age =newAge;
    }

    this.getAge = () => {
        return age
    }
}

Wimp.prototype = Object.create(Native.prototype);
Wimp.constructor = Wimp.prototype;

let student1 = new  Wimp("Kene", "Uzor", "00016IKP", 19, 21);
console.log(student1.hasLaptop)
console.log(student1.getScvID())
console.log(student1.getAge())
console.log(student1.firstName)