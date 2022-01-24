/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let res = [];
    s.split(" ").forEach(word => {
        const index = parseInt(word[word.length-1]) - 1;
        res[index] = word.slice(0, word.length-1);
    })
    return res.join(" ");
}; 