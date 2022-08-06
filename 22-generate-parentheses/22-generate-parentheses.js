/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [], arr = [];
    
    const generateCombination = function(openN, closeN) {
        console.log(n, openN, closeN)
        if(openN === n && closeN === n)
        {
            res.push(arr.join(""));
            return;
        }
        
        if(openN < n)
        {
            arr.push("(");
            // console.log(str)
            generateCombination(openN + 1, closeN);
            arr.pop();
        }
        
        if(closeN < openN)
        {
            arr.push(")");
            // console.log(str)
            generateCombination(openN, closeN + 1);
            arr.pop();
        }
    }
    
    generateCombination(0, 0)
    
    return res;
};