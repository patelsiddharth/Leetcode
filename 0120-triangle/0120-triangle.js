/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const map = new Map();
    const path = (row, col) => {
        if (row === triangle.length - 1) return triangle[row][col];
        const key = `${row}-${col}`;
        if (!map.has(key)) {
            map.set(key, triangle[row][col] + Math.min(path(row+1, col), path(row+1, col+1)));
        }
        return map.get(key);
    }
    return path(0, 0);
};