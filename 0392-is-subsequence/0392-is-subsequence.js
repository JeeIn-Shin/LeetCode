/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    [left, right] = [0, 0];
    let check = 0;

    for (let sChar of s) {
        if (t.match(sChar) && left <= right) {
            left = right;
            right = t.indexOf(sChar)
            t = t.slice(t.indexOf(sChar) + 1);
            check++;
        }
    }

    return check === s.length ? true : false;
};