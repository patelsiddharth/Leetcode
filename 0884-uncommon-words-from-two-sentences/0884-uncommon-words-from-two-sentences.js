/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let obj = {}, res = [];
    
    (s1 + ' ' + s2).split(' ').forEach(word => {
        obj[word] = obj[word] ? obj[word] + 1 : 1;
    })
    
    for(let i in obj)
    {
        if(obj[i] === 1)
        {
            res.push(i)
        }
    }
    
    return res;
};
