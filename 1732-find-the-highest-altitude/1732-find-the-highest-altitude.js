/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitudes = [0, ];

    for(let i = 0; i < gain.length; i++)    {
        altitudes[i + 1] = altitudes[i] + gain[i];
    }

    altitudes.sort((a, b) => b - a);

    return altitudes[0];
};