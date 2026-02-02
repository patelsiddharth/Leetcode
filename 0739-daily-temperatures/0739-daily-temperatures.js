/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = [], stack = []
    for(let i = temperatures.length - 1; i >= 0; i--) {
        while(stack.length !== 0 && stack[stack.length - 1][0] <= temperatures[i]) {
            stack.pop();
        }
        res[i] = stack.length === 0 ? [-1, -1] : stack[stack.length - 1];
        stack.push([temperatures[i], i]);
    }
    return res.map((item, idx) => {
        return item[1] === -1 ? 0 : item[1] - idx;
    })
};