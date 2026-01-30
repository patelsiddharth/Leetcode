/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let len = s.length, l = 0, r = 0, maxFreq = 0, max = 0, obj = {};
    while(r < len) {
        obj[s[r]] = obj[s[r]] ? obj[s[r]] + 1 : 1;
        maxFreq = Math.max(maxFreq, obj[s[r]]);

        while((r-l+1) - maxFreq > k) {
            obj[s[l]]--;
            maxFreq = 0;
            for(let i in obj) {
                maxFreq = Math.max(maxFreq, obj[i]);
            }
            l++;
        }

        if ((r-l+1) - maxFreq <= k) {
            max = Math.max(max, r-l+1);
        }
        r++;
    }

    return max;
};