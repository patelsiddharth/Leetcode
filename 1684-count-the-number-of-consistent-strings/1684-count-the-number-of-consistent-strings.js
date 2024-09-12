/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let obj = {}
    for(let i of allowed)
    {
        obj[i] = 1;
    }
    
    let res = 0;
    for(let word of words)
    {
        let isValid = true;
        for(let char of word)
        {
            if(!obj[char])
            {
                isValid = false;
                break;
            }
        }
        
        if(isValid)
        {
            res++;
        }
    }
    
    return res;
};