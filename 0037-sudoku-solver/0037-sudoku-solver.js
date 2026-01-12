/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const safe = (row, col, value) => {
        for(let i = 0; i < 9; i++) {
            if (board[row][i] === value.toString()) return false;
            if (board[i][col] === value.toString()) return false;
            if (board[3 * Math.floor(row/3) + Math.floor(i/3)][3 * Math.floor(col/3) + Math.floor(i%3)] === value.toString()) return false;
        }
        return true;
    }
    const solve = () => {
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if(board[i][j] === '.') {
                    for(let k = 1; k <= 9; k++) {
                        if (safe(i, j, k)) {
                            board[i][j] = k.toString();
                            if(solve() === true)
                                return true;
                            else
                                board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    solve();
};