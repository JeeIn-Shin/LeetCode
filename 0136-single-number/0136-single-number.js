/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = new Map();

    for (let num of nums) {
        ans.set(nums.reduce((cnt, cur) => cnt + (cur === num), 0), num)

        if (ans.has(1))
            return ans.get(1);
    }
};