/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a,b) => a.length - b.length);
    const compareStr = (prevIdx, currIdx) => {
        if (words[currIdx].length !== words[prevIdx].length + 1) return false;

        let i = 0, j = 0;
        while(i < words[currIdx].length) {
            if (words[currIdx][i] !== words[prevIdx][j]) {
                i++;
            } else {
                i++;
                j++
            }
        }
        return i === words[currIdx].length && j === words[prevIdx].length;
    }

    const n = words.length
    const dp = Array(n).fill().map(() => Array(n+1).fill(-1));

    const lsc = (i, pi) => {
        if (i === n) return 0;

        if (dp[i][pi+1] !== -1) return dp[i][pi+1];

        let pick = 0;
        if (pi === -1 || compareStr(pi, i)) {
            pick = 1 + lsc(i + 1, i);
        }
        let notPick = 0 + lsc(i + 1, pi);

        return dp[i][pi+1] = Math.max(pick, notPick);
    }
    return lsc(0, -1);
};