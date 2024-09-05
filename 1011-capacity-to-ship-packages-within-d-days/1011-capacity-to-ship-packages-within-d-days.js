/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let sum = weights.reduce((acc,curr) => acc + curr);
    let max = Math.max(...weights);
    
    function getDays(capacity) {
        let load = 0, days = 1;
        for(let i = 0; i < weights.length; i++)
        {
            if(load + weights[i] > capacity)
            {
                days++;
                load = weights[i];
            }
            else
            {
                load += weights[i];
            }
        }
        return days;
    }
    
    let low = max, high = sum;
    while(low <= high)
    {
        let mid = Math.floor((high + low) / 2);
        let daysReq = getDays(mid);
        if(daysReq <= days)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }
    return low;
    
};