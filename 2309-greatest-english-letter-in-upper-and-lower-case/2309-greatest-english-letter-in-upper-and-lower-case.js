/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let obj = {}
    for(let i = 0; i < s.length; i++)
    {
        let code = s.charCodeAt(i)
        if(code <= 90)
        {
            if(obj[code - 65])
            {
                if(!obj[code - 65].includes(s[i]))
                {
                    obj[code - 65].push(s[i])
                }
            }
            else
            {
                obj[code - 65] = [s[i]]
            }
        }
        else
        {
            if(obj[code - 97])
            {
                if(!obj[code - 97].includes(s[i]))
                {
                    obj[code - 97].push(s[i])
                }
            }
            else
            {
                obj[code - 97] = [s[i]]
            }
        }
    }
    
    return Object.entries(obj).reduce((acc, item) => {
        (item[1].length === 2) && (acc = item[1][0].toUpperCase())
        return acc;
    }, "");
};