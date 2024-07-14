// 1. Async 
// async is used to create async function that always returns a promise


const pr = new Promise((resolve,reject)=>{
  setTimeout(()=> {
    resolve("Promise 1 resolved value!")
  },10000)
 
})

const pr2 = new Promise((resolve,reject)=>{
  setTimeout(()=> {
    resolve("Promise 2 resolved value!")
  },20000)
 
})

// async function getdata(){
//   return pr
// }
// const dataPromise = getdata()
// // console.log(dataPromise);
// dataPromise.then(res =>  console.log(res));

// how we handle promise befoe async await
//  function getdata(){
//     return pr.then(res=> console.log(res));

//   }
//   getdata()

  // ASYNC with AWAIT
  // lets handle promise pr from this async function
  async function handlePromise(){
    console.log("before await")
    const val = await pr//this will rsolve the promise
    // JS engine is waiting for promise to be resolved at line 29 
    console.log("Hi Javascript")
    console.log(val); 
    
    // after 5 sec both pomises resolved parallely
    const val2 = await pr2
    
    console.log(val2); 

  }
  handlePromise()

  // function getdata(){
  //   // her js engine will not wait for promise to be rsolved
  //    pr.then(res=> console.log(res));
     
  //   console.log("Hi Javascript")
  // }
  // getdata()

