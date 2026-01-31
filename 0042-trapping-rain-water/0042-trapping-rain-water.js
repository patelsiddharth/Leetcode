/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let preMax = [], suffMax = [], len = height.length;

    preMax[0] = height[0];
    suffMax[len - 1] = height[len - 1];

    for(let i = 1; i < len; i++) {
        preMax[i] = Math.max(preMax[i - 1], height[i]);
        suffMax[len - 1 - i] = Math.max(suffMax[len - i], height[len - 1 - i]);
    }

    let total = 0;
    for(let i = 0; i < len; i++) {
        if (height[i] < preMax[i] && height[i] < suffMax[i]) {
            total += Math.min(preMax[i], suffMax[i]) - height[i];
        }
    }
    return total;
};