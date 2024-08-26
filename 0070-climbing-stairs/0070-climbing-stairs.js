/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let obj = {}
    function climb(x)
    {
        if(x === 0)
        {
            return 1;
        }
        
        if(x < 0)
        {
            return 0;
        }
        
        if(obj[x])
        {
            return obj[x];
        }
        
        return obj[x] = climb(x-1) + climb(x-2);
    }
    return climb(n);
};