/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let res = 0,
        tempSet = new Set(),
        set = new Set(["a", "e", "i", "o", "u"]);
    
    for(let i = 0; i < word.length - 1; i++)
    {
        tempSet.clear();
        for(let j = i; j < word.length; j++)
        {
            if(!set.has(word[j]))
                break;
            
            tempSet.add(word[j]);
            if(tempSet.size === set.size)
            {
                res++;
            }
        } 
    }
    return res;
};