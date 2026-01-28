/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let l = 0, r = 0, maxLen = 0;
    while (r < s.length) {
        if (map.has(s[r])) {
            if (map.get(s[r]) >= l) {
                l = map.get(s[r]) + 1;
            }
        }
        map.set(s[r], r);
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    return maxLen;
};