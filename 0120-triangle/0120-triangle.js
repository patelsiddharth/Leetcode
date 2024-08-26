/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let map = new Map();
    function move(row, col) {
        if(row === triangle.length - 1)
        {
            return triangle[row][col];
        }
        
        if(map.has(row + '-' + col))
        {
            return map.get(row + '-' + col);
        }
        
        let down = triangle[row][col] + move(row + 1, col);
        
        let diagonal = triangle[row][col] + move(row + 1, col + 1);
        
        let res = Math.min(down, diagonal);
        
        map.set(row + '-' + col, res);
        
        return res;
    }
    
    return move(0, 0);
};