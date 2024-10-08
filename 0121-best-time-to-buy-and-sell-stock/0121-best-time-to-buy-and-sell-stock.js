/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0], profit = 0;
    for(let i = 1; i < prices.length; i++)
    {
        min = Math.min(min, prices[i]);
        profit = Math.max(profit, prices[i] - min)
    }
    return profit;
};