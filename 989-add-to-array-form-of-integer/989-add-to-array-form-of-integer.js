/**
 * @param {number[]} numA
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(numA, k) {
    let len = numA.length-1, carry = 0, numValue = 0, sum = 0;
    while(k > 0 || len >= 0)
    {
        numValue = len < 0 ? 0 : numA[len];
        sum = k % 10 + numValue + carry;
        if(sum >= 10)
        {
            sum = sum % 10;
            carry = 1;
        }
        else
        {
            carry = 0;
        }
        
        if(len < 0)
        {
            numA.unshift(sum);
        }
        else
        {
            numA[len] = sum;
        }
        
        k = Math.floor(k/10);
        len--;
    }
    
    if(carry == 1)
    {
        numA.unshift(1);
    }
    
    return numA;
};