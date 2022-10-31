/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    let res = 0;
    while(target !== 1 && maxDoubles > 0)
    {
        if(target % 2 === 0)
        {
            target = target / 2;
            maxDoubles--;
        }
        else
        {
            target--;
        }
        res++;  
    }
    
    res += target - 1
    
    return res;
};