// consider a ecommerce application
const cart = ["shoes", "Books", "perfume", "tops"]
// createOrder api is an async opeartion and it will return a promise
// const promise = createOrder(cart)//orderId

createOrder(cart).then(function(orderId){
 console.log(orderId);
 return orderId
})
.then(function(orderId){
  return proceedToPayment(orderId)
})
.then(function(paymentInfo){
  console.log(paymentInfo);
  return paymentInfo
})
.catch(function (err){
  console.log(err.message);
}// failure callback is handled with catch
)
.then(function(orderId){
  console.log("I'll be always be called no matter what happens");
})

// we know that this createOrder will give promise so this is how promise is created
function createOrder(cart){
  // this is a promise constructor that takes in th function resolve and reject thats given by js to build a promise
  const pr  = new Promise(function(resolve,reject){
    // createOrder
    // validateCart
    // orderId is required response
    if(!validateCart(cart)){
      const err = new Error("cart is not valid")
      reject(err)
    }
    // logic for ceateOrder
    const orderId="123"
    if(orderId){
      setTimeout(() => {
        resolve(orderId)
      }, 3000);
     
    }
  })

  return pr
}

function proceedToPayment(orderId){
  return new Promise(function (resolve,reject){
    resolve("Payment Successful")
  })
}
function validateCart(cart){
  // return true
  return false
}

