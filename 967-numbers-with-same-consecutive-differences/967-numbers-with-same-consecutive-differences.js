/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let obj = {};
    
    const getNum = function(num) {
        const len = num.length;
        
        if(len === n)
        {
            obj[num] = 1;
            return;
        }
        
        let add = k + (+num[len - 1])
        if(add < 10)
        {
            getNum(num + add);
        }
        
        let sub = +num[len - 1] - k
        if(sub >= 0)
        {
            getNum(num + sub);  
        }
    }
    
    for(let start = 1; start <= 9; start++)
    {
        getNum(start.toString());
    }
    
    return Object.keys(obj);
};