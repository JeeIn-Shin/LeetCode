/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.reduce((acc, cur) => acc + cur, 0) === 0)
        return nums;

    // 문제를 제대로 읽지않았음,  @return {void} Do not return anything, modify nums in-place instead. !!
    // let zeroCount = nums.filter((nums) => nums === 0).length;
    // let res = nums.filter((nums) => nums !== 0);

    // while (zeroCount--)
    //     res.push(0);

    // return res;

    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === 0)  {
            nums.push(0);
            nums.splice(i, 1);
        }
    }
};