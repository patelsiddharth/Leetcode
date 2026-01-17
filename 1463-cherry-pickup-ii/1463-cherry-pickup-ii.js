/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    let map = new Map();
    let n = grid.length, m = grid[0].length;
    const path = (row, j1, j2) => {
        if (
            j1 < 0 || j2 < 0 ||
            j1 > m - 1 || j2 > m - 1 ||
            row > n - 1
        ) return Number.NEGATIVE_INFINITY;
            
        if (row === n - 1) {
            return (j1 === j2) ? grid[row][j1] : grid[row][j1] + grid[row][j2];
        }

        const key = `${row}-${j1}-${j2}`;
        if (map.has(key)) return map.get(key);

        const left1 = (j1 > 0 && j2 > 0) ? path(row + 1, j1 - 1, j2 - 1) : Number.NEGATIVE_INFINITY;
        const down1 = (j1 > 0) ? path(row + 1, j1 - 1 , j2) : Number.NEGATIVE_INFINITY;
        const right1 = (j1 > 0 && j2 < m - 1) ? path(row + 1, j1 - 1, j2 + 1) : Number.NEGATIVE_INFINITY;

        const left2 = (j2 > 0) ? path(row + 1, j1, j2 - 1) : Number.NEGATIVE_INFINITY;
        const down2 = path(row + 1, j1, j2);
        const right2 = (j2 < m - 1) ? path(row + 1, j1, j2 + 1) : Number.NEGATIVE_INFINITY;

        const left3 = (j1 < m - 1 && j2 > 0) ? path(row + 1, j1 + 1, j2 - 1) : Number.NEGATIVE_INFINITY;
        const down3 = (j1 < m - 1) ? path(row + 1, j1 + 1 , j2) : Number.NEGATIVE_INFINITY;
        const right3 = (j1 < m - 1 && j2 < m - 1) ? path(row + 1, j1 + 1, j2 + 1) : Number.NEGATIVE_INFINITY;

        const maxSum = Math.max(left1, down1, right1, left2, down2, right2, left3, down3, right3);
        const res = maxSum + grid[row][j1] + ((j1 !== j2) ? grid[row][j2] : 0);
        map.set(key, res);
        return res;
    }
    return path(0, 0, m - 1)
};