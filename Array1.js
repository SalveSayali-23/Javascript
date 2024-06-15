// Map-filter-reduce
const arr = [5, 1 ,3 ,2, 6];

// transformations
// Double =[10, 2, 6, 4, 12]
// Triple = [15, 3, 9, 6, 18]
// Binary=["101", "1", "11", "10", "110"]

// function double(x){
//   return x*2
// }
// const output=arr.map(x => x*3)

// const output=arr.map(binary)
const output=arr.map(function binary(x){
  return x.toString(2);
  
})
// console.log(output)

// Filter

const arr1 = [5,6,7,3,2,1]
const res = arr1.filter((x)=> (x%2)==0)// filters out all the even values inside array
console.log(arr1.filter((x) => x>3))
console.log(res)

// REDUCE
// sum or max
const arr2 = [2,4,5,6,9]
//  normal function to find sum of all values 

function findSum(arr2){
  let sum = 0;
  for(let i = 0; i<arr2.length; i++){
    sum+=arr2[i]
  }
  return sum;
}
// console.log(findSum(arr2))
function findMax(arr2){
  let max = 0;
  for(let i = 0; i<arr2.length; i++){
   if(arr2[i]>max){
    max = arr2[i]
   }
  }
  return max;
}
console.log(findMax(arr2))


// using reduce
const resultSum= arr2.reduce(function(acc, curr){

  acc = acc + curr
  return acc
}, 0)
// console.log(resultSum)

// find max with reduce
const resultMax= arr2.reduce(function(max, curr){
  if(curr > max){
    max = curr
  }
  return max
},0)
console.log(resultMax)


