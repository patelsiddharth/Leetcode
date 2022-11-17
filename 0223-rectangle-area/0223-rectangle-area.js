/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let width1 = ax2 - ax1,
        height1 = ay2 - ay1,
        width2 = bx2 - bx1,
        height2 = by2 - by1;
    
    let a1 = Math.max(ax1, bx1), 
        a2 = Math.max(ay1, by1),
        b1 = Math.min(ax2, bx2), 
        b2 = Math.min(ay2, by2);
    
    let cl = b1 - a1, ch = b2 - a2;
    
    let area= 0;
    if(cl > 0 && ch > 0)
        area = cl * ch;
    
    return ((width1 *  height1) + (width2 * height2) - area)
};