/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = [], wordMap = new Map()
    strs.forEach(word => {
        const temp = word.split("").sort();
        if(wordMap[temp] && wordMap[temp].length > 0)
        {
            wordMap[temp].push(word)
        }
        else
        {
            wordMap[temp] = [word]
        }
    });
    
    for (const item in wordMap) {
        res.push(wordMap[item])
    }
    
    return res;
};