/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let len = nums.length;
    let l = 0;
    let res = 0;
    let cnt = 0;

    for (let r = 0; r < len; r++) {
        if (!nums[r])
            cnt++;

        while (cnt > 1) {
            if (!nums[l++])
                cnt--;
        }
        res = Math.max(res, r - l)
    }
    return res;
};