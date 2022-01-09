/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const year = parseInt(date.substring(0, 4)),
          month = parseInt(date[5] == "0" ? date[6] : date.substring(5, 7)),
          day = parseInt(date[8] == "0" ? date[9] : date.substring(8)),
          daysInEachMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    if((year%4 == 0 && year%100 != 0) || year%400 == 0)
    {
        daysInEachMonth[1] = 29;
    }
    
    let res = 0;
    
    for(let i = 0; i < month-1; i++)
    {
        res += daysInEachMonth[i];
    }
    
    res += day
    
    return res;
};