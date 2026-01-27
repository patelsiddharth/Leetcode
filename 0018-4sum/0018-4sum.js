/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let n = nums.length, res = [], set = new Set();
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++) {
            let map = new Map()
            for(let k = j + 1; k < n; k++) {
                const req = target - (nums[i] + nums[j] + nums[k]);
                if (map.has(req)) {
                    const arr = [nums[i], nums[j], nums[k], req].sort((a,b) => a-b);
                    set.add(arr.join(','))
                }
                map.set(nums[k]);
            }
        }
    }
    return [...set].map(s => s.split(',').map(Number));
};