/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0, charSet = new Set();
    let left = 0, right = 0;
    for(right in s) {
        // console.log(right)
        if(!charSet.has(s[right]))
        {
            charSet.add(s[right]);
        }
        else
        {
            while(charSet.has(s[right]))
            {
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[right]);
        }
        max = Math.max(right - left + 1, max)
    }
    return max;
};