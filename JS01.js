
//🫶🏻  Map is a higher order function used to manipulate a array like example given below 🫶🏻
let a = [1,2,3,4,5,6];
let b = a.map((num) =>{
    return num*2
})

// console.log(b);

// 🫶🏻 Filter works on true or false it used to print the array at condtion 🫶🏻
let c = a.filter((x) =>{
   return x%2 == 0 ? 1:0
})

// console.log(c)



//🫶🏻 Tricky Map question 🫶🏻
const user = [

{firstName : "akshay",
lastName :  "Saine",
age : 27
},
{firstName : "Donald",
lastName :  "Trump",
age : 75
},
{firstName : "Elon",
lastName :  "Musk",
age : 50
},
{firstName : "Sai",
lastName :  "Pallavi",
age : 25
},

]

let userName = user.map((x) =>{
    return x.firstName + x.lastName
})

console.log(userName);