// let myPromiseForGivingMoneyBack = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve("Ye le tera paisa")
//     }, 3000);
// })

// // callback
// myPromiseForGivingMoneyBack
//     .then((result) => {
//         console.log(result);
//     })


const storedUsername = "ADMIN"
const storedPassword = "PASSWORD"

let Login = (username, passwod) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (username === storedUsername && passwod === storedPassword) {
            return resolve("Login Successfull")
        } else {
            return reject("Invalid Credentials!")
        }
    }, 4000);
})

let fetchProfile = () => new Promise((res, rej) => {
    setTimeout(() => {
        return res(`Username: ${storedUsername}| Password: ${storedPassword}`)
    }, 3000);
})


let us = "ADMIN"
let ps = "PASSWORD"

let openInsta = async () => {
    try {
        let result = await Login(us, ps)
        console.log(result);
        result = await fetchProfile()
        console.log(result);

    } catch (error) {
        console.log(error);

    }
}

openInsta()

// Login(us, ps).
//     then((result) => {
//         console.log(result);
//         fetchProfile.
//             then((data) => {
//                 console.log(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }).catch((error) => {
//         console.log(error);
//     })



