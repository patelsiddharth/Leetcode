/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1, high = 0, res = -1;
    for(let i = 0; i < piles.length; i++) {
        high = Math.max(high, piles[i]);
    }

    function findHrs(speed) {
        let time = 0;
        for(let i = 0; i < piles.length; i++) {
            time += Math.ceil(piles[i]/speed);
        }
        return time;
    }

    while(low <= high) {
        let mid = Math.floor((low+high)/2);
        let time = findHrs(mid);
        if (time <= h) {
            res = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return res;
};