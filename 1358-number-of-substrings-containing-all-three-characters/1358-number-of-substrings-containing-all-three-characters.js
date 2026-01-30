/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0, la = -1, lb = -1, lc = -1;
    for(let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            la = i;
        } else if (s[i] === 'b') {
            lb = i;
        } else if (s[i] === 'c') {
            lc = i;
        }

        if (la !== -1 && lb !== -1 && lc !== -1) {
            count += Math.min(la, lb, lc) + 1;
        }
    }
    return count;
};