/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {};
    for(ch of s) {
        obj[ch] = obj[ch] ? obj[ch] + 1 : 1;
    }
    
    obj = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    
    let res = ""
    
    obj.forEach(ele => {
        for(let i = 0; i < ele[1]; i++)
        {
            res += ele[0];
        }
    })
    
    return res;
};