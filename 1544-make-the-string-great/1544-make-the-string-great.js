/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    if(s.length === 0 || s.length === 1)
        return s;
    
    let arr = Array.from(s), len = 0;
    
    while(true)
    {
        len = arr.length;
        arr.forEach((char, index) => {
            if(arr[index + 1] && (arr[index].charCodeAt(0) == arr[index + 1].charCodeAt(0) + 32 || arr[index].charCodeAt(0) + 32 == arr[index + 1].charCodeAt(0)))
            {
                arr.splice(index,2);
            }
        });
        
        if(arr.length == len)
        {
            break;
        }
    }
    
    return arr.join("");
};