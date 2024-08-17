/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let obj = {};
    function climb(x) {
        if(x === 0 || x === 1)
        {
            return 1;
        }
        
        if(!obj[x-1])
        {
            obj[x-1] = climb(x - 1)
        }
        if(!obj[x-2])
        {
            obj[x-2] = climb(x - 2)
        }
        
        return obj[x-1] + obj[x-2];
    }
    return climb(n);
};