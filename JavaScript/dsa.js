
// Find all pairs with sum

function findPairs(arr, sum) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let ele1 = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            let ele2 = arr[j]
            if (ele1 + ele2 === sum) {
                ans = [i, j]
            }
        }
    }
    return ans
}
function findLargest(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
function findShortest(arr) {
    let min = 10000000000000000;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}
function sortToASC(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}

function removeElement(nums, index) {

    let temp = nums[index]
    for (let i = index; i < nums.length; i++) {
        nums[i] = nums[i + 1]
    }
    nums[nums.length - 1] = temp

    return nums
}


let myArr = [2, 6, 1, 3, 4, 7, 5, 9]
// console.log(findPairs(myArr, 9));
// console.log(findLargest(myArr));
// console.log(findShortest(myArr));
// console.log(sortToASC(myArr));
// console.log(removeElement(myArr, 2));

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

// console.log(myArr);








