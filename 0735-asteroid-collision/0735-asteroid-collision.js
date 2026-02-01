/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [], res = [], len = asteroids.length;
    for(let i = len - 1; i >= 0; i--) {
        if (asteroids[i] < 0) {
            stack.push(asteroids[i]);
        } else {
            while (stack.length > 0 && -stack[stack.length - 1] < asteroids[i]) {
                stack.pop();
            }
            
            if (stack.length !== 0 && -stack[stack.length - 1] > asteroids[i]) {
                continue;
            }
            if (stack.length !== 0 && -stack[stack.length - 1] === asteroids[i]) {
                stack.pop();
                continue;
            }

            if (stack.length === 0 || -stack[stack.length - 1] !== asteroids[i]) {
                res.push(asteroids[i]);
            }
        }
    }
    res.push(...stack);
    return res.reverse();
};