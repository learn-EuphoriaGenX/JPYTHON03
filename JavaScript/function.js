function getAvg(...a) {// parameters
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }

    avg = sum / a.length
    return avg
}

let getAvg1 = (...a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }

    avg = sum / a.length
    return avg
}

// IIFE - Immediate Invoked Function Expression
console.log(((a, b) => {
    return a + b
})(2, 3));

// console.log("sum is", sum(2, 3));
console.log(getAvg(12, 34, 23, 45, 80) + 15); // arguments
console.log(getAvg(12, 34, 23, 45) + 16);


// TYPESCRIPT


// Callback
// Promises
// promise handling
// Callback hell / async await