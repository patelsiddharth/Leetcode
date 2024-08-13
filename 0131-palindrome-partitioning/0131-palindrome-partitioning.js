/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    
    function isPalindrome(start, end) {
        while(start < end)
        {
            if(s[start] !== s[end])
            {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    
    function part(idx, arr) {
        if(idx === s.length)
        {
            res.push(arr)
            return;
        }
        
        for(let i = idx; i < s.length; i++)
        {
            if(isPalindrome(idx, i))
            {
                part(i + 1, [...arr, s.substring(idx, i + 1)]);
            }
        }
    }
    part(0, []);
    return res;
};