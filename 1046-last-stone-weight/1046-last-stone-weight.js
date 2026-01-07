/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    while(stones.length > 0) {
        stones.sort((a,b) => a-b);
        const len = stones.length;
        console.log(len, stones)
        if (len === 1) {
            return stones[0];
        } else if (len === 0) {
            return 0;
        } else if(stones[len - 1] === stones[len - 2]) {
            stones.length = len - 2;
        } else {
            stones[len - 2] = stones[len - 1] - stones[len - 2];
            stones.length = len - 1;
        }
    }
    return 0;
};