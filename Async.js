//🫶🏻 Making Js async using normal functions 🫶🏻

let coffe;
// orderCoffe();

function orderCoffe(){
    console.log(`Order Coffe`);
    setTimeout(() =>{
        coffe = "☕️";
        sayArrive(coffe);
    },2000)
}

function sayArrive(coffe){
    console.log(`${coffe} is arrived`)
    drinkCoffe(coffe);
}

function drinkCoffe(coffe){
    console.log(`Drink ${coffe}`)
}

// 😈 Callback hell 😈 is the reason for the birth of promises as well as asyn and await 

const cart = ["shoe","pant","shirt"];

const promise = creatOrderId(cart);


promise
.then(function(data){
    console.log(data);
    return data
})
.then(function(orderId){
    // console.log(orderId)
   return proceedPayment(orderId)
})
.then((paymentInfo) =>{
    console.log(paymentInfo);
})
.catch((err) =>{
    console.log(`${err.message}`)
})


function creatOrderId(cart) {
   let pr = new Promise((resolve,reject) => {
        if(false){
        let err = new Error("Cart is not valid");
        reject(err);
        }
        let orderId = "12345";
        if(orderId){
            setTimeout(() =>{
                resolve(orderId);
            },2000)
        }
    })
    return pr;
}

function proceedPayment(orderId){
    return new Promise((resolve, reject) => {
        if(false){
            let err = new Error("Payment Denied")
            reject(err);
        }
        else{
            setTimeout(() =>{
                resolve("Order Approved");
            },1000)
        }
    })
}