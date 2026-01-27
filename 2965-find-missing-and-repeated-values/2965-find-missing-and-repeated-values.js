/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let res = [], len = 0, sum = 0, obj = {};
    grid.forEach(nums => {
        nums.forEach(num => {
            if (obj[num]) {
                obj[num] += 1;    
            } else {
                obj[num] = 1;
                sum += num;
            }
            len++;
        });
    });

    let repeatingNum = 0;
    for(let i in obj) {
        if (obj[i] === 2) {
            repeatingNum = parseInt(i);
            break;
        }
    }

    const ns = (len * (len + 1) / 2);
    const nonRepeatingNum = ns - sum;

    return [repeatingNum, nonRepeatingNum];
};