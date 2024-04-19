/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let res = 0;
    let cur = 0;

    for(let g of gain) {
        cur += g;
        res = Math.max(res, cur);
        console.log(res);
    }
    
    return res;
};