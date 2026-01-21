/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0, minPrice = prices[0];
    for(let day = 1; day < prices.length; day++) {
        const profit = prices[day] - minPrice;
        maxProfit = Math.max(maxProfit, profit);
        minPrice = Math.min(minPrice, prices[day]);
    }
    return maxProfit;
};