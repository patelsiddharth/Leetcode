/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n == 0) return false;
    while(n !== 0)
    {
        if(n == 1)
            return true;
        if(n%2 == 0)
            n = n/2;
        else
            return false;
    }
    return true;
};