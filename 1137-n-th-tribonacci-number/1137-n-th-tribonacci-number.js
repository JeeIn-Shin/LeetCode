/**
 * @param {number} n
 * @return {number}
 */

// n 기준 3개만?
var tribonacci = function(n) {
    let t = [0, 1, 1];
    let i = 3;

    
    while(i <= n)  {
        t[i] = t[i - 1] + t[i - 2] + t[i - 3];
        i++;
    }

    console.log(t);
    
    return t[n];
}