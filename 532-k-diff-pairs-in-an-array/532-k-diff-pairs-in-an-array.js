/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let arr = [], duplicate = [];
    nums.sort((a,b) => b-a).filter(item => {
        if(!arr.includes(item))
        {
            arr.push(item)
        }
        else if(!duplicate.includes(item))
        {
            duplicate.push(item)
        }
    });
    
    if(k === 0)
        return duplicate.length;
    
    let i = 0, res = 0;
    while(i < arr.length - 1)
    {
        let j = i+1;
        while(j < arr.length)
        {
            
            const abs = Math.abs(arr[i] - arr[j])
            if(abs === k)
            {
                res++;
                break;
            }
            else if(abs > k)
            {
                break;
            }
            j++;
        }
        i++
    }
    return res;
};