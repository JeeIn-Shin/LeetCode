/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let result = [];

    if(k === 0) {
        for(let i = 0; i < nums.length; i++)
            result[i] = nums[i];

        return result;
    }

    for(let i = 0; i < nums.length; i++)    {
        let sum = nums[i];

        //조건 수정
        if(i < k || i >= nums.length - k)
            result[i] = -1;
        else    {
            for(let j = 1; j <= k; j++)
                // 현재 위치 기준으로 양 옆으로 차차 이동해야함
                sum = sum + nums[i + j] + nums[i - j];
            result[i] = Math.floor(sum / (2 * k + 1));
        }
    }

    return result;
};