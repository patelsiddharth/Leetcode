/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let n = s.length;
    let dp = Array(n).fill().map(() => Array(n).fill(-1));
    const lcs = (idx1, idx2) => {
        if (idx1 > idx2) return 0;
        if (idx1 === idx2) return 1;

        if(dp[idx1][idx2] !== -1) return dp[idx1][idx2];

        let res = 0;
        if (s[idx1] === s[idx2]) {
            res = 2 + lcs(idx1 + 1, idx2 - 1);
        } else {
            res = Math.max(lcs(idx1 + 1, idx2), lcs(idx1, idx2 - 1));
        }
        dp[idx1][idx2] = res;
        return res;
    }
    return lcs(0, n-1);
};