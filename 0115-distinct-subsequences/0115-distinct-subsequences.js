/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const n = s.length, m = t.length;
    const dp = Array(n).fill().map(() => Array(m).fill(-1))
    const match = (i, j) => {
        if (j < 0) return 1;
        if (i < 0) return 0;

        if (dp[i][j] === -1) {
            if (s[i] === t[j]) {
                dp[i][j] = match(i - 1, j - 1) + match(i - 1, j);
            } else {
                dp[i][j] = match(i - 1, j);
            }
        }
        return dp[i][j];
    }
    return match (n - 1, m - 1);
};