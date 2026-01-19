/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const map = new Map();
    const func = (i, j) => {
        if (i > j) return 0;

        const key = `${i},${j}`;
        if (map.has(key)) return map.get(key);
        let res = 0;
        if (s[i] === s[j]) {
            res = 0 + func(i + 1, j - 1);
        } else {
            res = 1 + Math.min(func(i + 1, j), func(i, j - 1));
        }
        map.set(key, res);
        return res;
    }
    return func(0, s.length - 1);
};