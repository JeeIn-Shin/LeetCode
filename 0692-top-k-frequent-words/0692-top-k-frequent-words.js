/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
let topKFrequent = (words, k) => {
    let output;
    output = words.reduce((acc, el) => acc.set(el, (acc.get(el) || 0) + 1), new Map());
    
    output = Array.from(output)
    .sort(([key1, value1], [key2, value2]) => value2 - value1 || key1.localeCompare(key2))
    .slice(0, k)
    .map(([word]) => word)

    return output;
};