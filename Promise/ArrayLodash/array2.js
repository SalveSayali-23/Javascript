
// Write a function that takes an array of numbers and returns the sum of all even numbers in the array. Use a closure to create the summing function.
function sumOfEvens() {
  let sum = 0;
  return function(arr) {
    arr.forEach(num => {
      if (num % 2 === 0) {
        sum += num;
      }
    });
    return sum;
  };
}

const sumEvens = sumOfEvens();
console.log(sumEvens([1, 2, 3, 4, 5, 6])); // 12

// Find Unique Elements
// Description:
// Write a function that takes an array and returns a new array with only unique elements. Use Lodash to achieve this.
const _ = require('lodash');

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueElements = _.uniq(arr);
console.log(uniqueElements); // [1, 2, 3, 4, 5]

