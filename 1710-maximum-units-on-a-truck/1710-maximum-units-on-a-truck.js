/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let result = 0;
    
    boxTypes.sort((a,b) => b[1] - a[1]).every(box => {
        for(let i = 0; i < box[0]; i++)
        {
            result += box[1];
            truckSize--;
            if(truckSize == 0)
                return false;
        }
        return true;
    });
    
    return result;
};