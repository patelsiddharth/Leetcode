/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n = triangle.length;
    let prev = triangle[n - 1];
    for(let i = n - 2; i >= 0; i--) {
        let curr = Array.from({ length : n }).fill(0);
        for(let j = i; j >= 0; j--) {
            curr[j] = triangle[i][j] + Math.min(prev[j], prev[j+1]);
        }
        prev = curr;
    }
    return prev[0];
};