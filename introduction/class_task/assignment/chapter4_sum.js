
function sum(numbers) {
  
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
      total += numbers[index];
  }
  return total;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(numbers))




function count(start, end) {
    // if(start > end){
    //     throw new Error("Make start greater than end")
    // }
    let array = [];
    for (let index = start; index <= end; index++) {
      // array[index-start] = index;
        array.push(index);
        
    }
    return array;
}
console.log(count(1, 10))




function range(start, end, step) {
    let result = [];
  
    if (step > 0) {
      for (let index = start; index <= end; index += step) {
        result.push(index);
      }
    }else{
      for (let index = start; index >= end; index += step) {
        result.push(index);
      }
    }
      
    return result;
  }
  
console.log(range(5, 2, -1))