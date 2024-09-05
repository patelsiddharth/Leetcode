/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let sum = chalk.reduce((acc, cur) => acc + cur);
    k = k % sum;
    
    for(let i = 0; i < chalk.length; i++)
    {
        k = k - chalk[i];
        if(k < 0)
        {
            return i;
        }
    }
    
    return -1;
};