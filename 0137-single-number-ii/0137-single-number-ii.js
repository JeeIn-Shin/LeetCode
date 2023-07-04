/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => b - a);
    
    //0번째 인덱스에 있을 때
    //정렬된 상황에서 index 0,1의 값이 같지 않다 == 0이 단독임
    if(nums[0] !== nums[1])
        return nums[0];

    let len = nums.length;
    
    //중간에 있을 때
    //ex) 2, 2, 3, 4, 4
    // 2, 3, 4만 떼어놓고 보면 셋다 숫자가 다름
    // 3을 i 라고 생각한다면..
    for(let i = 1; i < len; i++)    {
        if(nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1])
            return nums[i];
    }

    //끝에 있을 때
    return nums[len - 1];
};