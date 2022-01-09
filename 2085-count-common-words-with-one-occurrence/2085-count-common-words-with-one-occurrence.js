/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let obj1 = {}, obj2 = {};
    words1.map(word => {
        obj1[word] = obj1[word] ? obj1[word] + 1 : 1;
    })
    words2.map(word => {
        obj2[word] = obj2[word] ? obj2[word] + 1 : 1;
    })
    
    return Object.keys(obj1).filter(key => obj1[key] && obj2[key] && (obj1[key] + obj2[key] === 2)).length;
};