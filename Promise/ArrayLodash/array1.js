// Lodash is a popular js library that provodes manyhelpful functions for working with arrays,objects and other data types. 
// 1. Chunk:splits an array into groups of the defined size
const _ =require('lodash')
const array = [1,2,3,4,5,6]
const chunked = _.chunk(array,2)
console.log(chunked);

// 2. concat: concatenates array and values
const concatenated = _.concat([1],2,3,[[4]])
console.log(concatenated);

// 3.Faltten: Flattens an array by one level
const falttened =_.flatten([1,[2,[3,[4]]],5])
console.log(falttened);
// 4. IndexOf: gets the index of first occurrence of the given value n the array
const index = _.indexOf([1,2,1,2],2)
console.log(index);
