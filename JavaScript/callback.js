function login() {
    setTimeout(() => {
        console.log("Login Done After 2sec");
    }, 2000);
}

function login2() {
    setInterval(() => {
        console.log("Login Done After 1sec");
    }, 1000);
}

// .then()
// login()
//     .then(() => {
//         login2()

//     })