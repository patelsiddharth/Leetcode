/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const map = new Map();
    const select = (idx, sum) => {
        if (sum > amount) return 0;

        if (idx === coins.length) {
            return sum === amount ? 1 : 0
        }

        const key = `${idx}-${sum}`;
        if(!map.has(key)) {
            const notTake = select(idx + 1, sum);
            let takeCoin = 0;
            if (coins[idx] <= amount - sum) {
                takeCoin = select(idx, sum + coins[idx]);
            }
            map.set(key, notTake + takeCoin);
        }
        return map.get(key);
    }
    return select(0, 0);
};