/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let map = new Map(),
        m = grid.length, 
        n = grid[0].length;
    
    function move(row, col) {
        if(row === 0 && col === 0)
        {
            return grid[0][0];
        }
        
        if(row < 0 || col < 0)
        {
            return Number.POSITIVE_INFINITY;
        }
        
        if(map.has(row + '+' + col))
        {
            return map.get(row + '+' + col);
        }
        
        // let down = 0;
        // if(row + 1 < m)
        // {
        //     down = grid[row][col] + move(row + 1, col);
        // }
        let up = grid[row][col] + move(row - 1, col);
        
        // let right = 0
        // if(col + 1 < n)
        // {
        //     right = grid[row][col] + move(row, col + 1);
        // }
        let left = grid[row][col] + move(row, col - 1);
    
        let tempMin = Math.min(up, left);
        
        map.set(row + '+' + col, tempMin);
        
        return tempMin;
    }
    
    let res = move(m-1, n-1);
    // console.log(map)
    return res;
};