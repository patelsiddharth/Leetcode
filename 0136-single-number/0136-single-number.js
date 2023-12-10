/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}
   
    nums.forEach(num => {
        if(!obj[num])
        {
            obj[num] = 1    
        }
        else
        {
            obj[num] += 1;
        }
    })
    
    const res = Object.entries(obj).find(elm => elm[1] === 1)
    
    return res[0]
};