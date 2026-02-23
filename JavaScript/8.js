// nested condition
let line = ""
let n = 5;
let temp = 1;
for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= (n - i); j++) {
        line += "  "
    }

    for (let k = 1; k <= temp; k++) {
        line += "* "
    }

    temp += 2;
    console.log(line);
    line = ""
}


