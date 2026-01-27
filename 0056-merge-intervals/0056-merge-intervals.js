/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let len = intervals.length, res = [];
    intervals.sort((a,b) => (a[0] === b[0]) ? a[1] - b[1] : a[0] - b[0]);
    
    for (let i = 0; i < len; i++) {
        let start = intervals[i][0], end = intervals[i][1];
        if (res.length !== 0 && end <= res[res.length - 1][1]) {
            continue;
        }

        for (let j = i + 1; j < len; j++) {
            if (intervals[j][0] <= end) {
                end = Math.max(end, intervals[j][1])
            } else {
                break;
            }
        }
        res.push([start, end]);
    }

    return res;
};