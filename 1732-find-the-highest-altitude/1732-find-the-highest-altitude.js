/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let res = -Infinity;
    let cur = 0;

    for(let g of gain) {
        cur += g;
        res = Math.max(res, cur);
    }

    return res;
};