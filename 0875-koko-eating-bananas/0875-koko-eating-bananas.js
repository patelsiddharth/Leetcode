/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1, right = Math.max(...piles), res = 0;
    
    const getHours = (speed) => {
        let time = 0;
        for (let i = 0; i < piles.length; i++) {
            time += Math.ceil(piles[i]/speed);
        }
        return time;
    }

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const hourToEatAllBanana = getHours(mid);
        if (hourToEatAllBanana <= h) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return res;
};