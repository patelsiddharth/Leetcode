/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let res = "";
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const temp = date.split(" ");
    
    // year
    res += temp[2] + "-";
    
    // month
    const m = month.findIndex(i => i === temp[1]) + 1
    if(m < 10)
    {
        res += "0" + m + "-";
    }
    else
    {
        res += m + "-";
    }
    
    // day
    const d = parseInt(temp[0].slice(0, -2))
    if(d < 10)
    {
        res += "0" + d;
    }
    else
    {
        res += d;
    }
    return res;
};