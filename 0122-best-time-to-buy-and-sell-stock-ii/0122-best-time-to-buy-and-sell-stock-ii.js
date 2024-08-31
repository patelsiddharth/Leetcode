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
        
        let profit = 0;
        
        if(buy)
        {   
            let bs, notBuyStock;
            if(obj.has(idx + 1 + '-' + 0))
            {
                bs = obj.get(idx + 1 + '-' + 0);
            }
            else
            {
                bs = transact(idx + 1, 0);
                obj.set(idx + 1 + '-' + 0, bs);
            }
            
            if(obj.has(idx + 1 + '-' + 1))
            {
                nbs = obj.get(idx + 1 + '-' + 1);
            }
            else
            {
                nbs = transact(idx + 1, 1);
                obj.set(idx + 1 + '-' + 1, nbs);
            }
            
            profit = Math.max(-prices[idx] + bs, nbs)
        }
        else
        {
            let ss, nss;
            if(obj.has(idx + 1 + '-' + 1))
            {
                ss = obj.get(idx + 1 + '-' + 1);
            }
            else
            {
                ss = transact(idx + 1, 1);
                obj.set(idx + 1 + '-' + 1, ss);
            }
            
            if(obj.has(idx + 1 + '-' + 0))
            {
                nss = obj.get(idx + 1 + '-' + 0);
            }
            else
            {
                nss = transact(idx + 1, 0);
                obj.set(idx + 1 + '-' + 0, nss);
            }
            
            profit = Math.max(prices[idx] + ss, nss);
        }
        
        return profit;
    }
    return transact(0, 1);
};