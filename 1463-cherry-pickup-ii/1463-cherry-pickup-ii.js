/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    let map = new Map();
    let n = grid.length, m = grid[0].length;
    const path = (row, j1, j2) => {
        if (
            j1 < 0 ||
            j2 < 0 ||
            j1 > m - 1 ||
            j2 > m - 1 ||
            row > n - 1
        ) return Number.NEGATIVE_INFINITY;
            
        if (row === n - 1) {
            if (j1 === j2) {
                return grid[row][j1];
            }
            return grid[row][j1] + grid[row][j2];
        }

        const key = `${row}-${j1}-${j2}`;
        if (map.has(key)) return map.get(key);
        let left1 = (j1 > 0 && j2 > 0) ? path(row + 1, j1 - 1, j2 - 1) : Number.NEGATIVE_INFINITY;
        let down1 = (j1 > 0) ? path(row + 1, j1 - 1 , j2) : Number.NEGATIVE_INFINITY;
        let right1 = (j1 > 0 && j2 < m - 1) ? path(row + 1, j1 - 1, j2 + 1) : Number.NEGATIVE_INFINITY;

        let left2 = (j2 > 0) ? path(row + 1, j1, j2 - 1) : Number.NEGATIVE_INFINITY;
        let down2 = path(row + 1, j1, j2);
        let right2 = (j2 < m - 1) ? path(row + 1, j1, j2 + 1) : Number.NEGATIVE_INFINITY;

        let left3 = (j1 < m - 1 && j2 > 0) ? path(row + 1, j1 + 1, j2 - 1) : Number.NEGATIVE_INFINITY;
        let down3 = (j1 < m - 1) ? path(row + 1, j1 + 1 , j2) : Number.NEGATIVE_INFINITY;
        let right3 = (j1 < m - 1 && j2 < m - 1) ? path(row + 1, j1 + 1, j2 + 1) : Number.NEGATIVE_INFINITY;

        const maxSum = Math.max(left1, down1, right1, left2, down2, right2, left3, down3, right3);
        let res = grid[row][j1] + maxSum;
        if (j1 !== j2) {
            res += grid[row][j2]
        }
        map.set(key, res);
        return res;
    }
    return path(0, 0, m - 1)
};