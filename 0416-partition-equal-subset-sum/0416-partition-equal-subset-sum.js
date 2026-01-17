/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const map = new Map();
    const sum = nums.reduce((acc, curr) => acc + curr);
    if(sum % 2 === 1) return false;
    const path = (idx, sum) => {
        if (sum === 0) return true;
        if (idx < 0) return false;

        const key = `${idx}-${sum}`;
        if (map.has(key)) return map.get(key);

        let res = path(idx - 1, sum)
        if (!res) {
            res = path(idx - 1, sum - nums[idx]);;
        }
        map.set(key, res);
        return res;
    }
    return path(nums.length - 1, sum/2);
};