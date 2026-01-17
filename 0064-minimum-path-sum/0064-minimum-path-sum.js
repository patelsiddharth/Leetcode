/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length, n = grid[0].length;
    let dp = Array.from({ length : m }).fill(Array.from({ length : n }));
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (i === 0 && j === 0) dp[0][0] = grid[0][0];
            else {
                let left = j > 0 ? dp[i][j-1] : Number.POSITIVE_INFINITY;
                let up = i > 0 ? dp[i-1][j] : Number.POSITIVE_INFINITY;
                dp[i][j] = grid[i][j] + Math.min(left, up);
            }
        }
    }
    console.log(dp)
    return dp[m-1][n-1];

};