/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let map = new Map(),
        m = grid.length, 
        n = grid[0].length;
    
    function move(row, col) {
        if(row === m - 1 && col === n - 1)
        {
            return grid[row][col];
        }
        
        if(row > m - 1 || col > n - 1)
        {
            return Number.POSITIVE_INFINITY;
        }
        
        if(map.has(row + '+' + col))
        {
            return map.get(row + '+' + col);
        }
        
        let tempMin = grid[row][col] + Math.min(move(row + 1, col), move(row, col + 1));
        map.set(row + '+' + col, tempMin);
        return tempMin;
    }
    
    return move(0, 0);
};