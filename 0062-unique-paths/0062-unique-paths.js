/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i = 0; i < m; i++)
    {
        for(let j = 0; j < n; j++)
        {
            if(i === 0 && j === 0)
            {
                dp[0][0] = 1;
                continue;
            }
            
            let up = (i > 0) ? dp[i-1][j] : 0;
            let left = (j > 0) ? dp[i][j-1] : 0;
            dp[i][j] = up + left;
        }
    }
    return dp[m-1][n-1];
};