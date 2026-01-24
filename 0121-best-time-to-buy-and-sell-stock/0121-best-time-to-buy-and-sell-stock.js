/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minBoughtPrice = prices[0], maxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minBoughtPrice);
        if (minBoughtPrice > prices[i]) {
            minBoughtPrice = prices[i];
        }
    }
    return maxProfit;
};