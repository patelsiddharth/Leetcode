/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length, n = grid[0].length;
    let prev = Array.from({ length : n }).fill(0);
    for(let i = 0; i < m; i++) {
        let curr = Array.from({ length : n }).fill(0);
        for(let j = 0; j < n; j++) {
            if (i === 0 && j === 0) curr[0] = grid[0][0];
            else {
                let left = j > 0 ? curr[j-1] : Number.POSITIVE_INFINITY;
                let up = i > 0 ? prev[j] : Number.POSITIVE_INFINITY;
                curr[j] = grid[i][j] + Math.min(left, up);
            }
        }
        prev = curr;
    }
    return prev[n-1];
};