// Closures by IIFEE
const Private = (() => {
    let count = 0;
    console.log(`Initial value of count ${count}`)
    return () => {
        count = count + 1;
        console.log(count)
    }
})()

// Private();
// Private();


// spread operator >> widly used in react;

// ******************************************
/// ******* for arrays ********
// ******************************************

let arr = [1,2,3,4];

function avg(a,b){
    console.log((a+b)/2);
}
// avg(...arr);

// ******************************************
// ******** for objects ******
// ******************************************

let obj1 = {
    nam:"pranay",
    grade:"b-tech",
    favLang:"javascript"
}

let obj2 ={};

// obj2.nam = obj1.nam;
// obj2.grade = obj1.grade;
// obj2.favLang = "python";

obj2 = {...obj1,favLang : "c++"};
console.log(obj2);

// ******************************************
// ************** destucturing **************
// ******************************************

let {nam,grade,favLang} = obj1;
// console.log(nam,grade,favLang); // >>>> for objects

let array = [1,2,34,4];

let [x,b,c,d] = array;
// console.log(x,b,c,d); // >>>> for arrays


// ******************************************
//  diffrences between spread and rest operators;
// ******************************************

let a  = [1,23,3,4,56,6];

// console.log(...a); // spread operator

function cons(a,b,c,...e){ // >> rest operator
    console.log(a,b,c,e);
}
// cons(...a); // spread operator


