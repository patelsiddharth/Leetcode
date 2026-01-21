/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const n = s.length, m = p.length;
    const dp = Array(n).fill().map(() => Array(m).fill(-1))
    const match = (i, j) => {
        // Both strings are exhausted
        if (i < 0 && j < 0) return true;

        // Pattern strings is exhausted
        if (i >= 0 && j < 0) return false;

        // Input strings is exhausted but pattern string is not
        // pattern string can match with input string only when all the character are '*'
        if (i < 0 && j >= 0) {
            for(let k = 0; k <= j; k++) {
                if (p[k] !== '*') return false;
            }
            return true;
        }

        if (dp[i][j] === -1) {
            if (p[j] !== '*' && p[j] !== '?') {
                if (s[i] !== p[j]) return false;
                dp[i][j] = match(i - 1, j - 1);
            } else if (p[j] === '*') {
                dp[i][j] = match(i - 1, j) + match(i, j - 1);
            } else if (p[j] === '?') {
                dp[i][j] = match(i - 1, j - 1);
            }
        }
        return dp[i][j];
    }
    return match(n - 1, m - 1);
};