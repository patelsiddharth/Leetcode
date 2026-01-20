/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const n = str1.length, m = str2.length;
    const dp = Array(n).fill().map(() => Array(m).fill(-1))
    const scs = (i, j , s) => {
        if (i === n) return str2.substr(j);
        if (j === m) return str1.substr(i);

        if (dp[i][j] === -1) {
            let res = '';
            if (str1[i] === str2[j]) {
                res = str1[i] + scs(i + 1, j + 1);
            } else {
                const s1 = str1[i] + scs(i + 1, j)
                const s2 = str2[j] + scs(i, j + 1);
                res = (s1.length < s2.length) ? s1 : s2;
            }
            dp[i][j] = res;
        }
        return dp[i][j];
    }
    return scs(0, 0, '');
};