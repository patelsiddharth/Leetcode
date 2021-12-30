/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length == 1)
        return stones[0];
    
    stones = stones.sort((a, b) => b-a);
    
    while(stones.length > 1)
    {
        if(stones[0] == stones[1])
        {
            stones.splice(0,2);
        }
        else
        {
            stones[1] = Math.abs(stones[0] - stones[1]);
            stones.splice(0,1);
        }
        stones = stones.sort((a, b) => b-a);
    }
    
    return stones[0] ? stones[0] : 0;
};