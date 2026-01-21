/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const map = new Map();
    const calProfit = (day, buy, cap) => {
        if (cap === 0) return 0;
        if (day === prices.length) return 0;

        const key = `${day}-${buy}-${cap}`;
        if (!map.has(key)) {
            let profit = 0
            if (buy) {
                const buyStock = -prices[day] + calProfit(day + 1, 0, cap);
                const notBuyStock = 0 + calProfit(day + 1, 1, cap);
                profit = Math.max(buyStock, notBuyStock)
            }
            else {
                const sellStock = prices[day] + calProfit(day + 1, 1, cap - 1);
                const notSellStock = 0 + calProfit(day + 1, 0, cap);
                profit = Math.max(sellStock, notSellStock)
            }
            map.set(key, profit);
        }

        return map.get(key);
    }
    return calProfit(0, 1, 2);
};