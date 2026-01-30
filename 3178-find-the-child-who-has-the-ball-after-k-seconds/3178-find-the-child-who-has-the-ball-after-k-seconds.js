/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    const turn = Math.floor(k / (n - 1));
    if (turn % 2 === 0) {
        return k % (n-1);
    } else {
        return (n-1) - k % (n-1);
    }
};