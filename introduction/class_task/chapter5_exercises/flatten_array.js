const arrays = [[1, 2, 3], [4, 5], [6]];

// Use the reduce method to flatten the array of arrays
const flattenedArray = arrays.reduce((result, currentArray) => result.concat(currentArray), []);

console.log(flattenedArray);
