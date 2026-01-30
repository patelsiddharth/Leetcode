/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let min = Number.POSITIVE_INFINITY, 
        left = Math.max(...weights), 
        right = weights.reduce((acc, curr) => acc + curr);

    const calDays = (cap) => {
        let load = 0, day = 1;
        for (let i = 0; i < weights.length; i++) {
            if (load + weights[i] > cap) {
                load = weights[i];
                day++;
            } else {
                load += weights[i];
            }
        }
        return day
    }

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        const daysToLoad = calDays(mid);
        if (daysToLoad <= days) {
            min = Math.min(min, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return min;
};