// rest | spread

let users = ["Ram", "Shyam", "Jadu", "Madhu"]
let alphas = ["a", 'b', 'c', `d`]

let [user1, user2, ...bakiSab] = users
console.log(user1, user2, ...bakiSab);


// let alphaUsers = [...users, ...alphas]
// console.log(alphaUsers);
