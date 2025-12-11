/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let left = 1, right = nums[0];
    nums.forEach(num => {
        right = Math.max(right, num);
    });

    const calSum = (divisor) => {
        let sum = 0;
        nums.forEach(num => {
            sum += Math.ceil(num/divisor)
        });
        return (sum <= threshold);
    }

    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(calSum(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};