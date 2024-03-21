/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

//index 위치에 따름이 핵심인 문제
var mergeAlternately = function (word1, word2) {
    const result = [];

    const word1Len = word1.length;
    const word2Len = word2.length;
    let word1CurPos = 0;
    let word2CurPos = 0;

    while (word1CurPos < word1Len || word2CurPos < word2Len) {
        if (word1CurPos < word1Len) {
            result.push(word1.charAt(word1CurPos));
        }
        if (word2CurPos < word2Len) {
            result.push(word2.charAt(word2CurPos));
        }

        word1CurPos++;
        word2CurPos++;
    }

    return result.join('').toString();
};