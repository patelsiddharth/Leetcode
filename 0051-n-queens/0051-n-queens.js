/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [];
    function isSafe(row, col, arr) {
        let nRow = row, nCol = col;
        while(row >= 0 && col >= 0)
        {
            if(arr[row][col] === 'Q')
                return false;
            row--;
            col--;
        }
        
        row = nRow;
        col = nCol;
        while(col >= 0)
        {
            if(arr[row][col] === 'Q')
                return false;
            
            col--;
        }
        
        row = nRow;
        col = nCol;
        while(row < n && col >= 0)
        {
            if(arr[row][col] === 'Q')
                return false;
            row++;
            col--;
        }
        
        return true;
    }
    function place(col, arr) {
        if(col === n)
        {
            let str = arr.map(item => item.join(''))
            res.push(str);
            return;
        }
        
        for(let row = 0; row < n; row++)
        {
            if(isSafe(row, col, arr))
            {
                arr[row][col] = 'Q';
                place(col + 1, arr);
                arr[row][col] = '.';
            }
        }
    }
    
    place(0, Array.from({ length: n }, () => Array(n).fill('.')));
    return res;
};