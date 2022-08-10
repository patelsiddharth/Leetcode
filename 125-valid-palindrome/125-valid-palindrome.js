/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // s = s.trim().toLowerCase().split(" ").join("")
    
    // console.log(s)
    
    let l, r, start = 0, end = s.length - 1, res = true;
    
    while(start < end)
    {
        if((s.charAt(start)>= 'a' && s.charAt(start)<= 'z') || (s.charAt(start)>= 'A' && s.charAt(start)<= 'Z') || (s.charAt(start)>= '0' && s.charAt(start)<= '9'))
        {
            l = s[start].toLowerCase()
        }
        else
        {
            start++;
            continue;
        }
        
        if((s.charAt(end)>= 'a' && s.charAt(end)<= 'z') || (s.charAt(end)>= 'A' && s.charAt(end)<= 'Z') || (s.charAt(end)>= '0' && s.charAt(end)<= '9'))
        {
            r = s[end].toLowerCase()
        }
        else
        {
            end--;
            continue;
        }
        
        if(l !== r)
        {
            return false;
        }
        
        start++;
        end--;
    }
    
    return res;
};