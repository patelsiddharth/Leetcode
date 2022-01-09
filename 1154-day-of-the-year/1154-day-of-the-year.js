/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let year = parseInt(date.substring(0, 4)),
        month = parseInt(date.substring(5, 7)),
        day = parseInt(date.substring(8)),
        daysInEachMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    if((year%4 == 0 && year%100 != 0) || year%400 == 0)
    {
        daysInEachMonth[1] = 29;
    }
    
    for(let i = 0; i < month-1; i++)
    {
        day += daysInEachMonth[i];
    }
    
    return day;
};