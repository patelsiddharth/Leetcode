/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0, neg = 1;
    
    if(x < 0)
    {
        x = -1 * x;
        neg = -1
    }
    
    while(x > 0)
    {
        res = res * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    if (res > 0x7FFFFFFF) {
      return 0;
    }
    
    return neg * res;
};