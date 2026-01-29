/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length;

    if (len === 1 && flowerbed[0] === 0) {
        n--;
    }

    if (n <= 0) return true;

    for(let i = 0; i < len; i++) {
        if (i === 0 && flowerbed[0] === 0 && flowerbed[1] === 0) {
            flowerbed[0] = 1;
            n--;
        }

        if (i === len - 1 && flowerbed[len - 1] === 0 && flowerbed[len - 2] === 0) {
            flowerbed[i] = 1;
            n--;
        } 

        if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            n--;
        }

        if (n === 0) return true;
    }
    return false;
};