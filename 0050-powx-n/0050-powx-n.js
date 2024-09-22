/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let pow = Math.abs(n), ans = 1;
    
    while(pow > 0)
    {
        if(pow % 2 === 0)
        {
            x = x * x;
            pow = pow / 2;
        }
        else
        {
            ans = ans * x;
            pow = pow - 1;
        }
    }
    
    return (n < 0) ? (1 / ans) : ans
};