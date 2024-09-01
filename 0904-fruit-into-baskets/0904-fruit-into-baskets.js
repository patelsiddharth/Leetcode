/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l = 0, r = 0, max = 0, obj = {}
    while(r < fruits.length)
    {
        if(!obj.hasOwnProperty(fruits[r]))
        {
            obj[fruits[r]] = 1;
            while(Object.keys(obj).length > 2)
            {
                obj[fruits[l]]--;
                if(obj[fruits[l]] === 0)
                {
                    delete obj[fruits[l]];
                }
                l++;
            }
        }
        else
        {
            obj[fruits[r]]++;
        }
        max = Math.max(max, r - l + 1);
        r++;
    }
    return max;
};