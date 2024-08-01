/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const obj = {}
    nums.forEach(num => {
        if(num % 2 === 0)
        {
            obj[num] = obj[num] ? obj[num] + 1 : 1
        }
    });
    
    const temp = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    
    return temp.length > 0 ? temp[0][0] : -1;
};