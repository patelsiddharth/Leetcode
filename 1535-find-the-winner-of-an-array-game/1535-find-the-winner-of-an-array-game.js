/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let win = 0;
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[0] > arr[i])
        {
            win++;
        }
        else
        {
            arr[0] = arr[i];
            win = 1;
        }
        if(win == k)
            return arr[0];
    }
     return arr[0];
    // while(len != arr.length)
    // {
    //     len++;
    //     if(arr[0] > arr[1])
    //     {
    //         win0++;
    //         max = arr[0]; 
    //         if(win0 == k)
    //             return arr[0];
    //         arr.splice(1,1);
    //     }
    //     else
    //     {
    //         win1++;
    //         max = arr[1];
    //         if(win1 == k)
    //             return arr[1];
    //         arr.splice(0,1);
    //         win0 = win1;
    //         win1 = 0;
    //     }
    // }
    // return max;
};