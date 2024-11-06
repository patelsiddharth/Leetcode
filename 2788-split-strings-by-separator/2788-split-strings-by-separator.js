/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let res = [];
    words.forEach(word => {
        word.split(separator).forEach(newWord => {
            if(newWord)
            {
                res.push(newWord)
            }
        })
    })
    
    return res;
};