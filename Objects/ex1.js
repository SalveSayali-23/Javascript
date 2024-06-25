// EX-1
const age = 10;

var person = {
  name: "jay",
  age:20,
  getAge: function () {
    return this.age
  },
}
var person2 = {
  age:  24
}
console.log(person.getAge())//20
console.log(person.getAge.call(person2))//24
console.log(person.getAge.apply(person2))//24
console.log(person.getAge.bind(person2)())//24
// EX-2
var status = "😎";

setTimeout(() => {
  const status = "😍"

  const data = {
    status : "🥑",
    getStatus() {
      return this.status
    },
  };
  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
},0)

// EX-3
// CALL PRINTaNIMALS SUCH THAT IT PRINTS ALL ANIMALS IN OBJECT

const animals = [
  {
    species: "lion",
    name: "king"
  },
  {
    species: "Whale",
    name: "Queen"
  }
]

function printAnimals(i) {
  this.print = function() {
    console.log("#"+i+" "+this.species+": "+ this.name);

    
  }
  this.print();
}
for(let i = 0; i<animals.length; i++){
  console.log(printAnimals.call(animals[i],i))
}

// append an array to another array 
const arr = ["a","b"]
const elements =[0,1,2]

arr.push.apply(arr,elements)
console.log(arr)
