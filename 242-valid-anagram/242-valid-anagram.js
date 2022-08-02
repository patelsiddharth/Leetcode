/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
    
    const arrS = new Array(26).fill(0);
    
    for(let i = 0; i < s.length; i++)
    {
        arrS[s.charCodeAt(i) - 97]++;
        arrS[t.charCodeAt(i) - 97]--;
    }
    
    return !arrS.some(i => i!==0);
};