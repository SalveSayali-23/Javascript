// function sum(){
// return function result(a,b){
//   let res =a+b
//   return res;
// }

// }
// let output = sum()
// console.log(output(3,4))

// const a
// a=3
// console.log(a)
// console.log(getNum)
// var getNum=function (){
//   console.log("hello")
// }

// function add(a,b){
// return a+b
// }

// const result = (a,b)=>a+b

// const arr =[1,2,3,9,6,7]

// const output=arr.reduce(function(max,curr){
//   if(curr>max){
//    return curr
//   }else{
//     return max
//   }

 
//   // return curr>max ? curr : max
// },0)
// console.log(output)

const arr =[1,0,3,0,9,0,7,0,0,0,7,5,4]
function moveZeroes(arr){
  let nonZeroVal=0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]!=0){
      arr[nonZeroVal]=arr[i]
      nonZeroVal++
    }

  }
  for(let i=nonZeroVal; i<arr.length; i++){
    arr[i]=0
  }

  return arr

}
console.log(moveZeroes(arr))