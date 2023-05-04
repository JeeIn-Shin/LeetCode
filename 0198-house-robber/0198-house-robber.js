/**
 * @param {number[]} nums
 * @return {number}
 */
//이런 유사한 문제 어디서 풀어본거 같은데?
var rob = function(nums) {
    if(nums.length <= 2)
        return Math.max(nums[0], (nums[1] ?? 0))

    let stolenMoney = [];
    stolenMoney.push(nums[0], nums[1]);
    
    for(let i = 2; i < nums.length; i++)
        stolenMoney.push(Math.max(...stolenMoney.slice(0, i - 1)) + nums[i]);

    return Math.max(...stolenMoney);
};