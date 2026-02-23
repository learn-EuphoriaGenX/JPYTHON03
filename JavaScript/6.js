let a = 19
if (a > 18) {
    console.log("Greater Than 18");
} else if (a == 18) {
    console.log("Age is equal to 18");
} else {
    console.log("Age is below 18");
}

let num = 48
if (num > 500) {
    if (num > 750) {
        console.log("Num is gt than 500 and 750");
    } else {
        console.log("Num is gt than 500 only");
    }
} else if (num > 100) {
    if (num > 250) {
        console.log("Num is gt than 100 and 250");
    } else {
        console.log("Num is gt than 100 only");
    }
} else {
    console.log("Num is lt than 100");
}



let lic = false
let hel = false
let ins = true

let fine = 0
if (!lic) fine += 500
if (!hel) fine += 500
if (!ins) fine += 500
console.log(`Your fine is : $${fine}`);


