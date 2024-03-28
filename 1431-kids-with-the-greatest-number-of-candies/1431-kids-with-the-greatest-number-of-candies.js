/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const result = [];
    
    for (let candy of candies) {
        if (Math.max(candy + extraCandies, ...candies) === candy + extraCandies)
            result.push(true);
        else
            result.push(false);
    }

    return result;
};