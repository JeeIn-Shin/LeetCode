/**
 * @param {string} s
 * @return {string}
 */
let decodeString = (s) => {
    while(s.match(/\d+/g)) {
        s = s.replace(/\d+\[[a-z]+\]/g, (matched) => {
            let count = Number(matched.match(/\d+/g));
            let repeatString = matched.match(/[a-z]+/g)[0];
            return repeatString.repeat(count);
        })
    }
    return s;
};