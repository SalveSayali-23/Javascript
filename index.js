let name = {
  firstName: "John",
  lastName:"mello",
  // printFullName:function () {
  //   console.log(this.firstName + " "+ this.lastName)
  // }
}
 let printFullName = function (hometown,state) {
    console.log(this.firstName + " "+ this.lastName+" " +  "from" + " "+ hometown+ ","+ state)
  }

printFullName.call(name,"Mumbai","Maharashtra")
// function borrowing:we can borrrow function from other objects and use it with data of some other object

let name2 = {
  firstName: "Park",
  lastName: "Jimin"
}

// printFullName.call(name2, "seoul","South Korea")

// apply: diffrence from call is how we pass the argument to the printFullName method i.e. we pass the argument to the arrayList
printFullName.apply(name2,["seoul","South Korea"]) 


