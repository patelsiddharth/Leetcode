/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(s1, s2) {
    const n = s1.length, m = s2.length;
    const dp = Array(n + 1).fill().map(() => Array(m + 1).fill(0));

    for(let j = 0; j <= m; j++) dp[0][j] = 0
    for(let i = 0; i <= n; i++) dp[i][0] = 0

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(s1[i-1] === s2[j-1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }    
    }
    return dp[n][m];
};