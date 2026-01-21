/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = Array(prices.length).fill().map(() => Array(2).fill(-1))
    const cal = (day, buy) => {
        if(day >= prices.length) return 0;

        if (dp[day][buy] === -1) {
            if (buy) {
                const b = -prices[day] + cal(day + 1, 0);
                const nb = 0 + cal(day + 1, 1);
                dp[day][buy] = Math.max(b, nb);
            } else {
                const s = prices[day] + cal(day + 2, 1);
                const ns = 0 + cal(day + 1, 0);
                dp[day][buy] = Math.max(s, ns);
            }
        }
        return dp[day][buy];
    }
    return cal(0, 1);
};