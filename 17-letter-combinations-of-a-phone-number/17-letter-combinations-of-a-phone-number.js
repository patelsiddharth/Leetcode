/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0)
        return []
    
    let res = [], word = "", 
        obj = {
            "2" : ["a", "b", "c"],
            "3" : ["d", "e", "f"],
            "4" : ["g", "h", "i"],
            "5" : ["j", "k", "l"],
            "6" : ["m", "n", "o"],
            "7" : ["p", "q", "r", "s"],
            "8" : ["t", "u", "v"],
            "9" : ["w", "x", "y", "z"]
        };
    
    const getWord = function(index, word)
    {
        if(index == digits.length)
        {
            res.push(word);
            return;
        }
        
        obj[digits[index]].forEach(char => {
            getWord(index + 1, word + char);
        })   
    }
    
    getWord(0 , "")
    return res;
};

