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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let result = Infinity;
    let preVal = -Infinity;

    let findLastLeaf = (root) => {
        if(!root)
            return ;

        findLastLeaf(root.left);
        result = Math.min(result, root.val - preVal);
        preVal = root.val;
        findLastLeaf(root.right);
    }
    
    findLastLeaf(root)
    return result;
};