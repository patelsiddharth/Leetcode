/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let suffMax = [], len = height.length, total = 0, prevMax = height[0];

    suffMax[len - 1] = height[len - 1];

    for(let i = len - 2; i >= 0; i--) {
        suffMax[i] = Math.max(suffMax[i + 1], height[i]);
    }

    for(let i = 0; i < len; i++) {
        if (height[i] < prevMax && height[i] < suffMax[i]) {
            total += Math.min(prevMax, suffMax[i]) - height[i];
        }
        prevMax = Math.max(prevMax, height[i]);
    }
    return total;
};