/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const map = new Map();
    const func = (idx, target) => {
        if (idx === 0) {
            if (target % coins[idx] === 0) 
                return target / coins[idx];
            return Number.POSITIVE_INFINITY;
        }
        const key = `${idx}-${target}`;
        if (!map.has(key)) {
            const notTake = 0 + func(idx - 1, target);
            let take = Number.POSITIVE_INFINITY;
            if (coins[idx] <= target) {
                take = 1 + func(idx, target - coins[idx]);
            }
            map.set(key, Math.min(take, notTake));
        }

        return map.get(key);
    }

    const res = func(coins.length - 1, amount)
    return res === Number.POSITIVE_INFINITY ? -1 : res;
};