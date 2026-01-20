/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let res = 0, minReached = [];
    
    for (let i = 0; i < dist.length; i++) { 
        minReached[i] = Math.ceil(dist[i] / speed[i]);
    }
    
    minReached.sort((a,b) => a-b);

    for (let i = 0; i < dist.length; i++) {
        if(i >= minReached[i]) {
            return res;
        }
        res++;
    }
    return res;
};