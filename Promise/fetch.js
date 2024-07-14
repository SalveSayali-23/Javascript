
const apiUrl="https://api.github.com/users/SalveSayali-23"
// const apiUrl="https://ranom /url"
async function handlePromise(){
// fetch function is  promise so we resolved it with await then it returns a response
// to handle error wrap it inside try catch block
try {
  const data = await fetch(apiUrl)//this returns response object
  console.log(data);
  const jsonval=await data.json()
  console.log(jsonval);
  
  
} catch (error) {
  console.log(error)
  
}
}
handlePromise()
// or w can handle error like this
// handlePromise.cach(err=>console.log(err))
// execution of hndlePromise willl be suspended as soon as it comes to line 5 and it will resume the execution after the fetch call has sucessfully made 
