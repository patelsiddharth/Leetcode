/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = Array.from({length : n}).map(() => -1);
    const cal = (x) => {
        if (x <= 1) return x;

        if (dp[x - 1] === -1) {
            dp[x - 1] = cal(x - 1);
        }
        if (dp[x - 2] === -1) {
            dp[x - 2] = cal(x - 2);
        }
        return dp[x - 1] + dp[x - 2];
    }
    return cal(n);
};