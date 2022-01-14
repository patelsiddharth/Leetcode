/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let result = 0, breakLoop = false;
    boxTypes.sort((a,b) => b[1] - a[1]);
    boxTypes.every(box => {
        console.log(box);
        for(let i = 0; i < box[0]; i++)
        {
            result += box[1];
            truckSize--;
            if(truckSize == 0)
            {
                breakLoop = true;
                break;
            }    
        }
        if(breakLoop)
            return false;
        return true;
    });
    return result;
};