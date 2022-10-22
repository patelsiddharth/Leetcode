/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let res = 1;
    if(time[4] === "?")
    {
        res *= 10;
    }
    
    if(time[3] === "?")
    {
        res *= 6
    }
    
    if(time[0] === "?" && time[1] === "?")
    {
        res *= 24
    }
    else if(time[0] === "?" && time[1] !== "?")
    {
        res *= time[1] > '3' ? 2 : 3;
    }
    else if(time[0] !== "?" && time[1] === "?")
    {
        res *= time[0] === '2' ? 4 : 10;
    }
    
    return res;
};