const numbers = [1, 2, 3, 4, 5];

const isEven = (n) => n % 2 === 0;

console.log(everyWithLoop(numbers, isEven)); // false (not every element is even)
console.log(everyWithSome(numbers, isEven)); // false (not every element is even)

const isPositive = (n) => n > 0;

console.log(everyWithLoop(numbers, isPositive)); // true (every element is positive)
console.log(everyWithSome(numbers, isPositive)); // true (every element is positive)
