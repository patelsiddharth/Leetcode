// { Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let [n,x] = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.count(arr,n,x);
        console.log(res);
    
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number}
*/

class Solution {
    
    count(arr,n,x){
        if(arr.length === 0 || !arr.includes(x))
        {
            return 0;
        }
        
        let obj = {}
        arr.forEach(ele => {
            obj[ele] = obj[ele] ? obj[ele] + 1 : 1;
        });
        return obj[x];
    }
}