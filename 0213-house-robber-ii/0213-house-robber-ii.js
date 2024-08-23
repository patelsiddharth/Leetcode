/**
 * @param {number[]} arr
 * @return {number}
 */
var rob = function(arr) {
    if(arr.length === 1)
        return arr[0]
    
    let obj = {}, diff = 2;
    
    function robH(idx) {
        if (idx === arr.length - diff)
        {
            return arr[idx]
        }

        if (idx > arr.length - diff)
        {
            return 0;
        }

         if(Object.hasOwn(obj, idx))
        {
            return obj[idx]
        }

        let pick = arr[idx] + robH(idx + 2)
        let notPick = robH(idx + 1)

        return obj[idx] = Math.max(pick, notPick);
    }
    let r1 = robH(0)
    diff = 1;
    obj = {};
    let r2 = robH(1)
    return Math.max(r1, r2)
};