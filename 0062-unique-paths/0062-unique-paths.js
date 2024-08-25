/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let map = new Map();
    function move(row, col) {
        if(row === m-1 && col === n-1)
        {
            return 1;
        }
        
        if(row > m - 1 || col > n - 1)
        {
            return 0;
        }
        
        if(map.has(row + '-'+ col))
        {
            return map.get(row + '-'+ col)
        }
        
        let path1 = move(row + 1, col);
        let path2 = move(row, col + 1);
        
        map.set(row + '-'+ col, path1 + path2);
        return path1 + path2;
    }
    
    return move(0,0);
};