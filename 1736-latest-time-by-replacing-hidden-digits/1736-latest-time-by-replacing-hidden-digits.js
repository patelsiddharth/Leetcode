/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    time = time.split("");
    if(time[0] === "?")
    {
        if(time[1] === "?")
        {
            time[0] = "2";
            time[1] = "3";
        }
        else
        {
            time[0] = (parseInt(time[1]) > 3) ? "1" : "2";
        }
    }
    else if(time[1] === "?")
    {
        time[1] = (time[0] === "2") ? "3" : "9"
    }
    
    (time[3] === "?") && (time[3] = "5");
    
    (time[4] === "?") && (time[4] = "9");
    
    return time.join("")
};