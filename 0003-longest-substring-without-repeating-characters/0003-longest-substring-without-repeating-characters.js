/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let obj = {}, l = 0, r = 0, max = 0;
    while(r < s.length)
    {
        if(obj.hasOwnProperty(s[r]))
        {
            if(obj[s[r]] >= l)
            {
                l = obj[s[r]] + 1;
            }
        }
        max = Math.max(max, r - l + 1);
        obj[s[r]] = r;
        r++;
    }
    return max;
};