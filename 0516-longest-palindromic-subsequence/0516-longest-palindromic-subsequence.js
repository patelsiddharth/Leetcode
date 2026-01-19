/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let s1 = s, s2 = s.split('').reverse().join(''), n = s.length;
    let dp = Array(n).fill().map(() => Array(n).fill(-1));
    const lcs = (idx1, idx2) => {
        if (idx1 < 0 || idx2 < 0) {
            return 0
        }

        if(dp[idx1][idx2] !== -1) return dp[idx1][idx2];

        let res = 0;
        if (s1[idx1] === s2[idx2]) {
            res = 1 + lcs(idx1 - 1, idx2 - 1);
        } else {
            res = Math.max(lcs(idx1 - 1, idx2), lcs(idx1, idx2 - 1));
        }
        dp[idx1][idx2] = res;
        return res;
    }
    return lcs(n-1, n-1);
};