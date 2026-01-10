/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    const findPer = (idx, arr) => {
        if(idx === nums.length) {
            res.push(arr);
            return;
        }

        for(let i = idx; i < nums.length; i++) {
            let tempArr = [...arr];
            [tempArr[i], tempArr[idx]] = [tempArr[idx], tempArr[i]];
            findPer(idx + 1, tempArr);
        }
    }
    findPer(0, [...nums]);
    return res;
};