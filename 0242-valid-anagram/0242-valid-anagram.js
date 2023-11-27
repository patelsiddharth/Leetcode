/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj = {}, obj2 = {}
    s.split("").forEach(i => {
        obj[i] = obj[i] ? obj[i] + 1 : 1;
    });
    
    for(let i of t)
    {
        if(obj[i])
        {
            obj[i] = obj[i] - 1;
        }
        else
        {
            return false;
        }
        
        if(obj[i] === 0)
        {
            delete obj[i];
        }
    }
    
    return Object.keys(obj).length === 0;
};