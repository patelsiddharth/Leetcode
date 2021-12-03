/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    accounts.forEach(acc => {
        const sum = acc.reduce((prev, curr) => prev + curr);
        if(sum > max)
            max = sum;
    })
    return max;
};