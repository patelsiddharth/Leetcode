/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let len = nums.length;
    if (len === 1) return nums[0];
    if (nums[0] !== nums[1]) return nums[0];
    if (nums[len-2] !== nums[len - 1]) return nums[len - 1];

    let low = 0, high = len - 1;
    while(low <= high) {
        let mid = Math.floor((low+high)/2);
        if(nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]) {
            return nums[mid];
        }

        if ((mid % 2 === 0 && nums[mid] === nums[mid+1]) || (mid % 2 === 1 && nums[mid] === nums[mid-1])){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};