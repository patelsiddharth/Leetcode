/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if (m*k > bloomDay.length) return -1;

    let left = bloomDay[0], right = bloomDay[0];
    for(let i = 1; i < bloomDay.length; i++) {
        left = Math.min(left, bloomDay[i]);
        right = Math.max(right, bloomDay[i]);
    }

    const countBouquet = (day) => {
        let count = 0, bCount = 0;
        for(let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= day) {
                count++;
            } else {
                bCount += Math.floor(count/k);
                count = 0;
            }
        }
        bCount += Math.floor(count/k);
        return bCount;
    }
    let res = Number.POSITIVE_INFINITY;
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        const bCount = countBouquet(mid);
        if(bCount >= m) {
            right = mid - 1;
            res = Math.min(res, mid)
        } else {
            left = mid + 1;
        }
    }
    return res;
};