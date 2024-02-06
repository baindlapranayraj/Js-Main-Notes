//⭐️ There are many Promise APIs ⭐️

let pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pranay")
    },2000)
})

let pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Mani")
    },1000)
})

let pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Raj")
    },1500)
})

//🫶🏻 Promise API : Promise.all() 🫶🏻

let all = Promise.all([pr1,pr2,pr3])

all.then((array) => {
    console.log(array);
})

//🫶🏻 Promise API : Promise.allSetteld() 🫶🏻

let oneReject = Promise.allSettled([pr1,pr2,pr3]);
oneReject.then((data) => {
    console.log(data);
})

// 🫶🏻 Promise API : Promise.race() 🫶🏻

let racePromise = Promise.race([pr1,pr2,pr3]);
racePromise
.then((data) => {
    console.log(data);
})

// 🫶🏻 Promise API : Promise.any() 🫶🏻

let any = Promise.any([pr1,pr2,pr3]);
any.then((data) => {
    console.log(data);
})

