/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 뭔말인가 하고 한참 고민했네
// 그러니까 (정렬된)숫자 배열이 들어오는데, 이걸
// 이진트리에 넣어야한다는거지?

let sortedArrayToBST = (nums) => {
    //base condition 꼭 신경쓰기, 이게 없어서 계속 에러나고 있었음ㅠ
    if(!(nums.length))
      return null;
    //흠 그렇다면
    //들어오는 배열의 정중앙값이 무조건 root 아닌가?
    let mid = Math.floor(nums.length / 2);
    let BST = new TreeNode(nums[mid]); // root 설정

    BST.left = sortedArrayToBST(nums.slice(0, mid));
    BST.right = sortedArrayToBST(nums.slice(mid + 1));

    return BST;
};