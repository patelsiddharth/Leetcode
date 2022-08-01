/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = [];
    s.split(" ").forEach(word => {
        arr.push(word.split("").reverse().join(""));
    })
    return arr.join(" ");
};