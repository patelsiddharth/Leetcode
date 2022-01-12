/**
 * @param {string} s
 * @return {string}
 */

var reverseOnlyLetters = function(s) {
    const isLetter = (charCode) => ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122));
    let start = 0, end = s.length - 1, res = Array.from(s), startChar, endChar;
    while(start < end)
    {
        startChar = s.charCodeAt(start);
        endChar = s.charCodeAt(end);
        if(isLetter(startChar))
        {
            if(isLetter(endChar))
            {
                [res[start], res[end]] = [s[end], s[start]];
                start++;
            }
            end--;
        }
        else if(isLetter(endChar))
        {
            if(isLetter(startChar))
            {
                [res[start], res[end]] = [s[end], s[start]];
                end--;
            }
            start++;
        }
        else
        {
            start++;
            end--;
        }
    }
    
    return res.join('');
};