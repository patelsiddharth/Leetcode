/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let op = ["+", "-", "*", "/"], res = 0;
    for(let index = 0; index < tokens.length; index++) 
    {
        if(op.includes(tokens[index]))
        {
            switch(tokens[index])
            {
                case "+":
                {
                    res = (+tokens[index-2]) + (+tokens[index-1]);
                    break;
                }
                case "-":
                {
                    res = tokens[index-2] - tokens[index-1];
                    break;
                }
                case "*":
                {
                    res = tokens[index-2] * tokens[index-1];
                    break;
                }
                case "/":
                {
                    res = (tokens[index-2] / tokens[index-1]) | 0;
                    break;
                }
            }
            tokens.splice(index-2,3, res.toString());
            index -= 2;
        }
    }

    return tokens[0];
};