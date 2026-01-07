/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const findMax = () => {
        if (!stones || stones.length < 2) return [-1, -1];

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
        let len = stones.length;
        if (len === 1) {
            return stones[0];
        } else if (len === 0) {
            return 0;
        }
        
        let [max1, max2] = findMax();
        console.log(stones)
        console.log(max1, stones[max1])
        console.log(max2, stones[max2])
        console.log(stones[max1] === stones[max2])
        if(stones[max1] === stones[max2]) {
            stones.splice(max1, 1);
            if(max1 > max2) {
                stones.splice(max2, 1);
            } else {
                stones.splice(max2 - 1, 1);
            }
            
        } else {
            stones[max1] = stones[max1] - stones[max2];
            stones.splice(max2, 1);
        }
            console.log(stones)
    }
    return 0;
};