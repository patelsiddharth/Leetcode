/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj = {}
    for(let ch of s)
    {
        obj[ch] = obj[ch] ? obj[ch] + 1 : 1;
    }
    
    
    for(let ch of t)
    {
        if(!obj[ch])
        {
            return false;
        }
        
        obj[ch] = obj[ch] - 1;
        if(obj[ch] === 0)
        {
            delete obj[ch];
        }
    }
    
    return Object.keys(obj).length === 0;
};