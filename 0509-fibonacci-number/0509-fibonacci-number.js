/**
 * @param {number} n
 * @return {number}
 */
let obj = {}
var fib = function(n) {
    if(n <= 1)
    {
        return n;
    }

    if(!obj[n-1])
    {
        obj[n-1] = fib(n-1);
    }
    
    if(!obj[n-2])
    {
        obj[n-2] = fib(n-2);
    }
    
    return obj[n-1] + obj[n-2];
};