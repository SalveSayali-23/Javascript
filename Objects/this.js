"use strict"
// 1.this in global space
console.log(this) //returns a global window object but in node js this value will be global and not window

//2. this inside a function
function x(){
  // the value depends on strict or non strict mode
  console.log(this);
}
// x()
// in non strict mode-- this substitution
// this will be replaced with global object by js

// 3. value of this keyword depends on how  is called
x();//this gives undefined when called without any reference from object
window.x()//now this returns window object

