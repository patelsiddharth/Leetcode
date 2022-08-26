/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, min = Number.MAX_VALUE;
    
    for(let i = 0; i < prices.length; i++)
    {
        console.log(min, max, prices[i])
        if(min > prices[i])
        {
            min = prices[i];
        }
        
        if((prices[i] - min) > max)
            max = prices[i] - min;
    }
    return max;
};