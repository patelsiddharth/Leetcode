/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let l = 0, r = 0, sum = 0, obj = {};
    
    while(r < s.length)
    {
        obj[s[r]] = obj.hasOwnProperty(s[r]) ? obj[s[r]] + 1 : 1;
        
        while(Object.values(obj).length === 3 && Object.values(obj).every(i => i > 0))
        {
            sum += (s.length - r);
            obj[s[l]]--;
            l++;
        }
        
        r++;
    }
    return sum;
};   