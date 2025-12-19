/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    if (arr[0] > k) return k;

    let low = 0, high = arr.length - 1;
    while(low <= high) {
        let mid = Math.floor((low+high)/2);
        const missingNoAtMid = arr[mid] - (mid + 1);
        if (missingNoAtMid < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low + k
};