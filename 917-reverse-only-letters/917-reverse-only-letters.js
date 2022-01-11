/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let temp = [];
    for(let i in s)
    {
        const ch = s.charCodeAt(i)
        if(ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122)
        {
            temp.push(String.fromCharCode(ch));
        }
    }
    
    let res = "";
    
    for(let i in s)
    {
        const ch = s.charCodeAt(i)
        res += (ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122) ? temp.pop() : s[i];
    }
    
    return res;
};