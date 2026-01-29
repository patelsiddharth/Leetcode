/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(let ch of s) {
        if (ch === '[' || ch === '(' || ch === '{') {
            stack.push(ch);
        } else {
            const popped = stack.pop();
            if (
                (ch === ']' && popped !== '[') ||
                (ch === ')' && popped !== '(') ||
                (ch === '}' && popped !== '{')
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
};