/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1, right = n;
    
    while(true)
    {
        let temp = (left + right) / 2;
        let pick = guess(temp)
        
        if(pick === -1)
        {
            right = temp - 1;
        }
        else if(pick === 1)
        {
            left = temp + 1
        }
        else if(pick === 0)
        {
            return temp;
        }
    }
    
    return 0
};