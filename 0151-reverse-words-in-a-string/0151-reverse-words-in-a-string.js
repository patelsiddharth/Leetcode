/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = [];
    s.split(" ").forEach(w => w && res.push(w))
    return res.reverse().join(" ");
};