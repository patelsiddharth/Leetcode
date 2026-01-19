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
            const res = select(idx + 1, sum) + select(idx, sum + coins[idx]);
            map.set(key, res);
        }
        return map.get(key);
    }
    return select(0, 0);
};