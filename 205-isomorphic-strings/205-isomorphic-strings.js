/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length)
        return false;
    
    let obj = {};
    
    for(let i in s)
    {
        if(!obj[t[i]])
        {
            if(Object.values(obj).includes(s[i]))
                return false
            obj[t[i]] = s[i]
        }
        else if(obj[t[i]] && obj[t[i]] !== s[i])
        {
            return false;
        }
    }
    console.log(obj)
    return true;
};