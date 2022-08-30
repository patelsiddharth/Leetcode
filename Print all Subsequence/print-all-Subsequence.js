// Print all Subsequence : [3, 1, 2]
// [3,1,2], [3,1], [3,2], [1,2], [1], [2], [3], []

const num = [3,1,2];

const printSubsequence = function(num) {
    const printSubq = function(index, arr) {
        if(index >= num.length)
        {
            console.log(arr)
            return;
        }
      
        //take this index element
        arr.push(num[index]);
        
        // print subsequence starting from index + 1
        printSubq(index + 1, arr);
      
        // not take this index element
        arr.pop();
      
        // print subsequence starting from index + 1
        printSubq(index + 1, arr);
      
    }
    
    printSubq(0, []);
}

printSubsequence(num)
