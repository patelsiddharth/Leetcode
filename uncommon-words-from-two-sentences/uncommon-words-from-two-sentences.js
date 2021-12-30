/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const arr = [], res = {};
    
    s1.concat(" ", s2).split(" ").forEach(ele => {
        res[ele] = res[ele] ? res[ele] + 1 : 1;
    });
    
    for (const [key, value] of Object.entries(res)) {
        if(value == 1)
        {
            arr.push(key);
        }
    }
    
    return arr;
};