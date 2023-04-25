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
 * @return {TreeNode}
 */
//구조분해할당이 되지 않을까? - 응 아니야 - 이게 될려나?

let invertTree = (root) => {
    if(root === [])
        return root;
    if(root)
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};