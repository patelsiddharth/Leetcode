/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if (bloomDay.length < m*k) return -1;
    
    let low = Number.POSITIVE_INFINITY, high = Number.NEGATIVE_INFINITY
    for(let i = 0; i < bloomDay.length; i++) {
        low = Math.min(low, bloomDay[i]);
        high = Math.max(high, bloomDay[i]);
    }

    const countBouquest = (day) => {
        let count = 0, res = 0;
        for(let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= day) {
                count++;
            } else {
                res += Math.floor(count/k);
                count = 0;
            }
        }
        
        res += Math.floor(count/k);
        return res >= m;
    }

    while(low <= high) {
        let mid = Math.floor((low+high)/2);
        if (countBouquest(mid)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};