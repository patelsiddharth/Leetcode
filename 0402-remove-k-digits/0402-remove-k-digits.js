/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let res = '', stack = [], len = num.length;

    if (k === len) return '0';

    for(let i = 0; i < len; i++) {
        while (stack.length !== 0 && k > 0 && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    
    while (k > 0) {
        stack.pop();
        k--;
    }

    let zc = 0;
    for(let i = 0; i < stack.length; i++) {
        if (stack[i] === '0') {
            zc++;
        } else {
            break;
        }
    }

    for(let i = zc; i < stack.length; i++) {
        res += stack[i];
    }

    return res === '' ? '0' : res;
};