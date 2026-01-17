/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Map();
    const path = (i, j) => {
        if (i >= m || j >= n) return 0;
        if (i === m - 1 && j === n - 1) return 1;

        const key = `${i}-${j}`;
        if (dp.has(key)) return dp.get(key);
        dp.set(key, path(i+1, j) + path(i, j+1));
        return dp.get(key);
    }
    return path(0,0);
};