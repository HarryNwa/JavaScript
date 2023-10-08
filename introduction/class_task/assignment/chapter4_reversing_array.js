function reversArray(array) {
    let newArray = [];
    let count = 0;
    for (let index = array.length-1; index >= 0; index--) {
        newArray[count] = array[index];
        count++;
     }
    return newArray;
}
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reversArray(array));




function reverseArrayInPlace(array) {
    let newArray = [];
    let count = 0;
    for (let index = array.length-1; index >= 0; index-=2) {
        newArray[count] = array[index];
        count++;
     }
    return newArray;
}
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArrayInPlace(array));