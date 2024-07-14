//  Synchronus vs Asynchronous code
// const cart = ["shoes", "Books", "perfume", "tops"]
// const promise = createOrder(cart)
// {data:undefined}

const Github_Api="https://api.github.com/users/SalveSayali-23"
const user = fetch(Github_Api)//this will return us a promise
console.log(user);

// lets attach a callback to the promise object i.e. user
// user.then(function (data){
//   console.log(data);
// })

// Promise chaining solves the problem of callback hell
// createOrder(cart, fubction(orderId){
//   proceedTopayment(orderId, function (paymentInfo){
//     showOrderSummary(paymentInfo, function(){
//       updateWalletbalanc()
//     })
//   })
// })

crateOrder(cart).then(function(orderId){
  return  proceedTopayment(orderId)
  }
)
.then(function(paymentInfo){
 return  showOrdersummary(paymentInfo)
})
.then(function(){
  return updateWallet()
})

// using arrow functions
createOrder(cart)
.then((orderId)=>proceedTopayment(orderId))
.then(paymentInfo=>showOrdersummary(paymentInfo))
.then(walletBal=>updateWallet(walletBal))