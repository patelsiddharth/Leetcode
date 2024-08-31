/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let obj = new Map();
    function transact(idx, buy) {
        if(idx === prices.length)
        {
           return 0;
        }
        
        if(obj.has(idx + 1 + '-' + buy))
        {
            return obj.get(idx + 1 + '-' + buy);
        }
        
        let profit = 0;
        if(buy)
        {
            let buyStock = -prices[idx] + transact(idx + 1, 0);
            let notBuyStock = 0 + transact(idx + 1, 1);
            profit = Math.max(buyStock, notBuyStock)
        }
        else
        {
            let sellStock = prices[idx] + transact(idx + 1, 1);
            let notSellStock = 0 + transact(idx + 1, 0);
            profit = Math.max(sellStock, notSellStock);
        }
        
        obj.set(idx + 1 + '-' + buy, profit);
        return profit;
    }
    return transact(0, 1);
};