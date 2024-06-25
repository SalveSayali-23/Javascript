// let person = new Object();
// let person ={}
// person.firstName="Joe";
// person.lastName="mello";
// person.age=40;
// console.log(person.firstName+" is "+person.age+" years old ")
// console.log(person["lastName"])
// console.log(person.age);

const car = {
  name:"BMW",
  weight:800,
  color:"Black"
}
// delete car.weight

//  car.price = "40 lac"
car["speed"] = 100
 console.log(car)

 myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj["myCars"]["car3"])

// METHOD
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  // fullName: function (){
  //   return this.firstName +" "+this.lastName
  // }
}
person.fullName=function (){
    return this.firstName +" "+this.lastName
  }

console.log("I am"+ " "+ person.fullName());
// console.log(person.fullName);
let myArr=Object.values(person)
console.log(myArr)//return array of all values
console.log(Object.keys(person));//return array of all keys

const fruits = {Bananas:300, Oranges:200, Apples:500}; 
console.log(Object.entries(fruits));
let text=""
for(let [fruit,val] of Object.entries(fruits)){
  text+= fruit+ ": "+val+" ";
}
console.log(text)
