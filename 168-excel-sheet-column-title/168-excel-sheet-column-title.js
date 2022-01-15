/**
 * @param {number} columnNumber 
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = "", rem = 0, obj = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    while(columnNumber > 0)
    {
        if(columnNumber < 27)
        {
            res = obj[columnNumber - 1] + res;
            break;
        }
        rem = columnNumber % 26;
        
        if(rem == 0)
        {
            rem = 26;
            columnNumber--;
        }    
        
        res = obj[rem - 1] + res;
        
        columnNumber = Math.floor(columnNumber / 26);
    }
    return res;
};
