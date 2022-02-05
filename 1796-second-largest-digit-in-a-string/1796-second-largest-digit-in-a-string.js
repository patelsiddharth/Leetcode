/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let max1 = -1, max2 = -1, num;
    for(i of s)
    {
        num = parseInt(i);
        if(!isNaN(num))
        {
            if(num > max2)
            {
                if(num > max1)
                {
                    max2 = max1;
                    max1 = num;
                }
                else if(num != max1)
                {
                    max2 = num;
                }
            }
        }
    }
    return max2;
};