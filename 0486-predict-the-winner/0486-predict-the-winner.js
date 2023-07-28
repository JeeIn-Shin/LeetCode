/**
 * @param {number[]} nums
 * @return {boolean}
 */


//각 플레이어는 배열의 양 끝 값 중 하나를 선택할 수 있음
//배열은 매 라운드가 끝날때마다 길이가 줄어듦

var PredictTheWinner = function(nums) {
    let len = nums.length;
    let dp = Array.from(Array(len), () => new Array(2))

    for(let i = 0; i < len; i++)    {
        dp[i][i] = nums[i];
    }

    for(let diff = 1; diff < len; ++diff) {
        for(let left = 0; left < len - diff; ++left)  {
            let right = left + diff;

            dp[left][right] = Math.max(nums[left] - dp[left + 1][right], nums[right] - dp[left][right - 1]);
        }
    }

    return dp[0][len - 1] >= 0;
};