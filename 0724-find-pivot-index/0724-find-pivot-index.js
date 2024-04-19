/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = (nums) => {
    let left = [0, ];
    let right = [0, ];
    let sumTheLeft;
    let sumTheRight;

    for(let index = 0; index < nums.length; index++) {
        left = nums.slice(0, index);
        right = nums.slice(index + 1, nums.length);


        sumTheLeft = left.reduce((acc, cur) => acc + cur, 0);
        sumTheRight = right.reduce((acc, cur) => acc + cur, 0);


        if(sumTheLeft === sumTheRight)
            return index;
    }
    return -1;
}