/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPro = 0; minBuyPrice = prices[0];
    for(let i = 1; i < prices.length; i++) {
        let profit = prices[i] - minBuyPrice;
        maxPro = Math.max(maxPro, profit);
        minBuyPrice = Math.min(minBuyPrice, prices[i]);
    }
    return maxPro;
};