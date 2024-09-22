/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let pow = n, ans = 1;
    
    if(pow < 0)
    {
        pow = -pow;
    }
    
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
    
    if(n < 0)
    {
        ans = 1 / ans;
    }
    return ans
};