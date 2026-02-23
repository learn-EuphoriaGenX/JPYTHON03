// let sayHello = (name, cb) => {
//     console.log(`Hello ${name}`);
//     cb(name, cb)
// }
// // let sayWelcome =
// let sayBye = (name) => {
//     console.log(`Bye ${name}`);
// }

// let name = "Ram"
// sayHello(name, name => {
//     console.log(`Welcome ${name}`);
// })


// // let printHelloJS =


// setTimeout(() => {
//     console.log("Hello js");
// }, 3000);


function sum(time, a, b) {
    setTimeout(() => {
        return a + b;
    }, time * 1000);
}

let ans = sum(3, 10, 12);
setTimeout(() => {
    console.log(ans);
}, 4000);



