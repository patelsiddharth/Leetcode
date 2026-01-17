/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let map = new Map();
    const path = (i, j) => {
        if (i === obstacleGrid.length - 1 && j === obstacleGrid[0].length - 1 && obstacleGrid[i][j] !== 1) return 1;
        if (i >= obstacleGrid.length || j >= obstacleGrid[0].length || obstacleGrid[i][j] === 1) return 0;
        const key = `${i}-${j}`;
        if (!map.has(key)) {
            map.set(key, path(i, j + 1) + path(i + 1, j));
        }
        return map.get(key);
    }
    return path(0, 0);
};