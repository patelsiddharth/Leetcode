/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length, m = word2.length;
    const dp = Array(n).fill().map(() => Array(m).fill(-1));

    const distance = (i1, i2) => {
        if (i1 === 0 && i2 === 0) {
            return word1[i1] === word2[i2] ? 0 : 2
        }
        if (i1 < 0) return i2 + 1;
        if (i2 < 0) return i1 + 1;

        if (dp[i1][i2] === -1) {
            if (word1[i1] === word2[i2]) {
                dp[i1][i2] = 0 + distance(i1 - 1, i2 - 1);
            } else {
                dp[i1][i2] = 1 + Math.min(distance(i1 - 1, i2), distance(i1, i2 - 1));
            }
        }
        return dp[i1][i2];
    }
    return distance(n - 1, m - 1);
};