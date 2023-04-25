/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */

let dfs = (root, targetSum) => {
    let count = 0;
    if(root === null)
            return count;
    if(root.val === targetSum)
        count++;

    count += dfs(root.left, targetSum - root.val);
    count += dfs(root.right, targetSum - root.val);

    return count;
}

//targetSum이 될 수 있는 것들 개수 반환해라
let pathSum = (root, targetSum) => {
    let output = 0;

    if(root === null)
        return output;
    
    //root에서 시작했을때
    output += dfs(root, targetSum);
    //The path does not need to start or end at the root or a leaf <<
    //문제의 내용에 따라 root가 아닌 다른 leaf에서 시작했을 때
    output += pathSum(root.left, targetSum);
    output += pathSum(root.right, targetSum);
    
    return output;
};