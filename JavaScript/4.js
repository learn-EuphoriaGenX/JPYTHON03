let instaUsers1 = {
    name: "Ram",
    followers: 12,
    following: 34,
    posts: 12
}
let instaUsers2 = {
    name: "Ram",
    followers: 12,
    following: 34,
    posts: 12
}

// let name = instaUsers1.name
// let followers = instaUsers1.followers
// let following = instaUsers1.following
// let posts = instaUsers1.posts
let { name: instaName, followers, following, posts } = instaUsers1

console.log(`My Name is ${instaName}.\nMy Followers Count: ${followers}\nMy following: ${following}\nMy posts count: ${posts}\n`);


let users = ["Ram", "Shyam", "Jadu", "Madhu", ["a", 'b', 'c', `d`]]
// let user1 = users[0]
// let user2 = users[1]
// let user3 = users[2]
// let user4 = users[3]
let [user1, user2, user3, user4, alpha] = users
console.log(`user1 -> ${user1}\nuser2 -> ${user2}\nuser3 -> ${user3}\nuser4 -> ${user4}\n`);

console.log(alpha);







