let highway = true
let modified = true
let speed = "10km"


// fine = (highway, modified, speed > 100) = 1000
// fine = (!highway, modified, speed > 100) = 700
// fine = (!highway, !modified, speed > 100) = 500

if (highway && modified && speed > 100) fine = 1000
else if (!highway && modified && speed > 100) fine = 700
else if (!highway && !modified && speed > 100) fine = 500


let age = (1 - 70)
const price = 580 // dont touch
let finalAmt = 0

//  1 - 20 -> 20% => 580 - 20% = x
// 21 - 40 -> 40% => 580 - 40% = y
// 41 - 60 -> 60% => 580 - 60% = z
// 61 - 70 -> 80% => 580 - 80% = d
// 



console.log("Discounted price", finalAmt);



