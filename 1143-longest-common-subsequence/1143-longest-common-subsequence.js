/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(s1, s2) {
    const map = Array(s1.length + 1).fill().map(() => Array(s2.length + 1).fill(-1));
    const lcs1 = (idx1, idx2) => {
        if (idx1 < 0 || idx2 < 0) return 0;

        if(map[idx1][idx2] !== -1) return map[idx1][idx2];

        let res = 0;
        if(s1[idx1] === s2[idx2]) {
            res = 1 + lcs1(idx1 - 1, idx2 - 1);
        } else {
            res = Math.max(lcs1(idx1 - 1, idx2), lcs1(idx1, idx2 - 1));
        }
        map[idx1][idx2] = res;
        return res;
    }
    return lcs1(s1.length - 1, s2.length - 1);
};