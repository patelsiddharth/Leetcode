/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let ls = "", len = s.length;
    
    if(len === 1)
        return s;
    
    const getLongestPalindrome = function(s, l, r) {
        while(l >= 0 && r < len && s[l] === s[r])
        {
            if((r - l + 1) > ls.length)
            {
                ls =  s.slice(l, r + 1);
            }
            l--;
            r++;
        }
    }
    
    for(let i = 0; i < len; i++)
    {
        // ODD Case
        getLongestPalindrome(s, i, i)
        
        // EVEN case
        getLongestPalindrome(s, i, i + 1)
    }
    
    return ls;
};
