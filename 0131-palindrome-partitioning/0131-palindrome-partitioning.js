/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const checkPalindrome = (i, j) => {
        while(i < j) {
            if(s.charAt(i) !== s.charAt(j)) return false;
            i++;
            j--;
        }
        return true;
    }

    const performPartition = (idx, arr) => {
        if (idx === s.length) {
            res.push(arr);
            return;
        }
        for(let i = idx; i < s.length; i++) {
            if (checkPalindrome(idx, i)) {
                performPartition(i + 1, [...arr, s.substring(idx, i + 1)]);
            }
        }
    }

    performPartition(0, []);
    return res;
};