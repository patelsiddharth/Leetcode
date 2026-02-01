/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (
            stack.length !== 0 && 
            stack[stack.length - 1][0] === s[i]
        ) {
            stack[stack.length - 1][1]++;

            if(stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([s[i], 1]);
        }
    }

    let res = '';
    stack.forEach(([ch, freq]) => {
        res += ch.repeat(freq);
    })
    return res;
};