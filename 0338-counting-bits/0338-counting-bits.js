/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [0];
    for(let i = 1; i <= n; i++) {
        ans.push(i.toString(2).split('').filter((cur) => cur === '1').length);
    }
    return ans;
};