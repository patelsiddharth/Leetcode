/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let obj = {
        'a' : 0,
        'e' : 0,
        'i' : 0, 
        'o' : 0, 
        'u' : 0, 
        'A' : 0, 
        'E' : 0, 
        'I' : 0, 
        'O' : 0, 
        'U' : 0
    }
    let left = 0, len = s.length - 1, lc = 0, rc = 0;
    while(left < len / 2)
    {
        obj.hasOwnProperty(s[left]) && lc++;
        obj.hasOwnProperty(s[len - left]) && rc++;
        left++;
    }
    return lc === rc
};