// var is global scope variable while let and const are block scope
// {
//  const a = 5;
//  console.log(a)
// }

// shadowing
function test(){
var a = "Hello";
let b = "java"

  if(true){
   let a = "Hi";
  //  var b = "js"; //this gives error due to illegal shadowing
    console.log(a);
    console.log(b)

  }
}
test();

// Declaration without initialization
// const a; will throw error since it has to be declared as well as initialized at the same time
// let a;
// a=4; //can be initilaized later

// Re-initializtion
var b =10;
b=13
let a = 9;
a=10;//can be re-initialized

// const b = 5;
// b=6 will throw error "Assignment to const variable"

