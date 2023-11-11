// x('121')
//  function x(str) {
//     let isPolian = false;
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[(str.length) - i - 1])
//         {
//             isPolian = true;
//             break;
//         }
//     }
//     console.log("rsult is: ", !isPolian)
    
    
    
//     console.log("************-> best way ->**********************")
//     let result = str.split("").reverse().join('') === str ? true : false;
//     console.log("the another small way result is: ", result)
// }

// (function (arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let t = i + 1; t < arr.length; t++) {
//             if (arr[i] == arr[t] &&!existOrNot(result,arr[i]) ) {
//                 result.push(arr[i]);
//                 break;
//             }
//         }
//     }
//     console.log(result)
// }([1, 2, 5, 2, 8,8,8,8,8,8,8, 1, 5, 9, 1, 1, 3]))

// function existOrNot(result, value) {
//     for (let i = 0; i < result.length; i++){
//         if (result[i] == value)
//             return true;
//     }
//     return false
// }
// (function () { console.log('this in function', this) })()
// let x = ()=> console.log('this in arrow function', this)
// x()
// what th output
// var emplyee = {
//     company:'xyz'
// }
// // delete emplyee.company;
// // console.log(emplyee.company)

// var obj = Object.create(emplyee);
// //delete obj.company;
// console.log(obj)

// // console.log(obj.company)
// // try understand what new do
// class tryNew{
//     name = 'islam'
//     age = "23"
//     getName() { return this.name }
//     getAge() { return this.age }
// }
// let obj = new tryNew()
// console.log(obj.getAge()) 
function islam() {
     this.x = 10
    console.log(x)
}
islam()

let islaObj = new islam()
console.log(islaObj)
