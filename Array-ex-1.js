// Remove duplicates

const arr = [10,20,10,10,20,5,6,30]
const uniqueNumber = arr.filter((n,i) => {
  return arr.indexOf(n) === i
})
console.log(uniqueNumber)