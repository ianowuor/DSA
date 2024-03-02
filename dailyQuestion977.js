// function sortedSquares(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     let result = [];

//     while (left < right) {
//         const leftSquared = nums[left] * nums[left];
//         const rightSquared = nums[right] * nums[right];

//         if (leftSquared >= rightSquared) {
//             result.push(leftSquared);
//             left++;
//         } else {
//             result.push(rightSquared);
//             right--;
//         }
//     }

//     // result.reverse();
//     return result;
// }

// console.log(sortedSquares([-4,-1,0,3,10]));

// The output of the code above when tested with the input nums = [-4,-1,0,3,10] is [ 1, 9, 16, 100 ]
// Change the code to give the output [0,1,9,16,100] when tested with the input nums = [-4,-1,0,3,10]

let sortedSquares = function (nums) {
    const n = nums.length;
    let result = new Array(n);
    let left = 0;
    let right = n - 1;
    let index = n - 1;

    while (left <= right) {
        const leftSquared = nums[left] * nums[left];
        const rightSquared = nums[right] * nums[right];

        if (leftSquared > rightSquared) {
            result[index] = leftSquared;
            left++;
        } else {
            result[index] = rightSquared;
            right--;
        }

        index--;
    }

    return result;
}

console.log(sortedSquares([-4,-1,0,3,10]));