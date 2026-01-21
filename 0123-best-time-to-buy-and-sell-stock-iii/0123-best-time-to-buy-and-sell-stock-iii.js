/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = Array(prices.length).fill().map(() => Array(2).fill().map(() => Array(3).fill(-1)));

    const calProfit = (day, buy, cap) => {
        if (cap === 0 || day === prices.length) return 0;
        
        if (dp[day][buy][cap] === -1) {
            if (buy) {
                const buyStock = -prices[day] + calProfit(day + 1, 0, cap);
                const notBuyStock = 0 + calProfit(day + 1, 1, cap);
                dp[day][buy][cap] = Math.max(buyStock, notBuyStock)
            }
            else {
                const sellStock = prices[day] + calProfit(day + 1, 1, cap - 1);
                const notSellStock = 0 + calProfit(day + 1, 0, cap);
                dp[day][buy][cap] = Math.max(sellStock, notSellStock)
            }
        }

        return dp[day][buy][cap];
    }
    return calProfit(0, 1, 2);
};