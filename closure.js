function x(b){
  // var a = 7;
  function y(){
    console.log(a,b)
  }
  //a = 100; //in this case o/p is 100 since it remembers the reference of "a" and not the value
  let a  = 100;
  return y
}
// x()() function y is returned and called in the same line
var z = x("hello")
//console.log(z)
z()
// function y along with its parent x's lexical enviornment is closure