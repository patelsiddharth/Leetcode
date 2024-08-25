/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    
    if(obstacleGrid[m-1][n-1] === 1 || obstacleGrid[0][0] === 1)
        return 0;
    
    let map = new Map();
    function move(row, col) {
        if(row === m-1 && col === n-1)
        {
            return 1;
        }
        
        if(row > m-1 || col > n-1)
        {
            return 0;
        }
        
        if(map.has(row+'-'+col))
        {
            return map.get(row+'-'+col)
        }
        let right = 0;
        if(col + 1 < n && obstacleGrid[row][col+1] === 0)
        {
            right = move(row, col+1);
        }
        
        let down = 0;
        if(row + 1 < m && obstacleGrid[row+1][col] === 0)
        {
            down = move(row+1, col);
        }
        
        map.set(row+'-'+col, right + down)
        return right + down;
    }
    
    return move(0,0)
};