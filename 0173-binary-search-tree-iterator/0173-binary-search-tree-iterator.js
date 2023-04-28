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
 */
 var BSTIterator = function(root) {
    //전체 트리를 싹 다 넣어줘..
    this.stack = [];
    
    let dfs = (root, stack) => {
        if(!root)
            return null;
        this.stack.push(root.val);

        dfs(root.left);
        dfs(root.right);
    }
    
    dfs(root, this.stack);
    //그리고 정렬해주셈
    this.stack.sort((a, b) => b - a);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.stack.pop();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length ? true : false
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */