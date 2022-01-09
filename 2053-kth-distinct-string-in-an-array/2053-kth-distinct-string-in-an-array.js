/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let obj = {};
    arr.forEach(word => {
        obj[word] = obj[word] ? obj[word] + 1 : 1;
    })
    
    const res = Object.entries(obj).filter(key => key[1] === 1);
    
    return res[k-1] ? res[k-1][0] : "";
};