/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let len = intervals.length, res = [];
    intervals.sort((a,b) => (a[0] === b[0]) ? a[1] - b[1] : a[0] - b[0]);
     
    for (let i = 0; i < len; i++) {
        if (res.length === 0 || intervals[i][0] > res[res.length - 1][1]) {
            res.push(intervals[i]);
        } else {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
        }
    }

    return res;
};