/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = []
    const solve = (col, arr) => {
        if (col === n) {
            let str = arr.map(item => item.join(''))
            res.push(str);
            return;
        }
        
        const isSafe = (row, col, arr) => {
            let i = row, j = col;
            while (j >= 0) {
                if (arr[i][j] === 'Q') return false;
                j--;
            }

            j = col;
            while (i >= 0 && j >= 0) {
                if (arr[i][j] === 'Q') return false;
                i--;
                j--;
            }

            i = row;
            j = col;
            while (i < n && j >= 0) {
                if (arr[i][j] === 'Q') return false;
                i++;
                j--;
            }

            return true;
        }

        for(let row = 0; row < n; row++) {
            if (isSafe(row, col, arr)) {
                arr[row][col] = 'Q';
                solve(col + 1, arr);
                arr[row][col] = '.';
            }
        }
        
    }
    solve(0, Array.from({ length: n }, () => Array(n).fill('.')));
    return res;
};