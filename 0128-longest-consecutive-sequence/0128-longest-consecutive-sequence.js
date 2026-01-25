var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxLen = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let count = 1;
            while (set.has(num + count)) {
                count++;
            }
            maxLen = Math.max(maxLen, count);
        }
    }

    return maxLen;
};
