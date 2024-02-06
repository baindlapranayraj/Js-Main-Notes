let Pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pranay");
    },10000)
})

let Pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pranay Raj");
    },5000)
})

//🌟🌟🌟 Diffrence between Normal way and Modren way 🌟🌟🌟

// ⭐️⭐️⭐️ Normal Way of resolving a Promise (.then Way) ⭐️⭐️⭐️
// function getData1(){
//     Pr1.then((Data) => {
//         console.log(Data);
//     })
//     console.log("Raj")
// }
// getData1();


// ⭐️⭐️⭐️ Modren Way of resolving Promises (Async/Await) ⭐️⭐️⭐️
async function getData(){
    console.log("Hello World")
    let value1 = await Pr1;
    console.log(value1)
    console.log("NAMASTE DUNIYA")

    let value2 = await Pr2;
    console.log(value2);
    console.log("NAMASTE DUNIYA")
}

getData();
console.log("Hello World Outer")