/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const findMax = () => {
        let max1 = 0, max2 = 1;
        if (stones[max2] > stones[max1]) {
            [max1, max2] = [max2, max1];
        }
        for(let i = 2; i < stones.length; i++) {
            if (stones[i] > stones[max1]) {
                max2 = max1;
                max1 = i;
            } else if (stones[i] > stones[max2]) {
                max2 = i;
            }
        }
        return [max1, max2];
    }
    while(stones.length > 0) {
        if (stones.length === 1) {
            return stones[0];
        }
        
        let [max1, max2] = findMax();
        if(stones[max1] === stones[max2]) {
            stones.splice(max1, 1);
            max2 = max1 > max2 ? max2 : max2 - 1;
        } else {
            stones[max1] = stones[max1] - stones[max2];
        }
        stones.splice(max2, 1);
    }
    return 0;
};