/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function(str1, str2) {
    let str1Len = str1.length;
    let str2Len = str2.length;

    if (str2Len <= str1Len) {
        if (str2.repeat(str1Len/str2Len) === str1)
            return str2;
        while(str2Len-- > 1) {
            let str2Slice = str2.slice(0, str2Len);
            console.log(str1Len, str2Len);
            if (str2 === str2Slice.repeat(str2.length/str2Len) && str1 === str2Slice.repeat(str1Len/str2Len))
                return str2Slice;
        }
    }
    else {
        if (str1.repeat(str2Len/str1Len) === str2)
            return str1;
        while(str1Len-- > 1) {
            let str1Slice = str1.slice(0, str1Len);
            if (str1 === str1Slice.repeat(str1.length/str1Len) &&str2 === str1Slice.repeat(str2Len/str1Len))
             return str1Slice;
        }
    }

    return '';
};