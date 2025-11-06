/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const recur = (low, high) => {
        if(low > high) return -1;
        let mid = Math.floor((low+high)/2);
        if(nums[mid] === target) {
            return mid;
        }
        else if(nums[mid] > target) {
            return recur(low, mid - 1);
        }
        return recur(mid + 1, high);
    }
    return recur(0, nums.length - 1)
};