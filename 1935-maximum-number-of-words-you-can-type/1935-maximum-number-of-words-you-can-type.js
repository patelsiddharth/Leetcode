/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let res = 0, obj = {};
    
    brokenLetters.split("").forEach(letter => {
        obj[letter] = 1;
    })
    
    text.split(" ").forEach(word => {
        let temp = true;
        for(let char of word)
        {
            if(obj[char])
            {
                temp = false;
                break;
            }
        }
        if(temp)
        {
            res++;
        }
    })
    
    return res;
};