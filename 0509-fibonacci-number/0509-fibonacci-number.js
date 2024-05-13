/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1)
        return n;
    
    let prev = 1, prev2 = 0;
    for(i = 2; i <= n; i++) {
        const curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
}