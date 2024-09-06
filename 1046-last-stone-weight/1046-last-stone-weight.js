/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1)
    {
        stones.sort((a,b) => a-b);
        let len = stones.length - 1;
        if(stones[len] === stones[len - 1])
        {
            stones.pop();
        }
        else
        {
            stones[len - 1] = stones[len] - stones[len - 1];
        }
        
        stones.pop();
    }
    
    return stones[0] || 0;
};