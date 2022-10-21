/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let obj = {}
    for(let i = 0; i < s.length; i++)
    {
        let code = s.charCodeAt(i)
        let idx = (code <= 90) ? code - 65 : code - 97
        if(obj[idx])
        {
            if(!obj[idx].includes(s[i]))
            {
                obj[idx].push(s[i])
            }
        }
        else
        {
            obj[idx] = [s[i]]
        }
    }
    
    return Object.entries(obj).reduce((acc, item) => {
        (item[1].length === 2) && (acc = item[1][0].toUpperCase())
        return acc;
    }, "");
};