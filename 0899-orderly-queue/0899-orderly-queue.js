/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    if(k > 1)
        return s.split("").sort().join("")
    
    let min = s, s1 = s + s, len = s.length;
    
    if(len === 1)
        return s;
    
    for(i = 1; i < s1.length - len; i++)
    {
        let temp = s1.substr(i, len)
        if(temp < min)
            min = temp;
    }
    
    return min
};