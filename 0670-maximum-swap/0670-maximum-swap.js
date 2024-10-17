/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let max = num;
    
    let str = num.toString().split('')
    for(let i = 0; i < str.length - 1; i++)
    {
        for(let j = i + 1; j < str.length; j++)
        {
            [str[i], str[j]] = [str[j], str[i]]
            let tempNum = parseInt(str.join(''))
            if(tempNum > max)
            {
                max = tempNum;
            }
            [str[i], str[j]] = [str[j], str[i]]
        }
    }
    return max;
};