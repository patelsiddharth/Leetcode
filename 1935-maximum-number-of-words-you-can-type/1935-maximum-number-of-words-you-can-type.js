/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let res = 0, brokenCharacterMap = {};
    
    brokenLetters.split("").forEach(letter => {
        brokenCharacterMap[letter] = 1;
    })
    
    text.split(" ").forEach(word => {
        let canTypeChar = true;
        for(let char of word)
        {
            if(brokenCharacterMap[char])
            {
                canTypeChar = false;
                break;
            }
        }
        if(canTypeChar)
        {
            res++;
        }
    })
    
    return res;
};