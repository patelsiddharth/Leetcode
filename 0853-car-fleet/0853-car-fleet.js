/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let arr = [], stack = [];
    for(let i = 0; i < position.length; i++) {
        arr.push([position[i], speed[i]]);
    }
    arr.sort((a,b) => a[0] - b[0]);
    for(let i = arr.length - 1; i >= 0; i--) {
        const timeToReach = (target - arr[i][0]) / arr[i][1]; // distance/speed = time
        while(stack.length === 0 || stack[stack.length - 1] < timeToReach) {
            stack.push(timeToReach);
        }
    }
    return stack.length;
};