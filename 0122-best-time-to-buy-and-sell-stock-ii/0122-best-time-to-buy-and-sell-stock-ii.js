/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    const dp = Array(n + 1).fill().map(() => Array(2).fill(0));
    dp[n][0] = 0;
    dp[n][1] = 0;

    for(let i = n - 1; i >= 0; i--) {
        for(let buy = 0; buy <= 1; buy++) {
            let profit = 0;
            if (buy) {
                const buyStock = -prices[i] + dp[i + 1][0];
                const notBuyStock = 0 + dp[i + 1][1];
                profit = Math.max(buyStock, notBuyStock);
            } else {
                const sellStock = prices[i] + dp[i + 1][1];
                const notSellStock = 0 + dp[i + 1][0];
                profit = Math.max(sellStock, notSellStock);
            }
            dp[i][buy] = profit;
        }
    }
    return dp[0][1];
};