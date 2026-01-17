/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let map = new Map();
    const path = (row, col) => {
        if (
            row >= matrix.length || 
            col >= matrix[0].length || 
            row < 0 ||
            col < 0
        ) return Number.POSITIVE_INFINITY;
        if (row === matrix.length - 1) return matrix[row][col];

        const key = `${row}-${col}`;
        if (!map.has(key)) {
            const res = matrix[row][col] + Math.min(path(row + 1, col - 1), path(row + 1, col), path(row + 1, col + 1));
            map.set(key, res);
        }
        return map.get(key);
    }

    let min = Number.POSITIVE_INFINITY;
    for(let i = 0; i < matrix[0].length; i++) {
        min = Math.min(min, path(0, i));
    }
    return min;
};