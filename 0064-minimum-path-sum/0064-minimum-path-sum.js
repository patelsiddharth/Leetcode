/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const map = new Map(), m = grid.length - 1, n = grid[0].length - 1;
    const path = (i, j) => {
        if (i === 0 && j === 0) return grid[0][0];
        if (i < 0 || j < 0) return Number.POSITIVE_INFINITY;
        const key = `${i}-${j}`;
        if (!map.has(key)) {
            map.set(key, grid[i][j] + Math.min(path(i, j - 1), path(i - 1, j)));
        }
        return map.get(key);
    }
    return path(m, n)
};