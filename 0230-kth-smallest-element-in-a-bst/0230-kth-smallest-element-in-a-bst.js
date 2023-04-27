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
 * @param {number} k
 * @return {number}
 */

// ** 문제의 point **
//If the BST is modified often (i.e., we can do insert and delete operations)
//and you need to find the kth smallest frequently,
//how would you optimize?

let kthSmallest = (root, k) => {
    //문제에서 root가 null인 경우는 없음
    let res = [];
    //treenode를 배열로 다 받아와서
    let dfs = (root) => {
        if(root === null)
            return res;
        
        res.push(root.val);

        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    
    //값을 기준으로 정렬
    res.sort((a, b) => a - b);
    
    //index는 0부터 시작하니까, k번째는 k-1 인덱스 값임
    return res[k - 1];
};