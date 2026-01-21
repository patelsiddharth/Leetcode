/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const dp = Array(prices.length).fill().map(() => Array(2*k).fill(-1))
    const calProfit = (day, transaction) => {
        if(transaction === 2*k || day === prices.length) return 0;
        
        if (dp[day][transaction] === -1) {
            if (transaction % 2 === 0) {
                const buyStock = -prices[day] + calProfit(day + 1, transaction + 1);
                const notBuyStock = 0 + calProfit(day + 1, transaction);
                dp[day][transaction] = Math.max(buyStock, notBuyStock);
            } else {
                const sellStock = prices[day] + calProfit(day + 1, transaction + 1);
                const notSellStock = 0 + calProfit(day + 1, transaction);
                dp[day][transaction] = Math.max(sellStock, notSellStock);
            }
        }
        return dp[day][transaction];
    }
    return calProfit(0, 0);
};