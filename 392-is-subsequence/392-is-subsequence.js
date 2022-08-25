/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let idxS = 0;
    for(let idxT = 0; idxT < t.length; idxT++)
    {
        if(s[idxS] === t[idxT])
        {
            idxS++;
        }
    }
    
    return idxS === s.length;
};