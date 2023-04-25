/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//You must write a solution in O(log(m * n)) time complexity.
//그냥 깡으로 O(n^2) 안되겠죠... 그래요
let searchMatrix = (matrix, target) => {
    matrix = matrix.toString().split(',').map((a) => +a);

    let result = matrix.filter((element) => element === target)

    return result.length > 0 ? true : false;
};