/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((res, op) => {
        res = (op[1] === '+') ? res + 1 : res - 1;
        return res;
    }, 0);
};