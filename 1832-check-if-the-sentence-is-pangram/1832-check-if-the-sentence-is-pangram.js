/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let arr = new Array(26).fill(0)
    for(let i = 0; i < sentence.length; i++)
    {
        arr[sentence.charCodeAt(i) - 97] = 1;
    }
    return !arr.some(x => x === 0)
};