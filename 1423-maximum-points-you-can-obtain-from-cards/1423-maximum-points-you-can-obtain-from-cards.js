/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let lsum = 0, rsum = 0;
    for(let i = 0; i < k; i++)
    {
        lsum += cardPoints[i];
    }
    
    let maxSum = lsum + rsum;
    
    for(let i = 0; i < k; i++)
    {
        lsum -= cardPoints[k - i - 1];
        rsum += cardPoints[cardPoints.length - i - 1]
        maxSum = Math.max(maxSum, lsum + rsum);
    }
    
    return maxSum;
};