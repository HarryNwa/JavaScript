let arr = []

let row1 = []

let obj0 = {
    name : "Ontario",
    population : 187000,
    temp : 9.0,
    currency : "CanDollar",
};


let obj1 = {
    name : "Moscow",
    population : 138000,
    temp : 7.0,
    currency : "NG",
};

let obj2 = {
    name : "Oslo",
    population : 225000,
    temp : 5.0,
    currency : "NG",
};

row1.push(null)
row1.push(obj0)
row1.push(obj1)
row1.push(obj2)
arr.push(row1)

let obj3 = {
    name : "Pretoria",
    population : 125000,
    temp : 6.0,
    currency : "RND",
};



let obj4 = {
    name : "London",
    population : 129000,
    temp : 19.0,
    currency : "Pounds",
};

let obj5 = {
    name : "Washinton D.C",
    population : 785000,
    temp : 12.0,
    currency : "Dollar",
};
let row2 = []
row2.push(obj3)
row2.push(obj4)
row2.push(obj5)
row2.push(null)
arr.push(row2)

let obj6 = {
    name : "Sydney",
    population : 125000,
    temp : 21.0,
    currency : "AUS",
};

let obj7 = {
    name : "Lagos",
    population : 125000,
    temp : 23.0,
    currency : "NG",
};

let obj8 = {
    name : "Accra",
    population : 125000,
    temp : 11.0,
    currency : "CD",
};
let row3 = []
row3.push(obj6)
row3.push(null)
row3.push(obj7)
row3.push(obj8)
arr.push(row3)


console.table(arr)

let temper = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j])
        let population = arr[i][j]
    if(population && population.temp <= 10){
        temper += population.population
    }
    
    
}
}
console.log(temper)
