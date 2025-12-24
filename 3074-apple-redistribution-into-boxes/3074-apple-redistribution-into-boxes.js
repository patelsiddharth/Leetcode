/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let sum = apple.reduce((acc, curr) => acc + curr);
    capacity.sort((a,b) => b - a);
    let res = 0;
    for(let i = 0; i < capacity.length; i++) {
        res++;
        if(sum > capacity[i]) {
            sum -= capacity[i];
        } else {
            break;
        }
    }
    return res;
};