var obj = {
  name: "jay",
  
};

function sayHello(age,hometown,role){
  return this.name+" "+"is"+" "+age+" "+"lives in"+" "+hometown+" "+"and is an"+" "+role
}
// console.log(sayHello())
// to call this function inside object obj we can use call m ethod
console.log(sayHello.call(obj,24,"Mumbai","developer"))//with call method  arguments are passed with comma separation

// APPLY
// with apply method argu,ens neeeds to be in the form arraylist
console.log(sayHello.apply(obj,[24,"Mumbai","Developer"]))

// BIND
// it provides with another function which can be used later on
const bindFun = sayHello.bind(obj,30,"Delhi","Youtuber")
console.log(bindFun())//bind gives us the function and doesnt execute the sayHello method directly insted returned function can be called anytime we want
// bindFun()
// only difference is bind gives you the copy which can be invoked later 