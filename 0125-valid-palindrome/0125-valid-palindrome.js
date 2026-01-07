/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = '';
    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++) {
        if((s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) || (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)) {
            str += s[i];
        }
    }
    
    const checkPalindrome = (l, r) => {
        if (l >= r) return true;
        if (str[l] !== str[r]) return false;
        return checkPalindrome(l+1, r-1);
    }
    return checkPalindrome(0, str.length - 1);
};