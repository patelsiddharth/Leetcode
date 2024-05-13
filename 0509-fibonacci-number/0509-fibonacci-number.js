/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = []
    
    function fibn(i) {
        if(i <= 1)
            return i;
        
        if(!dp[i])
        {
            dp[i] = fibn(i - 1) + fib(i - 2);    
        }
        
        return dp[i];
    }
    
    return fibn(n)
};