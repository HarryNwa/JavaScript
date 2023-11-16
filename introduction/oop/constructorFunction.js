function Native(firstName, lastName, scvID, cohort) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.scvID = scvID;
    this.cohort = cohort;
    
    this.setScvID = newScvID => {
        scvID = newScvID;
    }

    this.getScvID = () => {
        return scvID;
    }

};

Native.prototype.hasLaptop = true;

module.exports = Native
let student1 = new Native("Amina", "Tomide", "00013scb", 23);
let student2 = new Native("Lof", "Hafsat", "00034ijk", 23);

student1.hasLaptop = false

let arr = new Array(5, 5, 5)

Array.prototype.push = function() {
    let sum = 0;
    for (let index = 0; index < this.length; index++) {
        sum += this[index]
        
    }
    return sum
}

console.log(arr.push())
arr.push(8)
console.log(arr)

