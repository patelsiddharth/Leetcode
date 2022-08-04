/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = [], max = 0;
    for(let char of s) {
        if(!arr.includes(char))
        {
            arr.push(char);
        }
        else
        {
            if(arr[0] === char)
            {
                arr.splice(0,1);
            }
            else
            {
                index = arr.findIndex(i => i === char)
                arr.splice(0, index + 1)
            }
            arr.push(char);
        }
        max = Math.max(max, arr.length)
    }
    return max;
};