/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let res, obj = {};
    s.split("").every(char => {
        if(obj[char])
        {
            res = char;
            return false;
        }
        else
        {
            obj[char] = 1
            return true;
        }
    })
    
    return res;
};