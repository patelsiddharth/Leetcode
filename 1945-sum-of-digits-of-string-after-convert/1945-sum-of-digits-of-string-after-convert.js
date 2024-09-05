/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let temp = ''
    for(let i = 0; i < s.length; i++)
    {
        temp += s.charCodeAt(i) - 96;
    }

    let res = 0;
    for(let i = 0; i < k; i++)
    {
        res = 0;
        for(let j = 0; j < temp.length; j++)
        {
            res += parseInt(temp[j]);
        }
        temp = res.toString();
    }
    return res;
};