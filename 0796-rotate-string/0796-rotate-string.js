/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let arr = s.split("");
    
    for(let i = 0; i < s.length; i++)
    {
        arr.push(arr.splice(0, 1))
        if(arr.join("") === goal)
            return true;
    }
    return false;
};