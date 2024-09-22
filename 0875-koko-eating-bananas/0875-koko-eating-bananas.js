/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1, r = Math.max(...piles);
    while(l <= r)
    {
        const mid = Math.floor((l+r)/2);
        let totalHrs = 0;
        for(let i = 0; i < piles.length; i++)
        {
            totalHrs += Math.ceil(piles[i] / mid);
            if(totalHrs > h)
            {
                l = mid + 1;
                break;
            }
        }
        
        if(totalHrs <= h)
        {
            r = mid - 1;
        }
    }
    
    return l;
};