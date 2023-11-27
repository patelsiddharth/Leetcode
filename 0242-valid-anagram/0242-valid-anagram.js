/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj1 = {}, obj2 = {}
    s.split("").forEach(i => {
        obj1[i] = obj1[i] ? obj1[i] + 1 : 1;
    })
    
    t.split("").forEach(i => {
        obj2[i] = obj2[i] ? obj2[i] + 1 : 1;
    })
    
    for(let i in obj1)
    {
        if(!obj2[i] || (obj1[i] !== obj2[i]))
        {
            return false;
        }
        else
        {
            delete obj2[i];
        }
    }
    
    return Object.keys(obj2).length === 0;
};