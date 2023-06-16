/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length === 0)
        return [];
    
    nums.sort((a, b) => a - b);
    
    let result = [];
    let start = nums[0];
    let end = nums[0];

    for(let i = 1; i <= nums.length; i++)    {
        if(nums[i] === nums[i - 1] + 1)
            end = nums[i];
        else if(start == end)   {
            result.push(`${start}`);
            
            start = nums[i];
            end = nums[i];
        }
        else    {
            result.push(start + "->" + end);

            start = nums[i];
            end = nums[i];
        }
    }

    return result;
};