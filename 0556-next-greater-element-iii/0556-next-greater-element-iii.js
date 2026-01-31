/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    let arr = n.toString().split('').map(i => +i);

    let len = arr.length, idx = -1;
    for(let i = len - 1; i > 0; i--) {
        if (arr[i] > arr[i-1]) {
            idx = i - 1;
            break
        }
    }

    if (idx === -1) return -1;

    for(let i = len - 1; i > idx; i--) {
        if (arr[i] > arr[idx]) {
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
            break;
        }
    }

    let l = idx + 1, r = len - 1;
    while (l <= r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
    
    let result = Number(arr.join(''));

    return result > 2147483647 ? -1 : result;
};