/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = Array.from({length : n+1}).map(() => -1);
    const cal = (x) => {
        if (x <= 1) return x;

        if (dp[x] !== -1) return dp[x];
        
        dp[x] = cal(x - 1) + cal(x - 2);
        return dp[x];
    }
    return cal(n);
};