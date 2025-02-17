// let sortedSquares = function (nums) {
//     const n = nums.length;
//     let result = new Array(n);
//     let left = 0;
//     let right = n - 1;
//     let index = n - 1;

//     while (left <= right) {
//         const leftSquared = nums[left] * nums[left];
//         const rightSquared = nums[right] * nums[right];

//         if (leftSquared > rightSquared) {
//             result[index] = leftSquared;
//             left++;
//         } else {
//             result[index] = rightSquared;
//             right--;
//         }

//         index--;
//     }

//     return result;
// }

// console.log(sortedSquares([-4,-1,0,3,10].in));

// // 229. Majority Element II

// let majorityElement = function (nums) {
//     const n = nums.length;
//     const threshHold = Math.floor(n / 3);
//     const result = [];

//     let candidate1 = null;
//     let candidate2 = null;
//     let count1 = 0;
//     let count2 = 0;

//     for (const num of nums) {
//         if (num === candidate1) {
//             count1++;
//         } else if (num === candidate2) {
//             count2++;
//         } else if (count1 === 0) {
//             candidate1 = num;
//             count1 = 1;
//         } else if (count2 === 0) {
//             candidate2 = num;
//             count2 = 1;
//         } else {
//             count1--;
//             count2--;
//         }
//     }

//     // Verify counts and handle duplicates

//     for (const num of [candidate1, candidate2]) {
//         if (num !== null && nums.filter(x => x === num).length > threshHold) {
//             result.push(num);
//         }
//     }

//     return result;
// }

// Two sum [2,7,11,15]

let twoSum = function (nums, target) {
    let n = nums.length;
    let result = [];

    for (let i = 0; i < n; i++) {
        let num1 = nums[i];
        for (const num of nums.slice(i + 1)) {
            let num2 = num;
            let sum = num1 + num2;

            if (sum === target) {
                result = [nums.indexOf(num1), nums.indexOf(num2)];
                break;
            } else {
                continue;
            }
        }
    }

    return result;
}

console.log(twoSum([2,7,11,15], 9));

// Palindrome Number

let isPalindrome = function (x) {
    let result = false;
    
    if (x < 0) {
        return result;
    }
    
    if (x === 0) {
        result = true;
        return result;
    }

    

}

