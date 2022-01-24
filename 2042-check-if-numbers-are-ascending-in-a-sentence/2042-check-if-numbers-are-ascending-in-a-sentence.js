/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let prev = -1, res = true;
    s.split(" ").every(word => {
        const curr = parseInt(word)
        if(!isNaN(curr))
        {
            if(curr > prev)
            {
                prev = curr;
            }    
            else
            {
                res = false;
                return false;
            }
        }
        return true;
    });
    return res;
};