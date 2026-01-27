/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let len = grid.length, res = [];
    let arr = Array(len * len + 1).fill(0);
    
    grid.forEach(nums => {
        nums.forEach(num => {
            if (arr[num] !== 0) {
                arr[num] += 1;    
            } else {
                arr[num] = 1;
            }
        });
    });
    console.log(arr)
    let rep, nonRep;
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] === 2) {
            rep = i;
        }
        else if (arr[i] === 0) {
            nonRep = i;
        }
    }

    return [rep, nonRep];
};