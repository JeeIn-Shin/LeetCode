/**
 * @param {string} s
 * @return {string}
 */

// leetcode
// 0123456

// 0 6
// 1 6
// 2 5
// 2 4
// 3

var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    let start = 0;
    let end = s.length - 1;
    let sArr = Array.from(s);

    while (start < end) {
        while (start < end && !vowels.includes(sArr[start])) {
            start++;
        }
        while (start < end && !vowels.includes(sArr[end])) {
            end--;
        }

        [sArr[start], sArr[end]] = [sArr[end], sArr[start]];
        start++;
        end--;
    }

    return sArr.join('');
};