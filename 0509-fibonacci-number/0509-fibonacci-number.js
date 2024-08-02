/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let obj = {}
    function fibNo(i) {
        if(i <= 1)
        {
            return i;
        }
        
        let i1 = obj[i-1] ? obj[i-1] : fibNo(i-1)
        let i2 = obj[i-1] ? obj[i-2] : fibNo(i-2)
        
        return  i1 + i2;
    }
        
    return fibNo(n)
};