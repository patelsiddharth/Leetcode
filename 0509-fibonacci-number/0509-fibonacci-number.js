/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = [];
    const findFib = function (n) {
        if(n <= 1)
            return n;
        
        return findFib(n-1) + findFib(n-2);
    }
    
    return findFib(n)
};