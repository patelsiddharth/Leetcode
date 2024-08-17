/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1)
    {
        return n;
    }
    let prev = 1, prev2 = 0;
    for(let i = 2; i <= n; i++)
    {
        let temp = prev + prev2
        prev2 = prev;
        prev = temp;
    }
    return prev;
};