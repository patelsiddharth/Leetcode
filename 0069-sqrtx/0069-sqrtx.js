/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 1, high = x, res = 0;
    while(low <= high) {
        let mid = Math.floor((low+high)/2);
        let midSqr = mid * mid;
        if (midSqr === x) {
            res = mid;
            break;
        }

        if (midSqr > x) {
            high = mid - 1;
        } else {
            res = mid
            low = mid + 1;
        }
    }
    return res;
};