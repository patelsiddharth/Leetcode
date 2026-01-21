/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length, m = word2.length;
    
    // if (n === 0 && m === 0) return 0;
    // if (n === 1 && m === 0) return 1;
    // if (n === 0 && m === 1) return 1;

    const dp = Array(n).fill().map(() => Array(m).fill(-1))
    const match = (i, j) => {
        if (j < 0) return i + 1;
        if (i < 0) return j + 1;

        if (dp[i][j] === -1) {
            if (word1[i] === word2[j]) {
                dp[i][j] = 0 + match(i - 1, j - 1);
            } else {
                dp[i][j] = 1 + Math.min(match(i - 1, j), match(i, j - 1), match(i - 1, j - 1));
            }
        }
        return dp[i][j];
    }
    return match(n-1, m-1);
};