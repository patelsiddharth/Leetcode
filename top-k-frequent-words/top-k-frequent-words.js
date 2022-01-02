/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {}, res = [];
    words.forEach(word => {
        obj[word] = obj[word] ? obj[word] + 1 : 1;
    })
    
    obj = Object.entries(obj).sort((a,b) => a[1] == b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]); 
    
    for(let i = 0 ; i < k; i++)
    {
       res.push(obj[i][0]); 
    }
    
    return res;
};