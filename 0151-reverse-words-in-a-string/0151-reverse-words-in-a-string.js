/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').filter((element) => element !== '').reverse().join(' ');
};