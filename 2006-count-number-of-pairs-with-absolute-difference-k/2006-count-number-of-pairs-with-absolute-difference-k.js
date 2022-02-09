/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(arr, k) {
    let i = 0, res = 0, j = 0;
    while(i < arr.length - 1)
    {
        j = i+1;
        while(j < arr.length)
        {
            if(Math.abs(arr[i] - arr[j]) === k)
            {
                res++;
            }
            j++;
        }
        i++
    }
    return res;
};