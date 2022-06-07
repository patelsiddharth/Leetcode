/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(item => item*item).sort((a,b) => a-b)
//     let start = 0, end = nums.length - 1;
//     while(end >= start)
//     {
//         if(nums[start] < 0 && nums[end] < 0)
//         {
//             const temp = nums[end];
//             nums[end] = nums[start] * nums[start];
//             nums[start] = temp * temp;
//             start++;
//             end--;
//         }
//         else
//         {
//             if(nums[end] * nums[end] >= nums[start] * nums[start])
//             {
//                 nums[end] = nums[end] * nums[end];
//             }
//             else
//             {
//                 let temp = nums[end];
//                 nums[end] = nums[start] * nums[start];
//                 nums[start] = temp;
//             }
//             end--;
//         }
//         if(nums[start] === 0)
//             start++;
            
//     }
//     return nums
};