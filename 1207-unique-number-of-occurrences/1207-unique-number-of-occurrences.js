/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const compo1 = new Map();
    const compo2 = new Map();

    for(let a of arr)   {
        compo1.set(a, arr.reduce((acc, cur) => acc + (a === cur), 0))
    }

    for(let b of arr) {
        compo2.set(arr.reduce((acc, cur) => acc + (b === cur), 0), b)
    }
    
    return compo1.size === compo2.size ? true : false;
};