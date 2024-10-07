/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let map = new Map();
    function move(row, col) {
        if(row >= m || col >= n)
        {
            return 0;
        }
        
        if(row === m - 1 && col === n - 1)
        {
            return 1;
        }
        
        let key = `${row}-${col}`
        if(map.has(key))
        {
            return map.get(key);
        }
        
        let res = move(row, col + 1) + move(row + 1, col);
        map.set(key, res);
        return res;
    }
    
    return move(0, 0);
};