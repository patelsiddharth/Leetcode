/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const n = s.length, m = p.length;
    const dp = Array(n + 1).fill().map(() => Array(m + 1).fill(0))
    dp[0][0] = true;
    for(let i = 1; i <= n; i++) dp[i][0] = false;
    for(let j = 1; j <= m; j++) {
        let flag = true
        for(let k = 1; k <= j; k++) {
            if (p[k-1] !== '*') {
                flag = false;
                break;
            }
        }
        dp[0][j] = flag
    }

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if (p[j - 1] !== '*' && p[j - 1] !== '?') {
                if (s[i - 1] !== p[j - 1]) {
                    dp[i][j] = false;
                } else {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            } else if (p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    return dp[n][m];
};