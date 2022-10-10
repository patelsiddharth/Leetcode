/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    let t = palindrome.split(""), onlyA = true;
    
    if(t.length === 1)
        return "";
    
    const isPalindrome = function(str) {
        let start = 0, end = str.length - 1
        while(start < end)
        {
            if(str[start] !== str[end])
                return false;
            
            start++;
            end--;
        }
        
        return true;
    }
    
    for(let i = 0; i < t.length; i++)
    {
        if(t[i] !== 'a')
        {
            let temp = t[i];
            t[i] = 'a';
            if(isPalindrome(t))
            {
                t[i] = temp
            }
            else
            {
                onlyA = false;
                break;
            }
        }
    }
    if(onlyA)
        t[t.length - 1] = 'b';
    
    return t.join("")
};