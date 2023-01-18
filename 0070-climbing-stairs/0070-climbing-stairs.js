/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let obj = {}
    const find = function (x) {
        if(x === 0 || x === 1) return 1;
        
        let left, right;
        
        if(obj[x-1])
        {
            left = obj[x-1];
        }
        else
        {
            left = find(x-1);
            obj[x-1] = left;
        }
        
        if(obj[x-2])
        {
            right = obj[x-2];
        }
        else
        {
            right = find(x-2);
            obj[x-2] = right;
        }
        
        return left + right;
    }
    return find(n)
};