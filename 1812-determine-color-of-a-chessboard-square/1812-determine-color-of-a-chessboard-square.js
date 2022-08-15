/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const x = coordinates.charCodeAt(0), y = coordinates[1]
    return ((x % 2 === 0) ^ (y % 2 === 0))
};