/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let obj = {}, res = [];
    points.forEach((point, index) => {
        obj[index] = point[0] * point[0] + point[1] * point[1];
    })
    
    obj = Object.entries(obj).sort((a, b) => a[1] - b[1]);
    
    for(let i = 0; i < k; i++)
    {
        res.push(points[obj[i][0]]);
    }
    
    return res;
};