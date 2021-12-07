/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    words.forEach(word => {
        let success = true;
        for(i of word)
        {
            if(!allowed.includes(i))
            {
                success = false;
                break;
            }
        }
        if(success)
            count++;
    })
    return count;
};